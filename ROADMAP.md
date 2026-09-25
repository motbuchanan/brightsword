# Bright Sword Artisan, site roadmap

Repo: `brightsword` (motbuchanan). Live at motbuchanan.github.io/brightsword/ until Jacob's domain points here.
Client: Jacob, leather / pens / knives, Massillon OH. Booth-driven business, Facebook only before this site.
Built and maintained by Mot Buchanan. Claude updates this file with every upload.

## Current state
- **Package v4.4, Sep 25 2026** (index.html and booth.html stay v4.0, untouched; the office app is v3.0: The Forge Year campaign plus The Armory and The Herald built in). Full rebuild of the July forge demo into the real site, in its own repo (same route as Rock Solid: static, free, custom domain later, staged handoff).
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
`index.html` footer: `v4.0 · Sep 24 2026`. `booth.html`: `booth v4.0`. `brightsword-office.html` header: `office v3.0 · Sep 25 2026`. `brightsword-kit.html` footer: `kit v1.0`. Bump the badge of any file touched, every time.

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
