import { useEffect } from 'react'
import ConcreteList from './components/ConcreteList'


import concreteService from './services/concretes'
import { setConcretes } from './reducers/concreteReducer'
import { useDispatch } from 'react-redux'


import './App.css'

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=> {
    concreteService
    .getAll().then(concretes => dispatch(setConcretes(concretes)))
  })


  return (
    <div>
      <ConcreteList />
    </div>
  )
}

export default App
