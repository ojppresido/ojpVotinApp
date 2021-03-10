import React from 'react'
import { Link } from 'react-router-dom'
import mark from '../images/thumb.jpg'




export default function PartySelect({name, logo, category, product, order}) {

  
  return (
    <>
    <h3 to='/voteOk' logo={logo} name={name} className='cocktail' >
      <div className='img-container'>
        <img src={logo} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        {/* <p>{info}</p> */}
        <h5 className='btn btn-primary btn-details'
        >
          Vote
        </h5>
      </div>
    </h3>
    
    <img src={mark} alt='thumb' style={{height: '100px', width:'150px', marginLeft: '200px',marginTop: '-180px', opacity: '50%'}}  />
    <center>
    <Link to='/' className='btn btn-primary btn-details'
    style={{color:'white', backgroundColor:'grey'}}
        >
         <strong> I`m Not Voting</strong>
        </Link>
        </center>
    </>
  )
}
