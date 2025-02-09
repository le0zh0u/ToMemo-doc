"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import Link from "next/link";

const exampleImages = [
  "/images/demo/memory-1.jpg",
  "/images/demo/memory-2.jpg",
  "/images/demo/memory-3.jpg",
  "/images/demo/memory-4.jpg",
  "/images/demo/memory-5.jpg",
];

function Hero() {
  return (
    <div className="w-full">
      <div className="container mx-auto relative">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="bg-clip-text text-3xl md:text-7xl bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
              <span className="text-blue-500">高效管理你的</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                <TextRotate
                  texts={[
                    "懒人短语",
                    "短时记忆",
                    "扩展键盘",
                    "AI 助手",
                    "数字内容",
                  ]}
                  mainClassName="overflow-hidden pr-3 text-foreground py-0 pb-2 md:pb-4 rounded-xl"
                  staggerDuration={0.03}
                  staggerFrom="last"
                  rotationInterval={3000}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                />
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              ToMemo 是一款多功能快捷键盘 + 剪切内容记录 + 懒人短语的便签应用，
              帮助你高效管理和使用数字化内容，提升工作生活效率。
            </p>
          </div>
          <div className="flex flex-row gap-4">
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
                <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group hover:bg-gradient-to-r hover:from-[#60A5FA]/10 hover:to-[#2563EB]/10"
            >
              <Link href="/docs/getting-started" className="flex items-center">
                立即开始
                <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="hidden md:block absolute inset-0 -z-10 ">
            <Floating sensitivity={-0.5}>
              <FloatingElement
                depth={0.5}
                className="top-[15%] left-[2%] md:top-[25%] md:left-[5%]"
              >
                <motion.img
                  src={exampleImages[0]}
                  alt="Memory example 1"
                  className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                />
              </FloatingElement>

              <FloatingElement
                depth={1}
                className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]"
              >
                <motion.img
                  src={exampleImages[1]}
                  alt="Memory example 2"
                  className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                />
              </FloatingElement>

              <FloatingElement
                depth={4}
                className="top-[90%] left-[6%] md:top-[80%] md:left-[8%]"
              >
                <motion.img
                  src={exampleImages[2]}
                  alt="Memory example 3"
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                />
              </FloatingElement>

              <FloatingElement
                depth={2}
                className="top-[0%] left-[67%] md:top-[2%] md:left-[83%]"
              >
                <motion.img
                  src={exampleImages[3]}
                  alt="Memory example 4"
                  className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                />
              </FloatingElement>

              <FloatingElement
                depth={1}
                className="top-[78%] left-[63%] md:top-[68%] md:left-[83%]"
              >
                <motion.img
                  src={exampleImages[4]}
                  alt="Memory example 5"
                  className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                />
              </FloatingElement>
            </Floating>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
