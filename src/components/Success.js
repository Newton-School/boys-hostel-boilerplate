import React from 'react'
import './success.css';
function Success() {
    return (
        <div className='container' style={{ backgroundColor: "aquamarine" }} id="success">
            <h2>SUCCESS</h2>
            <h4>You room has been booked successfully</h4>
            <h3>Your room deatils are as follows :</h3>
            <br></br>
            <br></br>
            <p><b>Hostel No : <span>hostel</span></b></p>
                <p><b>Floor NO :<span>floor</span></b></p>
                <p><b>Room No : <span>room</span></b></p>
        </div>
    )
}

export default Success
