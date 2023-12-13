export const appConfig = {
    server: {
        port: process.env.PORT || '5000',
    },
    oAuth: {
        issuerURL: process.env.ISSUER_URL || '',
        audience: process.env.AUDIENCE || '',
    },
}
