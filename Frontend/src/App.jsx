import {Routes, Route, Outlet} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import RecipePage from './pages/RecipePage';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// function Layout(){
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   )
// }

function App() {
  
  return (
    <div className="bg-slate-300">
      <Routes>
        {/* <Route path="/" element= { <Layout /> }> */}

        <Route path="/" element= { <Outlet /> }>
          <Route index element = { <HomePage /> }></Route>
          <Route path="recipes/:id" element = { <RecipePage /> }></Route>
          <Route path="login" element = { <LoginPage />}></Route>
          <Route path="register" element = { <RegisterPage />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App