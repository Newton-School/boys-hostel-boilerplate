import React from 'react';
import { Link } from 'react-router-dom';
import "./hostel.css";

function Bhostel() {
    const handleClick=(e)=>{
        
    }
    return (
        <>
            <h1 style={{ marginTop: '120px' }} id="bhostel">Choose a Hostel</h1>
            <div className='h-outer'>
                <div className='h' data-tid="B1" value="example" onClick={e => handleClick("B1")}>
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }} ><p>B1</p></Link>
                </div>
                <div className='h'onClick={e=> handleClick("B2")} data-tid="B2">
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>B2</p></Link>
                </div>
                <div className='h'onClick={e=> handleClick("B3")} data-tid="B3">
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>B3</p></Link>
                </div>
            </div>
            <div className='h-outer'>
                <div className='h'onClick={e=> handleClick("B4")} data-tid="B4">
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>B4</p></Link>
                </div>
                <div className='h'onClick={e=> handleClick("B5")} data-tid="B5">
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>B5</p></Link>
                </div>
                <div className='h'onClick={e=> handleClick("B6")} data-tid="B6">
                    <Link to='/room' style={{ textDecoration: 'none', color: 'black' }}><p>B6</p></Link>
                </div>
            </div>
        </>
    )
}

export default Bhostel