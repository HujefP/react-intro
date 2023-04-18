function Card(props){
    return(
        <div className="card">
            <h1>{props.title}</h1>
            <img src={props.img} alt="loading" className="card-img"/>
            <div className="price">
                <h4>Rs {props.price} </h4>
                <button className="btn">Order Now</button>
            </div>
        </div>
    )
}

export default Card;