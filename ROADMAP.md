# Bright Sword Artisan, site roadmap

Repo: `brightsword` (motbuchanan). Live at motbuchanan.github.io/brightsword/ until Jacob's domain points here.
Client: Jacob, leather / pens / knives, Massillon OH. Booth-driven business, Facebook only before this site.
Built and maintained by Mot Buchanan. Claude updates this file with every upload.

## Current state
- **Package v4.7, Sep 25 2026** (index.html v4.1; booth.html v4.0; the office app is v3.4: Forge Year + Armory + Herald + Guide, now an installable auto-updating PWA, with a Storefront unlock reward and a tappable version badge). The retired kit page is pulled from the repo. New files: bsa-office.webmanifest, sw.js, icon-192/512/512-maskable.png, apple-touch-icon.png. Full rebuild of the July forge demo into the real site, in its own repo (same route as Rock Solid: static, free, custom domain later, staged handoff).
- Format rule (Mot, Sep 25): the website is the finished product, everything in the one repo. The office, the merch and the print pieces live INSIDE the office app and are unlocked by easy tasks; Jacob designs the merch himself in the app. Nothing is handed to him as a separate file.
- Files at root, flat: `index.html` (v4.0), `booth.html` (booth v4.0), `brightsword-office.html` (office v2.0: the back office PLUS The Forge Year campaign: opening with d20, Session Zero character creation that doubles as the intake, five arcs, 39 quests, 7 bosses, 14 artifacts, 9 abilities, weekly hand deck-building, clean sweeps, journal, Send a raven; auto-completion hooks on shows/log/P&L/orders/checklists/backups), `bsa-qr-quest.png` (QR two: opens the office app with ?quest=1), `brightsword-kit.html` (kit v1.0, print and merch mockups), `ROADMAP.md`, `.nojekyll`, `bsa-logo.png` (parchment mark), `bsa-logo-dark.png`, `bsa-share.jpg` (OG card), `bsa-qr-booth.png`, and 19 photos `bsa-*.jpg`.
- Outside the repo (Mot keeps): `Bright-Sword-Back-Office.xlsx` (spreadsheet twin of the office app, 782 live formulas, recalculated clean), the social kit folder (cover, profile, 5 post templates, 1 story, playbook), `BRIGHTSWORD-HANDOFF.md`.
- Verified: node --check, gates (no jekyll tokens, no base64, no em dashes, no unit-less translate, banned-phrase scan, asset refs), Playwright real-tap smoke on every control on both pages, phone renders reviewed.

## What shipped in v4.0
- Forge essence kept: charred palette, saddle-stitch panels, parchment board, ember hero, his quote, three configurators, all photos.
- Blanket fade-up scroll reveal REMOVED (AI tell). Motion now: embers loop in hero, stitch rules draw once per section on arrival, estimate heat-flare on change. Reduced-motion respected.
- One recurring micro-interaction: HEAT. Every tappable surface warms ember on hover/press (`.heat`).
- Gallery as three benches (leather / pen lathe / blade) with placard captions, quote tiles, tap-to-zoom lightbox (late-bound lookups).
- The board with real booth prices (bookmark $5, straps $5, minimalist wallet $15, journal $25, clutch $70, pens/knives/bags per piece).
- The booth: schedule table (sample rows), three booth photos including Jacob.
- The maker: quote + placeholder story.
- SEO: title/meta, JSON-LD Store, geo alts, lazy loading. Open Graph card so texted links unfurl with the logo.
- `booth.html`: what the QR opens. Three-step framing, the same workshop, and a "Hand this to Jacob" mode that shows the build in large type for reading across the table.
- `bsa-qr-booth.png`: temp QR (error-correction H, logo centered) pointing at booth.html. Reprint when the domain exists.

## Draft notes (visible until confirmed)
Brass CONFIRM chips mark the five things only Jacob knows. Footer link "hide draft notes" hides them for a clean showing.
1. Exact name wording at the top of the site.
2. His story, in his words (maker section).
3. Real show list (schedule rows are samples).
4. Facebook page link (currently a search link that finds his page; swap `FACEBOOK_URL` for the real page URL).
5. Configurator option prices (sample; he corrects them).

## Locked decisions
- Own repo, static, free hosting, Route B. No rebuild on Wix/Squarespace unless he wants a storefront later.
- Never touch Jacob's accounts. Domain DNS happens on a screen share with him driving.
- No CNAME file until a domain exists and the temp URL is verified.
- QR is not printed until the URL is final (a printed QR to a dead link is worse than none). Domain first, then reprint QR, then print.
- No cream/off-white grounds. No blanket scroll reveals. No fake testimonials.
- Photos reference files at repo root (no base64).

