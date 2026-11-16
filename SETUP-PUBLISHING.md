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
The email address preserves the original repository's `divinesinmgmt@gmail.com`. A WhatsApp number was not provided, so the incomplete wa.me link is replaced with an honest availability message.
