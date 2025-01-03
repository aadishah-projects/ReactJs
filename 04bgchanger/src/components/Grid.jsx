import React from 'react'

function Grid(props) {
    const changebg1 = () => {
        document.bgColor = 'red'
    }
    const changebg2 = () => {
        document.bgColor = 'black'
    }
    return (
        <div className=' bg-white grid grid-cols-11 p-4 w-fit gap-2'>
            {/* {props.color.forEach(element => {
                console.log(element);
            })} */}
            {/* < button onClick= {changebg1} className = "bg-red-400">Red</button>
            < button onClick={changebg2} className = "bg-black-400">Black</button> */}
            {
                props.color.map((element, index) => (                   
                    < button key={index} onClick={ document.body.style.backgroundColor = element } className={`bg-${element}`}>{element}</button>
            ))
            }
{/*            
            < button className = "bg-black-400">Black</button>
            < button className = "bg-black-400">Black</button>
            < button className = "bg-black-400">Black</button>
            < button className = "bg-black-400">Black</button>
            < button className = "bg-black-400">Black</button>
            < button className = "bg-black-400">Black</button>
            < button className = "bg-black-400">Black</button>
            < button className = "bg-black-400">Black</button>       */}
      </div>
  )
}

export default Grid