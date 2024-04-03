import React, {useState} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';
import { orange } from "@mui/material/colors";

const Listatag = ({ tags })  => {
    const [sortDirection, setSortDirection] = useState('asc');
    const [sortBy, setSortBy] = useState(null);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');

    const handleItemsPerPageChange = (event) => {
        const {value} = event.target;
        if (parseInt(value)>= 0){
        setItemsPerPage(parseInt(value));
        }
    };

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSort = (type) => {
        if (type === sortBy) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(type);
            setSortDirection('asc');
        }
    };

    const filteredTags = tags.filter(tag => tag.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const sortedTags =  [...filteredTags];
    if (sortBy === 'name') {
        sortedTags.sort((a, b) => sortDirection === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    } else if (sortBy === 'count') {
    sortedTags.sort((a, b) => sortDirection === 'asc' ? a.count - b.count : b.count - a.count);
    }

    return (
        <div style ={{overflowX: 'auto'}}>
            <TableContainer component={Paper} style={{maxHeight: 600, minHeight:600, minWidth:400, maxWidth:400, borderRadius: 20, scrollbarWidth:'none'}}>
                <Table style={{ minWidth: 150, borderRadius: 20, }}>
                    <TableHead>
                        <TableRow>
                        <TableCell style={{padding: '8px'}} align = 'left' >
                            <TextField 
                                label='Wyszukaj tag'
                                value={searchTerm}
                                onChange={handleSearchTermChange}
                            />
                        </TableCell>
                        <TableCell style={{padding: '8px'}} align = 'left' >
                            <TextField 
                                label='Ilość wyników na stronie'
                                type='number'
                                value={itemsPerPage}
                                onChange={handleItemsPerPageChange}
                            />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell allign = 'center'>Tag<Button onClick={()=> handleSort ('name')}>({sortBy === 'name' ? ( sortDirection === 'asc' ? '▲' : '▼') : ''})</Button></TableCell>
                            <TableCell allign = 'center'>Liczba Tagów<Button onClick={() => handleSort('count')}> ({sortBy === 'count' ? (sortDirection === 'asc' ? '▼' : '▲') : '' })</Button></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {sortedTags.slice(0, itemsPerPage).map(tag => (
                            <TableRow key ={tag.name}>
                                <TableCell allign = 'center' component='th' scope= 'row'>{tag.name}</TableCell>
                                <TableCell allign = 'center'>{tag.count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>    
        </div>
    );
};

export default Listatag;