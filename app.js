var express = require("express")
var app = express()

let port = process.env.PORT || 3000
app.use(express.static(__dirname + "/public"))

app.get("", (req, res)=>{
    res.sendFile(__dirname + "/public/pages/index.html")
})

app.get("/QuickenLoans", (req, res)=>{
    res.sendFile(__dirname + "/public/pages/QuickenLoans.html")
})
app.get("/UnlockingWealth", (req, res)=>{
    res.sendFile(__dirname + "/public/pages/UnlockingWealth.html")
})
app.get("/disclaime", (req, res)=>{
    res.sendFile(__dirname + "/public/pages/disclaime.html")
})
app.get("/about", (req, res)=>{
    res.sendFile(__dirname + "/public/pages/about-us.html")
})
app.get("/contact", (req, res)=>{
    res.sendFile(__dirname + "/public/pages/contact.html")
})

app.listen(port, ()=>{
    console.log("")
})