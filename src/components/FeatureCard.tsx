interface FeatureCardProps {
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  demoText: string;
}

export function FeatureCard({
  title,
  description,
  gradientFrom,
  gradientTo,
  demoText,
}: FeatureCardProps) {
  return (
    <div className="relative">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
        <div
          className={`h-[200px] bg-gradient-to-br from-${gradientFrom}/5 to-${gradientTo}/5 flex items-center justify-center`}
        >
          <span className="text-sm text-gray-500">{demoText}</span>
        </div>
      </div>
    </div>
  );
}
