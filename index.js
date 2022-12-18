const express = require('express')
const app = express();
const useRouter = require('./router/user-routes')

const PORT = 3002;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(useRouter)

app.use((req, res, next) => {
    res.status(404).send("<h1>bal falaite aiso eno?<h1>")
})
app.listen(PORT, () => {
    console.log(`choltase http://localhost:${PORT}`)
})