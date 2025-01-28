import express from "express"
import cors from "cors"

const PORT = 5000
const app = express()
app.use(cors({origin: "http://localhost:5173"}))

const user = {
    id: 1,
    name: "Saxeli Gvari",
    email: "example@gmail.com"
}

app.get('/api/user', (req, res) => {
    try{
        res.status(200).json(user)     
    } catch(error) {
        res.status(500).json ({error: error})
    }
})

app.listen(PORT, () => {
    console.log(`server is chilling at http://localhost:${PORT}`)
})