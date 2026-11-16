# Tanmay's website

## Write with Obsidian
Open this repository's `content` folder as a vault. Edit `index.md` for the homepage and add Markdown notes alongside your existing notes. Keep private writing outside this public vault. Save, then run `npx quartz sync` from the repository root to publish through the connected Git branch.

## Local development
Requires Node 22+ and npm 10.9.2+.

```sh
npm ci
npx quartz plugin install --from-config
npx quartz build --serve
```

The active Quartz 5 settings and layout are in `quartz.config.yaml`. Styling is in `quartz/styles/custom.scss`. The legacy TypeScript configuration files now forward to the active Quartz entry point.

## Cloudflare Pages
Connect this GitHub repository. Use framework preset None, build command `npx quartz plugin install --from-config && npx quartz build`, output directory `public`, and Node 24. Use your production branch (currently `v5`). Review the design branch before merging it into production.

## Domain
The display brand is `tanmayxyz.dev`. Its ownership and DNS activation have not been verified. The canonical `baseUrl` deliberately remains the existing `personal-website-v5-bvu.pages.dev` until the domain works.

To activate the new domain:
1. Register or verify ownership of `tanmayxyz.dev`.
2. Add it as a Cloudflare zone and configure the required nameservers.
3. In Workers & Pages, open this Pages project, then Custom domains, then Set up a domain.
4. Add `tanmayxyz.dev` and wait for activation.
5. Change `configuration.baseUrl` in `quartz.config.yaml` to `tanmayxyz.dev` and push.
6. Configure a redirect from the old pages.dev address to the new domain.

## Contact
Email: `contact.tanmaybhukta@gmail.com`. WhatsApp: `https://wa.me/918420283833` (India +91, assumed from the supplied local number). Both homepage buttons are direct links.

## Production link versus preview link
A URL such as `e7c30797.personal-website-v5-bvu.pages.dev` is a deployment preview. The stable production URL is `https://personal-website-v5-bvu.pages.dev/` once these changes are merged into the configured Cloudflare production branch. The display brand does not register a domain. A paid custom domain such as `tanmayxyz.dev` requires ownership and the Cloudflare custom-domain setup above.

## Posting workflow
1. Open the cloned repository’s `content` folder as an Obsidian vault.
2. Create a note, for example `My first post.md`, with a title and your text.
3. Create new articles under `content/posts/`. The All posts page automatically lists them after a build. To feature an article on the homepage, add a `[[posts/My first post|My first post]]` link under THE LEARNING JOURNAL in `content/index.md`.
4. Save the file. From the repository root run `npx quartz sync` to commit and push (GitHub authentication must be configured locally).
5. Cloudflare rebuilds the branch it watches. Obsidian alone does not upload the website. You can alternatively upload/edit the Markdown file in GitHub and commit it there.

## Lightweight layout
Homepage order is name, learning journal, about, learning focus, contact. Content/folder/tag pages use a full-width reading frame, without sidebar branding or explorer/search widgets. Posts remain reachable through the homepage and the automatic All posts listing; breadcrumbs provide a return path.

SPA routing, viewport prefetch, hover previews, external font loading, unused sidebar plugins, and the math renderer are disabled. The typography uses device-local sans/serif fonts. Reading and links work without JavaScript. If a future post requires mathematical notation, enable the LaTeX plugin deliberately.

Verified at 320, 390, 768, 1440, 1920, and 3840 CSS pixels. This covers responsive viewport behavior; it does not certify every physical device or TV browser.
