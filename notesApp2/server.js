import express from 'express'
import {getNote, getNotes, addNote, deleteNote} from "./database.js"

const app = express()
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))


app.get("/", (req, res) => {
  res.render("index.ejs", {
    
  })
})

app.get("/notes", async (req, res) => {
  
  const notes = await getNotes()
  res.render("notes.ejs", {
    notes
  })
})

app.get("/notes/:id", async (req, res) => {
  const id = +req.params.id
  const note = await getNote(id)
  if (!note){
    res.status(404).render("note404.ejs")
    return
  }

  res.render("note.ejs",{
    note
  })
})

app.get("/createNote", (req, res) => {
  res.render("createNote.ejs")
})

app.post("/notes", async (req, res) => {
  const data = req.body
  await addNote(data)
  
  res.redirect("/notes");
})

app.post("/notes/:id/delete", async (req, res) => {
  const id = +req.params.id
  await deleteNote(id)

  res.redirect("/notes");
})

app.use(express.static("public"))

const port = 8080
app.listen(port, () => {
  console.log(`Listening ${port}`)
})