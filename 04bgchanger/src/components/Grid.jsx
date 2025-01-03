import React from 'react'
import { useState } from 'react'

function Grid(props) {

    const [color, setColor] = useState('')

    const colorChanger = (color) => {
        document.body.style.backgroundColor = color
    }

    const generateRandomColor = () => {
        const values = 'ABCDEF0123456789'
        const color = ['#']
        for (let i = 0; i < 6; i++) {
            let char = Math.random() * values.length + 1;
           color.push(values.charAt(char)) 
        }
        return color.join('')
    }

    const textWhite = ['black', 'sky-blue', 'blue', 'purple']

    return (
        <div className=' bg-orange-400 grid grid-cols-12 p-4 w-fit gap-2 rounded-lg'>
            {
                props.color.map((element, index) => {
                    return <button
                        key={index}
                        onClick={() => {
                            colorChanger(element)
                        }}
                        style={{ backgroundColor: element }}
                        className={`px-4 py-2 rounded-lg ${textWhite.includes(element) ? 'text-white': ''}`}
                    >
                        {element}
                    </button>
})
            }   
            <button
                
            >
                Random
            </button>
      </div>
  )
}

export default Grid