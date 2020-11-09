import { getOfficers, useOfficers } from "./OfficerDataProvider.js"
import { Officer } from "./Officer.js"

const officersContainer = document.querySelector(".officersContainer")

export const officerList = () => {

  getOfficers()
    .then(() => {
      const officerArray = useOfficers()
      // console.log(officerArray)

      let officersHTMLRepresentations = ""

      for (const officer of officerArray) {

        officersHTMLRepresentations += Officer(officer)

        officersContainer.innerHTML = `
          <h3>Glassdale Officers</h3>
          <section class="officersList">
            ${officersHTMLRepresentations}
          </section>
        `

      }
    })

}
