import React from 'react'
import { Link } from 'react-router-dom'
import mark from '../images/thumb.jpg'




export default function PartySelect({name, logo, category, product, order}) {
  return (
    <>
    <Link to='/voteOk' className='cocktail' >
      <div className='img-container'>
        <img src={logo} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        {/* <p>{info}</p> */}
        <Link to='/voteOk' className='btn btn-primary btn-details'
        >
          Vote
        </Link>
      </div>
    </Link>
    <img src={mark} alt='thumb' style={{height: '100px', width:'150px', marginLeft: '200px',marginTop: '-180px', opacity: '50%'}}  />

    </>
  )
}
