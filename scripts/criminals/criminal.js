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