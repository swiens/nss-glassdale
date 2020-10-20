import { generateCriminalHtml } from './criminal.js'
import { getCriminals, useCriminals } from './criminalDataProvider.js'

export const criminalList = () => {
    getCriminals().then(
        () => {
            const criminals = useCriminals() 
        
            
            const contentElement = document.querySelector(".criminalsContainer")

            let criminalHtml = ""

            for(const criminal of criminals) {
                criminalHtml += generateCriminalHtml(criminal)
            }
            

            contentElement.innerHTML = criminalHtml
        }   
    )

}

