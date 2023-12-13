import { useOktaAuth } from '@okta/okta-react'

import { PageLayout } from 'src/components/Layout'

export const Profile = () => {
    const { authState } = useOktaAuth()

    return (
        <PageLayout>
            <h2>Profile</h2>
            <div style={{ textAlign: 'start' }}>
                <pre>{JSON.stringify(authState?.idToken, null, 2)}</pre>
            </div>
        </PageLayout>
    )
}
