
import React, { Fragment } from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ( ) => {

    //const categoires = ['One Punch', 'Samurai X', 'Naruto']

    const [categories, setCategories] = useState(['Naruto']);

    // const handleAdd = (e) => {
    //     setCategories ( cats => [...cats, 'OtroAnime'] );
    // }

    return(

        <Fragment>

            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( (category, i) => {
                        return <GifGrid 
                            key = {category}
                            category = {category} 
                        />
                    })
                }
            </ol>

        </Fragment>
        
    )

} 
