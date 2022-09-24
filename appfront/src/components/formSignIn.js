import '../styles/login.css'
import Logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from '../conexao/api'
function FormSignIn({ signInUSer, setSignInUser }) {
    const [msg, setMsg] = useState('')
    const [signIn, setSignIn] = useState({})
    const [form, setFom] = useState({
        nome_da_loja: '',
        email: '',
        senha: '',
        confSenha: ''
    })
    const navigate = useNavigate()


    function handleChangeInputValue(e) {
        setFom({ ...form, [e.target.name]: e.target.value });
    }



    const handleSignIn = async (event) => {
        event.preventDefault()

        if (form.confSenha !== form.senha) return
        setSignIn({
            nome_da_loja: form.nome_da_loja,
            email: form.email,
            senha: form.senha
        })

        console.log(form)
        try {
            const response = await axios.post('cadastrarUsuario', {
                nome_da_loja: form.nome_da_loja,
                email: form.email,
                senha: form.senha
            })

            if (response) {
                setMsg(response.data)
            }

            navigate('/login')
        } catch (error) {
            return console.error(error.message)
        }

    }

    return (
        <div className="container_form_login">
            <div className="logo_container_cadastro">
                <img src={Logo} alt="" className="logo_imagem_cadastro" />
                <h1 className="titulo_container_logo">Market Cubos</h1>
            </div>
            <form onSubmit={handleSignIn} action="" className="formulario_login">
                <h1 className="boasvindas">Cadastre-se</h1>
                <div className='display_container'>
                    <label htmlFor="nome_loja">Nome da loja</label>
                    <input
                        id='nome_loja'
                        name='nome_da_loja'
                        className='input_login'
                        value={form.nome_da_loja}
                        onChange={handleChangeInputValue}
                        required
                    />
                </div>
                <div className='display_container'>
                    <label htmlFor="Email">E-mail</label>
                    <input
                        id='Email'
                        name='email'
                        className='input_login'
                        value={form.email}
                        onChange={handleChangeInputValue}
                        required
                    />
                </div>
                <div className='display_container'>
                    <label htmlFor="senha">Senha</label>
                    <input
                        id='senha'
                        name='senha'
                        className='input_login'
                        value={form.senha}
                        onChange={handleChangeInputValue}
                        required
                    />
                </div>
                <div className='display_container'>
                    <label htmlFor="confsenha">Confirmar Senha</label>
                    <input
                        id='confsenha'
                        name='confSenha'
                        className='input_login'
                        value={form.confSenha}
                        onChange={handleChangeInputValue}
                        required

                    />
                </div>
                <p className="paragrafo_direcionador text-align">
                    Ao criar uma conta, você concorda com a nossa
                    <a className='link_direcionador'>Política de Privacidade e Termos de serviço</a>
                </p>
                <button type='submit' className='btn_Login'>Criar Conta</button>
            </form>
            <p className='paragrafo_direcionador red'>{msg}</p>
            <p className="paragrafo_direcionador">
                Já tem uma conta?
                <Link to='/login' className='link_direcionador'>Fazer login</Link>
            </p>

        </div>

    )
}
export default FormSignIn;