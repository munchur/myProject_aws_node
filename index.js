const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('HEY!')
})

app.listen(3000, () => console.log('Server runnong on port 3000'))