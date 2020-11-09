import { getOfficers, useOfficers} from "./OfficerDataProvider.js"

const officersFilterContainer = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

export const officerSelect = () => {
    console.log("OfficerSelect: Get data from API and renders drop down to the DOM")

    getOfficers()
    .then(() => {
        const officersArray = useOfficers()
        console.log("officersArray", officersArray)

        render(officersArray)
    })
}

const render = (officers) => {
    officersFilterContainer.innerHTML = `
    <select class="dropdown" id="officerSelect">
     <option value="0">Please select an officer...</option>
     ${officers.map(
         officerObj => {
             return `<option value="${officerObj.name}">${officerObj.name}</option> `
         }
     ) .join("")
    }   

        </select>
    `
}

eventHub.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "officerSelect") {
    
        const officerSelectedEvent = new CustomEvent("officerSelected", {
            detail: {
                officerName: changeEvent.target.value
            }
        })
        eventHub.dispatchEvent(officerSelectedEvent)
    }
})




