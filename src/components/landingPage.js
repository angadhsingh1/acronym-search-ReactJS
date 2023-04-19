import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Table, Search } from 'semantic-ui-react'
import axios from 'axios';

import SearchBar from "./SearchBar";
import SearchBB from "./SearchBB";
import Results from "./results";

import { Link } from 'react-router-dom';


export default function Create() {
    const [acronym, setAcronyms] = useState('');
    const [acronymsDefinition, setAcronymsDefinition] = useState('');

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
            <h2 className="main-header">Welcome!</h2>
            <SearchBB />
        </div>
        
    );
}