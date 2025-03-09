
import { useContext } from 'react'
import './FoodItem.css';
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {
  
  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img id="food-item-image" className="food-item-image" src={image}/>
            {
              !cartItems[id]
              ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/>
              :<div className='food-item-counter'>
                <img className='red_minus'onClick={()=>removeFromCart(id)}src={assets.remove_icon_red} alt=""/>
                <p>{cartItems[id]}</p>
                <img className='green_plus'onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""/>
              </div>
            }
    </div>
    <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
             <img src={assets.star} alt=""/> 
            
</div>
        <p className='food-item-desc'>{description}</p>
        <p className="food-item-price">Rs.{price}</p>

    </div>
    </div>
  )
}

export default FoodItem