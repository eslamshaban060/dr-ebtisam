const WelcomeMessage = ({ title, desc }) => (
  <div className="mwm w-full shadow-[var(--shadow-1)] min-h-[134px] flex flex-col justify-center items-center p-10 gap-5 md:py-8 py-4 rounded-2xl">
    <h2 className="md:text-3xl text-xl leading-[24px] text-shadow-lg font-semibold text-[var(--nv)]">
      {title}
    </h2>
    <p className="md:text-lg text-sm text-[var(--nv)]/60 text-center lg:w-[80%]">
      {desc}
    </p>
  </div>
);

export default WelcomeMessage;
