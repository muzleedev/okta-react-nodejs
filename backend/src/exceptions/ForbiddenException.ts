import { ApiException } from './ApiException'

export class ForbiddenException extends ApiException {
    constructor() {
        super('Forbidden', 'Forbidden', 403)
    }
}
