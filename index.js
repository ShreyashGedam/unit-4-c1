const express = require("express")

const app = express()

// console.log(app)

app.use(logger)

app.get("/books",function(req , res)
{
    console.log("Route books")
    res.send({route : "/books"})
})

app.get("/libraries", function(req ,res )
{
    res.send({ route: "/libraries", permission: true})
})


app.get("/authors", function(req ,res )
{
    res.send({ route: "/authors", permission: true})
})



app.listen(7000,function()
{
    console.log("Listening on port")
})

function logger(req , res , next)
{
    console.log("Using")
    next()
}