## Open queue
1. Jacob moves into the new house and shoots the workshop; those photos slot into the maker section and a new "the shop" bench.
2. Collect the five CONFIRM items (one short message, not a form).
3. Domain: help him buy one (~$12/yr), point it here, reprint QR, then the booth card and banner go to print.
4. Back office app (booth log, event P&L, show schedule, correspondence) and the social kit are separate deliverables in the same package; see the handoff.
5. Storefront tier (Etsy link vs built-in store) only if his intake says so.

## Version badges
`index.html` footer: `v4.1 · Sep 25 2026`. `booth.html`: `booth v4.0`. `brightsword-office.html` header: `office v3.4 · Sep 25 2026`. (kit page retired.) Bump the badge of any file touched, every time.

## Office app storage rule
The office app only persists when opened from its https address (motbuchanan.github.io/brightsword/brightsword-office.html). Opened from Downloads it shows a red banner and cannot save. Jacob adds it to his home screen from the live URL. Backup file after every show.

## The Forge Year (office v2.0)
- Design: FORGE-YEAR-CAMPAIGN-DESIGN.md (Mot keeps). Art prompts: FORGE-YEAR-ART-PROMPTS.md. Art files drop into the repo root by exact name; missing files show placeholders.
- Two QRs for the handoff: `bsa-qr-booth.png` (site/booth) and `bsa-qr-quest.png` (campaign, ?quest=1). Neither is printed until the domain exists.
- Debug: `?today=YYYY-MM-DD` overrides the date for testing arcs and weekly ticks. `?quest=1` forces the Quest tab.
- Verified by Playwright play-through: opening, d20, Session Zero (level 2), auto draw, book3, checklists, booth log (firstlog, bookmark, sameday), P&L (firstpl), The First Show defeated (Cash Box loot, level 4), raven text, clean sweep on week tick, arc 2 by date with the Taxman on the board.
- Rules learned: reward reveals wait while the Log tab is open (booth tapping must never be interrupted); arc unlock checks a boss KILL not a boss record; the opening dot must not share the `ember` class with buttons.
- v2.1 (Sep 25): opening rebuilt. Real anvil silhouette (horn, face, waist, base, hot line on the face), hammer pivots from the handle end and drops onto the face from above, three strikes driven by animationend (impact flash, 22 sparks, screen shake, face glow fire exactly at contact), then the title burns in. The first version had a blocky anvil and a swing arc that came up from below; Mot caught it on his phone.

