const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 5000;

function loggerMiddleware(req, res, next) {
    const ipAd = req.ip;
    console.log(ipAd);
    fs.appendFileSync("access.log", `Request received at ${req.url} with ${req.method} method from ${ipAd} at ${new Date} \n`);
    next();
}
app.use(loggerMiddleware);


// abc.com/api/v1/get-users  //endpoint
app.get("/get-users", (req, res) => {
    // console.log(req.query);
    res.json({
        success: true,
        message: "Dummy get Users API",
    });
});

app.use("/*",(req,res)=>{
    res.status(400).json({
        error: "Path not found"
    })
});

app.listen(PORT, () => {
    console.log("express server is up and running on port -", PORT)
})