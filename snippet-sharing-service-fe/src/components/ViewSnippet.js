import { getSnippet } from '../actions/actions.js'
import React, {useState, useEffect} from 'react';
import {Box} from "@mui/material";
import { useParams } from 'react-router';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

export function ViewSnippet() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const params = useParams();

    useEffect(() => {
        getSnippet(params).then(function (data) {
                if (data === 'not found') {
                    navigate('/notfound');
                } else {
                    setData(data);
                }
            })
    }, []);

    return (
        <div>
            <Box style={{padding: "2rem"}}>
                <h1>Snippet Title</h1>
                <h2>{data.title}</h2>
            </Box>
            <br/>
            <Card style={{ width: '80%', margin: 'auto', marginTop: '2rem' }}>
            <Card.Body>
                <Card.Title>Snippet Content</Card.Title>
                <Card.Text>
                    <pre>{data.content}</pre>
                </Card.Text>
            </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '50%', margin: 'auto', marginTop: '2rem' }}>
            <Card.Body>
                <Card.Text>
                    The link of this page is your unique link to this snippet!
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}