import { Info, Star } from "lucide-react";
import { asset, brand, labels, links, services } from "../config/site";
import { ButtonLink, Die, FacebookIcon } from "./ui";

/** Small decorative sticker card used in the hero composition. */
function StickerCard({ stars, tone, className }: { stars: number; tone: string; className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute flex w-20 flex-col items-center gap-2 rounded-2xl border-[3px] border-white p-2.5 shadow-[0_18px_35px_-12px_rgb(0_0_0/0.6)] sm:w-24 ${tone} ${className}`}
    >
      <div className="flex gap-0.5">
        {Array.from({ length: stars }, (_, i) => (
          <Star key={i} className="size-3 fill-gold-300 text-gold-300 sm:size-3.5" />
        ))}
      </div>
      <div className="grid aspect-square w-full place-items-center rounded-xl bg-white/20">
        <Star className="size-7 fill-white/90 text-white/90 sm:size-9" />
      </div>
      <div className="h-1.5 w-3/4 rounded-full bg-white/40" />
    </div>
  );
}

function HeroArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[28rem]">
      {/* glow + board ring */}
      <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-gold-400/25 blur-3xl" />
      <div
        aria-hidden="true"
        className="absolute inset-[6%] rounded-full border-[10px] border-dashed border-white/10"
      />
      <div className="absolute inset-[14%] animate-settle rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 p-[3%] shadow-2xl shadow-black/40">
        <img
          src={asset(brand.logo)}
          alt={brand.logoAlt}
          width={512}
          height={512}
          fetchPriority="high"
          className="size-full rounded-full"
        />
      </div>

      <StickerCard
        stars={5}
        tone="bg-gradient-to-br from-gold-300 to-amber-500"
        className="top-[2%] right-[2%] rotate-12 animate-settle [animation-delay:350ms]"
      />
      <StickerCard
        stars={3}
        tone="bg-gradient-to-br from-violet-500 to-purple-700"
        className="bottom-[6%] left-[-2%] -rotate-12 animate-settle [animation-delay:500ms]"
      />
      <StickerCard
        stars={4}
        tone="bg-gradient-to-br from-royal-400 to-royal-700"
        className="top-[14%] left-[-4%] -rotate-6 animate-settle [animation-delay:200ms] max-sm:hidden"
      />

      <Die value={5} className="absolute right-[4%] bottom-[4%] size-14 rotate-[18deg] animate-settle [animation-delay:650ms] sm:size-16" />
      <Die value={3} className="absolute top-[-2%] left-[30%] size-10 -rotate-[14deg] animate-settle [animation-delay:800ms] sm:size-12" />

      {/* sparkles */}
      <Star aria-hidden="true" className="absolute top-[38%] right-[-3%] size-6 fill-gold-300 text-gold-300" />
      <Star aria-hidden="true" className="absolute bottom-[-1%] left-[42%] size-4 fill-cyan-300 text-cyan-300" />
      <Star aria-hidden="true" className="absolute top-[8%] left-[18%] size-3 fill-white text-white" />
    </div>
  );
}

export default function Hero() {
  const { hero } = brand;
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden bg-navy-900 text-white">
      <div aria-hidden="true" className="board-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div aria-hidden="true" className="absolute -top-40 -left-40 size-[36rem] rounded-full bg-royal-600/40 blur-[120px]" />
      <div aria-hidden="true" className="absolute -right-32 bottom-0 size-[28rem] rounded-full bg-violet-600/25 blur-[120px]" />

      <div className="container-page relative grid items-center gap-12 pt-12 pb-16 sm:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:pt-20 lg:pb-24">
        <div className="max-w-xl max-lg:mx-auto max-lg:text-center">
          <h1 id="hero-title" className="text-4xl leading-[1.08] font-bold sm:text-5xl lg:text-[3.6rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-blue-100/85">{hero.text}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row max-lg:sm:justify-center">
            <ButtonLink href="#services">
              {labels.exploreServices}
            </ButtonLink>
            <ButtonLink href={links.facebookPage} external variant="outline-light">
              <FacebookIcon />
              {labels.visitFacebook}
            </ButtonLink>
          </div>

          <p className="mt-6 inline-flex items-start gap-2 text-sm text-blue-100/70 max-lg:justify-center">
            <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            Prices, availability and orders are handled on our Facebook page.
          </p>
        </div>

        <HeroArt />
      </div>

      {/* Quick links to each service */}
      <div className="relative border-t border-white/10 bg-navy-950/60">
        <ul className="container-page flex flex-wrap justify-center gap-2 py-5" aria-label="Services">
          {services.map(({ id, title, icon: Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-blue-50 transition hover:border-gold-400/50 hover:bg-white/10"
              >
                <Icon className="size-4 text-gold-300" aria-hidden="true" />
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
