import pinIcon from '../assets/images/location-pin.png'
import '../assets/styles/Location.css'

function Location(props){
    return(
        <div className="location-item">
            <img src={`../images/${props.item.img}`} className="location--img"/>
            <div className="location-details">
                <div className="details--place">
                    <div className="place--pin">
                        <img src={pinIcon}/>
                        <span className="country"><small>{props.item.country}</small></span>
                        <a target="_blank" href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1>{props.item.title}</h1>
                    <p>{`${props.item.startDate} - ${props.item.endDate} `}</p>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Location