import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const SignUp = () => {

    const [verifyMsg,setVerifymsg] = useState('');
    const handleUserSignUp = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name,email,password);
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            verifyEmail();
        })
        .catch(error =>{
            console.log(error);
        })

    }

    const verifyEmail = ()=>{
        sendEmailVerification(auth.currentUser)
        .then(()=>{
            setVerifymsg('Please verify email');
        });

    }
    // const updateName = name =>{

    // }


    return (
        <div className='mt-10 border border-red-500 w-1/2 mx-auto py-5'>
            <form className='flex flex-col' onSubmit={handleUserSignUp}>
                <input type="text" name="name" placeholder='Your Name' className='w-1/2 outline-offset-1 my-2 border focus:outline-none border-red-500 mx-auto rounded-md px-3 py-2' required />
                <input type="email" name="email"  placeholder='Your Email' className='w-1/2 outline-offset-1 my-2 border focus:outline-none border-red-500 mx-auto rounded-md px-3 py-2' required />
                <input type="password" name="password" placeholder='Your Password' className='w-1/2 outline-offset-1 my-2 border focus:outline-none border-red-500 mx-auto rounded-md px-3 py-2' required />
                <p className='text-center text-green-600'>{verifyMsg}</p>
                <button type="submit" className='bg-red-500 border border-red-500 hover:bg-white hover:text-black px-5 py-2 rounded-md w-1/4 mx-auto text-white'>Sign Up</button>

            </form>
            <p className='text-center mt-5'>or continue with</p>
            <div className=' flex justify-center mt-5'>
                
                <div className=''>
                    <button type="submit" className='bg-red-500 border border-red-500 hover:bg-white hover:text-black px-5 py-2 rounded-md mr-4 text-white'>Google</button>
                    <button type="submit" className='bg-red-500 border border-red-500 hover:bg-white hover:text-black px-5 py-2 rounded-md mr-4 text-white'>Github</button>
                    <button type="submit" className='bg-red-500 border border-red-500 hover:bg-white hover:text-black px-5 py-2 rounded-md text-white'>Facebook</button>
                </div>

            </div>
            <p className='text-center mt-5'>Already have an account? <Link to='/signin' className='text-red-500 underline'>Sign In</Link> here.</p>
        </div>
    );
};

export default SignUp;