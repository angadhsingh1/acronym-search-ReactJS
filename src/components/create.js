import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Table } from 'semantic-ui-react'
import axios from 'axios';

import SearchBar from "./SearchBar";
import SearchBB from "./SearchBB";
import { Link } from 'react-router-dom';


export default function Create() {
    const [acronym, setAcronyms] = useState('');
    const [acronymsDefinition, setAcronymsDefinition] = useState('');
    const postData = () => {
        axios.post("https://643adf0590cd4ba56303ed71.mockapi.io/acronyms", {
            acronym,
            acronymsDefinition
        })
    }

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://643adf0590cd4ba56303ed71.mockapi.io/acronyms`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { acronymId, acronym, acronymsDefinition} = data;
        localStorage.setItem('Acronym ID', acronymId);
        localStorage.setItem('Acronym Name', acronym);
        localStorage.setItem('Acronym Definition', acronymsDefinition);
    }

    
    return (
        
        <div>
            <Form className="create-form">
                <Form.Field>
                    <input placeholder='Search Acronyms' onChange={(e) => setAcronyms(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='Search'>Search</Button>
        
                <Link to='/read'>
                    <Button>New Acronym</Button>
                </Link>

                {/* <SearchBar /> */}
                <SearchBB />
            </Form>
        </div>
        
    );
}