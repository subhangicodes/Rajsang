// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Exploremenu.css';
import { menu_list } from '../../assets/assets';

// eslint-disable-next-line react/prop-types
const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>choose your favourite food</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <>
                    <div 
                    key={index}
                    onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} 
                    className='explore-menu-list-item'
                    >
                         <img className={category===item.menu_name?"active":""} 
                         id="explore-menu-image" 
                         src={item.menu_image} 
                         alt={item.menu_name}
                         />
                         
                         <p>{item.menu_name}</p>
                    </div>
                    </>
                )
            })
            }
        </div>
        <hr/>
    </div>
  )
}

export default Exploremenu;
