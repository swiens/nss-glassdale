export const generateCriminalHtml = (criminalObj) => {
    return `
        <div class="criminal">
            <h3> ${criminalObj.name} </h3>
            <div> Age: ${criminalObj.age} </div>
            <div> Crime: ${criminalObj.conviction} </div>
            <div> Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')} </div>
            <div> Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')} </div>
        </div>
    `
}

export const Criminal = (criminalObject, facilities) => {
    return `
    <div class="criminal">
        <h4>${criminalObject.name}</h4>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObject.age}</p>
            <div>
                <h2>Facilities</h2>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            <button id="associates--${criminalObject.id}">Show Associates</button>
        </div>
    </div>
    `
}