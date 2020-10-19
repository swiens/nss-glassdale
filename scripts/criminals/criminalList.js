import { generateCriminalHtml } from './criminal.js'
import { getCriminals, useCriminals } from './criminalDataProvider.js'

export const criminalList = () => {
    getCriminals().then(
        () => {
            const criminals = useCriminals() 
            console.log(criminals)
            
            const contentElement = document.querySelector(".criminalsContainer")

            let criminalHtml = ""

            for(const criminal of criminals) {
                criminalHtml += generateCriminalHtml(criminal)
            }
            console.log(criminalHtml)

            contentElement.innerHTML = criminalHtml
        }   
    )

}

