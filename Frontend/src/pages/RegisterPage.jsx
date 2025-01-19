import React, { useState } from 'react';
import LoginBanner from '../media/desi-1.jpg';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock, AiOutlineMail } from 'react-icons/ai';
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();  // Initialize useNavigate hook

  // Function to handle registration form submission
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/user/register', {
        name,
        email,
        password,
      });

      console.log('Registration successful:', response.data);

      // Redirect to login page after successful registration
      navigate('/login');  // Redirect to login page

    } catch (error) {
      // Handle error (e.g., display error message)
      setError(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="text-white h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${LoginBanner})` }}>
      <div className="w-[84%] sm:max-w-[80%] max-w-[400px] md:max-w-[500px]">
        <div className="w-full bg-gray-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30">
          <h1 className="text-3xl font-bold text-center mb-6 md:text-4xl">Register</h1>
          <form onSubmit={handleRegister}>
            <div className="relative my-4">
              <input
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full py-2 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-white peer"
                required
              />
              <BiUser className="absolute top-3 right-1 text-gray-400" />
            </div>
            <div className="relative my-4">
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full py-2 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-white peer"
                required
              />
              <AiOutlineMail className="absolute top-3 right-1 text-gray-400" />
            </div>
            <div className="relative my-4">
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full py-2 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-white peer"
                required
              />
              <AiOutlineUnlock className="absolute top-3 right-1 text-gray-400" />
            </div>
            <button
              className="w-full text-lg mt-6 rounded-lg bg-white text-gray-800 hover:bg-gray-500 hover:text-white py-2 transition-colors duration-300"
              type="submit"
            >
              Register
            </button>
            {error && <div className="text-red-500 mt-2 text-center">{error}</div>}
            <div className="mt-4 text-center">
              <span className="text-sm md:text-md text-slate-300 flex justify-center gap-1">
                Previous User?
                <Link className="text-slate-100 font-semibold hover:underline" to="/login">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;






// import React from 'react'
// import LoginBanner from '../media/desi-2.jpg'
// import { Link } from 'react-router-dom'
// import { BiUser } from 'react-icons/bi'
// import { AiOutlineUnlock, AiOutlineMail } from 'react-icons/ai'

// const RegisterPage = () => {
//   return (
//     <div className="text-white h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${LoginBanner})` }}>
//       <div className="w-[84%] sm:max-w-[80%] max-w-[400px] md:max-w-[500px]">
//         <div className="w-full bg-gray-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30">
//           <h1 className="text-3xl font-bold text-center mb-6 md:text-4xl">Register</h1>
//           <form>
//           <div className="relative my-4">
//               <input
//                 placeholder="Name"
//                 type="text"
//                 className="block w-full py-2 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-white peer"
//               />
//               <BiUser className="absolute top-3 right-1 text-gray-400" />
//             </div>
//             <div className="relative my-4">
//               <input
//                 placeholder="Email"
//                 type="email"
//                 className="block w-full py-2 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-white peer"
//               />
//               <AiOutlineMail className="absolute top-3 right-1 text-gray-400" />
//             </div>
//             <div className="relative my-4">
//               <input
//                 placeholder="Password"
//                 type="password"
//                 className="block w-full py-2 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-white peer"
//               />
//               <AiOutlineUnlock className="absolute top-3 right-1 text-gray-400" />
//             </div>
//             <button
//               className="w-full text-lg mt-6 rounded-lg bg-white text-gray-800 hover:bg-gray-500 hover:text-white py-2 transition-colors duration-300"
//               type="submit"
//             >
//               Register
//             </button>
//             <div className="mt-4 text-center">
//               <span className="text-sm md:text-md text-slate-300 flex justify-center gap-1">
//                 Previous User?
//                 <Link className="text-slate-100 font-semibold hover:underline" to="/login">
//                   Login
//                 </Link>
//               </span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default RegisterPage
