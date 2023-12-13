import { useOktaAuth } from '@okta/okta-react'

export const LogoutButton = () => {
    const { oktaAuth } = useOktaAuth()

    return <button onClick={() => oktaAuth.signOut()}>Log Out</button>
}
