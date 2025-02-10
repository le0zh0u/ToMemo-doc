import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function CallToAction() {
  return (
    <div className="relative mt-12 md:mt-0">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#60A5FA]/10 via-[#3B82F6]/10 to-[#2563EB]/10 rounded-3xl" />
        <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#60A5FA]/20 via-[#3B82F6]/20 to-[#2563EB]/20 rounded-3xl transform rotate-180 translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative px-8 py-16 text-center rounded-3xl border border-[#60A5FA]/20 backdrop-blur-sm">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">
          立即开始使用 ToMemo
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          ToMemo
          的核心目标是「效率」，通过对内容输入和输出的管理，提升你的工作生活效率。
          <br className="hidden sm:block" />
          所有数据都存储在本地和 iCloud
          中，没有服务器，没有广告，确保你的数据安全。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            asChild
            size="lg"
            className="relative group bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white hover:from-[#60A5FA] hover:to-[#3B82F6]"
          >
            <Link
              href="https://apps.apple.com/cn/app/tomemo-%E5%A4%9A%E5%8A%9F%E8%83%BD%E5%BF%AB%E6%8D%B7%E9%94%AE%E7%9B%98%E7%9A%84%E5%86%85%E5%AE%B9%E6%95%B4%E7%90%86%E5%BA%94%E7%94%A8/id1610843304"
              target="_blank"
              className="flex items-center"
            >
              App Store 下载
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group hover:bg-gradient-to-r hover:from-[#60A5FA]/10 hover:to-[#2563EB]/10"
          >
            <Link href="/docs/getting-started" className="flex items-center">
              查看使用文档
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center">
            <span className="inline-block w-1 h-1 rounded-full bg-[#3B82F6] mr-2"></span>
            免费功能可直接使用
          </div>
          <div className="flex items-center">
            <span className="inline-block w-1 h-1 rounded-full bg-[#2563EB] mr-2"></span>
            无需订阅
          </div>
        </div>
      </div>
    </div>
  );
}
