import React, { useState } from 'react'
import { db, storage } from '../config/config';

export default function AddProduct() {

    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState(null)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const types = ['image/png','image.jpg','image/jpeg'];

    const imageHandle = (e) =>{
        let selectFile = e.target.files[0];
        if (selectFile && types.includes(selectFile.type)){
            setImage(selectFile);
            setError('');
        }
        else{
            setError('Please choose valid image type i.e. png/jpg/jpeg');
        }
    }

    const addProduct = (e) =>{
        e.preventDefault();
        const uploadTask = storage.ref(`product-images/${image.name}`).put(image);
        uploadTask.on('state_changed', snapshot =>{
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log(progress);
        },err=>setError(err.message)
        , ()=>{
            storage.ref('product-images').child(image.name).getDownloadURL().then(url=>{
                db.collection('Products').add({
                    productName: productName,
                    price: Number(price),
                    image: url
                }).then(()=>{
                    let after="";  
                    setSuccess('Product Added')
                    setImage(null)
                    setError(after)
                    setPrice(0)
                    setProductName(after)
                    document.getElementById('image').value = '';
                }).catch(err=>setError(err.message))
            })
        })  
    }

  return (
    <>
      <form className='form' onSubmit={addProduct}>
   <div className='title'><h3>ADD PRODUCT</h3></div>
  <div className="mb-3">
    <label htmlFor="productName" className="form-label">Name*</label>
    <input type="text" className="form-control" id="productName" onChange={(e)=>{setProductName(e.target.value)}} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="price" className="form-label">Price*</label>
    <input type="text" className="form-control" id="price" onChange={(e)=>{setPrice(e.target.value)}} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="image" className="form-label" required>Image*</label>
    <input type="file" className="form-control" onChange={imageHandle} id="image"/>
  </div>
  <button type="submit" className="btn btn-success">ADD</button>
</form>
    {error&&<span className='error-msg'><p>{error}</p></span>}
    {success&&<span className='success-msg'><p>{success}</p></span>}
   </>
  )
}
