import '../styles/login.css'
import Logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { getItem, setItem } from '../utils/storage'
import { useState } from 'react';
import axios from '../conexao/api'
function Formlogin(user, setUser) {
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        senha: ''
    })
    function handleChangeInputValue(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    useState(() => {
        const token = getItem('token');

        token && navigate('/dashboard');
    })
    const handleSetUser = async (e) => {
        e.preventDefault()


        try {
            const response = await axios.post('login', {
                email: form.email,
                senha: form.senha
            });

            const { token, usuario } = response.data
            setItem('token', token)
            setItem('userId', usuario.id);
            setItem('userName', usuario.nome_da_loja);
            navigate('/dashboard')

        } catch (error) {
            return setErrorMessage(error.response.data.mensagem);
        }
    }




    return (
        <div className="container_form_login">
            <div className="logo_container_cadastro">
                <img src={Logo} alt="" className="logo_imagem_cadastro" />
                <h1 className="titulo_container_logo">Market Cubos</h1>
            </div>
            <form onSubmit={handleSetUser} action="" className="formulario_login">
                <h1 className="boasvindas">Boas Vindas</h1>
                <p>Use seu e-mail e senha para acessar a conta</p>
                <div className='display_container'>
                    <label htmlFor="Email">E-mail</label>
                    <input
                        placeholder='exemplo@email.com'
                        id='Email'
                        name='email'
                        className='input_login'
                        value={form.email}
                        onChange={handleChangeInputValue}
                    />
                </div>
                <div className='display_container'>
                    <label htmlFor="Senha">Senha</label>
                    <input
                        placeholder='Insira sua senha '
                        id='Senha'
                        name='senha'
                        className='input_login'
                        value={form.senha}
                        onChange={handleChangeInputValue}
                    />
                </div>
                <button type='submit' className='btn_Login'>Fazer Login</button>
            </form>
            <p className="paragrafo_direcionador">
                Não possui conta?
                <br />
                <Link to='/SignIn' className='link_direcionador'>Cadastrar-se</Link>
            </p>
        </div>

    )
}
export default Formlogin;
