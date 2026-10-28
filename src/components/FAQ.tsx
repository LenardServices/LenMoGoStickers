import { ChevronDown, MessageCircle } from "lucide-react";
import { faqs, labels, links } from "../config/site";
import { ButtonLink, SectionHeading } from "./ui";

/** Accordion built on native <details>, so it works without JavaScript and with the keyboard. */
export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-slate-50 py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            id="faq-title"
            title="Frequently asked questions"
            intro="Quick answers about how ordering works. For anything else, just send us a message."
          />
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
            <p className="font-semibold text-navy-900">Still have a question?</p>
            <p className="mt-1 text-sm text-slate-600">We reply on Facebook Messenger.</p>
            <ButtonLink href={links.messenger} external variant="royal" className="mt-5 w-full sm:w-auto lg:w-full">
              <MessageCircle className="size-5" aria-hidden="true" />
              {labels.message}
            </ButtonLink>
          </div>
        </div>

        <div className="space-y-3 lg:col-span-8">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-2xl border border-slate-200 bg-white transition open:border-royal-500/30 open:shadow-md"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-semibold text-navy-900 sm:px-6">
                {question}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-slate-100 text-navy-800 transition group-open:rotate-180 group-open:bg-royal-600 group-open:text-white">
                  <ChevronDown className="size-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-slate-600 sm:px-6">
                {answer}{" "}
                <a
                  href={links.facebookPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-royal-600 underline-offset-4 hover:underline"
                >
                  Go to our Facebook page
                </a>
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
