const CLIENT_ID = process.env.CLIENT_ID
const REDIRECT_URI = process.env.REDIRECT_URI
const AUTH_ENDPOINT = process.env.AUTH_ENDPOINT
const RESPONSE_TYPE = process.env.RESPONSE_TYPE

export const spotifyApi: string = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`
