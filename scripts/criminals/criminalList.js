import { generateCriminalHtml, Criminal } from './criminal.js'
import { getCriminals, useCriminals } from './criminalDataProvider.js'
import {getFacilities, useFacilities}  from "../facility/FacilityProvider.js"
import {getCriminalFacilities, useCriminalFacilities} from "../facility/CriminalFacilityProvider.js"
import { useNotes } from '../notes/noteDataProvider.js'

const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        console.log(event.detail)
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const appStateCriminals = useCriminals()
        const matchingCriminals = appStateCriminals.filter(currentCriminal => {

            return currentCriminal.conviction === event.detail.crimeThatWasChosen
        })
        render(matchingCriminals, useFacilities(), useCriminalFacilities())

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})

eventHub.addEventListener('officerSelected', event => {
    // Use the property you added to the event detail.
    if (event.detail.officerName !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const appStateCriminals = useCriminals()
        
        const matchingCriminals = appStateCriminals.filter(currentCriminal => {
            return currentCriminal.arrestingOfficer === event.detail.officerName
        })

        render(matchingCriminals, useFacilities(), useCriminalFacilities())

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})

eventHub.addEventListener("facilitiesButtonClicked", () => {
    
})

const contentTarget = document.querySelector(".criminalsContainer")



export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getCriminals()
    .then(getFacilities)
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()
        
                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
                
            }
        )
}

const render = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })
        
            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities)
            
        }
    ).join("")
}


