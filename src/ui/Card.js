import cardCSS from './Card.module.css';


function Card(props) {

    return <div className={cardCSS.card}>
        {props.children}
    </div>
}

export default Card;