
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
import Signin from './pages/SignIn';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';


export default function App() {

  return (
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/sign-up' element = {<SignUp />} />
      <Route path = '/sign-in' element = {<Signin />} />
      <Route path = '/about' element = {<About />} />
      <Route element = {<PrivateRoute />}>
        <Route path = '/profile' element = {<Profile />} />S
      </Route>
    </Routes>
  </BrowserRouter>)
}
