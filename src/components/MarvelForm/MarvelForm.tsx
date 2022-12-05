import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { chooseDescription, chooseName, chooseSuperhero, chooseSuperpower, chooseNumOfComics } from '../../redux/slices/rootSlice';
import { Input } from '../../components'

const myStyles = {
    headerButton: {
        fontFamily: 'bangers',
        color: 'white',
        fontSize: '28px',
        borderRadius: '7px',
        border: '2px solid #d61a28',
        backgroundColor: '#d61a28',
        padding:'0 4vh 0 4vh',
        margin:'0.5vw 0 0 1vw',
        "&:hover": {
            color:'#d61a28',
            backgroundColor: 'white',
            transition: '0.25s ease',
        }
    },
}

interface MarvelFormProps {
    id?: string;
    data?: {};
}

interface MarvelState {
    superhero_name: string;
    name: string;
    description: string;
    num_of_comics: number;
    superpower: string;
}

export const MarvelForm = (props:MarvelFormProps) => {
    const dispatch = useDispatch();
    let { marvelData, getData } = useGetData();
    const store = useStore()
    const { register, handleSubmit } = useForm({})

    const onSubmit = async (data: any, event: any) => {
        console.log(props.id)
        if (props.id!) {
            await serverCalls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseSuperhero(data.superhero_name))
            dispatch(chooseName(data.name))
            dispatch(chooseDescription(data.description))
            dispatch(chooseNumOfComics(data.num_of_comics))
            dispatch(chooseSuperpower(data.superpower))
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='superhero_name'>Superhero Alias Name</label>
                    <Input {...register('superhero_name')} name='superhero_name' placeholder='Enter Superhero Alias Name'/>
                </div>
                <div>
                    <label htmlFor='name'>Character Name</label>
                    <Input {...register('name')} name='name' placeholder='Enter Character Name'/>
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <Input {...register('description')} name='description' placeholder='Enter Description'/>
                </div>
                <div>
                    <label htmlFor='num_of_comics'>Number of Comics Appeared In</label>
                    <Input {...register('num_of_comics')} name='num_of_comics' placeholder='Enter Number of Comics'/>
                </div>
                <div>
                    <label htmlFor='superpower'>Superpower or Specialty</label>
                    <Input {...register('superpower')} name='superpower' placeholder='Enter Superpower or Specialty'/>
                </div>

                    <Button type='submit' sx={myStyles.headerButton}>Submit</Button>
            </form>
        </div>
    )
}