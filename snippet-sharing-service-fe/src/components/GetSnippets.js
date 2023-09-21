import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect} from 'react';
import { getSnippets } from '../actions/actions.js';



export function GetSnippets() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getSnippets().then(data => setData(data));
    }, []);

    return (
    <div className='container my-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <table className='table table-striped'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Content</th>
                <th>Added Date</th>
                <th>Expiry Date</th>
                <th>Views</th>
            </tr>
            </thead>
            <tbody>
                { data.map(item => (
                <tr key={item.snippet_id}>
                    <td>{item.snippet_id}</td>
                    <td>{item.title}</td>
                    <td>{item.content}</td>
                    <td>{item.added_date}</td>
                    <td>{item.expiry_date}</td>
                    <td>{item.views}</td>
                </tr>
                ))}
            </tbody>
        </table> 
    </div>  
    ) 
}