import express from 'express'
import { igdl,ttdl,fbdown,twitter } from 'btch-downloader'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Hello from the server.")
})

app.post('/instagram',async(req,res) => {
    const {url} = req.body
    try {
        const data = await igdl(url)
        res.json(data)   
    } catch (error) {
        res.send("Error")
    }
})

app.post('/tiktok',async(req,res) => {
    const {url} = req.body
    try {
        const data = await ttdl(url)
        res.json(data)   
    } catch (error) {
        res.send("Error")
    }
})

app.post('/facebook',async(req,res) => {
    const {url} = req.body
    try {
        const data = await fbdown(url)
        res.json(data)   
    } catch (error) {
        res.send("Error")
    }
})

app.post('/twitter',async(req,res) => {
    const {url} = req.body
    try {
        const data = await twitter(url)
        res.json(data)   
    } catch (error) {
        res.send("Error")
    }
})

app.listen(8000,()=>{
    console.log(`server is running`)
})