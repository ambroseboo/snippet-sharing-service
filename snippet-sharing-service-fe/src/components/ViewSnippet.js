import { getSnippet } from '../actions/actions.js'
import React, {useState, useEffect, useRef} from 'react';
import {Box} from "@mui/material";
import { useParams } from 'react-router';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";

export function ViewSnippet() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const params = useParams();
    const wasRendered = useRef(false);

    useEffect(() => {
        if (wasRendered.current) return;
        wasRendered.current = true;
        
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
            <br/>
            <Col className="d-flex">
                <Card style={{ width: '30%', margin: 'auto', marginTop: '2rem' }}>
                <Card.Body>
                    <Card.Title>View Count</Card.Title>
                    <Card.Text>
                        <pre>{data.views}</pre>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '30%', margin: 'auto', marginTop: '2rem' }}>
                <Card.Body>
                    <Card.Title>Time left to expiry</Card.Title>
                    <Card.Text>
                        <pre>{data.time_left} minutes</pre>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
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