import { cartProduct } from '../../api/product';
import LocalStorageService from '../../utils/LocalStorageService';
import { useNavigate } from 'react-router-dom';

export default function ProductDetails({ data, handleClose }) {
  const userId = LocalStorageService.getUserid();
  console.log({ userId });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    cartProduct({
      user: userId,
      product: data.id,
      successCB: (res) => {
        navigate('/home');
      },
    });
  };
  return (
    <div className='bg-white w-screen h-screen absolute'>
      <div
        onClick={() => {
          handleClose(null);
        }}
      >
        close
      </div>
      <div className='pt-6'>
        <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
          <div className='aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block'>
            <img
              src={data.image}
              alt={data.name}
              className='h-full w-full object-cover object-center'
            />
          </div>
        </div>

        {/* Product info */}
        <div className='mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16'>
          <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
              {data.name}
            </h1>
          </div>

          {/* Options */}
          <div className='mt-4 lg:row-span-3 lg:mt-0'>
            <h2 className='sr-only'>Product information</h2>
            <p className='text-3xl tracking-tight text-gray-900'>
              {data.price}
            </p>
            <p className='text-3xl tracking-tight text-gray-900'>
              count {data.availability}
            </p>
            <div className='mt-10'>
              <button
                onClick={handleSubmit}
                type='submit'
                className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Add to cart
              </button>
            </div>
            <div className='mt-10'>
              <button
                type='submit'
                className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Buy now
              </button>
            </div>
          </div>

          <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
            <div className='mt-10'>
              <h2 className='text-sm font-medium text-gray-900'>Details</h2>

              <div className='mt-4 space-y-6'>
                <p className='text-sm text-gray-600'>{data.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
