import {
  ClipboardIcon,
  FileTextIcon,
  GlobeIcon,
  CalendarIcon,
  BellIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: FileTextIcon,
    name: "Memo - 懒人短语",
    description:
      "高效整理和管理高频长时效的内容，支持动态变量，让内容输入更智能。",
    href: "/docs/memos",
    cta: "了解更多",
    background: (
      <img
        src="logo-corner.png"
        className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: ClipboardIcon,
    name: "短时记忆",
    description: "智能的剪切板历史管理，支持过滤规则、预处理动作和智能归档。",
    href: "/docs/short-term-memory",
    cta: "了解更多",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "纯净 + 安全",
    description: "纯净的体验，安全的存储",
    href: "/",
    cta: "了解一下",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "趣味动作库",
    description: "重复的动作，让它交给ToMemo吧",
    href: "/",
    cta: "了解更多",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "快捷键盘",
    description: "所有的存储，都是为了一键输出。",
    href: "/",
    cta: "了解一下",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: FileTextIcon,
    name: "AI助手",
    description: "当我们在键盘中遇见AI，新世界已经打开",
    href: "/",
    cta: "了解一下",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-4 lg:row-end-6",
  },
  {
    Icon: FileTextIcon,
    name: "个性皮肤",
    description: "一点点皮肤的点缀，带来一天的愉悦心情",
    href: "/",
    cta: "了解一下",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-4 lg:row-end-6",
  },
  {
    Icon: FileTextIcon,
    name: "iCloud同步",
    description: "iCloud同步，让数据更安全",
    href: "/",
    cta: "了解一下",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-6 lg:row-end-7",
  },
  {
    Icon: FileTextIcon,
    name: "不得不知的实践案例",
    description: "ToMemo的实践案例，让你更了解ToMemo",
    href: "/",
    cta: "了解一下",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-7 lg:row-end-8",
  },
  {
    Icon: FileTextIcon,
    name: "更多功能",
    description: "更多功能，等你探索",
    href: "/",
    cta: "了解一下",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-6 lg:row-end-8",
  },
];

export function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-8">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
