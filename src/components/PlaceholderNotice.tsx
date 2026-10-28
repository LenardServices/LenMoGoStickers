import { isPlaceholder, links } from "../config/site";

/**
 * Development-only reminder. Appears while running `npm run dev` if a
 * Facebook link in src/config/site.ts still contains a placeholder.
 * Never shown on the live site.
 */
export default function PlaceholderNotice() {
  if (!import.meta.env.DEV) return null;
  if (!isPlaceholder(links.facebookPage) && !isPlaceholder(links.messenger)) return null;

  return (
    <div role="status" className="fixed right-4 bottom-4 left-4 z-[70] rounded-xl bg-red-600 px-4 py-3 text-sm font-medium text-white shadow-xl sm:left-auto sm:max-w-sm">
      Facebook links are still placeholders. Edit <code className="font-mono">links</code> in{" "}
      <code className="font-mono">src/config/site.ts</code>.
    </div>
  );
}
