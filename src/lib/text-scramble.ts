import { $$ } from "./dom-selector"

export default function textScramble() {

    window.addEventListener('DOMContentLoaded', () => {
        const links = $$("[data-scramble-text]")
        const solveMilliseconds = 800
        const characterSelectionMilliseconds = 40
        const delayMilliseconds = 50
        const characters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890*#@/*!%&^"]

        const randomArrayElement = (arr: string[]) => {
            return arr[(arr.length * Math.random()) | 0]
        }

        links.forEach((element: HTMLElement) => {
            if (element.dataset.scrambleBound) return

            element.dataset.scrambleBound = "true"

            element.addEventListener("mouseenter", (e) => {
                const target = e.target as HTMLElement
                if (target) scrambleText(target)
            })
        })

        function scrambleText(element: HTMLElement) {
            if (element.classList.contains("active") == false) {
                let delay = 0
                const elementText = element.innerText
                const elementCharacters = [...elementText]
                const lockMilliseconds =
                    delayMilliseconds * elementCharacters.length + solveMilliseconds

                element.classList.add("active")

                setTimeout(() => {
                    element.classList.remove("active")
                }, lockMilliseconds)

                elementCharacters.forEach((character, index) => {
                    setTimeout(
                        () => {
                            let intervalId = setInterval(() => {
                                const randomCharacter = randomArrayElement(characters)
                                element.innerText = replaceCharacter(
                                    element.innerText,
                                    index,
                                    randomCharacter
                                )

                                setTimeout(() => {
                                    clearInterval(intervalId)
                                    element.innerText = replaceCharacter(
                                        element.innerText,
                                        index,
                                        elementCharacters[index]
                                    )
                                }, solveMilliseconds)
                            }, characterSelectionMilliseconds)
                        },
                        delay === 0 ? (delay += 1) : (delay += delayMilliseconds)
                    )
                })
            }
        }

        function replaceCharacter(str: string, index: number, chr: string) {
            return `${str.substring(0, index)}${chr}${str.substring(index + 1)}`
        }
    })
}