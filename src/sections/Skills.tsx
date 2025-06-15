import {
    SiReact,
    SiTailwindcss,
    SiNextdotjs,
    SiGit,
    SiAstro,
    SiJavascript,
    SiFigma,
    SiTypescript,
    SiHtml5,
    iconNameMap
  } from "@/components/Icons";
  import { useAnimate } from "motion/react";
  import type {ReactNode, MouseEvent } from "react";
  
  interface ClipPathTechnologiesProps {
    children: ReactNode;
  }
  
  export default function ClipPathTecnologies({ children }: ClipPathTechnologiesProps) {
    return (
      <section className="my-16 mt-32 relative mx-[1px] 5xl:mx-0.5 border-y border-y-grey border-b-0 xs:border-b overflow-hidden">
        <h2 className="font-secondary text-[10vw] text-center bg-lightgrey">HABILIDADES</h2>
        <div className="divide-y flex flex-col divide-grey border-t border-t-grey bg-lightgrey">
          <div className="grid grid-cols-2 divide-x divide-grey">
            <LinkBox Icon={SiAstro}>{children}</LinkBox>
            <LinkBox Icon={SiReact}>{children}</LinkBox>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 xs:grid-rows-1 xs:grid-cols-4 xs:divide-x relative order-1 border-t border-t-grey xs:border-t-0 xs:order-none divide-grey bg-lightgrey">
            <LinkBox Icon={SiTailwindcss}>{children}</LinkBox>
            <LinkBox Icon={SiJavascript}>{children}</LinkBox>
            <LinkBox Icon={SiNextdotjs}>{children}</LinkBox>
            <LinkBox Icon={SiFigma}>{children}</LinkBox>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex w-full justify-center xs:hidden"
            >
              <div className="bg-grey absolute inset-y-0 top-0 w-[1px]" />
              <div className="bg-grey absolute inset-x-0 left-0 top-1/2 h-[1px]" />
            </div>
          </div>
          <div className="grid grid-cols-3 divide-x divide-grey">
            <LinkBox Icon={SiHtml5}>{children}</LinkBox>
            <LinkBox Icon={SiTypescript}>{children}</LinkBox>
            <LinkBox Icon={SiGit}>{children}</LinkBox>
          </div>
        </div>
      </section>
    );
  }
  
  const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
  const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
  const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
  const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
  const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";
  
  const ENTRANCE_KEYFRAMES: Record<string, string[]> = {
    left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    right: [TOP_LEFT_CLIP, NO_CLIP],
  };
  
  const EXIT_KEYFRAMES: Record<string, string[]> = {
    left: [NO_CLIP, TOP_RIGHT_CLIP],
    bottom: [NO_CLIP, TOP_RIGHT_CLIP],
    top: [NO_CLIP, TOP_RIGHT_CLIP],
    right: [NO_CLIP, BOTTOM_LEFT_CLIP],
  };
  
  interface LinkBoxProps {
    Icon: any;
    children: ReactNode;
  }
  
  const LinkBox: React.FC<LinkBoxProps> = ({ Icon, children }) => {
    const [scope, animate] = useAnimate();
    const iconName = iconNameMap.get(Icon)
  
    const getNearestSide = (e: MouseEvent<HTMLDivElement>): string => {
      const box = e.currentTarget.getBoundingClientRect();
  
      const proximityToLeft = { proximity: Math.abs(box.left - e.clientX), side: "left" };
      const proximityToRight = { proximity: Math.abs(box.right - e.clientX), side: "right" };
      const proximityToTop = { proximity: Math.abs(box.top - e.clientY), side: "top" };
      const proximityToBottom = { proximity: Math.abs(box.bottom - e.clientY), side: "bottom" };
  
      const sorted = [proximityToLeft, proximityToRight, proximityToTop, proximityToBottom].sort(
        (a, b) => a.proximity - b.proximity
      );
  
      return sorted[0].side;
    };
  
    const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
      const side = getNearestSide(e);
      animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[side] });
    };
  
    const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
      const side = getNearestSide(e);
      animate(scope.current, { clipPath: EXIT_KEYFRAMES[side] });
    };
  
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative flex flex-col justify-center items-center gap-1 h-20 w-full sm:h-28 md:h-36 cursor-default"
      >
        <Icon className="text-2xl sm:text-3xl lg:text-4xl" />
        <p className="text-xs hidden pointer-coarse:block">{Icon.name.replace("Si", "")}</p>
        <div
          style={{ ['--separation' as any]: '-.5px' }}
          className="absolute inset-0 text-dark"
        >
          {children}
        </div>
        <div
          ref={scope}
          style={{ clipPath: BOTTOM_RIGHT_CLIP }}
          className="absolute inset-0 flex flex-col gap-1 justify-center items-center bg-dark text-light"
        >
          <Icon className="text-lg sm:text-2xl md:text-3xl" />
          <p className="text-xs">{iconName}</p>
        </div>
      </div>
    );
  };
  