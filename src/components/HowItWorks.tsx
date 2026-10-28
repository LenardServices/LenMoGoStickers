import { Info } from "lucide-react";
import { steps } from "../config/site";
import { SectionHeading } from "./ui";

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="how-title"
          center
          title="Three steps to get started"
          intro="No accounts, carts or checkout on this site — everything happens in a Facebook conversation."
        />

        <div className="relative mt-14">
        {/* connecting line (desktop) */}
        <div
          aria-hidden="true"
          className="absolute top-10 right-[16%] left-[16%] hidden border-t-2 border-dashed border-royal-500/30 md:block"
        />
        <ol className="relative grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map(({ title, text, icon: Icon }, i) => (
            <li key={title} className="relative flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm">
              <span className="relative grid size-20 -mt-1 place-items-center rounded-full bg-gradient-to-br from-royal-500 to-navy-800 text-white shadow-lg shadow-royal-600/25 ring-8 ring-white">
                <Icon className="size-8" aria-hidden="true" />
                <span className="absolute -top-1 -right-1 grid size-8 place-items-center rounded-full bg-gold-400 font-display text-base font-bold text-navy-900 ring-4 ring-white">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-6 text-xl font-semibold text-navy-900">
                <span className="sr-only">Step {i + 1}: </span>
                {title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">{text}</p>
            </li>
          ))}
        </ol>
        </div>

        <p className="mx-auto mt-10 flex max-w-2xl items-start gap-3 rounded-2xl bg-gold-400/15 px-5 py-4 text-sm leading-relaxed text-navy-800">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-700" aria-hidden="true" />
          <span>
            <strong className="font-semibold">This website is for information only.</strong> All orders, pricing and
            payment details are handled directly with us through our Facebook page.
          </span>
        </p>
      </div>
    </section>
  );
}
