let notes = [
    {
        id: 1,
        title: "My First Note",
        timestamp: Date.now(),
        contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime sunt aliquam adipisci voluptate inventore esse beatae? Placeat eum rerum, quae repellat aliquid similique facere molestiae saepe doloribus consequuntur minima."
    },
    {
        id: 2,
        title: "My Second Note",
        timestamp: Date.now(),
        contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime sunt aliquam adipisci voluptate inventore esse beatae? Placeat eum rerum, quae repellat aliquid similique facere molestiae saepe doloribus consequuntur minima."
    }
]

export function getNotes(searchTerm) {
    if(!searchTerm){
        return notes;
    }
    return notes.filter(note => note.title.includes(searchTerm) || note.contents.includes(searchTerm))
}

export function getNote(id) {
    return notes.find(note => note.id === id)
}

export function addNote(note) {
    notes.push({
       ...note,
       id: notes.length+1,
       timestamp: Date.now()
    })
}

export function deleteNote(id) {
    notes = notes.filter((note) => note.id !== id);
}