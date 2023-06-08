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
        return resApi
    } catch (err) {
        return err
    }
}

export async function postMeter(meter) {
    try {
        const resApi = await axios.post(API_URL, meter, {
            headers: {
                "API-Key": `${API_KEY}`,
                'Content-Type': 'application/json'
            },
        })
        return resApi
    } catch (err) {
        return err
    }
}

export async function putMeter(meter, id) {
    try {
        const resApi = await axios.put(`${API_URL}/${id}`, meter, {
            headers: {
                "API-Key": `${API_KEY}`,
                'Content-Type': 'application/json'
            },
        })
        return resApi.data
    } catch (err) {
        return err
    }
}

export async function deleteMeter(id) {
    try {
        const resApi = await axios.delete(`${API_URL}/${id}`, {
            headers: {
                "API-Key": `${API_KEY}`,
            },
        })
        return resApi.data
    } catch (err) {
        return err
    }
}