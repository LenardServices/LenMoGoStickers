import { services } from "../config/site";
import ServiceCard from "./ServiceCard";
import { SectionHeading } from "./ui";

/** Cards with star tiers get the wide layout; cards with artwork and no tiers on the last row get the feature layout. */
const layoutFor = (id: string) => (id === "stickers" ? "wide" : id === "invite-bar" ? "feature" : "default");

const spanFor = {
  default: "",
  wide: "md:col-span-2",
  feature: "md:col-span-2 lg:col-span-3",
} as const;

const rank = { default: 0, wide: 1, feature: 2 } as const;

export default function Services() {
  const ordered = [...services].sort((a, b) => rank[layoutFor(a.id)] - rank[layoutFor(b.id)]);

  return (
    <section id="services" aria-labelledby="services-title" className="relative bg-slate-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="services-title"
          title="Everything you need for your Monopoly GO journey"
          intro="Six services in one place. Tap any card to message us on Facebook — that's where we share current prices, available slots and offers."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {ordered.map((service) => {
            const layout = layoutFor(service.id);
            return (
              <div key={service.id} className={spanFor[layout]}>
                <ServiceCard service={service} layout={layout} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
