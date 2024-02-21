import './App.css';
import './Components/Login';
import './Components/Dashboard';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import { useEffect, useState } from 'react';

function App() {

  const [userStatus, setUserStatus] =useState('unknown');
  const [response, setResponse] = useState({});

  useEffect(()=> {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '375434261907142',
        cookie: true,
        xfbml: true,
        version: 'v19.0'
      });
  
      window.FB.AppEvents.logPageView();
  
      
      window.FB.getLoginStatus(function (response) {
        console.log(response);
        if(response.status === 'unknown'){
          window.FB.login();
        }
      });
  
    };
  
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, [])

  return (
    <>
    <div className="App">
        <Login />
    </div>
    {/* <Dashboard /> */}
    </>
  );
}

export default App;
