/**
 * ============================================================
 *  LEN MOGO STICKERS — SITE CONFIGURATION
 * ============================================================
 *  This is the ONE file to edit for everyday changes:
 *    1. Facebook / Messenger / Discord links ........ `links`
 *    2. Business name & descriptions ................ `brand`
 *    3. Button labels ............................... `labels`
 *    4. The six services (titles, text, icons) ...... `services`
 *    5. FAQ questions & answers ..................... `faqs`
 *
 *  After editing: save → commit → push. GitHub Pages redeploys
 *  automatically (see README.md).
 *
 *  Icons come from Lucide (https://lucide.dev/icons). To change an
 *  icon, import a different one below and swap it in the service.
 * ============================================================
 */
import type { LucideIcon } from "lucide-react";
import {
  Crown,
  Compass,
  Flag,
  Handshake,
  Layers,
  Megaphone,
  MessageCircle,
  Search,
  ShieldCheck,
  Smile,
  UserPlus,
  CircleCheck,
} from "lucide-react";

/* ------------------------------------------------------------
 * 1. LINKS
 * ------------------------------------------------------------
 *  facebookPage → your Facebook page address.
 *  messenger    → opens a Messenger chat with your page.
 *                 Format: https://m.me/ + your page ID (or username).
 *                 If you later claim a page username (e.g. lenmogostickers),
 *                 you can change both links to use it:
 *                   https://www.facebook.com/lenmogostickers
 *                   https://m.me/lenmogostickers
 *  discord      → optional. Leave as "" to hide it everywhere.
 * ---------------------------------------------------------- */
export const links = {
  facebookPage: "https://www.facebook.com/profile.php?id=61595897465452",
  messenger: "https://m.me/61595897465452",
  discord: "",
};

/* ------------------------------------------------------------
 * 2. BRAND
 * ---------------------------------------------------------- */
export const brand = {
  name: "Len Mogo Stickers",
  /** Logo file inside /public/images. Replace the file to change the logo. */
  logo: "images/logo.webp",
  logoAlt: "Len Mogo Stickers logo",
  shortDescription:
    "Monopoly GO stickers, event carries and invite bar filling. Message us on Facebook for current prices, availability and announcements.",
  hero: {
    headline: "Your Go-To Spot for Monopoly GO Services!",
    text: "Need stickers, event carries, or invite bar assistance? Len Mogo Stickers is here to help you enjoy your Monopoly GO journey. Explore our services and message us on Facebook for the latest offers and availability.",
  },
  about: {
    title: "Welcome to Len Mogo Stickers",
    text: "We offer a range of Monopoly GO services for players looking for stickers, event assistance, and invite bar filling. Whether you're working toward completing your album or looking for help with an event, explore our services and reach out through our Facebook page for current details.",
  },
  disclaimer:
    "Len Mogo Stickers is an independent service page and is not affiliated with or endorsed by Scopely or Monopoly GO.",
};

/* ------------------------------------------------------------
 * 3. BUTTON LABELS
 * ---------------------------------------------------------- */
export const labels = {
  visitFacebook: "Visit Our Facebook Page",
  visitFacebookShort: "Visit Facebook Page",
  message: "Message Us",
  exploreServices: "Explore Our Services",
  inquire: "Inquire on Facebook",
  askAbout: "Ask",
};

/* ------------------------------------------------------------
 * 4. SERVICES
 * ------------------------------------------------------------
 *  accent → card color theme. One of:
 *           "blue" | "red" | "green" | "purple" | "cyan" | "gold"
 *  image  → optional artwork shown on the card (file in /public/images).
 *           Delete the `image` block to show the icon-only design.
 *  tiers  → optional list of sub-categories, each with its own
 *           inquiry button (used by the sticker card). A tier's
 *           `image` is optional; without it the tile shows a colored pack.
 *  link   → where the card's button goes. Defaults to Messenger.
 *
 *  Don't put prices here: prices change, so they live on Facebook.
 * ---------------------------------------------------------- */
export type ServiceAccent = "blue" | "red" | "green" | "purple" | "cyan" | "gold";

export interface ServiceTier {
  label: string;
  stars: number;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  accent: ServiceAccent;
  ctaLabel?: string;
  link?: string;
  image?: { src: string; alt: string };
  tiers?: ServiceTier[];
}

