# Red Sox Vintage

A personal checklist for Red Sox baseball cards from Topps and Bowman, 1950–1965. Plain HTML, CSS and JavaScript with no build step, so it runs straight from GitHub Pages or by double-clicking `index.html`.

## What it does

- **Scoreboard.** The top panel is styled after Fenway's hand-operated scoreboard. Each slab shows how many Red Sox cards you own for that year and brand; a slab turns white once the year is complete. Click any slab to open that checklist.
- **Checklists.** Tick "Have" on a card to reveal a condition picker and a notes field (grade, cert number, where you bought it). Filter each set by All, Have or Need.
- **Player search.** Type a name to see every card for that player across all 23 sets.
- **Print want list.** Prints every card you still need, grouped by set, with checkboxes, handy for card shows.
- **Back up / Restore.** Downloads your collection as a JSON file and loads it back.

## Files

```
index.html        page structure
css/styles.css    all styling; color and type tokens are at the top in :root
js/data.js        the checklists (edit this to add or fix cards)
js/app.js         rendering, storage, search, print, backup
```

## Where your collection is saved

Ownership, condition and notes are stored in the browser's `localStorage` under the key `rsv-collection-v1`. That means:

- It stays put between visits in the same browser.
- It does **not** sync between devices or browsers. Use Back up on one and Restore on the other.
- Clearing site data wipes it, so back up now and then.

The data shape is simple: `{ "1952-topps:22": { "have": true, "cond": "VG 3", "notes": "..." } }`.

## Editing the checklists

Each set in `js/data.js` looks like this:

```js
{
  id: "1954-bowman", year: 1954, brand: "Bowman", name: "1954 Bowman",
  verify: "Optional message shown above the checklist",
  cards: [
    ["66a", "Ted Williams", "Pulled from the set"],
    ["130", "Milt Bolling"]
  ]
}
```

- Card numbers are strings, so variants like `66a` / `66b` work.
- The third value is an optional note (Team card, Manager, All-Star, Rookie Stars, etc.).
- **Don't rename an `id` after you start tracking.** Saved cards are keyed by `id:number`.
- Two sets can share a year and brand (1951 Topps Red/Blue Backs, 1953 Bowman Color/Black & White). They share a scoreboard slab and show as tabs.
- To extend past 1965, add sets and change the `YEARS` range near the top of `js/app.js`.

## A note on the data

The checklists were compiled from team-set references (teamsets4u, Hero Habit, TCDB and others) and cross-checked where sources overlapped. They follow the usual team-set convention: player, team, manager, coach, All-Star, and Red Sox-only combo and rookie cards. Multi-team league leader cards and multi-team rookie cards are left out, as is the unnumbered 1951 Topps Red Sox team card.

Three sets are flagged in the app as needing a check against a full checklist:

- **1951 Bowman**: 17 cards confirmed; team-set references say 19.
- **1953 Bowman Black & White**: built from partial listings.
- **1955 Bowman**: built from partial listings and may be missing a few cards.

Everything else matched across at least one team-set source, but it's worth a skim against your own reference before you rely on it for buying. When you confirm a set, delete its `verify` line.

## Publishing on GitHub Pages

1. Create a new repository and push these files to the root of the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then save.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Fonts

Big Shoulders Display (headings and scoreboard numerals) and Public Sans (body), both from Google Fonts. If fonts don't load, the page falls back to system fonts.
