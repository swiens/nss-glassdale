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
                            <option value="${currentCoviction.name}">${currentCoviction.name}</option>                      
                        `
                    }
                )
            }
        </select>
    `
}

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", (event) => {
    console.log(event)

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})
