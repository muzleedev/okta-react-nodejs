import { useEffect } from 'react'
import { useOktaAuth } from '@okta/okta-react'
import { toRelativeUrl } from '@okta/okta-auth-js'
import { Outlet } from 'react-router-dom'

import { Loading } from 'src/components/Loading'

// TODO replace with the official SecureRoute implementation once the lib will support it
export const SecureRoutes = () => {
    const { oktaAuth, authState } = useOktaAuth()

    useEffect(() => {
        if (!authState) {
            return
        }

        if (!authState?.isAuthenticated) {
            const originalUri = toRelativeUrl(window.location.href, window.location.origin)
            oktaAuth.setOriginalUri(originalUri)
            oktaAuth.signInWithRedirect()
        }
    }, [oktaAuth, authState?.isAuthenticated, authState])

    if (!authState || !authState?.isAuthenticated) {
        return <Loading />
    }

    return <Outlet />
}
