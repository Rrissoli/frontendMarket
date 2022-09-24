import '../styles/dashboard.css'
import { Link, useNavigate } from 'react-router-dom';
import icon1 from '../assets/icon_market.svg'
import icon2 from '../assets/Vector.svg'
import icon3 from '../assets/Vector1.svg'
import Logo from '../assets/logo.png'
function Header() {
    const navigate = useNavigate()
    function handleNavigate() {
        navigate('/account')
    }
    return (
        <div className="container_header">
            <div className="container_logo_header">
                <img src={Logo} alt="" className="log_imagem_header" />
                <h1 className="titulo_logo_header">Market Cubos</h1>
            </div>
            <div className="container_options">
                <div className="options">
                    <img src={icon2} />

                    <p className="optiosP">Meu carrinho</p>
                </div>
                <div className="options">
                    <img src={icon1} />
                    <p>Meus anúncios</p>
                </div>
                <div className="options">
                    <img src={icon3} />
                    <p>Usuário</p>
                </div>
                <button className='btn_sale'
                    onClick={() => handleNavigate()}
                >$  Quero vender</button>
            </div>

        </div>
    )
}
export default Header