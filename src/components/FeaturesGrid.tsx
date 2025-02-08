import { FeatureCard } from "./FeatureCard";

const features = [
  {
    title: "Memory Palace",
    description:
      "Build your own memory palace with powerful visualization techniques.",
    gradientFrom: "purple-500",
    gradientTo: "blue-500",
    demoText: "Memory Palace Demo",
  },
  {
    title: "Quick Share",
    description: "Share and organize your memories efficiently with one click.",
    gradientFrom: "blue-500",
    gradientTo: "cyan-500",
    demoText: "Quick Share Demo",
  },
  {
    title: "AI Integration",
    description:
      "Leverage AI to enhance your memory retention and recall abilities.",
    gradientFrom: "cyan-500",
    gradientTo: "green-500",
    demoText: "AI Demo",
  },
];

export function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}
