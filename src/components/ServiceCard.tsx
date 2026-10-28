import { MessageCircle, Star } from "lucide-react";
import { asset, externalLinkProps, labels, links, type Service, type ServiceAccent } from "../config/site";

/** Color themes for the service cards. */
const accents: Record<
  ServiceAccent,
  { header: string; chip: string; button: string; glow: string }
> = {
  blue: {
    header: "from-royal-500 via-royal-600 to-navy-800",
    chip: "bg-royal-500/10 text-royal-700",
    button: "bg-royal-600 text-white hover:bg-royal-500",
    glow: "bg-royal-300/40",
  },
  red: {
    header: "from-rose-500 via-red-600 to-navy-800",
    chip: "bg-red-500/10 text-red-700",
    button: "bg-red-600 text-white hover:bg-red-500",
    glow: "bg-rose-300/40",
  },
  green: {
    header: "from-emerald-400 via-green-600 to-navy-800",
    chip: "bg-emerald-500/10 text-emerald-700",
    button: "bg-emerald-600 text-white hover:bg-emerald-500",
    glow: "bg-emerald-200/40",
  },
  purple: {
    header: "from-violet-500 via-purple-700 to-navy-800",
    chip: "bg-violet-500/10 text-violet-700",
    button: "bg-violet-600 text-white hover:bg-violet-500",
    glow: "bg-violet-300/40",
  },
  cyan: {
    header: "from-cyan-400 via-sky-600 to-navy-800",
    chip: "bg-cyan-500/10 text-cyan-800",
    button: "bg-sky-600 text-white hover:bg-sky-500",
    glow: "bg-cyan-200/40",
  },
  gold: {
    header: "from-gold-300 via-gold-500 to-amber-700",
    chip: "bg-gold-400/20 text-amber-800",
    button: "bg-gold-400 text-navy-900 hover:bg-gold-300",
    glow: "bg-gold-200/50",
  },
};

/** Foil-pack colors for the 1–5 star sticker tiers. */
const tierTones = [
  "from-emerald-400 to-green-600",
  "from-amber-300 to-orange-500",
  "from-pink-400 to-fuchsia-600",
  "from-sky-400 to-blue-600",
  "from-violet-500 to-purple-700",
];

function CardHeader({ service }: { service: Service }) {
  const a = accents[service.accent];
  const Icon = service.icon;

  if (service.image) {
    return (
      <div className="relative aspect-[10/9] overflow-hidden bg-navy-800">
        <img
          src={asset(service.image.src)}
          alt={service.image.alt}
          loading="lazy"
          decoding="async"
          width={670}
          height={600}
          className="size-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`relative grid aspect-[16/10] place-items-center md:aspect-[10/9] overflow-hidden bg-gradient-to-br ${a.header}`}
    >
      <div className={`absolute size-48 rounded-full blur-3xl ${a.glow}`} />
      <Star className="absolute top-6 left-7 size-5 fill-white/70 text-white/70" />
      <Star className="absolute top-12 right-9 size-3.5 fill-gold-300 text-gold-300" />
      <Star className="absolute right-14 bottom-14 size-4 fill-white/50 text-white/50" />
      <div className="relative grid size-28 place-items-center rounded-[2rem] border-4 border-white/90 bg-white/15 shadow-2xl shadow-black/30 backdrop-blur-sm sm:size-32">
        <Icon className="size-14 text-white drop-shadow sm:size-16" strokeWidth={1.75} />
      </div>
    </div>
  );
}

function InquireButton({ service }: { service: Service }) {
  const a = accents[service.accent];
  return (
    <a
      href={service.link ?? links.messenger}
      {...externalLinkProps}
      aria-label={`${service.ctaLabel ?? labels.inquire}: ${service.title}`}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.95rem] font-semibold transition ${a.button}`}
    >
      <MessageCircle className="size-[1.1rem]" aria-hidden="true" />
      {service.ctaLabel ?? labels.inquire}
    </a>
  );
}

function CardBody({ service, large = false }: { service: Service; large?: boolean }) {
  const a = accents[service.accent];
  const Icon = service.icon;
  return (
    <>
      <p className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${a.chip}`}>
        <Icon className="size-3.5" aria-hidden="true" />
        {service.tagline}
      </p>
      <h3
        id={`${service.id}-title`}
        className={`mt-3 font-semibold text-navy-900 ${large ? "text-2xl sm:text-3xl" : "text-2xl"}`}
      >
        {service.title}
      </h3>
      <p className="mt-2 leading-relaxed text-slate-600">{service.description}</p>
    </>
  );
}

