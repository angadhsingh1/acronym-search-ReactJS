import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Update() {
    const navigate = useNavigate();
    const [acronymId, setAcronymId] = useState(null);
    const [acronym, setAcronym] = useState('');
    const [acronymsDefinition, setAcronymsDefinition] = useState('');

    useEffect(() => {
        setAcronymId(localStorage.getItem('Acronym ID'));
        setAcronym(localStorage.getItem('Acronym Name'));
        setAcronymsDefinition(localStorage.getItem('Acronym Definition'));
    }, []);

    const postData = () => {
        axios.post("https://643adf0590cd4ba56303ed71.mockapi.io/acronyms", {
            acronym: acronym,
            acronymsDefinition: acronymsDefinition
        })
    };

    return (
        <div>
            <h3 className="main-header">New Acronym</h3>
            <Form className="create-form">
                <Form.Field>
                    <input placeholder='Enter Acronym' onChange={(e) => setAcronym(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <input placeholder='Enter Definition' onChange={(e) => setAcronymsDefinition(e.target.value)} />
                </Form.Field>
            </Form>
            <Link to="/landingPage">
                <Button  onClick={postData} style={{margin: '10px'}}>Submit</Button>
                <Button style={{margin: '10px'}}>Cancel</Button>
            </Link>
        </div>
    )
}
