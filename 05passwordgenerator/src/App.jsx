import { useCallback, useState,useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length,updatelength] = useState(8)
  const [numflag, updatenumflag] = useState(false)
  const [charflag, updatecharflag] = useState(false)
  const [password, updatepassword] = useState("admin")


  const copypasswordtoclip = useCallback(
  () =>
    {
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,3)
      window.navigator.clipboard.writeText(password)
    },
    [password]
  )

  // Using Ref Hooks
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( //Optimize the call back function
    () => { 
    let pass = ""
    const anArray = []
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numflag) str += "0123456789"
    if (charflag) str += "!@#$%^&*()"
    
    for (let i = 1; i <= length; i++)
    {
      let char = Math.floor(Math.random() * str.length + 1);
      anArray.push(str.charAt(char))
    }
    updatepassword(anArray.join(''))
      
    }, [length, charflag, numflag, updatepassword]
  )
  
  useEffect(   // Rerun the callback function
    () => {
      passwordGenerator()
    }, 
    [length, charflag, numflag, passwordGenerator]
 )

  return (
    <>
   
      <div className='bg-gray-500  text-white rounded-md shadow-md w-full max-w-md px-7 py-3 mx-auto my-7'>
        <div className='mx-auto py-3 font-serif text-center mt-0'>
        Password Generator
        </div>
        <div className='overflow-hidden rounded-lg shadow flex'>
          <input type="text"
            value={password}
            className='px-3 py-1 w-full text-gray-700'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            // onClick={() => {navigator.clipboard.writeText(password)}}
            onClick={copypasswordtoclip}
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
                // passwordGenerator
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
