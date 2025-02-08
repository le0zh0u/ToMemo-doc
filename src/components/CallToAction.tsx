import Link from "next/link";

export function CallToAction() {
  return (
    <div className="mt-24 text-center">
      <h2 className="text-3xl font-bold mb-4">Start using ToMemo today</h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Join thousands of users who are already enhancing their memory with
        ToMemo.
      </p>
      <Link
        href="/docs/guide/getting-started"
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium text-lg inline-block transition-colors"
      >
        Get started for free →
      </Link>
    </div>
  );
}
