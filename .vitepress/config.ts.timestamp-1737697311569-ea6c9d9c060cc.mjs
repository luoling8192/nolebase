// .vitepress/config.ts
import process from "node:process";
import { BiDirectionalLinks } from "file:///Users/luoling8192/Projects/blog-nolebase/node_modules/.pnpm/@nolebase+markdown-it-bi-directional-links@2.12.0_markdown-it@14.1.0/node_modules/@nolebase/markdown-it-bi-directional-links/dist/index.mjs";
import { UnlazyImages } from "file:///Users/luoling8192/Projects/blog-nolebase/node_modules/.pnpm/@nolebase+markdown-it-unlazy-img@2.12.0_@types+node@22.10.1_jiti@2.4.2_less@4.2.1_markdown-it_rf5ju7ec476krswxsoagamlg6a/node_modules/@nolebase/markdown-it-unlazy-img/dist/index.mjs";
import { InlineLinkPreviewElementTransform } from "file:///Users/luoling8192/Projects/blog-nolebase/node_modules/.pnpm/@nolebase+vitepress-plugin-inline-link-preview@2.12.0_@algolia+client-search@5.15.0_@types+no_5hlykesoawk5ds6gohhukjomua/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/markdown-it/index.mjs";
import { transformHeadMeta } from "file:///Users/luoling8192/Projects/blog-nolebase/node_modules/.pnpm/@nolebase+vitepress-plugin-meta@2.12.0_@algolia+client-search@5.15.0_@types+node@22.10.1_less_d3dqm7dfdmkldi7frtjgrlpat4/node_modules/@nolebase/vitepress-plugin-meta/dist/vitepress/index.mjs";
import { calculateSidebar } from "file:///Users/luoling8192/Projects/blog-nolebase/node_modules/.pnpm/@nolebase+vitepress-plugin-sidebar@2.12.0/node_modules/@nolebase/vitepress-plugin-sidebar/dist/index.mjs";
import MarkdownItFootnote from "file:///Users/luoling8192/Projects/blog-nolebase/node_modules/.pnpm/markdown-it-footnote@4.0.0/node_modules/markdown-it-footnote/index.mjs";
import MarkdownItMathjax3 from "file:///Users/luoling8192/Projects/blog-nolebase/node_modules/.pnpm/markdown-it-mathjax3@4.3.2/node_modules/markdown-it-mathjax3/index.js";
import { defineConfig } from "file:///Users/luoling8192/Projects/blog-nolebase/node_modules/.pnpm/vitepress@1.5.0_@algolia+client-search@5.15.0_@types+node@22.10.1_less@4.2.1_markdown-it-math_pnpogrbelv53tyd5f664fzdygq/node_modules/vitepress/dist/node/index.js";

// scripts/utils.ts
var getAvatarUrlByGithubName = (name) => `https://github.com/${name}.png`;

// metadata/index.ts
var siteName = "N\xF3l\xEBbase";
var siteDescription = "\u8BB0\u5F55\u56DE\u5FC6\uFF0C\u77E5\u8BC6\u548C\u7545\u60F3\u7684\u5730\u65B9";
var githubRepoLink = "https://github.com/nolebase/nolebase";
var discordLink = "https://discord.gg/XuNFDcDZGj";
var plainTargetDomain = "nolebase.ayaka.io";
var targetDomain = `https://${plainTargetDomain}`;
var creators = [
  {
    name: "\u7D62\u9999\u732B",
    avatar: "",
    username: "nekomeowww",
    title: "N\xF3l\xEBbase \u539F\u59CB\u521B\u4F5C\u8005",
    desc: "\u5F00\u53D1\u8005\uFF0C\u4E13\u6CE8\u4E8E\u57FA\u7840\u8BBE\u65BD\u7EF4\u62A4\uFF0C\u6570\u636E\u5206\u6790\uFF0C\u540E\u7AEF\u3001DevOps \u5F00\u53D1",
    links: [
      { type: "github", icon: "github", link: "https://github.com/nekomeowww" },
      { type: "twitter", icon: "twitter", link: "https://twitter.com/ayakaneko" }
    ],
    nameAliases: ["nekomeowww", "\u7EDA\u9999\u732B", "\u7D62\u9999\u732B", "Neko Ayaka", "Ayaka Neko"],
    emailAliases: ["neko@ayaka.moe"]
  },
  {
    name: "\u7D62\u9999\u97F3",
    avatar: "",
    username: "LittleSound",
    title: "N\xF3l\xEBbase \u539F\u59CB\u521B\u4F5C\u8005",
    desc: "\u5F00\u6E90\u5F00\u53D1\u8005\uFF0C\u4E13\u6CE8\u4E8E\u524D\u7AEF\uFF0C\u4EE5\u53CA\u524D\u7AEF\u76F8\u5173\u5DE5\u5177\u5E93\u548C\u5DE5\u5177\u94FE\u5F00\u53D1",
    links: [
      { type: "github", icon: "github", link: "https://github.com/LittleSound" },
      { type: "twitter", icon: "twitter", link: "https://twitter.com/OikawaRizumu" }
    ],
    nameAliases: ["LittleSound", "\u7EDA\u9999\u97F3", "\u7D62\u9999\u97F3", "Rizumu Oikawa", "Rizumu Ayaka", "Ayaka Rizumu", "Rizumu"],
    emailAliases: ["rizumu@ayaka.moe", "rizumu@oqo.moe"]
  }
].map((c) => {
  c.avatar = c.avatar || getAvatarUrlByGithubName(c.username);
  return c;
});
var creatorNames = creators.map((c) => c.name);
var creatorUsernames = creators.map((c) => c.username || "");

// .vitepress/head.ts
var head_default = [
  ["meta", {
    name: "theme-color",
    content: "#ffffff"
  }],
  [
    "link",
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180"
    }
  ],
  [
    "link",
    {
      rel: "icon",
      href: "/logo.svg",
      type: "image/svg+xml"
    }
  ],
  [
    "link",
    {
      rel: "alternate icon",
      href: "/favicon.ico",
      type: "image/png",
      sizes: "16x16"
    }
  ],
  ["meta", {
    name: "author",
    content: creatorNames.join(", ")
  }],
  [
    "meta",
    {
      name: "keywords",
      content: ["markdown", "knowledge-base", "\u77E5\u8BC6\u5E93", "vitepress", "obsidian", "notebook", "notes", ...creatorUsernames].join(", ")
    }
  ],
  ["meta", {
    property: "og:title",
    content: siteName
  }],
  [
    "meta",
    {
      property: "og:image",
      content: `${targetDomain}/og.png`
    }
  ],
  ["meta", {
    property: "og:description",
    content: siteDescription
  }],
  ["meta", {
    property: "og:site_name",
    content: siteName
  }],
  ["meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }],
  ["meta", {
    name: "twitter:creator",
    content: creatorUsernames.join(", ")
  }],
  [
    "meta",
    {
      name: "twitter:image",
      content: `${targetDomain}/og.png`
    }
  ],
  [
    "link",
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#927baf"
    }
  ],
  ["link", {
    rel: "manifest",
    href: "/site.webmanifest"
  }],
  ["meta", {
    name: "msapplication-TileColor",
    content: "#603cba"
  }],
  // Proxying Plausible through Netlify | Plausible docs
  // https://plausible.io/docs/proxy/guides/netlify
  ["script", { "defer": "true", "data-domain": "nolebase.ayaka.io", "data-api": "/api/v1/page-external-data/submit", "src": "/assets/page-external-data/js/script.js" }]
];

