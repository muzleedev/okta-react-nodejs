import express, { Express } from 'express'
import cors from 'cors'
import helmet from 'helmet'

import { notFoundHandler } from 'middleware/notFoundMiddleware'
import { errorMiddleWare } from 'middleware/errorMiddleware'
import { loggerMiddleware } from 'middleware/loggerMiddleware'
import { messageRouter } from 'api/dog/route'

export const app: Express = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(loggerMiddleware)

app.use(messageRouter)

app.use(notFoundHandler)
app.use(errorMiddleWare)
