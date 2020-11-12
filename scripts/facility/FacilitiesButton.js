export const DisplayFacilitiesButton = () => {
   const contentTarget = document.querySelector(".facility__button")
   contentTarget.innerHTML= `
   <button id="facilityButton">Display Facilities</button>
   `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id === "facilityButton") {
        const facilityButtonClick = new CustomEvent("facilitiesButtonClicked")
        eventHub.dispatchEvent(facilityButtonClick)
    }
})
