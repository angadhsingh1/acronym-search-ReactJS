import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Read() {
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

    const getData = () => {
        axios.get(`https://643adf0590cd4ba56303ed71.mockapi.io/acronyms`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://643adf0590cd4ba56303ed71.mockapi.io/acronyms/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Acronym Id</Table.HeaderCell>
                        <Table.HeaderCell>Acronym</Table.HeaderCell>
                        <Table.HeaderCell>Definition</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.acronymId}</Table.Cell>
                                <Table.Cell>{data.acronym}</Table.Cell>
                                <Table.Cell>{data.acronymsDefinition}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}