import axios from 'axios';
const proxy = "https://snippet-sharing-service-backend.onrender.com";

export const getSnippets = async () => {
    return axios.get(proxy + '/snippets')
        .then(res => res.data)
}

export const postSnippet = async (data) => {
    return axios.post(proxy + '/snippet', data)
        .catch((err) => {
            console.log(err)
        }).then (res => res.data)
}

export const getSnippet = async (params) => {
    return axios.get(`${proxy}/snippet/${params.url_hash}`)
        .then(res => res.data)
}