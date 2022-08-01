const Router = require('express')
const router = new Router()

router.post('/registration',)
router.get('/login', (req, res) => {
    res.json({message: 'ALL WORKING'})
})
router.get('/auth', (req, res) => {
    res.json({message: 'ALL WORKING'})
})

module.exports = router