## The Armory and The Herald (office v3.0, Sep 25)
- Cards tab now holds three pills: Library (abilities), Armory (gear = the merch and print pieces), Herald (post maker).
- The Armory: 20 artifacts, 13 of them designable pieces of Bright Sword gear (merch and print). Unlock map, all ordinary office tasks: finish Session Zero → Signet + Calling Card; complete any one quest → Booth Shirt; post one WIP photo → Sticker; log the first sale → The Board (price board); save the first custom order → Thank-You Card; book three shows → Scrying Card (QR table card); save a show P&L → Banner; post a thank-you after a show → Handbill (flyer); take a deposit → Letterhead; log sales at three shows → Tote; set up the new workshop → Maker's Tag; defeat the Taxman → Hat. Loot-only artifacts (no design): Cash Box, Card Reader, Iron Ledger, Map, Tent Weights, Hearthstone. The True Name (domain) is flipped by Mot.
- Forging: tapping an owned piece opens the forge: layout a/b/c, ground (coal / parchment / ember), tagline from LINES or his own words, custom text. Save design awards 25 Smith XP once per piece. Download PNG renders the SVG with his logo. The forged design becomes the card art on the Armory grid.
- Handoff flow (Mot's rule): Jacob does NOT send anything to a printer through Mot. "Send design to Mot" copies a DESIGN HANDOFF spec (piece, layout, ground, line, custom text, PNG attached). Mot makes the print-ready file and sends it back. Jacob orders the printing wherever he likes (printer or website).
- The Herald: canvas post maker, 1080x1080 and 1080x1920, photo picker from his phone, five templates (announce and WIP free; new bench, thanks, custom unlocked by quests). Download awards 20 Chronicler XP once. Works over https only (file:// taints the canvas).
- Rules learned: SVG text in cards must scale to the available width and carry textLength clamps (the calling card's "Bright Sword Artisan" overflowed in layout b); artifact card art needs a placeholder under the img so a missing Grok file never leaves a hole; clipboard writes need a catch with a toast.
- Smoke: smoke-quest.py, smoke-office.py, smoke-armory.py all pass over http://127.0.0.1:8765 with zero console errors.

## office v3.1 fixes (Sep 25, after Mot's phone review of the pieces)
- Forge text bug: the shared `txt()` helper used the text string as its x-coordinate, so in layouts a and c the tagline and the stacked "Bright Sword / Artisan" jammed to the left edge (only layout b was correct). Signature fixed to (str, x, y, ...); layout a's tagline now clamps to the box width with textLength like b and c. Every layout-a piece (sticker, shirt, tote, signet) is now centered.
- Hat contrast: the leather patch was near-black (#171310) with the dark logo on the parchment ground, so the mark vanished. The patch is now always leather brown (#5c3a24) with the light mark on both grounds.
- index v4.1: the "confirm wording" chip on the homepage name was removed. The name is already baked into his logo, so there is nothing for Jacob to confirm there. The other CONFIRM chips (show list, Facebook link, configurator prices) stay.
- Kit page retired: brightsword-kit.html is pulled from the repo. It was the pre-Armory mockup page (placeholder BSA discs on the wearables, real logo on the print pieces, plus a buggy phone-width letterhead footer and a crude hat). The Armory replaces it and composites the real logo on all 13 designable pieces. Its production specs moved into BRIGHTSWORD-HANDOFF.md section 2d.

## The Guide (office v3.2, Sep 25)
- In-app walkthrough that hand-holds Jacob through the whole system: what it is, how you play, the map of tabs, the weekly hand, the Armory (design and the Mot-makes-the-file handoff), the Herald, bosses and seasons, what is expected of him, reaching Mot by raven, and how he wins by next holiday season. Eleven scroll pages, each DM voice on top and a plain "What this means" line under it (same pattern as the quest cards).
- Auto-opens once, right after Session Zero, when the reward reveals have cleared (guarded so it never stacks on the opening, Session Zero, or a reveal). Sets Q.guideSeen so it never nags again.
- Re-readable any time: a "Guide" chip in the header, and a "New here? Read the guide" button under the DM card on the Quest tab.
- Debug: ?guide=1 forces it open (for the pitch). Existing savers who finished Session Zero before v3.2 get it once on next open.
- Smoke: clear_reveals in the quest and armory smokes now also close the guide; the office smoke sets guideSeen so it never opens mid-run. All three suites pass.

## PWA + Storefront + version badge (office v3.4, Sep 25)
- Installable PWA: bsa-office.webmanifest (name Bright Sword Artisan, short_name Bright Sword, standalone, portrait, start_url brightsword-office.html?quest=1, scope ./), icons icon-192/512/512-maskable.png + apple-touch-icon.png (the mark on coal), apple/standalone metas. An "Add to home screen" bar fires the native prompt on Android and shows the Share-sheet steps on iOS.
- Auto-updates on push: sw.js is network-first for HTML with cache:no-store, so a push shows on Jacob's next open; stale HTTP cache can't win. Assets are stale-while-revalidate. Cache key is bsa-office-v<ver>, bumped every deploy (matches the badge, per the vibe-code standard). Verified: SW registers and controls, a changed file shows up on reopen, offline still renders.
- The Storefront unlock (Mot's play-first handoff): a locked "Your Storefront" card sits at the top of the Quest tab after Session Zero ("the smith is forging it"). Mot flips `var STOREFRONT_LIVE=false;` to true in brightsword-office.html and pushes; the PWA auto-updates and the card unlocks with an "Open your storefront" button (opens index.html in a new tab) + "Copy the link", firing a reward reveal and +100 XP once (Q.storefrontClaimed). STOREFRONT_URL defaults to index.html. So the site is the reward Jacob earns by completing character creation; he never sees the half-built site.
- Handoff sequencing (locked): send Jacob ONE link this weekend, the office/quest, not the site. His Session Zero answers ride the raven to Mot; Mot finalizes the site, flips STOREFRONT_LIVE, pushes; the site reveals itself inside his app.
- Version badge is tappable: shows version, today, last-update date, and days-since, then fetches the live file (no-store) and compares its build tag (`bsa <num> <iso>`); if newer, shows "A newer version is live" + a Refresh button (SW update + reload). pwa.py stamps the badge date and build tag from the real system date each build.
- Future feature (Mot's idea, not built): artisan-class specializations (Leatherwright / Smith / Penturner) as a mid-year "pick your path" unlock that boosts a skill line and opens path-specific quests and gear. The 5 skill lines already support it.
