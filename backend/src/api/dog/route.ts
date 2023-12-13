import { Request, Response, Router } from 'express'

import { AppPermissions } from 'config/appPermissions'
import { asyncHandler } from 'utils/asyncHandler'
import { getDogs } from './controller'
import { auth, guard } from 'middleware/authMiddleware'

export const messageRouter = Router()

messageRouter.get('/api/v1/dogs', auth, guard([AppPermissions.readDog]), asyncHandler(getDogs))

messageRouter.put('/api/v1/dog', auth, guard([AppPermissions.updateDog]), (req: Request, res: Response) => {
    res.json({ msg: 'dog update' })
})
