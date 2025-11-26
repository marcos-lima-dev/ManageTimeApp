import React from 'react';

interface ScreenShotProps {
  src: string;
  title: string;
  alt: string;
}

const ScreenCard: React.FC<ScreenShotProps> = ({ src, title, alt }) => (
  <div className="flex flex-col items-center gap-4 group">
    <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded-3xl border-4 border-gray-300 dark:border-gray-700 shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
      <div className="overflow-hidden rounded-2xl relative">
        <img
          className="w-full h-auto aspect-[9/16] object-cover"
          alt={alt}
          src={src}
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
      </div>
    </div>
    <h4 className="text-soft-black dark:text-white font-semibold text-lg">{title}</h4>
  </div>
);

const Screenshots: React.FC = () => {
  const screens = [
    {
      title: 'Tela do dia',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSfJKKIxO8QdiCUNLgmrvEHz7y80mbfDf8kH3yJ6JKbV-gJ3_BsO0H9__C4tBSgD9vmO3xLntweormVmYtgniUXqkJGv3e1Ty2oljomrIXa-WyuIEyOrIgQWdz3tFAB6hfmYrE15nbGe02bJjcZTwdgPaYSIHt2pmGOCEPUJf15PYiZZGwd2p8BPdDw1pYgJ7eyhWf2F4n0I7yP1d9ibe1SxiVrwYlrochsyckcas3mm3rlEae_1VThBzuCNvq0dRtWhWb_bCyQCX6',
      alt: 'A smartphone mockup displaying the Day View of the app.'
    },
    {
      title: 'Tela de criar compromisso',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsjuO-Np3BnwURFZwCQmGpdb7Ud0sOfydqg7dUELMdgDDMT6476qkUJXEg--31QjF2UY3L47rsGoxAH-XgKYrVU2NdZ_BaX2rb-M5sDr6RR6wP0eWIxJ2clgAxRkBqBq_xKQMcaMZXtyfS_fRSjrjzb4Jfx1AZ-IkvHnNK0ctcnlRBvY9iSsm9x_pGB31IlQiXJPhyp9jbQoRfRs9_I9vDqdE7OZVXZdmIKBrzus9vsmuqcqQse_BhYWNiX-x-qB6qwlNn7Vd14kpN',
      alt: 'A smartphone mockup displaying the New Appointment screen.'
    },
    {
      title: 'Tela de calendário mensal',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJt9g1bKgcHTUEt39tVtIR2r27en2F6jbP0aElKZ5fABYDJX0KUJfOUCOV-yLlmGoAWtJ4Bm1C9Xr-tJ75KWg46GsKGorBUiTgywBAQfxMlIdkdbGbUOZu03cc3OW8DNUdZQ9NOz04AryK9hdRw6pMcSmIOX_xhCiLCrpoAJNtwcHFkDbSVJs2TSBkhtUHSijiCEkwchODuuqIoMoW2aKDzlNvyGv91kYshqpdAw-H1-CPb7UhQKttp0Ai2fmzLAjpxjonz7Gxkp5L',
      alt: 'A smartphone mockup displaying the Monthly Overview screen.'
    }
  ];

  return (
    <section className="px-4 py-20" id="screenshots">
      <div className="flex flex-col gap-4 text-center items-center mb-12">
        <h2 className="text-soft-black dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] md:text-4xl">
          Interface Limpa e Intuitiva
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {screens.map((screen, index) => (
          <ScreenCard key={index} {...screen} />
        ))}
      </div>
    </section>
  );
};

export default Screenshots;