// libraries
import express from 'express'
import cors from 'cors'

// import routes
import productRoute from './routes/productRoute.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

// routes
app.use('/api/products', productRoute)

// listener
app.listen(port, () => {
    console.log(`App listening port ${port}`)
})

