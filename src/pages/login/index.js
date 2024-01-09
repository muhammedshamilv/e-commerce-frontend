import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../api/auth';
import LocalStorageService from '../../utils/LocalStorageService';
import { Button } from './styles/style';
import { selectName, updateUser } from '../../store/user';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const values = useSelector(selectName);
  const navigate = useNavigate();

  const onSubmitForm = () => {
    login({
      email,
      password,
      successCB: (res) => {
        dispatch(updateUser({ name: res.user.email, is_admin: res.is_admin }));
        LocalStorageService.setToken(res.access);
        LocalStorageService.setUser(res.user.email);
        LocalStorageService.setUserId(res.user_id);
        LocalStorageService.setUserRole(res.is_admin ? res.is_admin : false);
        navigate('/home');
      },
      errorCB: (err) => {
        alert(err);
        console.error(err);
      },
    });
  };

  return (
    <div className='bg-gray-200 h-screen flex justify-center items-center'>
      <div className='bg-[#afccdd]/50 flex justify-center flex-col p-2 pl-6 pr-6  items-center gap-5 mdm:w-96 h-96 border rounded-2xl '>
        <h1 className='text-[#eb9c9c] text-2xl'>Login</h1>
        <input
          type='text'
          className='w-full p-2 border border-emerald-200 outline-none rounded-xl'
          placeholder='email'
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type='password'
          className='w-full p-2 border border-emerald-200 outline-none rounded-xl'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <Button>
          <button
            onClick={() => onSubmitForm()}
            className='btn2 px-10 py-5 relative border-none bg-[#01aaf870] outline-none rounded-xl uppercase font-semibold tracking-wider overflow-hidden hover:text-teal-600'
            type='button'
          >
            <span className='absolute inset-0 bg-white'></span>
            <span className='absolute inset-0 flex justify-center items-center font-bold'>
              login
            </span>
          </button>
        </Button>
        <p className='mt-10 text-center text-sm text-gray-500'>
          Not a member?{' '}
          <Link
            to='signup'
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
