import { generateCriminalHtml } from './criminal.js'
import { getCriminals, useCriminals } from './criminalDataProvider.js'

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
        render(matchingCriminals)

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

        render(matchingCriminals)

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})

const contentTarget = document.querySelector(".criminalsContainer")

const render = (criminalCollection) => {
    let criminalsHTMLRepresentations = ""
    for (const criminal of criminalCollection) {
      criminalsHTMLRepresentations += generateCriminalHtml(criminal) 
    }
    contentTarget.innerHTML = `
            <h3>Glassdale Criminals</h3>
            <section class="criminalsList">
              ${criminalsHTMLRepresentations}
            </section>
          `
  }


// Render ALL criminals initally
export const criminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
} 
