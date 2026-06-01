import React from 'react';

export default function Page_DataTroubleshooting() {
  return (
    <div className="w-full h-full flex flex-col px-12 sm:px-16 pb-6 text-zinc-900 font-sans">
      {/* Title */}
      <div className="flex items-center gap-3 mb-4 shrink-0">
        <div className="w-1.5 h-8 bg-[#004CE5] rounded-full shadow-[0_0_12px_rgba(0,76,229,0.2)]" />
        <h1 className="text-3xl font-black text-zinc-900 tracking-wider">
          异常数据排查与归因分析
        </h1>
        <span className="text-base sm:text-lg font-bold text-zinc-600 ml-2">
          变量排除：通过控制变量测试，排除了时间和 IP 的影响，主要关注设备和账号变量
        </span>
      </div>


      {/* Main Container: 3 Standard Tables stacked vertically to fill the screen */}
      <div className="flex-grow flex flex-col gap-5 min-h-0 justify-between">

        {/* Table 1: 测试数据解读 */}
        <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-sm shrink-0">
          <div className="bg-slate-50 border-b border-zinc-200 px-6 py-2.5 flex items-center justify-between">
            <h3 className="text-xl font-black text-zinc-800">📋 1. 测试数据解读</h3>
          </div>
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="bg-slate-50/50 border-b border-zinc-200 text-lg font-bold text-zinc-500">
                <th className="py-3 px-6 w-[20%]">测试环境主体</th>
                <th className="py-3 px-6 w-[22%]">测试条件说明</th>
                <th className="py-3 px-6 w-[10%] text-center">总测试次数</th>
                <th className="py-3 px-6 w-[18%] text-center">目标品牌(菜鸟)Top1次数</th>
                <th className="py-3 px-6">阶段性结论说明</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3 px-6 text-xl font-extrabold text-zinc-900">自动化数据系统</td>
                <td className="py-3 px-6 text-lg font-semibold text-zinc-500">纯净无痕环境 (4.30-5.14)</td>
                <td className="py-3 px-6 text-xl font-bold text-zinc-800 text-center font-['Montserrat']">15次</td>
                <td className="py-3 px-6 text-2xl font-black text-[#004CE5] text-center font-['Montserrat']">9次 (占比60%)</td>
                <td className="py-3 px-6 text-lg font-bold text-zinc-600 leading-relaxed">
                  客观排序表现良好。证明在无账号干预的纯净环境下，底层优化是真实生效的。
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3 px-6 text-xl font-extrabold text-zinc-900">公司实体手机群</td>
                <td className="py-3 px-6 text-lg font-semibold text-zinc-500">日常真实使用环境 (5.13)</td>
                <td className="py-3 px-6 text-xl font-bold text-zinc-800 text-center font-['Montserrat']">7次</td>
                <td className="py-3 px-6 text-2xl font-black text-zinc-700 text-center font-['Montserrat']">2次</td>
                <td className="py-3 px-6 text-lg font-bold text-zinc-600 leading-relaxed">
                  找出不容易出的手机进行单独测试。 复现了菜鸟方现场出现的情况。
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3 px-6 text-xl font-extrabold text-zinc-900">客户手动测试</td>
                <td className="py-3 px-6 text-lg font-semibold text-zinc-500">客户反馈记录 (5.12)</td>
                <td className="py-3 px-6 text-xl font-bold text-zinc-800 text-center font-['Montserrat']">7次</td>
                <td className="py-3 px-6 text-2xl font-black text-zinc-700 text-center font-['Montserrat']">2次</td>
                <td className="py-3 px-6 text-lg font-bold text-zinc-600 leading-relaxed">
                  菜鸟现场测试记录。
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table 2: 核心变量测试 */}
        <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-sm shrink-0">
          <div className="bg-slate-50 border-b border-zinc-200 px-6 py-2.5">
            <h3 className="text-xl font-black text-zinc-800">🔍 2. 核心变量测试</h3>
          </div>
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="bg-slate-50/50 border-b border-zinc-200 text-lg font-bold text-zinc-500">
                <th className="py-3 px-6 w-[20%]">测试维度</th>
                <th className="py-3 px-6 w-[28%]">测试时间与具体方法</th>
                <th className="py-3 px-6 w-[28%]">测试数据表现</th>
                <th className="py-3 px-6">核心结论</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3.5 px-6 text-xl font-extrabold text-zinc-900">设备与时间变量</td>
                <td className="py-3.5 px-6 text-lg font-semibold text-zinc-500 whitespace-pre-line leading-relaxed">
                  [5.14-5.15]
                  多型号手机同时段连测、跨时段（每小时）打点测、测试话术对比。
                </td>
                <td className="py-3.5 px-6 text-lg font-bold text-zinc-600 leading-relaxed">
                  不同实体手机间的Top1推荐差异极大（如A首推菜鸟，B首推竞品）；同时词条微调也会导致结果翻转。
                </td>
                <td className="py-3.5 px-6 text-lg font-black text-zinc-800 leading-relaxed">
                  环境随机性强。
                  物理设备和提问时间的偶发性会对单次生成结果产生干扰。
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3.5 px-6 text-xl font-extrabold text-zinc-900">账号画像偏好</td>
                <td className="py-3.5 px-6 text-lg font-semibold text-zinc-500 whitespace-pre-line leading-relaxed">
                  [5.16] 豆包“账号互换”测试
                  1. 基准：手机A首推高(8/10)，手机B低(4/10)
                  2. 互换：手机A登B账号，手机B登A账号
                  3. 回归：换回各自账号。
                </td>
                <td className="py-3.5 px-6 text-lg font-bold text-zinc-600 leading-relaxed whitespace-pre-line">
                  互换账号后：手机A的首推率骤降至5/10，手机B飙升至8/10。
                  换回账号后：两台手机立刻恢复至原有基准水平。回答倾向完全跟随“账号”走。
                </td>
                <td className="py-3.5 px-6 text-lg font-black text-zinc-800 leading-relaxed">
                  AI模型极度受“账号历史搜索习惯与画像”影响。
                  客户测试时触发了AI的“信息茧房”机制（千人千面），AI优先输出了它认为该账号偏好的竞品结果。
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table 3: 横向复核 */}
        <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-sm shrink-0">
          <div className="bg-slate-50 border-b border-zinc-200 px-6 py-2.5">
            <h3 className="text-xl font-black text-zinc-800">🌐 3. 横向复核</h3>
          </div>
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="bg-slate-50/50 border-b border-zinc-200 text-lg font-bold text-zinc-500">
                <th className="py-3 px-6 w-[20%]">测试平台</th>
                <th className="py-3 px-6 w-[48%]">测试表现呈现 (实体手机端 vs 系统端)</th>
                <th className="py-3 px-6">平台底层特征推断</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3.5 px-6 text-xl font-extrabold text-zinc-900">通义千问</td>
                <td className="py-3.5 px-6 text-lg font-bold text-zinc-600 leading-relaxed whitespace-pre-line">
                  表现极其稳定。
                  无论在系统端还是多台实体手机端连测，目标品牌(菜鸟)的首推率稳定在 80%-100%。
                </td>
                <td className="py-3.5 px-6 text-lg font-bold text-zinc-600 leading-relaxed">
                  有待进一步提高测试数据量进行验证
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3.5 px-6 text-xl font-extrabold text-zinc-900">DeepSeek</td>
                <td className="py-3.5 px-6 text-lg font-bold text-zinc-600 leading-relaxed whitespace-pre-line">
                  表现出明显反差。
                  公司实体手机群测试首推率极高（70%-90%），但切换到数据系统的服务器IP后，结果出现数据倒挂。
                </td>
                <td className="py-3.5 px-6 text-lg font-bold text-zinc-600 leading-relaxed">
                  有待进一步提高测试数据量进行验证
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
