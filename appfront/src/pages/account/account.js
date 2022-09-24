import '../../styles/account.css'
import '../../styles/dashboard.css'
import Header2 from '../../components/Header2'
import { getItem, setItem } from '../../utils/storage'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../conexao/api'
import lixeira from '../../assets/lixeira.png'
import pen from '../../assets/pen.png'
function Account() {
    const userName = getItem('userName')
    const token = getItem('token')
    const userId = getItem('userId')
    const [produtos, setProdutos] = useState([])
    let data = []

    const handleSetProducts = async (e) => {
        try {
            axios.defaults.headers.Authorization = `Bearer ${token}`
            const { data } = await axios.get('listarProdutosUser', {
                usuario_id: userId
            })
            console.log(data)
            setProdutos(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        handleSetProducts()
        setProdutos(data)
    }, [Account])
    return (
        <div className="container_account">
            <Header2 />
            <div className="container_account_down">
                <div className="up">
                    <p className="meus_produtos">
                        Meus Produtos
                    </p>
                    <Link to='/addproduct'> <button className='btn_sale'
                    >+ Criar anúncios</button></Link>
                </div>
                <div className='down'>
                    <p className='nome'>Nome</p>
                    <div className="retangule">
                        <p >Estoque</p>
                        <p >Vendidos</p>
                        <p >Valor</p>
                    </div>
                </div>
                <div className="container_produtos_user">
                    {produtos.map((elemento) => (
                        <div className="retangule_product">
                            <img src={elemento.imagem} alt="" className="imagem_produto" />
                            <h1 className="titulo_addProduto">{elemento.nome}</h1>

                            <p className="titulo_addProduto">{elemento.estoque}</p>
                            <p className="titulo_addProduto">{elemento.estoque}</p>
                            <p className="titulo_addProduto">{elemento.preco}</p>

                            <div className="alterar_excluir">
                                <img src={lixeira} alt="" className="lixeira" />
                                <img src={pen} alt="" className="alterar" />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
export default Account