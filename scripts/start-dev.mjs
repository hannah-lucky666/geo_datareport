import { execFile } from 'node:child_process'
import { mkdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const { port } = JSON.parse(readFileSync(path.join(root, 'port.json'), 'utf8'))
const logDir = path.join(root, 'logs')
const logFile = path.join(logDir, 'vite-dev.log')
const viteBin = path.join(root, 'node_modules', 'vite', 'bin', 'vite.js')

function probe() {
  return fetch(`http://127.0.0.1:${port}/`, { signal: AbortSignal.timeout(4000) })
    .then((res) => res.status >= 200 && res.status < 500)
    .catch(() => false)
}

function createDetached(commandLine) {
  const ps = `
$ErrorActionPreference = 'Stop'
$r = Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{
  CommandLine = @'
${commandLine}
'@
  CurrentDirectory = @'
${root}
'@
}
if ($r.ReturnValue -ne 0) { throw "Win32_Process.Create failed: $($r.ReturnValue)" }
Write-Output $r.ProcessId
`.trim()

  return new Promise((resolve, reject) => {
    execFile(
      'powershell.exe',
      ['-NoProfile', '-NonInteractive', '-Command', ps],
      { cwd: root, windowsHide: true },
      (err, stdout, stderr) => {
        if (err) {
          reject(new Error((stderr || stdout || err.message).toString().trim()))
          return
        }
        const pid = Number(String(stdout).trim().split(/\r?\n/).filter(Boolean).pop())
        if (!pid) reject(new Error(`未拿到独立进程号: ${stdout}`))
        else resolve(pid)
      },
    )
  })
}

async function waitUntilUp() {
  const deadline = Date.now() + 20000
  while (Date.now() < deadline) {
    if (await probe()) return true
    await new Promise((resolve) => setTimeout(resolve, 400))
  }
  return false
}

if (await probe()) {
  console.log(`http://127.0.0.1:${port}/ 已在运行，沿用现有进程`)
  process.exit(0)
}

mkdirSync(logDir, { recursive: true })

const commandLine = `cmd.exe /d /s /c ""${process.execPath}" "${viteBin}" >> "${logFile}" 2>&1"`
const pid = await createDetached(commandLine)
const up = await waitUntilUp()

if (!up) {
  console.error(`独立进程已创建 (pid ${pid})，但 ${port} 端口没有响应。日志: ${logFile}`)
  process.exit(1)
}

console.log(`开发服务已独立运行: http://127.0.0.1:${port}/ (pid ${pid})`)
console.log('该进程不挂在当前终端上，关闭终端不会把服务一起停掉。')
