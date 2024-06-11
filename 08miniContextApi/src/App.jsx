import './App.css'
import UserContextprovider from './context/UserContextprovider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  

  return (
    <UserContextprovider>
      <h1>Contex Api Mini </h1>

      <Login/>
      <Profile/>
      
    </UserContextprovider>
    
  )
}

export default App
