import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { asset, brand, labels, links, navItems } from "../config/site";
import { ButtonLink, FacebookIcon } from "./ui";

export function Logo({ size = "size-11" }: { size?: string }) {
  return (
    <span className="flex items-center gap-3">
      <img
        src={asset(brand.logo)}
        alt=""
        width={44}
        height={44}
        className={`${size} shrink-0 rounded-full ring-2 ring-gold-400/80`}
      />
      <span className="font-display text-lg leading-none font-semibold text-white">
        Len Mogo
        <span className="block text-sm font-medium tracking-[0.18em] text-gold-300 uppercase">Stickers</span>
      </span>
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with Escape, and when the screen grows to desktop size.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 64rem)");
    const onResize = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/90 backdrop-blur-md">
      <nav aria-label="Main" className="container-page flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#home" aria-label={`${brand.name} — back to top`} className="rounded-full">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3.5 py-2 text-[0.92rem] font-medium text-blue-100/85 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ButtonLink href={links.facebookPage} external className="!min-h-11 !px-5 max-sm:hidden">
            <FacebookIcon />
            {labels.visitFacebook}
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/10 bg-navy-900 lg:hidden"
      >
        <ul className="container-page grid gap-1 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-xl px-4 text-base font-medium text-blue-50 transition hover:bg-white/10"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <ButtonLink href={links.facebookPage} external className="w-full">
              <FacebookIcon />
              {labels.visitFacebook}
            </ButtonLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
