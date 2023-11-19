import React, { useContext } from 'react'
import { ShopContext } from './../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/BreadCrum/Breadcrum';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {prodictId} = useParams();
  const product = all_product.find((e) => e.id === Number(prodictId))
  return (
    <>
      <Breadcrum product={product} />
    </>
  )
}

export default Product