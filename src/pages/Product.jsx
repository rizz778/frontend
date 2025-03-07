import React,{useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import {useParams} from 'react-router-dom';
import Breadcrum from '../Breadcrums/Breadcrum';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import DescriptionBox from '../DescriptionBox.jsx/DescriptionBox';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
export const Product = () => {
  const {all_product}=useContext(ShopContext);
 const {productId} =useParams();
 const product = all_product.find((e)=>e.id=== Number(productId))

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}
