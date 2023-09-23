import axios from 'axios';
const proxy = "https://snippet-sharing-service-backend.onrender.com"; // need to add proxy link since backend and frontend are hosting on different platforms

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
        .then(data => {
            if (data !== 'not found') {
                data['time_left'] = Math.round((new Date(data['expiry_date']) - new Date)/60000);
                data['views'] += 1; // add one view for the current viewing of the snippet
            }
            return data;
        })
}