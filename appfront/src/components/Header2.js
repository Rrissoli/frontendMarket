import Logo from '../assets/logo.png'
import '../styles/account.css'
import { getItem, setItem } from '../utils/storage'
import icon3 from '../assets/Vector1.svg'
import icon4 from '../assets/voltar.svg'
import { Link } from 'react-router-dom'
function Header2() {
    const userName = getItem('userName')
    const token = getItem('token')

    return (
        <div className="container_header">
            <div className="options">
                <Link to='/dashboard'><img src={icon4} /></Link>
            </div>

            <div className="container_logo_header">
                <img src={Logo} alt="" className="log_imagem_header" />
                <h1 className="titulo_logo_header">Market Cubos</h1>
            </div>
            <div className="options">
                <img src={icon3} />
                <p>{userName}</p>
            </div>


        </div>
    )
}
export default Header2