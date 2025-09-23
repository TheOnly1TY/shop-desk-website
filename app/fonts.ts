import localFont from "next/font/local";

export const circular = localFont({
  src: "../public/fonts/CircularStdFont.ttf",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
