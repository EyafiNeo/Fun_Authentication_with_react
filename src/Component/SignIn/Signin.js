import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);
const Signin = () => {

    const [signInError, setError] = useState('');
    const [isPassCorrect, setIsPassCorrect] = useState(true);
    // const handleUserSignIn = event =>{
    //     event.preventDefault();
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     console.log(password)
    //     signInWithEmailAndPassword(auth,email,password)
    //     .then(result =>{
    //         const user = result.user;
    //         setIsPassCorrect(true);
    //         console.log(user);
    //     })
    //     .catch(error =>{
    //         const errorMessage = error.message;
    //         setError(errorMessage);
    //         setIsPassCorrect(false);
    //         console.log(signInError);
    //     })
    // }
    const [email, setEmail] = useState('')
    const getEmail = event => {
        const mail = event.target.value;
        setEmail(mail);
    }
    const handleSignIn = event => {
        const password = event.target.value;
        console.log(password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setIsPassCorrect(true);
                setError('');
                console.log(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
                setIsPassCorrect(false);
            })
    }

    const [move, setMove] = useState(140);
    const funFunction = event => {
        if (!isPassCorrect) {
            // let moving = Math.ceil(Math.random() * (100 - 90) ) + 90;
            console.log(move);
            event.target.style.transform = `translateX(${move}%)`
            setMove(-move);
        }
    }
    return (
        <div>
            <div className='mt-10 shadow-lg shadow-gray-500 rounded py-5 w-1/2 mx-auto bg-slate-300'>
                <h1 className='text-center text-3xl font-semibold text-green-600'>Login</h1>
                <form className='flex flex-col mt-3' >
                    <input type="email" name="email" placeholder='Your Email' className='w-1/2 outline-offset-1 my-2 border focus:outline-none border-green-500 mx-auto rounded-md px-3 py-2' required onBlur={getEmail} />

                    <input type="password" name="password" placeholder='Your Password' className={`w-1/2 outline-offset-1 my-2 border focus:outline-none  mx-auto rounded-md px-3 py-2 ${isPassCorrect ? 'border-green-500' : 'border-red-500 border-3'}`} required onBlur={handleSignIn} />
                    <p className='text-red-500 text-center'>{signInError}</p>
                    <div className=' flex justify-center'>
                        <button type="submit" className='bg-green-700 border mt-3 border-green-700 hover:bg-white hover:text-black px-5 py-2 rounded-md w-1/4 mx-auto text-white transition ease-in-out' onMouseOver={funFunction}>Sign In</button>
                    </div>

                </form>
                <p className='text-center mt-3'>Don't have an account? <Link to='/signup' className='text-red-500 underline'>Sign Up</Link> here.</p>
            </div>
        </div>
    );
};

export default Signin;