export const services: Service[] = [
  {
    id: "partners-carry",
    title: "Partners Carry",
    tagline: "Partners event",
    description:
      "Looking for help with your Partners event? Explore our Partners Carry service and message us to check available slots and current offers.",
    icon: Handshake,
    accent: "blue",
    image: {
      src: "images/partners-event.webp",
      alt: "Len Mogo Stickers Partners Event artwork: puzzle pieces and a gold trophy on a blue stage.",
    },
  },
  {
    id: "racing-carry",
    title: "Racing Carry",
    tagline: "Racing event",
    description:
      "Need assistance with the Racing event? Learn about our Racing Carry service and ask about current availability.",
    icon: Flag,
    accent: "red",
    image: {
      src: "images/racing-carry.webp",
      alt: "Len Mogo Stickers Racing Carry artwork: a red go-kart crossing a checkered finish line.",
    },
  },
  {
    id: "adventure-carry",
    title: "Adventure Carry",
    tagline: "Adventure Club",
    description:
      "Looking for help with Adventure Club? Discover our Adventure Carry service and contact us for the latest details.",
    icon: Compass,
    accent: "green",
    image: {
      src: "images/adventure-carry.webp",
      alt: "Len Mogo Stickers Adventure Carry artwork: a treasure map, compass and treasure chest of sticker cards in a jungle.",
    },
  },
  {
    id: "stickers",
    title: "Stickers — 1 to 5 Stars",
    tagline: "Album stickers",
    description:
      "Looking for stickers to help complete your album? Ask about available stickers across different star ratings.",
    icon: Layers,
    accent: "purple",
    tiers: [
      { label: "1-Star Stickers", stars: 1, image: "images/stickers-1-star.webp" },
      { label: "2-Star Stickers", stars: 2, image: "images/stickers-2-star.webp" },
      { label: "3-Star Stickers", stars: 3, image: "images/stickers-3-star.webp" },
      { label: "4-Star Stickers", stars: 4, image: "images/stickers-4-star.webp" },
      { label: "5-Star Stickers", stars: 5, image: "images/stickers-5-star.webp" },
    ],
  },
  {
    id: "golden-blitz",
    title: "Golden Blitz Stickers",
    tagline: "Golden Blitz",
    description:
      "Looking for Golden Blitz stickers? Message us on Facebook to check which stickers and offers are currently available.",
    icon: Crown,
    accent: "gold",
    image: {
      src: "images/golden-blitz.webp",
      alt: "Len Mogo Stickers Golden Blitz artwork: glowing golden cards fanned under gold stars.",
    },
  },
  {
    id: "invite-bar",
    title: "Invite Bar Filling",
    tagline: "Invite friends bar",
    description:
      "Looking for invite bar filling services? Contact us to discuss availability, requirements, and current offers.",
    icon: UserPlus,
    accent: "cyan",
    image: {
      // NOTE: this artwork shows a price. Update or remove it when your price changes.
      src: "images/invite-bar.webp",
      alt: "Len Mogo Stickers invite friend bar graphic showing the four invite stages and their rewards.",
    },
  },
];

/* ------------------------------------------------------------
 * WHY CHOOSE US
 * ---------------------------------------------------------- */
export const reasons: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Multiple services in one place",
    text: "Event carries, stickers of every star rating, Golden Blitz stickers and invite bar filling — all from one page.",
    icon: Layers,
  },
  {
    title: "Convenient Facebook communication",
    text: "No sign-ups or checkout forms. Just send us a message on Facebook, where you already are.",
    icon: MessageCircle,
  },
  {
    title: "Clear order inquiries",
    text: "Tell us what you need and we'll go over pricing, requirements and availability before anything is confirmed.",
    icon: CircleCheck,
  },
  {
    title: "Updates on our Facebook page",
    text: "New offers, event slots and sticker availability are announced on our page first.",
    icon: Megaphone,
  },
  {
    title: "Friendly customer support",
    text: "Questions before or after an order? Message us and we'll help you out.",
    icon: Smile,
  },
];

/* ------------------------------------------------------------
 * HOW IT WORKS
 * ---------------------------------------------------------- */
export const steps: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Explore Services",
    text: "Browse the available service categories on this website.",
    icon: Search,
  },
  {
    title: "Message Us",
    text: "Visit our Facebook page to ask about pricing, availability, requirements, and current offers.",
    icon: MessageCircle,
  },
  {
    title: "Confirm Your Order",
    text: "Finalize the service details directly with us through Facebook.",
    icon: ShieldCheck,
  },
];

/* ------------------------------------------------------------
 * 5. FAQ
 * ---------------------------------------------------------- */
export const faqs: { question: string; answer: string }[] = [
  {
    question: "Where can I check current prices?",
    answer:
      "Prices change with events and availability, so we don't list them here. Message us on our Facebook page and we'll send you the latest prices.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Send us a message on Facebook with the service you need. We'll confirm the details, price and requirements with you there before your order goes ahead.",
  },
  {
    question: "Where can I check sticker availability?",
    answer:
      "Sticker availability changes often. Message us on Facebook with the sticker or star rating you're looking for and we'll let you know what's currently available.",
  },
  {
    question: "How can I inquire about Partners Carry?",
    answer:
      "Message our Facebook page and mention Partners Carry. We'll share current slots, requirements and offers for the active Partners event.",
  },
  {
    question: "How can I inquire about Racing Carry?",
    answer:
      "Message our Facebook page and mention Racing Carry. We'll let you know current availability and details for the Racing event.",
  },
  {
    question: "How can I inquire about Adventure Carry?",
    answer:
      "Message our Facebook page and mention Adventure Carry. We'll send the latest details for Adventure Club.",
  },
  {
    question: "How does Invite Bar Filling work?",
    answer:
      "Message us on Facebook to ask about Invite Bar Filling. We'll explain the requirements, current availability and offers before anything is confirmed.",
  },
  {
    question: "How can I check Golden Blitz sticker availability?",
    answer:
      "During Golden Blitz, message us on Facebook and we'll tell you which Golden Blitz stickers and offers are currently available.",
  },
  {
    question: "Where will announcements and updates be posted?",
    answer:
      "All announcements, new offers and service updates are posted on our Facebook page. Follow the page to stay up to date.",
  },
];

/* ------------------------------------------------------------
 * NAVIGATION (section ids must match the `id` on each section)
 * ---------------------------------------------------------- */
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------
 * Helpers (no need to edit)
 * ---------------------------------------------------------- */
/** Resolves a file in /public so it works under a GitHub Pages subpath. */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

/** True while a link still contains the placeholder text. */
export const isPlaceholder = (url: string) => url.includes("YOUR_PAGE_USERNAME");

/** Safe attributes for links that leave the site. */
export const externalLinkProps = { target: "_blank", rel: "noopener noreferrer" } as const;
