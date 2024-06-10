import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/config/font";
import Theme from "@/config/theme";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Plastics Eco",
    default: "Plastics Eco",
  },
  description: "Created by IMS",
};

config.autoAddCss = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
