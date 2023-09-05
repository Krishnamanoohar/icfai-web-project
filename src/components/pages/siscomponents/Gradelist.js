import React from 'react'
import '../../../App.css'

const Gradelist = () => {
  return (
    <div>
        <h1>Grade List</h1>
        <div className='gradGrid'>
            <div className='gradGridItems'>Course Subject</div>
            <div className='gradGridItems'>Grade</div>
            <div className='gradGridItems'>Theory of Computation</div>
            <div className='gradGridItems'>A</div>
            <div className='gradGridItems'>Numerical Methods</div>
            <div className='gradGridItems'>B</div>
            <div className='gradGridItems'>MicroProcessor Interfacing</div>
            <div className='gradGridItems'>C</div>
            <div className='gradGridItems'>DataBase Management System</div>
            <div className='gradGridItems'>A</div>
            <div className='gradGridItems'>Operating System</div>
            <div className='gradGridItems'>C</div>
            <div className='gradGridItems'>Control Systems</div>
            <div className='gradGridItems'>B</div>

        </div>
    </div>
  )
}

export default Gradelist