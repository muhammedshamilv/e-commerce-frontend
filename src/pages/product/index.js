import React, { useEffect, useState } from 'react';
import { getCategories } from '../../api/category';
import { filterProduct, getAllProduct, searchProduct } from '../../api/product';
import ProductCard from '../../components/productCard';

const Product = ({ search, filter, showDropdown, toggleDropdown }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (search) {
      searchItems();
      return;
    }
    fetchProjects();
  }, [search]);
  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((selected) => selected !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  useEffect(() => {
    getCategories({
      successCB: (res) => {
        setCategories(res.results);
      },
      errorCB: (err) => {
        alert(err);
        console.error(err);
      },
    });
  }, []);
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
  useEffect(() => {
    if (selectedCategories) {
      fetchProjects();
    }
  }, [selectedCategories]);
  const handleSubmit = () => {
    const selectedItems = categories
      .filter((category) => selectedCategories.includes(category.id))
      .map((category) => category.name);
    console.log({ selectedItems });
    if (selectedItems.length > 0) {
      filterProduct({
        query: selectedItems,
        successCB: (data) => {
          setProducts(data);
        },
        errorCB: (error) => {
          alert(error);
          console.error(error);
        },
      });
    }
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
    <>
      <div className='flex gap-8  p-7 flex-wrap'>
        {products?.results?.map((p) => (
          <ProductCard data={p} handleSelect={setProduct} />
        ))}
      </div>
      {showDropdown && (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200 bg-opacity-50'>
          <div className='bg-white p-4 rounded-md shadow-md'>
            <h2 className='mb-4 font-bold'>Filter Categories</h2>
            {categories.map((category) => (
              <div key={category.id} className='flex items-center'>
                <input
                  type='checkbox'
                  id={category.id}
                  onChange={() => handleCheckboxChange(category.id)}
                  checked={selectedCategories.includes(category.id)}
                  className='mr-2'
                />
                <label htmlFor={category.id}>{category.name}</label>
              </div>
            ))}
            <button
              onClick={() => {
                handleSubmit();
                toggleDropdown();
              }}
              className='px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none'
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
