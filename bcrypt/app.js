import bcrypt from "bcrypt";
import express from "express";

const app = express()
app.use(express.json())

const users = [

]

app.post("/signup", async (req, res) => {
    const {username, password} = req.body;
    const hash = await bcrypt.hash(password, 13)
    users.push({
        username,
        password: hash
    })

    console.log(users)
    res.send("ok")
})

app.post("/login", async (req, res) => {
    const {username, password} = req.body
    const user = users.find(u => u.username === username)
    if(!user){
        res.send("wrong username")
        return
    }
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
        res.send("wrong password")
        return
    }
})

app.listen(8080, () => {
    console.log("listen 8080")
})