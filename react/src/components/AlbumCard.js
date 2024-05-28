import { Link } from 'react-router-dom'

const AlbumCard =(props)=> {
    
    return(
        <div className="col">
            <div className="card album-card h-100">
                <img src={`/images/${props.imgUrl}`} alt={`image of ${props.title}`} className="img-fluid image card-img-top album-image"/>
                <div className="card-body">
                    <h3 className="card-title album-title">{props.title}</h3>
                    <p className="card-text"> 
                        <Link to={`${props.path}/${props.pathId}`}>
                        {props.artist}
                        </Link>
                    | {props.label} | {props.yrReleased}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AlbumCard