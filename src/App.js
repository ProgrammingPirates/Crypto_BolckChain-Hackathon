import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Main from './Pages/main/Main'
import MainApp  from './Pages/dashboard/MainApp';
// import { useEffect } from 'react';
// import { useState } from 'react/cjs/react.development';
import EWallet  from './Components/EWallet';
import { StockInsights } from './Components/StockInsights';
import News from './Components/News';
import  Blogs  from './Components/Blogs';
import { GlobalProvider } from './Hooks/GlobalState';


// firebase
import Login from './Pages/login/Login'
import SignUp from './Pages/SignUp/Signup'
import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from '@firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDNBtA8EwOyIe54XShqQ_p6TkHmUlb5vCk",
  authDomain: "crypto-a799c.firebaseapp.com",
  projectId: "crypto-a799c",
  storageBucket: "crypto-a799c.appspot.com",
  messagingSenderId: "845069213247",
  appId: "1:845069213247:web:95acb4e66595f4499de28a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {

  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   const auth = getAuth()
  //   onAuthStateChanged(auth, user => {
  //     setUser(user)
  //   })

  // },[])

  return (
    <>
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {Main}></Route>
          <Route exact path = "/login" component = {Login}></Route>
          <Route exact path = "/signup" component = {SignUp}></Route>
          <Route exact path = "/dashboard" component = {MainApp}></Route>
          <Route exact path = "/dashboard/ewallet" component = {EWallet}></Route>
          <Route exact path = "/dashboard/stockinsight" component = {StockInsights}></Route>
          <Route exact path = "/dashboard/news" component = {News}></Route>
          <Route exact path = "/dashboard/blogs" component = {Blogs}></Route>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
    </>
  );
}

export default App;
