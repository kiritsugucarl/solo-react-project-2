import '../assets/styles/Header.css'
import globe from '../assets/images/globe.png'

function Header(){
    return(
        <header>
            <img alt="globe" src={globe} />
            <h3>my travel journal.</h3>
        </header>
    )
}

export default Header