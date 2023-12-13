import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginCallback } from '@okta/okta-react'

import { routes } from 'src/router/routes'
import { SecureRoutes } from 'src/auth/SecureRoutes'
import { Loading } from 'src/components/Loading'
import { Home } from 'src/page/Home'
import { Profile } from 'src/page/Profile'
import { UserInfo } from 'src/page/UserInfo'
import { Dog } from 'src/page/Dogs'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={routes.loginRedirect} element={<LoginCallback loadingElement={<Loading />} />} />

            <Route path={routes.home} element={<Home />} />
            <Route path={routes.dogs} element={<Dog />} />

            <Route path="" element={<SecureRoutes />}>
                <Route path={routes.userInfo} element={<UserInfo />} />
                <Route path={routes.profile} element={<Profile />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
