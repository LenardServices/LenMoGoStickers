import { MessageCircle, Star } from "lucide-react";
import { asset, brand, externalLinkProps, labels, links } from "../config/site";
import { ButtonLink, Die, FacebookIcon } from "./ui";

export default function FacebookCTA() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-20 sm:pb-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-royal-600 via-royal-700 to-navy-900 px-6 py-14 text-center text-white shadow-2xl shadow-royal-700/25 sm:px-12 sm:py-20">
          <div aria-hidden="true" className="board-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <div aria-hidden="true" className="absolute -top-24 left-1/2 size-80 -translate-x-1/2 rounded-full bg-gold-400/25 blur-3xl" />
          <Die value={4} className="absolute top-8 left-[6%] size-14 -rotate-12 max-sm:hidden" />
          <Die value={6} className="absolute right-[7%] bottom-10 size-12 rotate-[20deg] max-sm:hidden" />
          <Star aria-hidden="true" className="absolute top-12 right-[14%] size-5 fill-gold-300 text-gold-300" />
          <Star aria-hidden="true" className="absolute bottom-14 left-[16%] size-4 fill-cyan-300 text-cyan-300" />

          <div className="relative mx-auto max-w-2xl">
            <img
              src={asset(brand.logo)}
              alt=""
              loading="lazy"
              width={96}
              height={96}
              className="mx-auto size-24 rounded-full ring-4 ring-gold-400 shadow-xl"
            />
            <h2 id="contact-title" className="mt-6 text-3xl leading-tight font-bold sm:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-blue-50/90">
              Visit {brand.name} on Facebook for the latest prices, available stickers, event slots, and announcements.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={links.facebookPage} external>
                <FacebookIcon />
                {labels.visitFacebookShort}
              </ButtonLink>
              <ButtonLink href={links.messenger} external variant="light">
                <MessageCircle className="size-5" aria-hidden="true" />
                {labels.message}
              </ButtonLink>
            </div>
            {links.discord && (
              <p className="mt-6 text-sm text-blue-100/80">
                Also on{" "}
                <a href={links.discord} {...externalLinkProps} className="font-semibold text-white underline underline-offset-4">
                  Discord
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
