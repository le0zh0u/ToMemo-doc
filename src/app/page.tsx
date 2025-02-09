import { Metadata } from "next";
import { Hero } from "@/components/ui/animated-hero";
import { CallToAction } from "@/components/CallToAction";
import { BentoDemo } from "@/components/BentoGrid";

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
        <BentoDemo />
        {/* <DocsGrid />
        <AdditionalFeatures /> */}
        <CallToAction />
      </div>
    </div>
  );
}
