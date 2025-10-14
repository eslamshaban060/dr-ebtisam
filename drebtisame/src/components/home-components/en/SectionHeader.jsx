import { Pill } from "lucide-react";
export const SectionHeader = ({ title, message, info }) => {
  return (
    <div className="flex flex-col items-center text-center gap-10">
      <p className="text-[var(--tb)] font-medium text-xl leading-[100%]">
        {title}
      </p>
      <h2 className="text-[var(--nv)] flex gap-5 font-bold md:text-[40px] md:text-3xl text-xl leading-[100%] ">
        {message}<Pill size={32} />
      </h2>
      <p className="text-[var(--nv)] font-medium md:text-xl leading-[100%]">{info}</p>
    </div>
  );
};
