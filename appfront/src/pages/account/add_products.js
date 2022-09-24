import '../../styles/account.css'
import '../../styles/dashboard.css'
import Header2 from '../../components/Header2'
import { getItem, setItem } from '../../utils/storage'
import { useEffect, useState } from 'react'
import axios from '../../conexao/api'
import { fileToBase64, getBase64 } from '../../utils/base64'
function Add_product() {
    const userName = getItem('userName')
    const userId = getItem('userId')
    const [form, setForm] = useState({
        usuario_id: userId,
        nome: '',
        estoque: '',
        preco: '',
        categoria: '',
        descricao: '',
        nome_imagem: '',
    })
    function handleChangeInputValue(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const [file, setFile] = useState('');
    const token = getItem('token');
    const [Iimage, setImage] = useState({ photo: '' })
    const onChangeImage = async (evt) => {
        const photo = await getBase64(evt.target.files[0]);
        setImage(old => ({ ...old, 'photo': photo }));
    };
    const handleSetProduct = async (e) => {
        e.preventDefault()
        let imagem = Iimage.photo
        imagem = imagem.replace('data:image/png;base64', '')
        console.log(userId)
        console.log({
            categoria: form.categoria,
            userId: userId
        })
        try {
            axios.defaults.headers.Authorization = `Bearer ${token}`

            const response = await axios.post('cadastrarProduto', {
                usuario_id: userId,
                nome: form.nome,
                estoque: form.estoque,
                preco: form.preco,
                categoria: form.categoria,
                descricao: form.descricao,
                imagem: imagem,
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }


    }
    return (
        <div className="container_account">
            <Header2 />

            <div className="container_account_down">
                <form onSubmit={handleSetProduct}>
                    <div className='down_addProduct'>
                        <h1 className='titulo_addProuduct'>
                            Adicionar novo produto
                        </h1>

                        <div className='display-row'>
                            <div className='display-collums'>
                                <label htmlFor="nome_produto">Nome do Produto</label>
                                <input
                                    placeholder='Nome do Produto'
                                    id='nome_produto'
                                    name='nome'
                                    className='input_login width-major'
                                    value={form.nome}
                                    onChange={handleChangeInputValue}
                                />
                            </div>
                            <div className='display-collums'>
                                <label htmlFor="categoria">categoria</label>
                                <select name="categoria" id="" className='input_login width-meno' onChange={handleChangeInputValue}>
                                    <option value="Acessórios">Acessórios</option>
                                    <option value="Alimentos">Alimentos</option>
                                    <option value="Beleza">Beleza</option>
                                    <option value="Blusas">Blusas</option>
                                    <option value="Calçados">Calçados</option>
                                    <option value="Cama e Mesa">Cama e Mesa</option>
                                    <option value="Celulares">Celulares</option>
                                    <option value="Decoração">Decoração</option>
                                    <option value="Esporte">Esporte</option>
                                    <option value="Games">Games</option>
                                    <option value="Informática">Informática</option>
                                    <option value="Livros">Livros</option>
                                    <option value="Papelaria">Papelaria</option>
                                    <option value="Pets">Pets</option>
                                </select>
                            </div>
                        </div>
                        <div className="display-collums">
                            <label htmlFor="Descricao">Descrição</label>
                            <input
                                className='input_login width-Max'
                                type="text"
                                placeholder='Ex: tamanho G , Coleira com detalhes brancos...'
                                id='Descricao'
                                name='descricao'
                                value={form.descricao}
                                onChange={handleChangeInputValue}
                            />
                        </div>
                        <div className='display-flex'>
                            <div className='display-collums'>
                                <label htmlFor="Preco">Preço</label>
                                <input
                                    placeholder='ex: R$99,99'
                                    id='Preco'
                                    name='preco'
                                    value={form.preco}
                                    onChange={handleChangeInputValue}
                                    className='input_login width-meno'
                                />
                            </div>
                            <div className='display-collums'>
                                <label htmlFor="estoque">Estoque</label>
                                <input
                                    placeholder='ex: 10 un.'
                                    id='estoque'
                                    name='estoque'
                                    value={form.estoque}
                                    onChange={handleChangeInputValue}
                                    className='input_login width-meno'
                                />
                            </div>
                        </div>
                        <label className='picture' htmlFor="picture__input" tabIndex='0'>
                            <input type="file"
                                accept='image/*'
                                className='picture__input'
                                id='picture__input'
                                name='imagem'
                                onChange={onChangeImage}
                            />
                            <span className='picture__image'>Selecionar Imagem</span>
                        </label>


                    </div>
                    <div className="btns">
                        <button type='submit' className='btn_Login'>Publicar Anúncio</button>
                        <button className='btn_Login disable_color'>Cancelar</button>
                    </div>
                </form>
            </div>


        </div >
    )
}
export default Add_product