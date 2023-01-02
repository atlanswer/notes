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
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
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
          postsPerPage: 5,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: "https://esm.sh/katex/dist/katex.min.css",
      type: "text/css",
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

  plugins: [
    async function tailwindCss(context, opts) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(options) {
          // Appends TailwindCSS and AutoPrefixer.
          options.plugins.push(require("tailwindcss"));
          options.plugins.push(require("autoprefixer"));
          if (process.env.NODE_ENV === "production") {
            options.plugins.push(require("cssnano"));
          }
          return options;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: TITLE,
        hideOnScroll: true,
        logo: {
          alt: TITLE,
          src: "img/logo.svg",
          srcDark: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "webSidebar",
            label: "Web",
            position: "left",
          },
          {
            type: "docSidebar",
            sidebarId: "courseSidebar",
            label: "Course",
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
                label: "Web",
                to: "/notes/web/jsx",
              },
              {
                label: "Course",
                to: "/notes/course/si/review",
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
    },
};

async function createConfig() {
  const math = require("remark-math");
  const katex = (await import("rehype-katex")).default;
  const lightCodeTheme = require("prism-react-renderer/themes/github");
  const darkCodeTheme = require("prism-react-renderer/themes/dracula");
  config.presets[0][1].docs.remarkPlugins.push(math);
  config.presets[0][1].docs.rehypePlugins.push(katex);
  config.presets[0][1].blog.remarkPlugins.push(math);
  config.presets[0][1].blog.rehypePlugins.push(katex);
  // @ts-expect-error
  config.themeConfig.prism.theme = lightCodeTheme;
  // @ts-expect-error
  config.themeConfig.prism.darkTheme = darkCodeTheme;
  return config;
}

module.exports = createConfig;
