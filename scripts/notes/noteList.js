import { useNotes, getNotes } from './noteDataProvider.js'
// import { useCriminals } from '../criminals/criminalDataProvider.js'
import {Note} from "./note.js"




const contentTarget = document.querySelector(".noteListContainer")


const render = (noteCollection) => {
    let noteHtmlRepresentation = ""
     noteCollection.forEach(note => {
        noteHtmlRepresentation += Note(note)
        
    });
    contentTarget.innerHTML =
         `
        ${noteHtmlRepresentation}
        `
}

export const NoteList = () => {
    getNotes()
        .then(() => {
            const notes = useNotes()
            console.log(notes)
            render(notes)
        })
}

