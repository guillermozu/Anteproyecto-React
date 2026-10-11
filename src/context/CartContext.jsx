import { useContext, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";


const CartContext = createContext();


export const useCard = () =>{

  const context = useContext(CartContext);
  if(!context){

    throw new Error("useCard debe usarse dentro del contexto de CartProvider");
  }


    return context

};

export const CartProvider = ({children}) => {

  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const isInCart = () =>{

    const isInCart = cart.some((element)=> element.id === item.id);
    return inCart;
  }
//Agregar al carrito
   const addItem = (item){

    if(isInCart){
        alert("El producto ya existe");
        return
    }
    setCart(prev => [...prev, item])
    alert("Producto agregado al carrito")
   };

//Eliminar del  carrito

   const removeItem = (id) => {
    const updatedCart = cart.filter((element) => element.id !== item.id)
    setCart(updatedCart);
    alert("Producto eliminado");
   }
   
//vaciar el carrito

const clearCart = () =>{
    setCart([]);
};

//Total de carrito 

const getTotalItems = () => {

    return cart.length;
};

//Total a pagar 

const getCartTotal = () =>{

    return cart.reduce((acc, element) => acc + emement.price, 0);

};

//Checkout

const Checkout = () => {

    alert("Su compra a sido realizada");
    Checkout();
    navigate("/");
  
};

const values ={

    cart, 
    addItem,
    removeItem,
    clearCart,
    getCartTotal,
    Checkout,
}

return <CartContext.Provider value={values}

>{children}
    
    </CartContext.Provider >;

};
