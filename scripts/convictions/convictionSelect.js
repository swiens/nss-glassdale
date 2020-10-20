import {useConvictions, getConvictions} from "./convictionProvider.js"


const contentElement = document.querySelector(".filters__crime")

export const convictionSelect = () => {
    getConvictions().then(
        () => {
            const convictions = useConvictions()
            render(convictions)
        }
    )
}

const render = (convictionsCollection) => {
    contentElement.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(
                    (currentCoviction) => {
                        return `
                            <option value="${currentCoviction.id}">${currentCoviction.name}</option>                      
                        `
                    }
                )
            }
        </select>
    `
}