import { useEffect } from 'react'
import ConcreteList from './components/ConcreteList'
import NavBar from './components/NavBar'


import concreteService from './services/concretes'
import { setConcretes } from './reducers/concreteReducer'
import { useDispatch } from 'react-redux'


import './App.css'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    concreteService
      .getAll().then(concretes => dispatch(setConcretes(concretes)))
  })


  return (
    <div>
      <h1>Material library for strucutral engineers</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', }}>
          <NavBar />
          <ConcreteList />
      </div>
    </div>
  )
}

export default App
