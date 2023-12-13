import { Request, Response } from 'express'

import { AuthRequest } from 'types'
import { fetchDogs } from './service'

export const getDogs = async (req: AuthRequest, res: Response) => {
    const dogs = await fetchDogs()

    console.log(req.auth)

    res.json({ dogs })
}
