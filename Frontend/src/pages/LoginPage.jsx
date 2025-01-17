import React from 'react'
import LoginBanner from '../media/desi-2.jpg'

const LoginPage = () => {
  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{ backgroundImage: `url(${LoginBanner})` }}>
        <div>
            <div className=' bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
                <h1 className='text-4xl text-whitefont-bold text-center mb-6'>Login</h1>
                <form action="">
                    <div className='relative my-4'>
                        <input type="email" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-nonce dark:focus:border-black focus:outline-none focus:ring-0 focus:text-white focus:border-black' />
                        <label htmlFor="" className='absolulte text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeolder-shown-scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6'>Your Email</label>
                    </div>
                    <div className='relative my-4'>
                        <input type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-nonce dark:focus:border-black focus:outline-none focus:ring-0 focus:text-white focus:border-black' />
                        <label htmlFor="" className='absolulte text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown-scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6'>Your Password</label>
                    </div>
                    <div>
                        <div>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="Remember Me"></label>
                        </div>
                        <span>Forgot Password?</span>
                    </div>
                    <button type='submit'>Login</button>
                    <div>
                        <span>New User? <Link to='/register'>Create an Account</Link></span>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
