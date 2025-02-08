import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "ToMemo",
  description: "Your Personal Memory Enhancement Assistant",
};

const footer = (
  <Footer>
    <div className="flex w-full flex-col items-center">
      <div className="flex gap-2 text-gray-600 dark:text-gray-400">
        <a
          href="https://github.com/zhouchunjie/ToMemo"
          target="_blank"
          rel="noopener"
          className="hover:text-gray-800 dark:hover:text-gray-200"
        >
          GitHub
        </a>
        <span>·</span>
        <Link
          href="/docs/guide/getting-started"
          className="hover:text-gray-800 dark:hover:text-gray-200"
        >
          Documentation
        </Link>
      </div>
      <p className="mt-4 text-xs text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} ToMemo. All rights reserved.
      </p>
    </div>
  </Footer>
);

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={
                <div className="flex items-center gap-2">
                  <span className="font-bold text-2xl">ToMemo</span>
                </div>
              }
              projectLink="https://github.com/zhouchunjie/ToMemo"
            />
          }
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/zhouchunjie/ToMemo-doc"
          editLink="Edit this page on GitHub"
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: true,
          }}
          footer={footer}
          themeSwitch={{
            dark: "Dark",
            light: "Light",
            system: "System",
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
