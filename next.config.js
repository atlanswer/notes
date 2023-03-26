import Nextra from "nextra";

const withNextra = Nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  defaultShowCopyCode: true,
});

export default withNextra({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/*",
      },
    ],
  },
});
