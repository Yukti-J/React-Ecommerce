// import React, { createContext, useEffect, useState } from "react";
import { db } from "../config/config";

// export const ProductsContext = React.createContext('Default Value');

// export const ProductsContextProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const unsubscribe = db.collection('Products').onSnapshot(snapshot => {
//       let changes = snapshot.docChanges();
//       let newProducts = [...products];
//       changes.forEach(change => {
//         if (change.type === 'added') {
//           newProducts.push({
//             ProductID: change.doc.id,
//             productName: change.doc.data().productName,
//             price: change.doc.data().price,
//             image: change.doc.data().image
//           })  
//         }
//       })
//       setProducts(newProducts);
//     });

//     return () => unsubscribe();
//     // console.log(products[0]);
//   },[]);
// console.log(products[0] );
//   return (
//     <ProductsContext.Provider value={{ products }}>
//       {children}
//     </ProductsContext.Provider>
//   )
// }

// import React, { createContext } from "react"
// // import React from "react";
// import { db } from "../config/config"

// export const ProductsContext = createContext('Default Value');

// export class ProductsContextProvider extends React.Component {

//     state = {
//         products: []
//     }

//     componentDidMount() {

//         const prevProducts = this.state.products;
//         db.collection('Products').onSnapshot(snapshot => {
//             let changes = snapshot.docChanges();
//             changes.forEach(change => {
//                 if (change.type === 'added') {
//                     prevProducts.push({
//                         ProductID: change.doc.id,
//                         productName: change.doc.data().productName,
//                         price: change.doc.data().price,
//                         image: change.doc.data().image
//                     })  
//                 }
//                 this.setState({
//                     products: prevProducts
//                 })
//             })
//         })
//         // console.log(Products);

//     }

    
//     render() {
//         return (
//             <ProductsContext.Provider value={{ products: [...this.state.products] }}>
//                 {this.state.children}
//             </ProductsContext.Provider>
//         )
//     }
// }

// import React, { createContext } from "react"
// import { db } from "../config/config"
// // import ReactDOM  from "react-dom";

// export const ProductsContext = createContext('Default Value');

// export class ProductsContextProvider extends React.Component {

//     state = {
//         products: []
//     }

//     componentDidMount() {
//         db.collection('Products').onSnapshot(snapshot => {
//             let changes = snapshot.docChanges();
//             let newProducts = [...this.state.products];
//             changes.forEach(change => {
//                 if (change.type === 'added') {
//                     newProducts.push({
//                         ProductID: change.doc.id,
//                         productName: change.doc.data().productName,
//                         price: change.doc.data().price,
//                         image: change.doc.data().image
//                     })  
//                 }
//             })
//             this.setState({
//                 products: newProducts
//             })
//         })
//     }

//     render() {
//         return (
//             <ProductsContext.Provider value={{ products: this.state.products }}>
//                 {this.props.children}
//             </ProductsContext.Provider>
//         )
//     }
// }
