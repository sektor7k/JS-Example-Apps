import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE

}).promise()


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

export async function getNotes() {
    const [row] = await pool.query(`SELECT * FROM notes`)
    return row
}

export async function getNote(id) {
    const [row] = await pool.query(`SELECT * FROM notes WHERE id = ?`,[id])
    return row[0]
}

export async function addNote(note) {
    const [result] = await pool.query(
        `INSERT INTO notes (title, contents)
        VALUES (?, ?)`,[note.title, note.contents]
    )
}

export async function deleteNote(id) {
    const [result] = await pool.query(
        `DELETE FROM notes WHERE id = ?`,[id]
    )
}