// cuando se usa sin joi
export const EnvConfiguration = () => ({
    envitoment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3000,
    defaultLimit: process.env.DEFAULT_LIMIT || 10,
})