// .vitepress/config.ts
var config_default = defineConfig({
  vue: {
    template: {
      transformAssetUrls: {
        video: ["src", "poster"],
        source: ["src"],
        img: ["src"],
        image: ["xlink:href", "href"],
        use: ["xlink:href", "href"],
        NolebaseUnlazyImg: ["src"]
      }
    }
  },
  title: siteName,
  description: siteDescription,
  ignoreDeadLinks: true,
  head: head_default,
  locales: {
    root: {
      lang: "zh-CN",
      label: "\u4E2D\u6587",
      dir: "/zh-CN",
      link: "/zh-CN",
      themeConfig: {
        nav: [
          { text: "\u4E3B\u9875", link: "/zh-CN/" },
          { text: "\u7B14\u8BB0", link: "/zh-CN/\u7B14\u8BB0/" },
          { text: "\u7F16\u76EE Catalog", link: "/zh-CN/\u7F16\u76EE Catalog/" },
          { text: "\u6700\u8FD1\u66F4\u65B0", link: "/zh-CN/toc" }
        ],
        socialLinks: [
          { icon: "github", link: githubRepoLink },
          { icon: "discord", link: discordLink }
        ],
        darkModeSwitchLabel: "\u5207\u6362\u4E3B\u9898",
        outline: { label: "\u9875\u9762\u5927\u7EB2", level: "deep" },
        editLink: {
          pattern: `${githubRepoLink}/tree/main/:path`,
          text: "\u7F16\u8F91\u672C\u9875\u9762"
        },
        sidebar: calculateSidebar([
          { folderName: "zh-CN/\u7B14\u8BB0", separate: true },
          { folderName: "zh-CN/\u7F16\u76EE Catalog", separate: true }
        ], "zh-CN"),
        footer: {
          message: '\u7528 <span style="color: #e25555;">&#9829;</span> \u64B0\u5199',
          copyright: '<a class="footer-cc-link" target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> \xA9 2022-PRESENT N\xF3l\xEBbase \u7684\u521B\u4F5C\u8005\u4EEC'
        },
        search: {
          provider: "local",
          options: {
            locales: {
              root: {
                translations: {
                  button: {
                    buttonText: "\u641C\u7D22\u6587\u6863",
                    buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
                  },
                  modal: {
                    noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
                    resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                    footer: {
                      selectText: "\u9009\u62E9",
                      navigateText: "\u5207\u6362"
                    }
                  }
                }
              }
            },
            // Add title ang tags field in frontmatter to search
            // You can exclude a page from search by adding search: false to the page's frontmatter.
            _render(src, env, md) {
              let html = md.render(src, env);
              let tagsPart = "";
              let headingPart = "";
              let contentPart = "";
              let fullContent = "";
              const sortContent = () => [headingPart, tagsPart, contentPart];
              let { frontmatter, content } = env;
              if (!frontmatter)
                return html;
              if (frontmatter.search === false)
                return "";
              contentPart = content ||= src;
              const headingMatch = content.match(/^# .*/m);
              const hasHeading = !!(headingMatch && headingMatch[0] && headingMatch.index !== void 0);
              if (hasHeading) {
                const headingEnd = headingMatch.index + headingMatch[0].length;
                headingPart = content.slice(0, headingEnd);
                contentPart = content.slice(headingEnd);
              } else if (frontmatter.title) {
                headingPart = `# ${frontmatter.title}`;
              }
              const tags = frontmatter.tags;
              if (tags && Array.isArray(tags) && tags.length)
                tagsPart = `Tags: #${tags.join(", #")}`;
              fullContent = sortContent().filter(Boolean).join("\n\n");
              html = md.render(fullContent, env);
              return html;
            }
          }
        }
      }
    }
  },
  markdown: {
    theme: {
      light: "github-light",
      dark: "one-dark-pro"
    },
    math: true,
    config: (md) => {
      md.use(MarkdownItFootnote);
      md.use(MarkdownItMathjax3);
      md.use(BiDirectionalLinks({
        dir: process.cwd()
      }));
      md.use(UnlazyImages(), {
        imgElementTag: "NolebaseUnlazyImg"
      });
      md.use(InlineLinkPreviewElementTransform);
    }
  },
  async transformHead(context) {
    let head = [...context.head];
    const returnedHead = await transformHeadMeta()(head, context);
    if (typeof returnedHead !== "undefined")
      head = returnedHead;
    return head;
  }
  // async buildEnd(siteConfig) {
  //   await buildEndGenerateOpenGraphImages({
  //     baseUrl: targetDomain,
  //     category: {
  //       byLevel: 2,
  //     },
  //   })(siteConfig)
  // },
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiLCAic2NyaXB0cy91dGlscy50cyIsICJtZXRhZGF0YS9pbmRleC50cyIsICIudml0ZXByZXNzL2hlYWQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbHVvbGluZzgxOTIvUHJvamVjdHMvYmxvZy1ub2xlYmFzZS8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbHVvbGluZzgxOTIvUHJvamVjdHMvYmxvZy1ub2xlYmFzZS8udml0ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbHVvbGluZzgxOTIvUHJvamVjdHMvYmxvZy1ub2xlYmFzZS8udml0ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2VzcydcbmltcG9ydCB7IEJpRGlyZWN0aW9uYWxMaW5rcyB9IGZyb20gJ0Bub2xlYmFzZS9tYXJrZG93bi1pdC1iaS1kaXJlY3Rpb25hbC1saW5rcydcbmltcG9ydCB7IFVubGF6eUltYWdlcyB9IGZyb20gJ0Bub2xlYmFzZS9tYXJrZG93bi1pdC11bmxhenktaW1nJ1xuaW1wb3J0IHsgSW5saW5lTGlua1ByZXZpZXdFbGVtZW50VHJhbnNmb3JtIH0gZnJvbSAnQG5vbGViYXNlL3ZpdGVwcmVzcy1wbHVnaW4taW5saW5lLWxpbmstcHJldmlldy9tYXJrZG93bi1pdCdcblxuaW1wb3J0IHsgdHJhbnNmb3JtSGVhZE1ldGEgfSBmcm9tICdAbm9sZWJhc2Uvdml0ZXByZXNzLXBsdWdpbi1tZXRhJ1xuaW1wb3J0IHsgY2FsY3VsYXRlU2lkZWJhciB9IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLXNpZGViYXInXG4vLyBpbXBvcnQgeyBidWlsZEVuZEdlbmVyYXRlT3BlbkdyYXBoSW1hZ2VzIH0gZnJvbSAnQG5vbGViYXNlL3ZpdGVwcmVzcy1wbHVnaW4tb2ctaW1hZ2Uvdml0ZXByZXNzJ1xuaW1wb3J0IE1hcmtkb3duSXRGb290bm90ZSBmcm9tICdtYXJrZG93bi1pdC1mb290bm90ZSdcbmltcG9ydCBNYXJrZG93bkl0TWF0aGpheDMgZnJvbSAnbWFya2Rvd24taXQtbWF0aGpheDMnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXG5cbmltcG9ydCB7IGRpc2NvcmRMaW5rLCBnaXRodWJSZXBvTGluaywgc2l0ZURlc2NyaXB0aW9uLCBzaXRlTmFtZSB9IGZyb20gJy4uL21ldGFkYXRhJ1xuaW1wb3J0IGhlYWQgZnJvbSAnLi9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB2dWU6IHtcbiAgICB0ZW1wbGF0ZToge1xuICAgICAgdHJhbnNmb3JtQXNzZXRVcmxzOiB7XG4gICAgICAgIHZpZGVvOiBbJ3NyYycsICdwb3N0ZXInXSxcbiAgICAgICAgc291cmNlOiBbJ3NyYyddLFxuICAgICAgICBpbWc6IFsnc3JjJ10sXG4gICAgICAgIGltYWdlOiBbJ3hsaW5rOmhyZWYnLCAnaHJlZiddLFxuICAgICAgICB1c2U6IFsneGxpbms6aHJlZicsICdocmVmJ10sXG4gICAgICAgIE5vbGViYXNlVW5sYXp5SW1nOiBbJ3NyYyddLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB0aXRsZTogc2l0ZU5hbWUsXG4gIGRlc2NyaXB0aW9uOiBzaXRlRGVzY3JpcHRpb24sXG4gIGlnbm9yZURlYWRMaW5rczogdHJ1ZSxcbiAgaGVhZCxcbiAgbG9jYWxlczoge1xuICAgIHJvb3Q6IHtcbiAgICAgIGxhbmc6ICd6aC1DTicsXG4gICAgICBsYWJlbDogJ1x1NEUyRFx1NjU4NycsXG4gICAgICBkaXI6ICcvemgtQ04nLFxuICAgICAgbGluazogJy96aC1DTicsXG4gICAgICB0aGVtZUNvbmZpZzoge1xuICAgICAgICBuYXY6IFtcbiAgICAgICAgICB7IHRleHQ6ICdcdTRFM0JcdTk4NzUnLCBsaW5rOiAnL3poLUNOLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTdCMTRcdThCQjAnLCBsaW5rOiAnL3poLUNOL1x1N0IxNFx1OEJCMC8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU3RjE2XHU3NkVFIENhdGFsb2cnLCBsaW5rOiAnL3poLUNOL1x1N0YxNlx1NzZFRSBDYXRhbG9nLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTY3MDBcdThGRDFcdTY2RjRcdTY1QjAnLCBsaW5rOiAnL3poLUNOL3RvYycgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc29jaWFsTGlua3M6IFtcbiAgICAgICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiBnaXRodWJSZXBvTGluayB9LFxuICAgICAgICAgIHsgaWNvbjogJ2Rpc2NvcmQnLCBsaW5rOiBkaXNjb3JkTGluayB9LFxuICAgICAgICBdLFxuICAgICAgICBkYXJrTW9kZVN3aXRjaExhYmVsOiAnXHU1MjA3XHU2MzYyXHU0RTNCXHU5ODk4JyxcbiAgICAgICAgb3V0bGluZTogeyBsYWJlbDogJ1x1OTg3NVx1OTc2Mlx1NTkyN1x1N0VCMicsIGxldmVsOiAnZGVlcCcgfSxcbiAgICAgICAgZWRpdExpbms6IHtcbiAgICAgICAgICBwYXR0ZXJuOiBgJHtnaXRodWJSZXBvTGlua30vdHJlZS9tYWluLzpwYXRoYCxcbiAgICAgICAgICB0ZXh0OiAnXHU3RjE2XHU4RjkxXHU2NzJDXHU5ODc1XHU5NzYyJyxcbiAgICAgICAgfSxcbiAgICAgICAgc2lkZWJhcjogY2FsY3VsYXRlU2lkZWJhcihbXG4gICAgICAgICAgeyBmb2xkZXJOYW1lOiAnemgtQ04vXHU3QjE0XHU4QkIwJywgc2VwYXJhdGU6IHRydWUgfSxcbiAgICAgICAgICB7IGZvbGRlck5hbWU6ICd6aC1DTi9cdTdGMTZcdTc2RUUgQ2F0YWxvZycsIHNlcGFyYXRlOiB0cnVlIH0sXG4gICAgICAgIF0sICd6aC1DTicpLFxuICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICBtZXNzYWdlOiAnXHU3NTI4IDxzcGFuIHN0eWxlPVwiY29sb3I6ICNlMjU1NTU7XCI+JiM5ODI5Ozwvc3Bhbj4gXHU2NEIwXHU1MTk5JyxcbiAgICAgICAgICBjb3B5cmlnaHQ6XG4gICAgICAgICc8YSBjbGFzcz1cImZvb3Rlci1jYy1saW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS80LjAvXCI+Q0MgQlktU0EgNC4wPC9hPiBcdTAwQTkgMjAyMi1QUkVTRU5UIE5cdTAwRjNsXHUwMEVCYmFzZSBcdTc2ODRcdTUyMUJcdTRGNUNcdTgwMDVcdTRFRUMnLFxuICAgICAgICB9LFxuICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICBwcm92aWRlcjogJ2xvY2FsJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBsb2NhbGVzOiB7XG4gICAgICAgICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgICAgICAgICBidXR0b25UZXh0OiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJyxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQXJpYUxhYmVsOiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RhbDoge1xuICAgICAgICAgICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU2MjdFXHU1MjMwXHU3NkY4XHU1MTczXHU3RUQzXHU2NzlDJyxcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRCdXR0b25UaXRsZTogJ1x1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNicsXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRleHQ6ICdcdTkwMDlcdTYyRTknLFxuICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVGV4dDogJ1x1NTIwN1x1NjM2MicsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBBZGQgdGl0bGUgYW5nIHRhZ3MgZmllbGQgaW4gZnJvbnRtYXR0ZXIgdG8gc2VhcmNoXG4gICAgICAgICAgICAvLyBZb3UgY2FuIGV4Y2x1ZGUgYSBwYWdlIGZyb20gc2VhcmNoIGJ5IGFkZGluZyBzZWFyY2g6IGZhbHNlIHRvIHRoZSBwYWdlJ3MgZnJvbnRtYXR0ZXIuXG4gICAgICAgICAgICBfcmVuZGVyKHNyYywgZW52LCBtZCkge1xuICAgICAgICAgICAgICAvLyB3aXRob3V0IGBtZC5yZW5kZXIoc3JjLCBlbnYpYCwgdGhlIHNvbWUgaW5mb3JtYXRpb24gd2lsbCBiZSBtaXNzaW5nIGZyb20gdGhlIGVudi5cbiAgICAgICAgICAgICAgbGV0IGh0bWwgPSBtZC5yZW5kZXIoc3JjLCBlbnYpXG4gICAgICAgICAgICAgIGxldCB0YWdzUGFydCA9ICcnXG4gICAgICAgICAgICAgIGxldCBoZWFkaW5nUGFydCA9ICcnXG4gICAgICAgICAgICAgIGxldCBjb250ZW50UGFydCA9ICcnXG4gICAgICAgICAgICAgIGxldCBmdWxsQ29udGVudCA9ICcnXG4gICAgICAgICAgICAgIGNvbnN0IHNvcnRDb250ZW50ID0gKCkgPT4gW2hlYWRpbmdQYXJ0LCB0YWdzUGFydCwgY29udGVudFBhcnRdIGFzIGNvbnN0XG4gICAgICAgICAgICAgIGxldCB7IGZyb250bWF0dGVyLCBjb250ZW50IH0gPSBlbnZcblxuICAgICAgICAgICAgICBpZiAoIWZyb250bWF0dGVyKVxuICAgICAgICAgICAgICAgIHJldHVybiBodG1sXG5cbiAgICAgICAgICAgICAgaWYgKGZyb250bWF0dGVyLnNlYXJjaCA9PT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnXG5cbiAgICAgICAgICAgICAgY29udGVudFBhcnQgPSBjb250ZW50IHx8PSBzcmNcblxuICAgICAgICAgICAgICBjb25zdCBoZWFkaW5nTWF0Y2ggPSBjb250ZW50Lm1hdGNoKC9eIyAuKi9tKVxuICAgICAgICAgICAgICBjb25zdCBoYXNIZWFkaW5nID0gISEoaGVhZGluZ01hdGNoICYmIGhlYWRpbmdNYXRjaFswXSAmJiBoZWFkaW5nTWF0Y2guaW5kZXggIT09IHVuZGVmaW5lZClcblxuICAgICAgICAgICAgICBpZiAoaGFzSGVhZGluZykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRpbmdFbmQgPSBoZWFkaW5nTWF0Y2guaW5kZXghICsgaGVhZGluZ01hdGNoWzBdLmxlbmd0aFxuICAgICAgICAgICAgICAgIGhlYWRpbmdQYXJ0ID0gY29udGVudC5zbGljZSgwLCBoZWFkaW5nRW5kKVxuICAgICAgICAgICAgICAgIGNvbnRlbnRQYXJ0ID0gY29udGVudC5zbGljZShoZWFkaW5nRW5kKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYgKGZyb250bWF0dGVyLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgaGVhZGluZ1BhcnQgPSBgIyAke2Zyb250bWF0dGVyLnRpdGxlfWBcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSBmcm9udG1hdHRlci50YWdzXG4gICAgICAgICAgICAgIGlmICh0YWdzICYmIEFycmF5LmlzQXJyYXkodGFncykgJiYgdGFncy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgdGFnc1BhcnQgPSBgVGFnczogIyR7dGFncy5qb2luKCcsICMnKX1gXG5cbiAgICAgICAgICAgICAgZnVsbENvbnRlbnQgPSBzb3J0Q29udGVudCgpLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG5cXG4nKVxuXG4gICAgICAgICAgICAgIGh0bWwgPSBtZC5yZW5kZXIoZnVsbENvbnRlbnQsIGVudilcblxuICAgICAgICAgICAgICByZXR1cm4gaHRtbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBtYXJrZG93bjoge1xuICAgIHRoZW1lOiB7XG4gICAgICBsaWdodDogJ2dpdGh1Yi1saWdodCcsXG4gICAgICBkYXJrOiAnb25lLWRhcmstcHJvJyxcbiAgICB9LFxuICAgIG1hdGg6IHRydWUsXG4gICAgY29uZmlnOiAobWQpID0+IHtcbiAgICAgIG1kLnVzZShNYXJrZG93bkl0Rm9vdG5vdGUpXG4gICAgICBtZC51c2UoTWFya2Rvd25JdE1hdGhqYXgzKVxuICAgICAgbWQudXNlKEJpRGlyZWN0aW9uYWxMaW5rcyh7XG4gICAgICAgIGRpcjogcHJvY2Vzcy5jd2QoKSxcbiAgICAgIH0pKVxuICAgICAgbWQudXNlKFVubGF6eUltYWdlcygpLCB7XG4gICAgICAgIGltZ0VsZW1lbnRUYWc6ICdOb2xlYmFzZVVubGF6eUltZycsXG4gICAgICB9KVxuICAgICAgbWQudXNlKElubGluZUxpbmtQcmV2aWV3RWxlbWVudFRyYW5zZm9ybSlcbiAgICB9LFxuICB9LFxuICBhc3luYyB0cmFuc2Zvcm1IZWFkKGNvbnRleHQpIHtcbiAgICBsZXQgaGVhZCA9IFsuLi5jb250ZXh0LmhlYWRdXG5cbiAgICBjb25zdCByZXR1cm5lZEhlYWQgPSBhd2FpdCB0cmFuc2Zvcm1IZWFkTWV0YSgpKGhlYWQsIGNvbnRleHQpXG4gICAgaWYgKHR5cGVvZiByZXR1cm5lZEhlYWQgIT09ICd1bmRlZmluZWQnKVxuICAgICAgaGVhZCA9IHJldHVybmVkSGVhZFxuXG4gICAgcmV0dXJuIGhlYWRcbiAgfSxcbiAgLy8gYXN5bmMgYnVpbGRFbmQoc2l0ZUNvbmZpZykge1xuICAvLyAgIGF3YWl0IGJ1aWxkRW5kR2VuZXJhdGVPcGVuR3JhcGhJbWFnZXMoe1xuICAvLyAgICAgYmFzZVVybDogdGFyZ2V0RG9tYWluLFxuICAvLyAgICAgY2F0ZWdvcnk6IHtcbiAgLy8gICAgICAgYnlMZXZlbDogMixcbiAgLy8gICAgIH0sXG4gIC8vICAgfSkoc2l0ZUNvbmZpZylcbiAgLy8gfSxcbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9sdW9saW5nODE5Mi9Qcm9qZWN0cy9ibG9nLW5vbGViYXNlL3NjcmlwdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9sdW9saW5nODE5Mi9Qcm9qZWN0cy9ibG9nLW5vbGViYXNlL3NjcmlwdHMvdXRpbHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2x1b2xpbmc4MTkyL1Byb2plY3RzL2Jsb2ctbm9sZWJhc2Uvc2NyaXB0cy91dGlscy50c1wiO2V4cG9ydCBjb25zdCBnZXRBdmF0YXJVcmxCeUdpdGh1Yk5hbWUgPSAobmFtZTogc3RyaW5nKSA9PiBgaHR0cHM6Ly9naXRodWIuY29tLyR7bmFtZX0ucG5nYFxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbHVvbGluZzgxOTIvUHJvamVjdHMvYmxvZy1ub2xlYmFzZS9tZXRhZGF0YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2x1b2xpbmc4MTkyL1Byb2plY3RzL2Jsb2ctbm9sZWJhc2UvbWV0YWRhdGEvaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2x1b2xpbmc4MTkyL1Byb2plY3RzL2Jsb2ctbm9sZWJhc2UvbWV0YWRhdGEvaW5kZXgudHNcIjtpbXBvcnQgdHlwZSB7IENyZWF0b3IgfSBmcm9tICcuLi9zY3JpcHRzL3R5cGVzL21ldGFkYXRhJ1xuaW1wb3J0IHsgZ2V0QXZhdGFyVXJsQnlHaXRodWJOYW1lIH0gZnJvbSAnLi4vc2NyaXB0cy91dGlscydcblxuLyoqIFx1NjU4N1x1NjcyQyAqL1xuZXhwb3J0IGNvbnN0IHNpdGVOYW1lID0gJ05cdTAwRjNsXHUwMEVCYmFzZSdcbmV4cG9ydCBjb25zdCBzaXRlU2hvcnROYW1lID0gJ05cdTAwRjNsXHUwMEVCYmFzZSdcbmV4cG9ydCBjb25zdCBzaXRlRGVzY3JpcHRpb24gPSAnXHU4QkIwXHU1RjU1XHU1NkRFXHU1RkM2XHVGRjBDXHU3N0U1XHU4QkM2XHU1NDhDXHU3NTQ1XHU2MEYzXHU3Njg0XHU1NzMwXHU2NUI5J1xuXG4vKiogXHU2NTg3XHU2ODYzXHU2MjQwXHU1NzI4XHU3NkVFXHU1RjU1ICovXG5leHBvcnQgY29uc3QgaW5jbHVkZSA9IFsnXHU3QjE0XHU4QkIwJywgJ1x1NzUxRlx1NkQzQiddXG5cbi8qKiBSZXBvICovXG5leHBvcnQgY29uc3QgZ2l0aHViUmVwb0xpbmsgPSAnaHR0cHM6Ly9naXRodWIuY29tL25vbGViYXNlL25vbGViYXNlJ1xuLyoqIERpc2NvcmQgKi9cbmV4cG9ydCBjb25zdCBkaXNjb3JkTGluayA9ICdodHRwczovL2Rpc2NvcmQuZ2cvWHVORkRjRFpHaidcblxuLyoqIFx1NjVFMFx1NTM0Rlx1OEJBRVx1NTI0RFx1N0YwMFx1NTdERlx1NTQwRCAqL1xuZXhwb3J0IGNvbnN0IHBsYWluVGFyZ2V0RG9tYWluID0gJ25vbGViYXNlLmF5YWthLmlvJ1xuLyoqIFx1NUI4Q1x1NjU3NFx1NTdERlx1NTQwRCAqL1xuZXhwb3J0IGNvbnN0IHRhcmdldERvbWFpbiA9IGBodHRwczovLyR7cGxhaW5UYXJnZXREb21haW59YFxuXG4vKiogXHU1MjFCXHU0RjVDXHU4MDA1ICovXG5leHBvcnQgY29uc3QgY3JlYXRvcnM6IENyZWF0b3JbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdcdTdENjJcdTk5OTlcdTczMkInLFxuICAgIGF2YXRhcjogJycsXG4gICAgdXNlcm5hbWU6ICduZWtvbWVvd3d3JyxcbiAgICB0aXRsZTogJ05cdTAwRjNsXHUwMEVCYmFzZSBcdTUzOUZcdTU5Q0JcdTUyMUJcdTRGNUNcdTgwMDUnLFxuICAgIGRlc2M6ICdcdTVGMDBcdTUzRDFcdTgwMDVcdUZGMENcdTRFMTNcdTZDRThcdTRFOEVcdTU3RkFcdTc4NDBcdThCQkVcdTY1QkRcdTdFRjRcdTYyQTRcdUZGMENcdTY1NzBcdTYzNkVcdTUyMDZcdTY3OTBcdUZGMENcdTU0MEVcdTdBRUZcdTMwMDFEZXZPcHMgXHU1RjAwXHU1M0QxJyxcbiAgICBsaW5rczogW1xuICAgICAgeyB0eXBlOiAnZ2l0aHViJywgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbmVrb21lb3d3dycgfSxcbiAgICAgIHsgdHlwZTogJ3R3aXR0ZXInLCBpY29uOiAndHdpdHRlcicsIGxpbms6ICdodHRwczovL3R3aXR0ZXIuY29tL2F5YWthbmVrbycgfSxcbiAgICBdLFxuICAgIG5hbWVBbGlhc2VzOiBbJ25la29tZW93d3cnLCAnXHU3RURBXHU5OTk5XHU3MzJCJywgJ1x1N0Q2Mlx1OTk5OVx1NzMyQicsICdOZWtvIEF5YWthJywgJ0F5YWthIE5la28nXSxcbiAgICBlbWFpbEFsaWFzZXM6IFsnbmVrb0BheWFrYS5tb2UnXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdcdTdENjJcdTk5OTlcdTk3RjMnLFxuICAgIGF2YXRhcjogJycsXG4gICAgdXNlcm5hbWU6ICdMaXR0bGVTb3VuZCcsXG4gICAgdGl0bGU6ICdOXHUwMEYzbFx1MDBFQmJhc2UgXHU1MzlGXHU1OUNCXHU1MjFCXHU0RjVDXHU4MDA1JyxcbiAgICBkZXNjOiAnXHU1RjAwXHU2RTkwXHU1RjAwXHU1M0QxXHU4MDA1XHVGRjBDXHU0RTEzXHU2Q0U4XHU0RThFXHU1MjREXHU3QUVGXHVGRjBDXHU0RUU1XHU1M0NBXHU1MjREXHU3QUVGXHU3NkY4XHU1MTczXHU1REU1XHU1MTc3XHU1RTkzXHU1NDhDXHU1REU1XHU1MTc3XHU5NEZFXHU1RjAwXHU1M0QxJyxcbiAgICBsaW5rczogW1xuICAgICAgeyB0eXBlOiAnZ2l0aHViJywgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vTGl0dGxlU291bmQnIH0sXG4gICAgICB7IHR5cGU6ICd0d2l0dGVyJywgaWNvbjogJ3R3aXR0ZXInLCBsaW5rOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9PaWthd2FSaXp1bXUnIH0sXG4gICAgXSxcbiAgICBuYW1lQWxpYXNlczogWydMaXR0bGVTb3VuZCcsICdcdTdFREFcdTk5OTlcdTk3RjMnLCAnXHU3RDYyXHU5OTk5XHU5N0YzJywgJ1JpenVtdSBPaWthd2EnLCAnUml6dW11IEF5YWthJywgJ0F5YWthIFJpenVtdScsICdSaXp1bXUnXSxcbiAgICBlbWFpbEFsaWFzZXM6IFsncml6dW11QGF5YWthLm1vZScsICdyaXp1bXVAb3FvLm1vZSddLFxuICB9LFxuXS5tYXA8Q3JlYXRvcj4oKGMpID0+IHtcbiAgYy5hdmF0YXIgPSBjLmF2YXRhciB8fCBnZXRBdmF0YXJVcmxCeUdpdGh1Yk5hbWUoYy51c2VybmFtZSlcbiAgcmV0dXJuIGMgYXMgQ3JlYXRvclxufSlcblxuZXhwb3J0IGNvbnN0IGNyZWF0b3JOYW1lcyA9IGNyZWF0b3JzLm1hcChjID0+IGMubmFtZSlcbmV4cG9ydCBjb25zdCBjcmVhdG9yVXNlcm5hbWVzID0gY3JlYXRvcnMubWFwKGMgPT4gYy51c2VybmFtZSB8fCAnJylcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2x1b2xpbmc4MTkyL1Byb2plY3RzL2Jsb2ctbm9sZWJhc2UvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2x1b2xpbmc4MTkyL1Byb2plY3RzL2Jsb2ctbm9sZWJhc2UvLnZpdGVwcmVzcy9oZWFkLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9sdW9saW5nODE5Mi9Qcm9qZWN0cy9ibG9nLW5vbGViYXNlLy52aXRlcHJlc3MvaGVhZC50c1wiO2ltcG9ydCB0eXBlIHsgSGVhZENvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcbmltcG9ydCB7IGNyZWF0b3JOYW1lcywgY3JlYXRvclVzZXJuYW1lcywgc2l0ZURlc2NyaXB0aW9uLCBzaXRlTmFtZSwgdGFyZ2V0RG9tYWluIH0gZnJvbSAnLi4vbWV0YWRhdGEnXG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgWydtZXRhJywge1xuICAgIG5hbWU6ICd0aGVtZS1jb2xvcicsXG4gICAgY29udGVudDogJyNmZmZmZmYnLFxuICB9XSxcbiAgW1xuICAgICdsaW5rJyxcbiAgICB7XG4gICAgICByZWw6ICdhcHBsZS10b3VjaC1pY29uJyxcbiAgICAgIGhyZWY6ICcvYXBwbGUtdG91Y2gtaWNvbi5wbmcnLFxuICAgICAgc2l6ZXM6ICcxODB4MTgwJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAgJ2xpbmsnLFxuICAgIHtcbiAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgaHJlZjogJy9sb2dvLnN2ZycsXG4gICAgICB0eXBlOiAnaW1hZ2Uvc3ZnK3htbCcsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgICdsaW5rJyxcbiAgICB7XG4gICAgICByZWw6ICdhbHRlcm5hdGUgaWNvbicsXG4gICAgICBocmVmOiAnL2Zhdmljb24uaWNvJyxcbiAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgc2l6ZXM6ICcxNngxNicsXG4gICAgfSxcbiAgXSxcbiAgWydtZXRhJywge1xuICAgIG5hbWU6ICdhdXRob3InLFxuICAgIGNvbnRlbnQ6IGNyZWF0b3JOYW1lcy5qb2luKCcsICcpLFxuICB9XSxcbiAgW1xuICAgICdtZXRhJyxcbiAgICB7XG4gICAgICBuYW1lOiAna2V5d29yZHMnLFxuICAgICAgY29udGVudDpcbiAgICAgICAgICBbJ21hcmtkb3duJywgJ2tub3dsZWRnZS1iYXNlJywgJ1x1NzdFNVx1OEJDNlx1NUU5MycsICd2aXRlcHJlc3MnLCAnb2JzaWRpYW4nLCAnbm90ZWJvb2snLCAnbm90ZXMnLCAuLi5jcmVhdG9yVXNlcm5hbWVzXS5qb2luKCcsICcpLFxuICAgIH0sXG4gIF0sXG5cbiAgWydtZXRhJywge1xuICAgIHByb3BlcnR5OiAnb2c6dGl0bGUnLFxuICAgIGNvbnRlbnQ6IHNpdGVOYW1lLFxuICB9XSxcbiAgW1xuICAgICdtZXRhJyxcbiAgICB7XG4gICAgICBwcm9wZXJ0eTogJ29nOmltYWdlJyxcbiAgICAgIGNvbnRlbnQ6IGAke3RhcmdldERvbWFpbn0vb2cucG5nYCxcbiAgICB9LFxuICBdLFxuICBbJ21ldGEnLCB7XG4gICAgcHJvcGVydHk6ICdvZzpkZXNjcmlwdGlvbicsXG4gICAgY29udGVudDogc2l0ZURlc2NyaXB0aW9uLFxuICB9XSxcbiAgWydtZXRhJywge1xuICAgIHByb3BlcnR5OiAnb2c6c2l0ZV9uYW1lJyxcbiAgICBjb250ZW50OiBzaXRlTmFtZSxcbiAgfV0sXG5cbiAgWydtZXRhJywge1xuICAgIG5hbWU6ICd0d2l0dGVyOmNhcmQnLFxuICAgIGNvbnRlbnQ6ICdzdW1tYXJ5X2xhcmdlX2ltYWdlJyxcbiAgfV0sXG4gIFsnbWV0YScsIHtcbiAgICBuYW1lOiAndHdpdHRlcjpjcmVhdG9yJyxcbiAgICBjb250ZW50OiBjcmVhdG9yVXNlcm5hbWVzLmpvaW4oJywgJyksXG4gIH1dLFxuICBbXG4gICAgJ21ldGEnLFxuICAgIHtcbiAgICAgIG5hbWU6ICd0d2l0dGVyOmltYWdlJyxcbiAgICAgIGNvbnRlbnQ6IGAke3RhcmdldERvbWFpbn0vb2cucG5nYCxcbiAgICB9LFxuICBdLFxuXG4gIFtcbiAgICAnbGluaycsXG4gICAge1xuICAgICAgcmVsOiAnbWFzay1pY29uJyxcbiAgICAgIGhyZWY6ICcvc2FmYXJpLXBpbm5lZC10YWIuc3ZnJyxcbiAgICAgIGNvbG9yOiAnIzkyN2JhZicsXG4gICAgfSxcbiAgXSxcbiAgWydsaW5rJywge1xuICAgIHJlbDogJ21hbmlmZXN0JyxcbiAgICBocmVmOiAnL3NpdGUud2VibWFuaWZlc3QnLFxuICB9XSxcbiAgWydtZXRhJywge1xuICAgIG5hbWU6ICdtc2FwcGxpY2F0aW9uLVRpbGVDb2xvcicsXG4gICAgY29udGVudDogJyM2MDNjYmEnLFxuICB9XSxcbiAgLy8gUHJveHlpbmcgUGxhdXNpYmxlIHRocm91Z2ggTmV0bGlmeSB8IFBsYXVzaWJsZSBkb2NzXG4gIC8vIGh0dHBzOi8vcGxhdXNpYmxlLmlvL2RvY3MvcHJveHkvZ3VpZGVzL25ldGxpZnlcbiAgWydzY3JpcHQnLCB7ICdkZWZlcic6ICd0cnVlJywgJ2RhdGEtZG9tYWluJzogJ25vbGViYXNlLmF5YWthLmlvJywgJ2RhdGEtYXBpJzogJy9hcGkvdjEvcGFnZS1leHRlcm5hbC1kYXRhL3N1Ym1pdCcsICdzcmMnOiAnL2Fzc2V0cy9wYWdlLWV4dGVybmFsLWRhdGEvanMvc2NyaXB0LmpzJyB9XSxcbl0gc2F0aXNmaWVzIEhlYWRDb25maWdbXVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVSxPQUFPLGFBQWE7QUFDeFYsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyx5Q0FBeUM7QUFFbEQsU0FBUyx5QkFBeUI7QUFDbEMsU0FBUyx3QkFBd0I7QUFFakMsT0FBTyx3QkFBd0I7QUFDL0IsT0FBTyx3QkFBd0I7QUFDL0IsU0FBUyxvQkFBb0I7OztBQ1ZtUyxJQUFNLDJCQUEyQixDQUFDLFNBQWlCLHNCQUFzQixJQUFJOzs7QUNJdFksSUFBTSxXQUFXO0FBRWpCLElBQU0sa0JBQWtCO0FBTXhCLElBQU0saUJBQWlCO0FBRXZCLElBQU0sY0FBYztBQUdwQixJQUFNLG9CQUFvQjtBQUUxQixJQUFNLGVBQWUsV0FBVyxpQkFBaUI7QUFHakQsSUFBTSxXQUFzQjtBQUFBLEVBQ2pDO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxFQUFFLE1BQU0sVUFBVSxNQUFNLFVBQVUsTUFBTSxnQ0FBZ0M7QUFBQSxNQUN4RSxFQUFFLE1BQU0sV0FBVyxNQUFNLFdBQVcsTUFBTSxnQ0FBZ0M7QUFBQSxJQUM1RTtBQUFBLElBQ0EsYUFBYSxDQUFDLGNBQWMsc0JBQU8sc0JBQU8sY0FBYyxZQUFZO0FBQUEsSUFDcEUsY0FBYyxDQUFDLGdCQUFnQjtBQUFBLEVBQ2pDO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsRUFBRSxNQUFNLFVBQVUsTUFBTSxVQUFVLE1BQU0saUNBQWlDO0FBQUEsTUFDekUsRUFBRSxNQUFNLFdBQVcsTUFBTSxXQUFXLE1BQU0sbUNBQW1DO0FBQUEsSUFDL0U7QUFBQSxJQUNBLGFBQWEsQ0FBQyxlQUFlLHNCQUFPLHNCQUFPLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLFFBQVE7QUFBQSxJQUNwRyxjQUFjLENBQUMsb0JBQW9CLGdCQUFnQjtBQUFBLEVBQ3JEO0FBQ0YsRUFBRSxJQUFhLENBQUMsTUFBTTtBQUNwQixJQUFFLFNBQVMsRUFBRSxVQUFVLHlCQUF5QixFQUFFLFFBQVE7QUFDMUQsU0FBTztBQUNULENBQUM7QUFFTSxJQUFNLGVBQWUsU0FBUyxJQUFJLE9BQUssRUFBRSxJQUFJO0FBQzdDLElBQU0sbUJBQW1CLFNBQVMsSUFBSSxPQUFLLEVBQUUsWUFBWSxFQUFFOzs7QUNwRGxFLElBQU8sZUFBUTtBQUFBLEVBQ2IsQ0FBQyxRQUFRO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsRUFDWCxDQUFDO0FBQUEsRUFDRDtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxDQUFDLFFBQVE7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFNBQVMsYUFBYSxLQUFLLElBQUk7QUFBQSxFQUNqQyxDQUFDO0FBQUEsRUFDRDtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUNJLENBQUMsWUFBWSxrQkFBa0Isc0JBQU8sYUFBYSxZQUFZLFlBQVksU0FBUyxHQUFHLGdCQUFnQixFQUFFLEtBQUssSUFBSTtBQUFBLElBQ3hIO0FBQUEsRUFDRjtBQUFBLEVBRUEsQ0FBQyxRQUFRO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixTQUFTO0FBQUEsRUFDWCxDQUFDO0FBQUEsRUFDRDtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixTQUFTLEdBQUcsWUFBWTtBQUFBLElBQzFCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsQ0FBQyxRQUFRO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixTQUFTO0FBQUEsRUFDWCxDQUFDO0FBQUEsRUFDRCxDQUFDLFFBQVE7QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFNBQVM7QUFBQSxFQUNYLENBQUM7QUFBQSxFQUVELENBQUMsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLEVBQ1gsQ0FBQztBQUFBLEVBQ0QsQ0FBQyxRQUFRO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTLGlCQUFpQixLQUFLLElBQUk7QUFBQSxFQUNyQyxDQUFDO0FBQUEsRUFDRDtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTLEdBQUcsWUFBWTtBQUFBLElBQzFCO0FBQUEsRUFDRjtBQUFBLEVBRUE7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxDQUFDLFFBQVE7QUFBQSxJQUNQLEtBQUs7QUFBQSxJQUNMLE1BQU07QUFBQSxFQUNSLENBQUM7QUFBQSxFQUNELENBQUMsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLEVBQ1gsQ0FBQztBQUFBO0FBQUE7QUFBQSxFQUdELENBQUMsVUFBVSxFQUFFLFNBQVMsUUFBUSxlQUFlLHFCQUFxQixZQUFZLHFDQUFxQyxPQUFPLDBDQUEwQyxDQUFDO0FBQ3ZLOzs7QUh0RkEsSUFBTyxpQkFBUSxhQUFhO0FBQUEsRUFDMUIsS0FBSztBQUFBLElBQ0gsVUFBVTtBQUFBLE1BQ1Isb0JBQW9CO0FBQUEsUUFDbEIsT0FBTyxDQUFDLE9BQU8sUUFBUTtBQUFBLFFBQ3ZCLFFBQVEsQ0FBQyxLQUFLO0FBQUEsUUFDZCxLQUFLLENBQUMsS0FBSztBQUFBLFFBQ1gsT0FBTyxDQUFDLGNBQWMsTUFBTTtBQUFBLFFBQzVCLEtBQUssQ0FBQyxjQUFjLE1BQU07QUFBQSxRQUMxQixtQkFBbUIsQ0FBQyxLQUFLO0FBQUEsTUFDM0I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxRQUNYLEtBQUs7QUFBQSxVQUNILEVBQUUsTUFBTSxnQkFBTSxNQUFNLFVBQVU7QUFBQSxVQUM5QixFQUFFLE1BQU0sZ0JBQU0sTUFBTSx1QkFBYTtBQUFBLFVBQ2pDLEVBQUUsTUFBTSx3QkFBYyxNQUFNLCtCQUFxQjtBQUFBLFVBQ2pELEVBQUUsTUFBTSw0QkFBUSxNQUFNLGFBQWE7QUFBQSxRQUNyQztBQUFBLFFBQ0EsYUFBYTtBQUFBLFVBQ1gsRUFBRSxNQUFNLFVBQVUsTUFBTSxlQUFlO0FBQUEsVUFDdkMsRUFBRSxNQUFNLFdBQVcsTUFBTSxZQUFZO0FBQUEsUUFDdkM7QUFBQSxRQUNBLHFCQUFxQjtBQUFBLFFBQ3JCLFNBQVMsRUFBRSxPQUFPLDRCQUFRLE9BQU8sT0FBTztBQUFBLFFBQ3hDLFVBQVU7QUFBQSxVQUNSLFNBQVMsR0FBRyxjQUFjO0FBQUEsVUFDMUIsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBLFNBQVMsaUJBQWlCO0FBQUEsVUFDeEIsRUFBRSxZQUFZLHNCQUFZLFVBQVUsS0FBSztBQUFBLFVBQ3pDLEVBQUUsWUFBWSw4QkFBb0IsVUFBVSxLQUFLO0FBQUEsUUFDbkQsR0FBRyxPQUFPO0FBQUEsUUFDVixRQUFRO0FBQUEsVUFDTixTQUFTO0FBQUEsVUFDVCxXQUNGO0FBQUEsUUFDQTtBQUFBLFFBQ0EsUUFBUTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsU0FBUztBQUFBLFlBQ1AsU0FBUztBQUFBLGNBQ1AsTUFBTTtBQUFBLGdCQUNKLGNBQWM7QUFBQSxrQkFDWixRQUFRO0FBQUEsb0JBQ04sWUFBWTtBQUFBLG9CQUNaLGlCQUFpQjtBQUFBLGtCQUNuQjtBQUFBLGtCQUNBLE9BQU87QUFBQSxvQkFDTCxlQUFlO0FBQUEsb0JBQ2Ysa0JBQWtCO0FBQUEsb0JBQ2xCLFFBQVE7QUFBQSxzQkFDTixZQUFZO0FBQUEsc0JBQ1osY0FBYztBQUFBLG9CQUNoQjtBQUFBLGtCQUNGO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBO0FBQUE7QUFBQSxZQUlBLFFBQVEsS0FBSyxLQUFLLElBQUk7QUFFcEIsa0JBQUksT0FBTyxHQUFHLE9BQU8sS0FBSyxHQUFHO0FBQzdCLGtCQUFJLFdBQVc7QUFDZixrQkFBSSxjQUFjO0FBQ2xCLGtCQUFJLGNBQWM7QUFDbEIsa0JBQUksY0FBYztBQUNsQixvQkFBTSxjQUFjLE1BQU0sQ0FBQyxhQUFhLFVBQVUsV0FBVztBQUM3RCxrQkFBSSxFQUFFLGFBQWEsUUFBUSxJQUFJO0FBRS9CLGtCQUFJLENBQUM7QUFDSCx1QkFBTztBQUVULGtCQUFJLFlBQVksV0FBVztBQUN6Qix1QkFBTztBQUVULDRCQUFjLFlBQVk7QUFFMUIsb0JBQU0sZUFBZSxRQUFRLE1BQU0sUUFBUTtBQUMzQyxvQkFBTSxhQUFhLENBQUMsRUFBRSxnQkFBZ0IsYUFBYSxDQUFDLEtBQUssYUFBYSxVQUFVO0FBRWhGLGtCQUFJLFlBQVk7QUFDZCxzQkFBTSxhQUFhLGFBQWEsUUFBUyxhQUFhLENBQUMsRUFBRTtBQUN6RCw4QkFBYyxRQUFRLE1BQU0sR0FBRyxVQUFVO0FBQ3pDLDhCQUFjLFFBQVEsTUFBTSxVQUFVO0FBQUEsY0FDeEMsV0FDUyxZQUFZLE9BQU87QUFDMUIsOEJBQWMsS0FBSyxZQUFZLEtBQUs7QUFBQSxjQUN0QztBQUVBLG9CQUFNLE9BQU8sWUFBWTtBQUN6QixrQkFBSSxRQUFRLE1BQU0sUUFBUSxJQUFJLEtBQUssS0FBSztBQUN0QywyQkFBVyxVQUFVLEtBQUssS0FBSyxLQUFLLENBQUM7QUFFdkMsNEJBQWMsWUFBWSxFQUFFLE9BQU8sT0FBTyxFQUFFLEtBQUssTUFBTTtBQUV2RCxxQkFBTyxHQUFHLE9BQU8sYUFBYSxHQUFHO0FBRWpDLHFCQUFPO0FBQUEsWUFDVDtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsTUFBTTtBQUFBLElBQ04sUUFBUSxDQUFDLE9BQU87QUFDZCxTQUFHLElBQUksa0JBQWtCO0FBQ3pCLFNBQUcsSUFBSSxrQkFBa0I7QUFDekIsU0FBRyxJQUFJLG1CQUFtQjtBQUFBLFFBQ3hCLEtBQUssUUFBUSxJQUFJO0FBQUEsTUFDbkIsQ0FBQyxDQUFDO0FBQ0YsU0FBRyxJQUFJLGFBQWEsR0FBRztBQUFBLFFBQ3JCLGVBQWU7QUFBQSxNQUNqQixDQUFDO0FBQ0QsU0FBRyxJQUFJLGlDQUFpQztBQUFBLElBQzFDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTSxjQUFjLFNBQVM7QUFDM0IsUUFBSSxPQUFPLENBQUMsR0FBRyxRQUFRLElBQUk7QUFFM0IsVUFBTSxlQUFlLE1BQU0sa0JBQWtCLEVBQUUsTUFBTSxPQUFPO0FBQzVELFFBQUksT0FBTyxpQkFBaUI7QUFDMUIsYUFBTztBQUVULFdBQU87QUFBQSxFQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
