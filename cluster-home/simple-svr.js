// https://www.youtube.com/watch?v=aKMLgFVxZYk&list=PL8MnPqeYhJFvwrFWZp7Xp2I4XTZ8wfCJS&index=7

const app = require("express")()
const port = process.env.PORT || 3000

app.get("/*", (req,res) => {
   res.send(`Served by ${port}`)
})

app.listen(port, () => console.log(`listening on ${port}`))
