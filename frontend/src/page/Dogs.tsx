import { useEffect, useState } from 'react'
import { useOktaAuth } from '@okta/okta-react'

import { PageLayout } from 'src/components/Layout'
import { getDogs } from 'src/api/api'
import { LoadingContainer } from 'src/components/LoadingContainer'

export const Dog = () => {
    const [dogs, setDogs] = useState()
    const [isFetching, setIsFetching] = useState(true)

    const { oktaAuth } = useOktaAuth()

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const accessToken = oktaAuth.getAccessToken() || ''
                const dogs = await getDogs(accessToken)
                setDogs(dogs)
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
            <LoadingContainer isLoading={isFetching}>
                <h2>Dogs</h2>
                <div style={{ textAlign: 'start' }}>
                    <pre>{JSON.stringify(dogs, null, 2)}</pre>
                </div>
            </LoadingContainer>
        </PageLayout>
    )
}
