import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 @container">
      <div className="flex flex-col gap-10 md:flex-row md:items-center">
        <div className="flex flex-col gap-6 text-left md:w-1/2">
          <div className="flex flex-col gap-4">
            <h1 className="text-soft-black dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
              Gerencie seu tempo com clareza.
            </h1>
            <p className="text-secondary dark:text-gray-400 text-lg font-normal leading-relaxed md:text-xl">
              Seu tempo, bem organizado. Aumente sua produtividade com ferramentas simples e poderosas.
            </p>
          </div>
          <button className="flex w-fit min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-transform active:scale-95 shadow-lg shadow-primary/20">
            <span className="truncate">Baixar o App</span>
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full h-auto bg-center bg-no-repeat aspect-square bg-cover rounded-xl object-cover shadow-2xl transition-transform hover:scale-[1.02] duration-500"
            alt="A stylized, light illustration of the ManageTimeApp interface on a tablet."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsaUH-GA7AilhmdLBAFCi9rOOuOdFn8Y9c9BIEo9iyMS3F24OMGMMpbj5b9F1n9nDvqRVW50znmZky44jQL0WSXhx64JXdgNQ5WcIaTIZwbH57VpFXTthzSK-bUbjX__F4_VAL7EXmB0kmQwu5FnQImjbKmbMtH0yyXfCv2bTzGhESByrccwh6FPWAu1QNxH787WbbNnhGQs1d52yq8pWx_WxIoKWk5GtAYRk0Tejra8Ot9kwm8OTKSGWnCSKLTaBsmNzncm8B9_hC"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;