import Link from "next/link";

const features = [
  {
    title: "Memos",
    description:
      "Organize and manage your memories efficiently with powerful memo features.",
    image: "/images/docs/memo.png",
    link: "/docs/memos",
    className: "lg:row-span-2 lg:col-span-2",
  },
  {
    title: "Short-term Memory",
    description: "Quick access to temporary information you need to remember.",
    image: "/images/docs/short-term-memory.png",
    link: "/docs/guide/short-term-memory",
  },
  {
    title: "Memory Palace",
    description: "Build your own memory palace with visualization techniques.",
    image: "/images/docs/memory-palace.png",
    link: "/docs/guide/memory-palace",
  },
  {
    title: "Quick Share",
    description: "Share and organize your memories with one click.",
    image: "/images/docs/quick-share.png",
    link: "/docs/guide/quick-share",
    className: "lg:row-span-2",
  },
];

export default function DocsGrid() {
  return (
    // <div className="bg-gray-50 dark:bg-gray-900/50 py-24 sm:py-32 -mx-6 px-6">
    //   <div className="mx-auto max-w-2xl lg:max-w-7xl">
    // <h2 className="text-center text-base/7 font-semibold text-blue-600 dark:text-blue-400">
    //       Documentation
    //     </h2>
    //     <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 dark:text-gray-50 sm:text-5xl">
    //       Everything you need to enhance your memory
    //     </p>

    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
      {features.map((feature) => (
        <Link
          key={feature.title}
          href={feature.link}
          className={`relative group ${feature.className || ""}`}
        >
          <div className="absolute inset-px rounded-3xl bg-white dark:bg-gray-800"></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-3xl hover:shadow-2xl">
            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10">
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-gray-50 max-lg:text-center">
                {feature.title}
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400 max-lg:text-center">
                {feature.description}
              </p>
            </div>
            <div className="relative min-h-[20rem] w-full grow">
              <div className="absolute inset-x-8 top-8 bottom-0 overflow-hidden rounded-t-xl bg-gray-900 dark:bg-gray-950 shadow-2xl">
                {feature.image && (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-3xl ring-1 shadow-sm ring-black/5 dark:ring-white/10"></div>
        </Link>
      ))}
    </div>
    //   </div>
    // </div>
  );
}
