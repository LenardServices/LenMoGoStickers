import { reasons } from "../config/site";
import { SectionHeading } from "./ui";

/** First two reasons get wider cards, the rest sit three across (on large screens). */
const spans = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-28">
      <div aria-hidden="true" className="board-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div aria-hidden="true" className="absolute -bottom-40 -left-24 size-[30rem] rounded-full bg-royal-600/30 blur-[120px]" />

      <div className="container-page relative">
        <SectionHeading
          id="why-title"
          dark
          title="Why choose Len Mogo Stickers?"
          intro="We show you what we offer here, then sort out every detail with you directly on Facebook."
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {reasons.map(({ title, text, icon: Icon }, i) => (
            <li
              key={title}
              className={`rounded-3xl border border-white/10 bg-white/[0.04] p-7 ${spans[i] ?? "lg:col-span-2"} ${
                i === reasons.length - 1 && reasons.length % 2 === 1 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-gold-400/15 text-gold-300">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 max-w-prose leading-relaxed text-blue-100/75">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
