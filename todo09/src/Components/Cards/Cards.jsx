import styles from './Cards.module.css'
import Destaque from '../Destaque/Destaque'

const Cards = ({produto}) => {
  return(
    <section className={S.container}>
        <picture className={S.contentFoto}>
          <img className={S.foto} />
        </picture>
        <Destaque text={produto.name}/>
        <p>Descrição do produto um pouco maior</p>
        <small>De: </small>
        <Destaque text='Preço' />
        <small>Ou: </small>
        <Botao  text='Comprar' />
    </section>
  )
}

export default Cards