/** Sticker card: five star tiers, each with its own inquiry link. */
function TierGrid({ service }: { service: Service }) {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {service.tiers!.map((tier, i) => (
        <li key={tier.label}>
          {tier.image ? (
            <a
              href={service.link ?? links.messenger}
              {...externalLinkProps}
              aria-label={`Ask about ${tier.label} on Facebook`}
              className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:ring-2 hover:ring-violet-500"
            >
              <img
                src={asset(tier.image)}
                alt=""
                loading="lazy"
                decoding="async"
                width={400}
                height={400}
                className="aspect-square w-full object-cover"
              />
              <span className="flex flex-1 flex-col items-center justify-between gap-2 px-2 pt-2.5 pb-3 text-center">
                <span className="text-sm leading-tight font-semibold text-navy-900">{tier.label}</span>
                <span className="inline-flex min-h-8 items-center rounded-full bg-violet-600 px-4 text-xs font-bold text-white">
                  {labels.askAbout}
                </span>
              </span>
            </a>
          ) : (
          <a
            href={service.link ?? links.messenger}
            {...externalLinkProps}
            aria-label={`Ask about ${tier.label} on Facebook`}
            className={`group/tier relative flex h-full min-h-44 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b px-2 pt-2.5 pb-3 text-center text-white shadow-md ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg ${tierTones[i % tierTones.length]}`}
          >
            {/* foil shine + sealed edges */}
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-2 bg-white/30" />
            <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2 bg-black/10" />
            <span aria-hidden="true" className="absolute -inset-y-4 -left-6 w-8 rotate-12 bg-white/25 blur-sm transition duration-500 group-hover/tier:translate-x-40" />

            <span aria-hidden="true" className="mt-2 grid size-12 place-items-center rounded-full border-2 border-white/70 bg-white/15">
              <span className="font-display text-2xl font-bold">{tier.stars}</span>
            </span>
            <span aria-hidden="true" className="mt-2 flex min-h-3.5 flex-wrap justify-center gap-0.5">
              {Array.from({ length: tier.stars }, (_, s) => (
                <Star key={s} className="size-3.5 fill-gold-200 text-gold-200" />
              ))}
            </span>
            <span className="mt-1.5 text-sm leading-tight font-semibold">{tier.label}</span>
            <span className="mt-3">
              <span className="inline-flex min-h-8 items-center gap-1 rounded-full bg-white px-3 text-xs font-bold text-navy-900">
                {labels.askAbout}
              </span>
            </span>
          </a>
          )}
        </li>
      ))}
    </ul>
  );
}

const cardShell =
  "group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-sm";

export default function ServiceCard({ service, layout = "default" }: { service: Service; layout?: "default" | "wide" | "feature" }) {
  // Wide card (stickers): body + tier grid, no header art.
  if (layout === "wide") {
    const a = accents[service.accent];
    const Icon = service.icon;
    return (
      <article id={service.id} aria-labelledby={`${service.id}-title`} className={cardShell}>
        <div className={`relative overflow-hidden bg-gradient-to-br px-6 py-5 sm:px-8 ${a.header}`}>
          <div aria-hidden="true" className="board-grid absolute inset-0 opacity-60" />
          <div className="relative flex items-center gap-4 text-white">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl border-[3px] border-white/90 bg-white/15">
              <Icon className="size-7" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white/80">{service.tagline}</p>
              <h3 id={`${service.id}-title`} className="text-2xl font-semibold sm:text-3xl">
                {service.title}
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <p className="leading-relaxed text-slate-600">{service.description}</p>
          <TierGrid service={service} />
          <div className="mt-auto pt-6">
            <InquireButton service={service} />
          </div>
        </div>
      </article>
    );
  }

  // Feature card (invite bar): artwork beside the text on larger screens.
  if (layout === "feature") {
    return (
      <article id={service.id} aria-labelledby={`${service.id}-title`} className={`${cardShell} md:flex-row`}>
        <div className="md:w-[42%] md:shrink-0 lg:w-[38%]">
          {service.image ? (
            <img
              src={asset(service.image.src)}
              alt={service.image.alt}
              loading="lazy"
              decoding="async"
              width={960}
              height={960}
              className="aspect-square w-full object-cover md:h-full"
            />
          ) : (
            <CardHeader service={service} />
          )}
        </div>
        <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-12">
          <CardBody service={service} large />
          <ul className="mt-6 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            {["Ask about current availability", "Check the requirements", "Get the latest offer", "Confirm on Facebook"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="size-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                  {item}
                </li>
              ),
            )}
          </ul>
          <div className="mt-8">
            <InquireButton service={service} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article id={service.id} aria-labelledby={`${service.id}-title`} className={cardShell}>
      <CardHeader service={service} />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex-1">
          <CardBody service={service} />
        </div>
        <div className="mt-6">
          <InquireButton service={service} />
        </div>
      </div>
    </article>
  );
}
