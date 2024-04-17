
// Learning props

import './App.css'
import Card from './Components/Card'

function App() {

  let myobj={
    name:"Arfan",
    age:18,
    address:{
      city:"RWP",
      country:"Pakistan"
    }
  }

  let arr=[1,2,3,4,5]

  return (
    <>
      <h1 className='text-2xl text-fuchsia-500 '>IFFIONEX</h1>
      <Card username="Arfan Abid"/>
      <Card post="Backend Developer"/>
      <Card username='Arfan'  post=" Developer" myArr={arr}/>
    </>
  )
}

export default App
