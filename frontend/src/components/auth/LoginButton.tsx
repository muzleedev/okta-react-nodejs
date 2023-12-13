import { useOktaAuth } from '@okta/okta-react'

import { routes } from 'src/router/routes'

export const LoginButton = () => {
    const { oktaAuth } = useOktaAuth()

    return <button onClick={() => oktaAuth.signInWithRedirect({ originalUri: routes.profile })}>Log In</button>
}
