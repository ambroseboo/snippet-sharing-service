import axios from 'axios';

export const getSnippets = async () => {
    return axios.get('/snippets')
        .then(res => res.data)
}

export const postSnippet = async (data) => {
    axios.post('/snippet', data)
        .catch((err) => {
            console.log(err)
        })
}

export const getSnippet = async (params) => {
    return axios.get(`/snippet/${params.url_hash}`)
        .then(res => res.data)
}