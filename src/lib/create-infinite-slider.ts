interface Props {
  slider: HTMLElement,
  sliderContent: HTMLElement
}

export default function createInfiniteSlider({ slider, sliderContent }: Props) {
  sliderContent.classList.add('animate-marquee')
  slider.appendChild(sliderContent.cloneNode(true))
}