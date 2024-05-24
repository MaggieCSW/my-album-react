import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from './Card'


const Artists =()=> {

    const [ artists, setArtists ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/artist')
            .then(res => {
                setArtists(res.data)
            })
    }, [])




    const artistCards = artists.map(artist => {

        let artistName = artist.alias === null ? `${artist.fName} ${artist.lName}` : artist.alias
        
        return <Card 
                    key={artist.artist_id}
                    id={artist.artist_id}
                    name={artistName}
                    imgUrl={artist.imgUrl}
                />

    })

    return (
        <main className="main" id="artistsMain">
            <div className="container">
                <h2>Artists</h2>
                <div className='row row-cols-1 row-cols-md-5 g-4'>
                    {artistCards}
                </div>
            </div>
        </main>
    )
}

export default Artists