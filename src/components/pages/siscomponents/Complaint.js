import React from 'react'
import '../../../App.css'


const Complaint = () => {
    
    
    // const notify = function(){
    //     alert('Complaint has beed registered')

        
    // }
    const onsub = function(e){
        e.preventDefault()
        alert('complaint has been registered')
    }

  return (
    <div>
    <br/>
        <h1>Complaint Form </h1>
        <hr/>
        <form className='complaintform' id='compform' action="DoMakeApplication" method="post" >
            <label>Name: <input id='name' type="text" required/></label>
            <label>Enrollment No. : <input id='eno' type="text" required/></label>
            <label>Complaint</label>
            <textarea id="w3review" name="w3review" rows="10" cols="70" placeholder='This is my Complaint' required></textarea>
            <button onClick={onsub}  >Submit</button>
        </form>
    </div>
  )
}

export default Complaint
