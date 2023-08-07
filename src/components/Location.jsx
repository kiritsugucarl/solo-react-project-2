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
                        <span className="country"><small>{props.item.country.toUpperCase()}</small></span>
                        <small><a target="_blank" href={props.item.googleMapsUrl}>View on Google Maps</a></small>
                    </div>
                    <h1 className="details--title">{props.item.title}</h1>
                    <p className="details--date">{`${props.item.startDate} - ${props.item.endDate} `}</p>
                    <p className="details--desc">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Location