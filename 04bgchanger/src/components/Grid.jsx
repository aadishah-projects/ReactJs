import React from 'react'

function Grid(props) {
    const changebg1 = () => {
        document.bgColor = 'red'
    }
    const changebg2 = () => {
        document.bgColor = 'black'
    }
    return (
        <div className=' bg-orange-400 grid grid-cols-12 p-4 w-fit gap-2'> Hello
            {/* {props.color.forEach(element => {
                console.log(element);
            })} */}
            {/* < button onClick= {changebg1} className = "bg-red-400">Red</button>
            < button onClick={changebg2} className = "bg-black text-slate-50">Black</button> */}
            {
                props.colors.map((element, index) => (                   
                    < button key={index} onClick={document.body.style.backgroundColor = element} style={ bgColor =  element } className={`bg-${element}`}>{element}</button>
            ))
            }   
            {/* < button className = "bg-black-400">Black</button>
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