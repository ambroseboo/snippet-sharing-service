import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect} from 'react';
import { getSnippets } from '../actions/actions.js';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';


export function GetSnippets() {
    const [data, setData] = useState([]);
    const [isSortedByViews, setSortedByViews] = useState(false);

    useEffect(() => {
        getSnippets().then(data => setData(data));
    }, []);

    const sortByViews = () => {
        setData([...data].sort((a, b) => a.views > b.views ? -1 : 1))
    }

    return (
    <div className='container my-5' style={{ display: 'block', justifyContent: 'center', alignItems: 'center'}}>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort By...
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={sortByViews}>Views</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <br/>

        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>Title</th>
                <th>Added Date</th>
                <th>Expiry Date</th>
                <th>Views</th>
            </tr>
            </thead>
            <tbody>
                { data.map(item => (
                <tr key={item.snippet_id}>
                    <td>{item.title}</td>
                    <td>{new Date(item.added_date).toString()}</td>
                    <td>{new Date(item.expiry_date).toString()}</td>
                    <td>{item.views/2}</td>
                </tr>
                ))}
            </tbody>
        </Table> 
    </div>  
    ) 
}