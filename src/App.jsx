import './App.css'
import RootLayout from './components/layout/RootLayout';
import Home from './components/pages/Home'
import { Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
