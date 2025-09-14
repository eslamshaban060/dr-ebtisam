"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLink({ href, children, handleClick }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      onClick={handleClick}
      href={href}
      className={`p-2.5 rounded-2xl transition w-full flex gap-4 items-center  border text-lg leading-[24px]  h-full hover:bg-[var(--gr)]/50 hover:text-[var(--wh)]  ${
        isActive ? "bg-[var(--nv)] text-[var(--wh)]  " : " text-[var(--bl)]/50 "
      }`}
    >
      {children}
    </Link>
  );
}
