import express from 'express'
import connection from '../database/connection.js'

const router = express.Router()

router.get('/show', (req, res) => {
    connection.query('select * from products', (err, result) => {
        if (err) {
            console.error(err)
            res.status(500).send('error')
            return
        } 
        res.json(result)
    })
})

export default router