import { useOktaAuth } from '@okta/okta-react'
import { useEffect, useState } from 'react'

import { PageLayout } from 'src/components/Layout'
import { LoadingContainer } from 'src/components/LoadingContainer'

export const UserInfo = () => {
    const [isFetching, setIsFetching] = useState(true)
    const [userInfo, setUserInfo] = useState<unknown>()
    const { oktaAuth } = useOktaAuth()

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const userInfo = await oktaAuth.getUser()
                setUserInfo(userInfo)
            } catch (e) {
                console.error(e)
            } finally {
                setIsFetching(false)
            }
        }

        fetchDogs()
    }, [oktaAuth])

    return (
        <PageLayout>
            <h2>User info</h2>
            <LoadingContainer isLoading={isFetching}>
                <div style={{ textAlign: 'start' }}>
                    <pre>{JSON.stringify(userInfo, null, 2)}</pre>
                </div>
            </LoadingContainer>
        </PageLayout>
    )
}
