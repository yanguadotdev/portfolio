import Lenis from 'lenis'
import gsap from 'gsap'

export const lenis = new Lenis()
gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)
