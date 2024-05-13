require('dotenv').config()

var express = require("express")
var app = express()

let port = process.env.PORT || 3000
app.use(express.static(__dirname + "/public"))

app.get("", (req, res)=>{
    res.sendFile(__dirname + "/public/pages/index.html")
})

app.get("/A-Deep-Dive-into-Quicken-Loans", (req, res)=>{
    res.sendFile(__dirname + "/public/pages/articles/0QuickenLoans.html")
})
app.get("/A-Comprehensive-Guide-to-Index-Funds", (req, res)=>{
    res.sendFile(__dirname + "/public/pages/articles/1UnlockingWealth.html")
})
app.get("/Continuous-Learning", (req, res)=>{
    res.sendFile(__dirname + "/public/pages/articles/2ThePowerofContinuousLearning.html")
})
app.get("/Understanding-Credit-Card-Reward-Systems", (req, res)=>{

    res.sendFile(__dirname + "/public/pages/articles/3UnderstandingCreditCardRewardSystems.html")

})
app.get("/Demystifying-Cryptocurrency", (req, res)=>{

    res.sendFile(__dirname + "/public/pages/articles/4DemystifyingCryptocurrency.html")

})
app.get("/Timeless-Allure-of-Investing-in-Gold", (req, res)=>{

    res.sendFile(__dirname + "/public/pages/articles/5TimelessAllureofInvestinginGold.html")
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
app.get("/robots.txt", (req, res)=>{

    res.sendFile(__dirname + "/robots.txt")
})
app.get("/sitemap.xml", (req, res)=>{

    res.sendFile(__dirname + "/sitemap.xml")
})

app.listen(port)
