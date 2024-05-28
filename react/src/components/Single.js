import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import AlbumCard from './AlbumCard'

const Single =()=> {

    const [data, setData] = useState([])
    const params = useParams()

    const url = `http://localhost:3005/api/${params.path}/${params.id}`

    useEffect(()=> {
        axios.get(url).then(res => setData(res.data))
    }, [])

    console.log(data)

    // data.forEach(item => {
    //     if (item.hasOwnProperty('alias')) {
    //         console.log('yes')
    //     } else {
    //         console.log('no')
    //     }

    const albumComponents = data.map(item => {

        let artistName
        let path
        let pathId

        if (item.hasOwnProperty('band')) {
            artistName = item.band
            path = 'band'
            pathId = item.band_id
        } else {
            if (item.alias === '') {
                artistName = `${item.fName} ${item.lName}`
            } else {
                artistName = item.alias
    
            }
            path = 'artist'
            pathId = item.artist_id
        }

        return <AlbumCard
                key={item.album_id}
                imgUrl={item.album_cover}
                title={item.title}
                artist={artistName}
                label={item.label}
                yrReleased={item.yr_released}
                path={`/${path}`}
                pathId={pathId}
        />
    })




    return(
        <main className="main" id="singleMain">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    { albumComponents }
                </div>
            </div>
        </main>
    )

}

export default Single