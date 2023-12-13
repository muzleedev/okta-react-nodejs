import { ApiException } from './ApiException'

export class UnauthorizedException extends ApiException {
    constructor() {
        super('Unauthorized', 'Unauthorized', 401)
    }
}
