import React from 'react'
import { useOktaAuth } from '@okta/okta-react'

import { LoginButton } from 'src/components/auth/LoginButton'
import { LogoutButton } from 'src/components/auth/LogoutButton'

export const AuthNav: React.FC = () => {
    const { authState } = useOktaAuth()

    return (
        <div className="auth-nav">
            {!authState?.isAuthenticated && (
                <>
                    <LoginButton />
                </>
            )}
            {authState?.isAuthenticated && (
                <>
                    <LogoutButton />
                </>
            )}
        </div>
    )
}
