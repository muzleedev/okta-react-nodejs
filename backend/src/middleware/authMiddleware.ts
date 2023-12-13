import { Response, NextFunction } from 'express'
import OktaJwtVerifier from '@okta/jwt-verifier'

import { appConfig } from 'config/appConfig'
import { UnauthorizedException } from 'exceptions/UnauthorizedException'
import { AuthRequest } from 'types'
import { LoggerFactory } from 'utils/LoggerFactory'
import { ForbiddenException } from 'exceptions/ForbiddenException'

export const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: appConfig.oAuth.issuerURL,
})

const logger = LoggerFactory.getLogger('AuthMiddleware')

export const auth = async (req: AuthRequest, _res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    try {
        if (!authHeader?.startsWith('Bearer ')) {
            throw new Error('No bearer token found in in authorization header')
        }

        const bearerToken = authHeader.split(' ')[1]

        if (!bearerToken) {
            throw new Error('No bearer token found in in authorization header')
        }

        const jwt = await oktaJwtVerifier.verifyAccessToken(bearerToken, appConfig.oAuth.audience)
        req.auth = jwt.claims

        next()
    } catch (err) {
        logger.error(err)

        return next(new UnauthorizedException())
    }
}

export const guard = (requiredPermissions: string[]) => (req: AuthRequest, _res: Response, next: NextFunction) => {
    try {
        const claims = req.auth

        const hasPermissions = requiredPermissions.every((requiredPermission) => claims?.scp?.includes(requiredPermission))

        if (!hasPermissions) {
            throw new Error('Insufficient claims in access token')
        }

        next()
    } catch (err) {
        logger.error(err)

        throw new ForbiddenException()
    }
}
