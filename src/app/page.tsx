import { Metadata } from "next";
import { Hero } from "@/components/ui/animated-hero";
import { AdditionalFeatures } from "@/components/AdditionalFeatures";
import { CallToAction } from "@/components/CallToAction";
import DocsGrid from "@/components/DocsGrid";

export const metadata: Metadata = {
  title: "ToMemo - Your Memory Enhancement Assistant",
  description:
    "Simple, powerful and flexible memory enhancement assistant with everything you need.",
};

export default function Home() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-6 pt-16 md:pt-24 pb-8 md:pb-16">
        <Hero />
        <DocsGrid />
        <AdditionalFeatures />
        <CallToAction />
      </div>
    </div>
  );
}
