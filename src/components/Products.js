import React, { useEffect, useState } from "react";
import { db } from "../config/config";
import '../css/products.css'

export const Products = ({ children }) => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const unsubscribe = db.collection("Products").onSnapshot((snapshot) => {
  //     let changes = snapshot.docChanges();
  //     let newProducts = [...products];
  //     changes.forEach((change) => {
  //       if (change.type === "added") {
  //         newProducts.push({
  //           ProductID: change.doc.id,
  //           productName: change.doc.data().productName,
  //           price: change.doc.data().price,
  //           image: change.doc.data().image,
  //         });
  //       }
  //     });
  //     setProducts(newProducts);
  //   });
    //   return () => unsubscribe();
    // console.log(products[0]);
  // }, []);
  return (
    <>
      {products?.length !== 0 && <h1 className="productTitle">Products</h1>}
      <div className="products-container">
        {products?.length === 0 && (
          <div>slow internet...no products to display</div>
        )}
        {products?.map((product) => (
          <div className="product-card" key={product.ProductID}>      
              <img src={product.image} alt="not found" className="product-img" />
            <div className="product-name">{product.productName}</div>
            <div className="product-price">Rs {product.price}.00</div>
            {/* <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button> */}
          </div>
        ))}
      </div>
    </>
  );
};
// import React, { useContext } from 'react'
// // import { ProductsContext } from '../global/productContext'
// // import ProductsContext from '../global/productContext';
// import  {ProductsContext}  from '../global/productContext';

// export const Products = () => {

//     // const  {variable}  = useContext(ProductsContext);
//     // const [products,setProducts] = useState([]);
//     // setProducts(variable);
//     // const { dispatch } = useContext(CartContext);
//     const products = useContext({ProductsContext});
//     // console.log(products);
//     return (
//         <>
//             {products?.length !== 0 && <h1>Products</h1>}
//             <div className='products-container'>
//                 {products?.length === 0 && <div>slow internet...no products to display</div>}
//                 {products?.map((product) => (
//                     <div className='product-card' key={product.ProductID}>
//                         <div className='product-img'>
//                             <img src={product.image} alt="not found" />
//                         </div>
//                         <div className='product-name'>
//                             {product.productName}
//                         </div>
//                         <div className='product-price'>
//                             Rs {product.price}.00
//                     </div>
//                         {/* <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button> */}
//                       </div>
//                 ))}
//             </div>
//         </>
//     )
// }

// import { ProductsContext } from '../global/productContext';

// export const Products = (props) => {
//   const items  = useContext({ProductsContext});
//   const {products} = props;
//  console.log(products);
//   return (
//     <div>
//       {products?.map((product) => (
//         <div key={product.ProductID}>
//           <h2>{product.productName}</h2>
//           <p>Price: {product.price}</p>
//           <img src={product.image} alt={product.productName} />
//         </div>
//       ))}
//     </div>
//   );
// };
