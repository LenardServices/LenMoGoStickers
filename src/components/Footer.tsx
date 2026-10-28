import { MessageCircle } from "lucide-react";
import { brand, externalLinkProps, links, navItems, services } from "../config/site";
import { Logo } from "./Navbar";
import { FacebookIcon } from "./ui";

const linkClass = "text-blue-100/75 transition hover:text-white";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-sm text-blue-100/75">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr] lg:gap-12">
        <div>
          <a href="#home" aria-label={`${brand.name} — back to top`} className="inline-block rounded-full">
            <Logo />
          </a>
          <p className="mt-4 max-w-xs leading-relaxed">{brand.shortDescription}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-sans text-base font-semibold text-white">Quick links</h2>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="font-sans text-base font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={linkClass}>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-base font-semibold text-white">Contact</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={links.facebookPage} {...externalLinkProps} className={`inline-flex items-center gap-2 ${linkClass}`}>
                <FacebookIcon className="size-4" />
                Facebook Page
              </a>
            </li>
            <li>
              <a href={links.messenger} {...externalLinkProps} className={`inline-flex items-center gap-2 ${linkClass}`}>
                <MessageCircle className="size-4" aria-hidden="true" />
                Messenger
              </a>
            </li>
            {links.discord && (
              <li>
                <a href={links.discord} {...externalLinkProps} className={linkClass}>
                  Discord
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="max-w-xl text-blue-100/60 sm:text-right">{brand.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
