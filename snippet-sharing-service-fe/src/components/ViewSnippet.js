import { getSnippet } from '../actions/actions.js'
import React, {useState, useEffect} from 'react';
import {Box} from "@mui/material";
import { useParams } from 'react-router';
import Accordion from 'react-bootstrap/Accordion';

export function ViewSnippet() {
    const [data, setData] = useState([]);
    const params = useParams();

    useEffect(() => {
        getSnippet(params).then(data =>
            setData(data));
    }, []);

    return (
        <div>
            <Box style={{padding: "2rem"}}>
                <h1>Title</h1>
                <div>{data.title}</div>
            </Box>
            <br/>
            <Accordion defaultActiveKey="0" style={{padding: "2rem"}}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Snippet Content</Accordion.Header>
                    <Accordion.Body>
                        {data.content}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}