const express = require('express')
const passport = require('passport')
const router = express.Router()

// @Description  google auth
//@Route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
// @Description  Google auth callback
//@Route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), (req, res) => {
    res.redirect('/dashboard')
})

module.exports = router
// change to add controller 