export const Note = (noteObj) => {
    return `
        <div class="oneNote">
            ${noteObj.note}
            ${noteObj.author}
        </div>
    `
  }