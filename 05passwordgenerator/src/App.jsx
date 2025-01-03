import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,updatelength] = useState(8)
  const [numflag, updatenumflag] = useState(false)
  const [charflag, updatecharflag] = useState(false)
  const [password, updatepassword] = useState("admin")


  const passwordGenerator = useCallback(() => { 
    let pass = ""
    const anArray = []
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numflag) str += "0123456789"
    if (charflag) str += "!@#$%^&*()"
    
    for (let i = 0; i <= length; i++)
    {
      let char = Math.random() * str.length + 1;
      anArray.push(str.charAt(char))
      // pass = str.charAt(char)
    }
    // console.log(password)
    updatepassword(anArray.join(''))
  }, [length, charflag, numflag, updatepassword])
  
 

  return (
    <>
      {/* <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-hite bg-gray-700'>test</div> */}
      <div className='bg-gray-500  text-white rounded-md shadow-md w-full max-w-md px-7 py-3 mx-auto my-7'>
        {/* <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          ['s',''d].join('') sd
            value={password}
            className='outline-none w-full py-1 px-3 text-gray-500'
            placeholder='password'
            readOnly
          />
        
        </div> */}
        <div className='mx-auto py-3 font-serif text-center mt-0'>
        Password Generator
        </div>
        <div className='overflow-hidden rounded-lg shadow flex'>
          <input type="text"
            value={password}
            className='px-3 py-1 w-full text-gray-700'
            placeholder='password'
            readOnly
          />
          <button
            onClick={() => {navigator.clipboard.writeText(password)}}
            className='px-2 py-0 shadow-lg bg-slate-700'>
            copy
          </button>
          
        </div>
        <div className='flex flex-col text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                updatelength(e.target.value)
                passwordGenerator()
              }}
            />
            <label className="text-sm font-mono">Length : {length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numflag}
              id = 'numberInput'
              onChange={() => {updatenumflag( (prev) => !prev)}}

            />
            <label className='text-sm font-mono'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charflag}
              id = 'charInput'
              onChange={() => {updatecharflag( (prev) => !prev)}}
              
            />
            <label className='text-sm font-mono'> Characters </label>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
