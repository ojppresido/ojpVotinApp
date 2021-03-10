import React from 'react'

const Success = () => {
    return (
        <div>
            
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
        
        </div>
      </section>

        </div>
    )
}

export default Success
