const express = require('express')
const router = express.Router()

// @Description  goes to the home/landing page
//@Route GET /
router.get('/', (req, res) => {
    res.render('login',{
        layout: 'login'
    })
})
// @Description  goes to the dashboard
//@Route GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router