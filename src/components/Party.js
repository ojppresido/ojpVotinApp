import React from 'react'
import {Pick} from '../data/PartyImg';
import PartySelect from './PartySelect';
import { Link } from 'react-router-dom'



export default function Party({category, product, order}) {
  
  return (
    <section className='section'>
      <div className='cocktails-center'>
        {Pick.map((item, index) => {
          return <PartySelect key={index} {...item} category={category} product={product} order={order} />
        })}

      </div>
      <center>
    <Link  className='btn btn-primary btn-details'
    style={{color:'white', backgroundColor:'grey'}}
        >
         <strong> I`m Not Voting</strong>
        </Link>
        </center>
    </section>
  )
}
