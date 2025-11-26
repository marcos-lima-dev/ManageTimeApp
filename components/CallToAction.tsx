import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="px-4 py-20">
      <div className="bg-primary text-white rounded-xl p-12 text-center flex flex-col items-center gap-6 shadow-2xl shadow-primary/30">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Pronto para organizar sua rotina?
        </h2>
        <button className="flex min-w-[84px] w-fit max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-white text-primary text-lg font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 transition-colors active:scale-95 duration-200">
          <span className="truncate">Baixar agora</span>
        </button>
      </div>
    </section>
  );
};

export default CallToAction;