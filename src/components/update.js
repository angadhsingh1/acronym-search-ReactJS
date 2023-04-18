import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Update() {
    let navigate = useNavigate();
    const [acronymId, setAcronymID] = useState(null);
    const [acronym, setAcronym] = useState('');
    const [acronymsDefinition, setAcronymDefinition] = useState('');

    useEffect(() => {
        setAcronymID(localStorage.getItem('Acronym ID'))
        setAcronym(localStorage.getItem('Acronym Name'));
        setAcronymDefinition(localStorage.getItem('Acronym Definition'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://643adf0590cd4ba56303ed71.mockapi.io/acronyms/${acronymId}`, {
            acronymId,
            acronym,
            acronymsDefinition
        }).then(() => {
            navigate.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Acronym</label>
                    <input placeholder='Acronym' value={acronym} onChange={(e) => setAcronym(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Definition</label>
                    <input placeholder='Acronym Definition' value={acronym} onChange={(e) => setAcronymDefinition(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}