import React, { useState } from 'react';
import AiModelLightLayout from '../components/AiModelLightLayout';

const CASES = [
  {
    number: '01',
    title: '新用户',
    description: '提问时可能直接得到不带联网来源的回答',
    image: '/doubao-no-network/new-user.png',
    fileName: 'new-user.png',
  },
  {
    number: '02',
    title: '老账户反复查同一词条',
    description: '重复查询后，回答可能不再带联网来源',
    image: '/doubao-no-network/repeat-query.png',
    fileName: 'repeat-query.png',
  },
];

function ScreenshotSlot({ image, fileName, number }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative min-h-0 flex-1 overflow-hidden rounded-[18px] border ${
      loaded ? 'border-slate-200 bg-white' : 'border-dashed border-[#004CE5]/30 bg-[#F7FAFF]'
    }`}>
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="flex h-[76px] w-[76px] items-center justify-center rounded-[20px] bg-[#004CE5]/10 text-[30px] font-black text-[#004CE5]">
            {number}
          </div>
          <p className="mt-6 text-[26px] font-bold text-zinc-600">截图展示位</p>
          <p className="mt-2 text-[19px] text-zinc-500">{fileName}</p>
        </div>
      )}
      <img
        src={image}
        alt={loaded ? `豆包不联网案例 ${number}` : ''}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        className={`absolute inset-0 h-full w-full object-contain ${loaded ? 'block' : 'hidden'}`}
      />
    </div>
  );
}

function CaseCard({ item }) {
  return (
    <section className="min-w-0 h-full rounded-[22px] border border-slate-200 bg-white px-7 py-6 shadow-[0_4px_24px_rgba(15,23,42,0.04)] flex flex-col">
      <div className="mb-[44px] flex shrink-0 items-center gap-4">
        <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[15px] bg-[#004CE5] text-[25px] font-black text-white">
          {item.number}
        </span>
        <div className="min-w-0">
          <h2 className="text-[33px] font-black leading-tight text-zinc-900">{item.title}</h2>
          <p className="mt-1 text-[20px] leading-snug text-zinc-600">{item.description}</p>
        </div>
      </div>
      <ScreenshotSlot image={item.image} fileName={item.fileName} number={item.number} />
    </section>
  );
}

export default function Page_DoubaoNoNetworkCases() {
  return (
    <AiModelLightLayout
      title="豆包不联网的两类情形"
      subtitle="新用户与老账户反复查询同一词条"
      contentShiftUp={32}
    >
      <div className="grid h-full w-full grid-cols-2 gap-7 font-['MiSans']">
        {CASES.map((item) => <CaseCard key={item.number} item={item} />)}
      </div>
    </AiModelLightLayout>
  );
}

Page_DoubaoNoNetworkCases.hideHeader = true;
Page_DoubaoNoNetworkCases.fullBleed = true;
