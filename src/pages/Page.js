import React from 'react'
import img from '../images/download.jpg';



const Array = ({category, product, order, myState, myLga, myWard}) => {
    
  const [vote, setVote] = React.useState(false);
    

   const handlePres = ()=>{
    setVote(!vote);
}





  return (
    <>
    {!vote ?
      <article className='cocktail'>
      <div className='img-container'>
        <img src={img} alt='mam' />
      </div>
      <div className='cocktail-footer'>
        <h3>Presidential Election</h3>
        <p style={{color:'black'}}><strong>Federal Republic of Nigeria</strong></p>
      <button className='btn btn-primary btn-details' onClick={handlePres} >
        Vote
      </button> 
      </div>
    </article> : 
    <article className='cocktail'>
    <div className='img-container'>
      <img src={category.president} alt='mam' />
    </div>
    <div className='cocktail-footer'>
      <h3 style={{color:'red'}}>Not in Election Year</h3>
      <button className='btn btn-primary btn-details' onClick={handlePres} >
        Back
      </button> 
    </div>
    </article>
    }


      </>
    )
}

export default Array
