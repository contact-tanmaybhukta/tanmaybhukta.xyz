import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "TANMAY BHUKTA",
    provider: "local",
    baseUrl: "personal-website-v5-bvu.pages.dev",
    ignorePatterns: [".obsidian", ".trash", "**/_*.md"],
    defaultDateType: "created",
    theme: {
      cdnCaching: false,
      typography: {
        header: "Inter Tight",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#000000",
          lightgray: "#111111",
          gray: "#555555",
          darkgray: "#dddddd",
          dark: "#ffffff",
          secondary: "#ffffff",
          tertiary: "#888888",
          highlight: "rgba(255, 255, 255, 0.05)",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#111111",
          gray: "#555555",
          darkgray: "#dddddd",
          dark: "#ffffff",
          secondary: "#ffffff",
          tertiary: "#888888",
          highlight: "rgba(255, 255, 255, 0.05)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
