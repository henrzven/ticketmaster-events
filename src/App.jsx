
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Events from './components/Events'

function App() {
  
    const [searchTerm, setSearchTerm ] = useState('');

    const handleNavBarSearch = (term) => {
      setSearchTerm(term);
    };


  return (
    <>
      <Navbar onSearch={handleNavBarSearch} />
      <Events searchTerm={searchTerm} />
    </>
  )
}

export default App
