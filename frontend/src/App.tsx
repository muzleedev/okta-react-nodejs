import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from 'src/auth/AuthProvider'
import { AppRoutes } from 'src/router/AppRoutes'
import 'src/styles/App.css'

export const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </BrowserRouter>
    )
}
