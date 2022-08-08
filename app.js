const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')

// load env config file
dotenv.config({ path: './config/config.env' })

// passport config
require('./config/passport')(passport)

connectDB()

const app = express()

// logging for dev environment
if(process.env.NODE_ENV === 'Development') {
    // add morgan middleware
    app.use(morgan('dev'))
}

// static assets
app.use(express.static(path.join(__dirname, 'public')))

// add template engine stuff for handlebars
app.engine('.hbs', exphbs.engine({defaultLayout: 'main' , extname: '.hbs'}));
app.set('view engine', '.hbs');

// session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))




const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))