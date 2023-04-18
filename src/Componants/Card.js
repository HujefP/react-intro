

function Card(props){
    function foodhandler(){
        console.log("Order Succesfull: ", props.title);
        if(props.price <= 40){
            console.log("30rs Delivery Charges Applied Updated Price: ", props.price +30 )
        }
        else {
            console.log("Free Delivery total:", props.price)
        }
    }
    function cardhandler(){
     console.log("Order Now");
    }
    return(
        <div className="card" onMouseOver={cardhandler}>
            <h1>{props.title}</h1>
            <p className={props.price >= 40 ?'Must-Try' : 'd-none'}>Must Try</p>
            <img src={props.img} alt="loading" className="card-img"/>
            <div className="price">
                <h4>Rs {props.price} </h4>
                <button className="btn" onClick={foodhandler}>Order Now</button>
            </div>
        </div>
    )
}

export default Card;