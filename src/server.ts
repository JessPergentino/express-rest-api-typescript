import express, { Router, Request, Response } from 'express'

const app = express()

const route = Router()

app.use(express.json())

route.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use(route)

app.listen(3000, () => 'server running on port 3000')
