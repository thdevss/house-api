import express, { Application, Request, Response } from 'express'
import homeRoute from './routes/homeRoute'
import postCodeRoute from './routes/postCodeRoute'

const app: Application = express()

app.use('/home', homeRoute)
app.use('/postCode', postCodeRoute)

app.listen(3000);