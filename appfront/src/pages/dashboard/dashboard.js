import '../../styles/dashboard.css'
import Header from '../../components/header'
import axios from '../../conexao/api'
import { useEffect, useState, } from 'react'
import { Link, useNavigate } from 'react-router-dom';
function Dashboard({ produto_Sel, setProduto_sel }) {
    const [produtos, setProdutos] = useState([])
    let data = []
    const navigate = useNavigate()

    const handleSetProducts = async (e) => {
        try {
            const { data } = await axios.get('produtos')
            setProdutos(data)
        } catch (error) {
            console.log(error.message)
        }
    }
    const handleSelectProduct = async (id) => {
        try {
            setProduto_sel(id)
            navigate('/productpage')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleSetProducts()
        setProdutos(data)
    }, [Dashboard])

    return (
        <div className="container_dashboard">
            <Header />
            <div className="container_list_products">
                {produtos.map((elemento) => (
                    <div className="squad_product" onClick={() => handleSelectProduct(elemento.id)}>
                        <img src={elemento.imagem} className='img_squad' />
                        <div className='div_absolute'>
                            <h1 className="titulo_product">{elemento.nome}</h1>
                            <h1 className="preco">{`R$${elemento.preco}`}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}
export default Dashboard