interface FeatureItemProps {
  title: string;
  description: string;
}

function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
        <span className="text-blue-500">✓</span>
      </div>
      <div>
        <h3 className="font-medium mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Dark mode included",
    description: "Comfortable reading experience in any lighting condition.",
  },
  {
    title: "Full-text search",
    description: "Quickly find any memory with powerful search capabilities.",
  },
  {
    title: "i18n Support",
    description: "Multi-language support for global users.",
  },
];

export function AdditionalFeatures() {
  return (
    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold mb-8">Full-power features</h2>
        <div className="space-y-6">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="h-[300px] bg-gradient-to-br from-gray-500/5 to-blue-500/5 flex items-center justify-center">
            <span className="text-sm text-gray-500">Features Preview</span>
          </div>
        </div>
      </div>
    </div>
  );
}
