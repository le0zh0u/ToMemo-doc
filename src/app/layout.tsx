import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "ToMemo",
  description: "Nextra 4 is here.",
};

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const footer = <Footer>MIT {new Date().getFullYear()} © ToMemo.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={
            <Navbar
              logo={<h1 className="text-2xl"> Nextra</h1>}
              projectLink="https://github.com/officialrajdeepsingh/nextra-4"
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/officialrajdeepsingh/nextra-4/tree/main/docs"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: true }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
