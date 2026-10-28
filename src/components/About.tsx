import { BellRing, Layers, MessageCircle, MessagesSquare, Users } from "lucide-react";
import { asset, brand, labels, links } from "../config/site";
import { ButtonLink, FacebookIcon, SectionHeading } from "./ui";

const highlights = [
  { icon: MessageCircle, title: "Convenient inquiries", text: "Ask about any service with a quick Facebook message." },
  { icon: Layers, title: "Multiple service options", text: "Event carries, stickers and invite bar filling." },
  { icon: MessagesSquare, title: "Clear communication", text: "Details are confirmed with you before any order." },
  { icon: BellRing, title: "Updates through Facebook", text: "Offers and availability are posted on our page." },
  { icon: Users, title: "Community-oriented", text: "A friendly place for fellow Monopoly GO players." },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading id="about-title" title={brand.about.title} intro={brand.about.text} />

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4 rounded-2xl border border-slate-200 p-4 sm:last:col-span-2">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-royal-500/10 text-royal-600">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-semibold text-navy-900">{title}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-slate-600">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Page card */}
        <aside className="lg:col-span-5" aria-label="Len Mogo Stickers on Facebook">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-900 p-8 text-white shadow-2xl shadow-navy-900/20 lg:sticky lg:top-28">
            <div aria-hidden="true" className="board-grid absolute inset-0" />
            <div aria-hidden="true" className="absolute -top-20 -right-20 size-64 rounded-full bg-royal-500/40 blur-3xl" />
            <div className="relative">
              <img
                src={asset(brand.logo)}
                alt={brand.logoAlt}
                loading="lazy"
                width={112}
                height={112}
                className="size-28 rounded-full ring-4 ring-gold-400"
              />
              <p className="mt-6 font-display text-3xl font-semibold">{brand.name}</p>
              <p className="mt-2 text-blue-100/80">{brand.shortDescription}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <ButtonLink href={links.facebookPage} external>
                  <FacebookIcon />
                  {labels.visitFacebookShort}
                </ButtonLink>
                <ButtonLink href={links.messenger} external variant="outline-light">
                  <MessageCircle className="size-5" aria-hidden="true" />
                  {labels.message}
                </ButtonLink>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
