// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const TITLE = "Notes";
const GH_URL = "https://github.com/atlanswer/notes";

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
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
      href: "https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css",
      type: "text/css",
      integrity: "sha256-TThEtR+XalhWKkfF383YLOrI50NGNeIqrzS+q08afrY=",
      crossorigin: "anonymous",
    },
  ],

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
            type: "doc",
            docId: "intro",
            label: "Tutorial",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: GH_URL,
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
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

  plugins: [],
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
