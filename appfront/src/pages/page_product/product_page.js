import '../../styles/account.css'
import '../../styles/dashboard.css'
import '../../styles/product_page.css'
import Header2 from '../../components/Header2'
import { getItem, setItem } from '../../utils/storage'
import { useEffect, useState } from 'react'
import axios from '../../conexao/api'
import { fileToBase64, getBase64 } from '../../utils/base64'
import pix from '../../assets/pix.svg'
import card from '../../assets/credit_card.svg'
import barcode from '../../assets/barcode.svg'
function Product_page({ produto_Sel, setProduto_sel }) {
    const [produto, setProduto] = useState([])
    const [numero, setNumero] = useState(0)
    const handleProductPage = async (e) => {
        try {
            const { data } = await axios.get(`produtos/${produto_Sel}`)
            setProduto(data)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(produto)
    useEffect(() => {
        handleProductPage()
    }, [])
    return (
        <div className="container_account">
            <Header2 />

            <div className="container_Product">
                {produto.map((elemento) => (
                    <>
                        <img src={elemento.imagem} alt="" className="imagem_produto" />
                        <div className="container_info_produtos">
                            <h2 className="titulo_info_produtos">{elemento.nome}</h2>
                            <h1 className='titulo_preco'>{`R$${elemento.preco}`}</h1>
                            <p className="negrito">Formas de Pagamento</p>
                            <div className="display-flex">
                                <img src={pix} alt="" />
                                <img src={barcode} alt="" />
                                <img src={card} alt="" />
                            </div>
                            <p>Quantidade</p>
                            <div className="quantidade">
                                <button onClick={() => setNumero(numero - 1)}>-</button>
                                <p>{numero}</p>
                                <button onClick={() => setNumero(numero + 1)}>+</button>
                            </div>
                            <p>Calcular frete e prazo</p>
                            <input type="text" className='quantidade border' placeholder='Digite o CEP' />
                            <div className='display-gap'>
                                <button className='btn_sale'>adicionar ao carrinho</button>
                                <button className='btn_sale'>comprar</button>
                            </div>
                        </div>
                    </>
                ))}

            </div>

        </div >
    )
}
export default Product_page