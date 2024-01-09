import React, { useState, useEffect } from 'react';
import { getAllProduct, searchProduct } from '../../api/product';
import ProductCard from '../../components/productCard';
import ProductDetails from '../../components/productDetails';

const Product = ({ search, filter }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState();

  console.log({ products });
  useEffect(() => {
    if (search) {
      searchItems();
      return;
    }
    fetchProjects();
  }, [search]);
  const fetchProjects = () => {
    getAllProduct({
      successCB: (res) => {
        setProducts(res);
      },
      errorCB: (err) => {
        alert(err);
        console.error(err);
      },
    });
  };

  const searchItems = () => {
    searchProduct({
      successCB: (res) => {
        setProducts(res);
      },
      errorCB: (err) => {
        alert(err);
        console.error(err);
      },
      query: search,
    });
  };

  return (
    <div className='flex gap-8  p-7 flex-wrap'>
      {products?.results?.map((p) => (
        <ProductCard data={p} handleSelect={setProduct} />
      ))}
      {product && <ProductDetails data={product} handleClose={setProduct} />}
    </div>
  );
};

export default Product;
