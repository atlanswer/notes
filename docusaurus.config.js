// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const TITLE = "Notes";
const GH_URL = "https://github.com/atlanswer/notes";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: TITLE,
  tagline: "Course Notes",
  url: "https://notes.waferlab.dev",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "warn",
  favicon: "img/favicon.ico",
  organizationName: "atlanswer", // Usually your GitHub org/user name.
  projectName: TITLE.toLowerCase(), // Usually your repo name.
  staticDirectories: ["static"],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "notes",
          routeBasePath: "notes",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          editUrl: `${GH_URL}/edit/main`,
          remarkPlugins: [],
          rehypePlugins: [],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: `${GH_URL}/edit/main`,
          remarkPlugins: [],
          rehypePlugins: [],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://unpkg.com/katex@0.16.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC",
      crossorigin: "anonymous",
    },
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexPages: true,
        docsDir: "notes",
        docsRouteBasePath: "notes",
        hashed: true,
      },
    ],
  ],

  plugins: [],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: TITLE,
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "siSidebar",
            label: "SI",
            position: "left",
          },
          {
            type: "docSidebar",
            sidebarId: "miscSidebar",
            label: "Misc",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: GH_URL,
            label: "GitHub",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Note",
            items: [
              {
                label: "SI",
                to: "/notes/si/signal-integrity",
              },
              {
                label: "Misc",
                to: "/notes/misc/提纲"
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: GH_URL,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Atlanswer. Built with Docusaurus.`,
      },
      prism: {},
    }),
};

async function createConfig() {
  const math = require("remark-math");
  const katex = (await import("rehype-katex")).default;
  const lightCodeTheme = require("prism-react-renderer/themes/github");
  const darkCodeTheme = require("prism-react-renderer/themes/dracula");
  // @ts-expect-error
  config.presets[0][1].docs.remarkPlugins.push(math); // @ts-expect-error
  config.presets[0][1].docs.rehypePlugins.push(katex); // @ts-expect-error
  config.presets[0][1].blog.remarkPlugins.push(math); // @ts-expect-error
  config.presets[0][1].blog.rehypePlugins.push(katex); // @ts-expect-error
  config.themeConfig.prism.theme = lightCodeTheme; // @ts-expect-error
  config.themeConfig.prism.darkTheme = darkCodeTheme;
  return config;
}

module.exports = createConfig;
