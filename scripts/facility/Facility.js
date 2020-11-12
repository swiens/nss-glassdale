export const Facility = (facilityObject, criminalsArray) => {
    return `
        <div class="facility">
          <h5>${facilityObject.facilityName}</h5>
          <p>Security Level: ${facilityObject.securityLevel}</p>
          <p>Capacity: ${facilityObject.capacity}</p>
          <div>
            <h2>Criminals</h2>
            <ul>
                ${criminalsArray.map(c => `<li>${c.name}</li>`).join("")}
            </ul>
          </div>
        </div>
    `
  }
  