import {saveNote} from "./noteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
        <label>Criminal Note:</label>
        <input type="text" id="note-text">
        <input type="text" id="note-author">
        <button id="saveNote">Save Note</button>
    `
}

export const noteForm = () => {
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteText = document.querySelector("#note-text").value 
        const authorText = document.querySelector("#note-author").value 
        // Make a new object representation of a note
        const newNote = {
            note: noteText,
            author: authorText
        }

        // Change API state and application state
        saveNote(newNote)
    }
})
