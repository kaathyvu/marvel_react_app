import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import {
    Box,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from '@mui/material';
import { useGetData } from '../../custom-hooks/';
import { MarvelForm } from '../MarvelForm';
import { serverCalls } from '../../api';
import images from '../../assets/images'

const myStyles = {
    container: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'70%',
        height:'100vh'
    },
    headerButton: {
        fontFamily: 'bangers',
        color: '#d61a28',
        fontSize: '28px',
        borderRadius: '7px',
        border: '2px solid #d61a28',
        backgroundColor: 'white',
        padding:'0 4vh 0 4vh',
        margin:'0.5vw 1vw 1vh auto',
        "&:hover": {
            color:'white',
            backgroundColor: '#d61a28',
            transition: '0.25s ease',
        }
    },
    headerButton2: {
        fontFamily: 'bangers',
        color: 'white',
        fontSize: '28px',
        borderRadius: '7px',
        border: '2px solid #d61a28',
        backgroundColor: '#d61a28',
        padding:'0 4vh 0 4vh',
        margin:'0.5vw 0 1vh auto',
        "&:hover": {
            color:'#d61a28',
            backgroundColor: 'white',
            transition: '0.25s ease',
        }
    },
    headerH2: {
        fontFamily: 'bangers',
        fontSize: '3em',
        lineHeight: '1em',
    },
    mainH6: {
        fontSize: '1em',
        textAlign: 'center' as 'center', 
    }
}

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90
    },
    {
        field: 'superhero_name',
        headerName: 'Superhero Alias',
        width: 150,
        editable: true,
    },
    {
        field: 'name',
        headerName: 'Character Name',
        width: 150,
        editable: true,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 150,
        editable: true,
    },
    {
        field: 'num_of_comics',
        headerName: 'Number of Comics',
        width: 150,
        editable: true,
    },
    {
        field: 'superpower',
        headerName: 'Superpower or Specialty',
        width: 175,
        editable: true,
    },
];

interface gridData{
    data: {
        id?: string;
    }
}

export const DataTable = () => {
    let { marvelData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () => {
        setOpen(true);
    };
    let handleClose = () => {
        setOpen(false);
    };

    let deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    };

    console.log(gridData)

    const MyAuth = localStorage.getItem('myAuth')
    console.log(MyAuth)

    if (MyAuth == 'true') {
        return (
            <div style={{ height: 400, width: '100%', backgroundColor:'white', marginTop:'1vh'}}>
                
                <DataGrid
                    rows={marvelData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
                    {...marvelData}
                />
        
                <Button onClick={handleOpen} sx={myStyles.headerButton}>Update</Button>
                <Button onClick={deleteData} sx={myStyles.headerButton2}>Delete</Button>
        
                <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                    <DialogTitle id='form-dialog-title' sx={myStyles.headerH2}>Update Marvel Character</DialogTitle>
                    <DialogContent>
                        <DialogContentText style={myStyles.mainH6}>
                            Marvel Character ID: {gridData[0]}
                        </DialogContentText>
                            <MarvelForm id={`${gridData[0]}`}/>
                    </DialogContent>
        
                    <DialogActions>
                        <Button onClick={handleClose} sx={myStyles.headerButton}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    } else {
        return (
            <div style={{textAlign:'center', marginTop:'3vh'}}>
                <h2 style={myStyles.headerH2}>Please sign in to view your data</h2>
                <Button sx={myStyles.headerButton2} href='/signin'>Sign In Here</Button>
            </div>
        )
    }
}