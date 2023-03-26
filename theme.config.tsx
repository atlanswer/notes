import { DocsThemeConfig } from "nextra-theme-docs";
import { AuthWidget } from "~/components/widget/auth";

const config: DocsThemeConfig = {
  logo: <span className="text-lg font-medium">Notes</span>,
  project: {
    link: "https://github.com/atlanswer/notes",
  },
  docsRepositoryBase: "https://github.com/atlanswer/notes",
  // head: (
  //   <>
  //     <link
  //       rel="icon"
  //       href="/images/favicon.ico"
  //       sizes="32x32"
  //       type="image/png"
  //     />
  //   </>
  // ),
  faviconGlyph: "📃",
  navbar: {
    extraContent: AuthWidget,
  },
  footer: {
    text: <span>MIT {new Date().getFullYear()} © Atlanswer</span>,
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s | Notes",
    };
  },
  sidebar: {
    toggleButton: true,
  },
};

export default config;
