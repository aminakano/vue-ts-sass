import axios from 'axios';

export const QuizApi = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10'
})

export async function getInfo(){
    const response = await QuizApi.get('/api/')
    console.log(response)
    return response.data;
}