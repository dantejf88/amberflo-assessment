import axios from 'axios'
// import { process } from 'dotenv'

const API_URL = import.meta.env.VITE_API_HOST
const API_KEY = import.meta.env.VITE_API_KEY

export async function getMeters() {
    try {
        const resApi = await axios.get(API_URL, {
            headers: {
                "API-Key": `${API_KEY}`
            },
        })
        return resApi.data
    } catch (err) {
        return err
    }
}