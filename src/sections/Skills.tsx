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
  iconNameMap,
} from '@/components/Icons'
import { translations } from '@/i18n/translations'
import type { Lang } from '@/types'
import type { ReactNode } from 'react'

interface ClipPathTechnologiesProps {
  lang: Lang
  children: ReactNode
}

export default function ClipPathTecnologies({ lang, children }: ClipPathTechnologiesProps) {
  const { skills, ctaSkills } = translations[lang]
  return (
    <section className="5xl:mx-0.5 border-t-grey relative mx-[1px] my-16 overflow-hidden border-t">
      <div className="bg-lightgrey flex flex-col items-center justify-center px-4">
        <h2 className="font-secondary text-[10vw]">{skills}</h2>
        <p className="-mt-2 px-10 pb-8 text-center uppercase opacity-75">{ctaSkills}</p>
      </div>
      <div className="divide-grey/60 border-y-grey/60 bg-lightgrey flex divide-x-[0.5px] border-y-[0.5px] [&>*]:flex-1">
        <LinkBox Icon={SiAstro}>{children}</LinkBox>
        <LinkBox Icon={SiReact}>{children}</LinkBox>
        <LinkBox Icon={SiTailwindcss}>{children}</LinkBox>
        <LinkBox Icon={SiJavascript}>{children}</LinkBox>
        <LinkBox Icon={SiNextdotjs}>{children}</LinkBox>
        <LinkBox Icon={SiFigma}>{children}</LinkBox>
        <LinkBox Icon={SiHtml5}>{children}</LinkBox>
        <LinkBox Icon={SiTypescript}>{children}</LinkBox>
        <LinkBox Icon={SiGit}>{children}</LinkBox>
      </div>
    </section>
  )
}

interface LinkBoxProps {
  Icon: any
  children: ReactNode
}

const LinkBox: React.FC<LinkBoxProps> = ({ Icon, children }) => {
  const iconName = iconNameMap.get(Icon)

  return (
    <div className="group relative flex h-20 w-full cursor-default flex-col items-center justify-center gap-1 sm:h-28 md:h-36">
      <div className="text-dark absolute inset-0">{children}</div>
      <div className="text-light absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div className="bg-dark not-group-hover:animate-blink group-hover:animate-opacity absolute inset-0 opacity-0"></div>
        <Icon className="text-dark group-hover:text-light relative text-2xl sm:text-3xl lg:text-4xl" />
        <p className="bg-primary relative px-0.5 text-xs">{iconName}</p>
      </div>
    </div>
  )
}
