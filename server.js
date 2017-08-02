const { resolve } = require('path')
const express = require('express')
const app = express()

app.set('views', __dirname + '/html');
app.engine('html', require('ejs').renderFile); 

app.use('/css', express.static('css'))
app.use('/images', express.static('images'))
app.use('/fonts', express.static('fonts'))
app.use('/js', express.static('js'))

// Routes
app.get('/', (req, res) => res.render('index.html'))

app.listen(4000, () => console.log('Server running at: localhost:4000'))