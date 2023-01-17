import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Habit } from './components/Habit'
import './styles/global.css';

function App() {

  return (
    <>
      <p className='font-extrabold bg-violet-900'>nome</p>
      <Habit completed={8} />
      <Habit completed={7}/>
      <Habit />
      <Habit />
    </>
  );
}

export default App
