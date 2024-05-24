import { useState, useEffect } from 'react'
import axios from 'axios'

const Albums =()=> {

    const [ albums, setAlbums ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/album')
            .then(res => {
                setAlbums(res.data)
            })
    }, [])

// console.log(albums)  => lets you see data in console

    return (
        <main className="main" id="albumsMain">
            <div className="container">
                <h2>Albums</h2>
            </div>
        </main>
    )
}

export default Albums