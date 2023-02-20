import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function getHabits(token) {
    const promise = axios.get(BASE_URL, createConfig(token))
    return promise
}

function createHabit() {
    const promise = axios.post(BASE_URL, createConfig(token))
    return promise
}

function deleteHabit(token, id) {
    const promise = axios.delete(`${BASE_URL}/${id}`, createConfig(token))
    return promise
}


const apiHabits = { getHabits, createHabit, deleteHabit }
export default apiHabits