import axios from 'axios';

export const getSnippets = async () => {
    return axios.get('/snippets')
        .then(res => res.data)
}

export const postSnippet = async (data) => {
    return axios.post('/snippet', data)
        .catch((err) => {
            console.log(err)
        }).then (res => res.data)
}

export const getSnippet = async (params) => {
    return axios.get(`/snippet/${params.url_hash}`)
        .then(res => res.data)
}