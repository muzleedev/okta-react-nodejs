import { JwtClaims } from '@okta/jwt-verifier'
import { Request } from 'express'

export interface AuthRequest extends Request {
    auth?: JwtClaims
}
