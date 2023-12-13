import { ReactNode } from 'react'
import OktaAuth, { toRelativeUrl } from '@okta/okta-auth-js'
import { Security } from '@okta/okta-react'
import { useNavigate } from 'react-router-dom'

import { AppScopes } from 'src/config/appScopes'
import { routes } from 'src/router/routes'

const oktaAuth = new OktaAuth({
    issuer: import.meta.env.VITE_ISSUER,
    clientId: import.meta.env.VITE_CLIENT_ID,
    redirectUri: `${window.location.origin}${routes.loginRedirect}`,
    pkce: true,
    scopes: [AppScopes.openid, AppScopes.profile, AppScopes.email, AppScopes.readDog, AppScopes.createDog],
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate()

    const restoreOriginalUri = (_oktaAuth: unknown, originalUri: string) => {
        navigate(toRelativeUrl(originalUri || '/', window.location.origin))
    }

    return (
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
            {children}
        </Security>
    )
}
