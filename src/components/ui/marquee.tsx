"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean;
  reverse?: boolean;
  fade?: boolean;
}

export function Marquee({
  children,
  className,
  pauseOnHover = false,
  reverse = false,
  fade = false,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn("flex w-full overflow-hidden [--gap:1rem]", className)}
      {...props}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] [--duration:40s]",
          {
            "animate-marquee hover:[animation-play-state:paused]": pauseOnHover,
            "animate-marquee": !pauseOnHover,
            "flex-row-reverse": reverse,
            "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]":
              fade,
          }
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] [--duration:40s]",
          {
            "animate-marquee hover:[animation-play-state:paused]": pauseOnHover,
            "animate-marquee": !pauseOnHover,
            "flex-row-reverse": reverse,
            "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]":
              fade,
          }
        )}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}
