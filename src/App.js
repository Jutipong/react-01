import { useState } from 'react'
import './App.css'
import FormInput from './components/FormInput'
import Transaction from './components/Transaction'

function App() {
  const initDatas = [
    // { id: 1, title: "test 1", amount: 120 },
    // { id: 2, title: "test 2", amount: 520 }
  ]
  const [itemsx, setItems] = useState(initDatas)
  const onAddItemX = (newItem) => {
    setItems((oldItem) => {
      return [newItem, ...oldItem]
    })
  }
  return (
    <div className="container">
      <FormInput onAddItem={onAddItemX}></FormInput>
      <Transaction items={itemsx}></Transaction>
    </div>
  )
}

export default App
