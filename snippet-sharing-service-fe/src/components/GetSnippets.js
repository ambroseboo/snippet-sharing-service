import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect} from 'react';
import { getSnippets } from '../actions/actions.js';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Paginations from './Paginations.js';

export function GetSnippets() {
    const [data, setData] = useState([]);
    const [itemRange, setItemRange] = useState([0, 10]);

    const sortByRecent = () => {
        setData([...data].sort((a, b) => a.added_date > b.added_date ? -1 : 1));
    }

    const sortByViews = () => {
        setData([...data].sort((a, b) => a.views > b.views ? -1 : 1));
    }

    useEffect(() => {
        getSnippets().then(data => setData(data));
    }, []);

    const paginate = pageNumber => {
        setItemRange([(pageNumber-1)*10, pageNumber*10]);
    }

    return (
    <div className='container my-5' style={{ display: 'block', justifyContent: 'center', alignItems: 'center'}}>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort By...
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={sortByViews}>Views</Dropdown.Item>
                <Dropdown.Item onClick={sortByRecent}>Most Recent</Dropdown.Item>
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
                { Array.isArray(data) && data.slice(itemRange[0], itemRange[1])?.map(item => (
                <tr key={item.snippet_id}>
                    <td>{item.title}</td>
                    <td>{new Date(item.added_date).toString()}</td>
                    <td>{new Date(item.expiry_date).toString()}</td>
                    <td>{item.views}</td>
                </tr>
                ))}
            </tbody>
        </Table> 

        <br/>
        <Table>
            <Paginations
            totalItems= {Object.keys(data).length}
            paginate={paginate}
            />
        </Table>
    </div>  
    ) 
}