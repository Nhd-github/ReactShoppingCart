import { Component } from "react";

export default class CartProduct extends Component {
    removeHandler(id){
        console.log(id)
        this.props.onRemove(id)
    }
    render() {
        let {id,title,price,img}=this.props
        return (
            <div className="cart-row">
                <div className="cart-item cart-column">
                    <img src={img} alt="" width={100} height={100} className="cart-item-img" />
                    <span className="cart-item-title">{title}</span>
                </div>
                <span className="cart-price cart-column">${price}</span>
                <div className="cart-quantity cart-column">
                    <button onClick={this.removeHandler.bind(this,id)} type="button" className="btn btn-danger">REMOVE</button>
                </div>
            </div>
        )
    }
}