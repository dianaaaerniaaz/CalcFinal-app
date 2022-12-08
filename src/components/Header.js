import React from 'react'
const Header = () => {
let body = document.querySelector('body')


const theme1change = () => {
  if (body.className !== "first") {
    body.className = "first"
  }

}
const theme2change = () => {
  if (body.className !== "second") {
    body.className = "second"
    
  }
}
const theme3change = () => {
  if (body.className !== "third") {
    body.className = "third"
  }

}
  return (
    <div className='header'>
        <h1>Calc</h1>
        <h6>THEME</h6>
        <div className='div'>
            <div className='theme'>
                <button className='btn' id='theme1' onClick={theme1change} >

                </button>
                <label className='theme1-label'>1</label>

                <button className='btn' id='theme2' onClick={theme2change} >

                </button>
                <label className='theme2-label'>2</label>

                <button className='btn' id='theme3' onClick={theme3change}>

                </button>
                <label className='theme3-label'>3</label>
            </div>
        </div>
    </div>
  )
}

export default Header
