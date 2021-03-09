import React from 'react'
import Welcome from './Welcome';
import Page from '../pages/Page';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';

const Child = ({category, product, order, myState, myLga, myWard}) => {

     if(product.rep && product.rep===myLga.rep && category===myState && product.senate===myLga.senate){
        return<section className='section'>
            <div className='section-title'>
            <Welcome  category={category} product={product}
        order={order} myLga={myLga}
        myState={myState}  myWard={myWard}/>
            </div>
            <div className='cocktails-center'>
         <Page1 category={category} product={product}
        order={order} myLga={myLga}
        myState={myState}  myWard={myWard}
/>
</div>
</section>
      }
     if(product.rep && product.rep===myLga.rep && category===myState && product.senate===myLga.senate){
        return <section className='section'>
            <div className='section-title'>
            <Welcome  category={category} product={product}
        order={order} myLga={myLga}
        myState={myState}  myWard={myWard}/>

            </div>
        <div className='cocktails-center'>
     <Page2 category={category} product={product}
    order={order} myLga={myLga}
    myState={myState}  myWard={myWard}
/>
</div>
</section>
      }
      if(order.rep===myWard.rep && category===myState && product===myLga && !product.rep && product.senate===myLga.senate){
        return <section className='section'>
            <div className='section-title'>
            <Welcome  category={category} product={product}
        order={order} myLga={myLga}
        myState={myState}  myWard={myWard}/>

            </div>
        <div className='cocktails-center'>
     <Page5 category={category} product={product}
    order={order} myLga={myLga}
    myState={myState}  myWard={myWard}
/>
</div>
</section>
      }
      if(product.senate===myLga.senate && category===myState  ){
        return<section className='section'>
        <div className='section-title'>
        <Welcome  category={category} product={product}
        order={order} myLga={myLga}
        myState={myState}  myWard={myWard}/>

        </div>
    <div className='cocktails-center'>
 <Page3 category={category} product={product}
order={order} myLga={myLga}
myState={myState}  myWard={myWard}
/>
</div>
</section>
        
       
      }
      if(category===myState){
        return<section className='section'>
        <div className='section-title'>
        <Welcome category={category} product={product}
        order={order} myLga={myLga}
        myState={myState}  myWard={myWard} />

        </div>
    <div className='cocktails-center'>
 <Page4 category={category} product={product}
order={order} myLga={myLga}
myState={myState}  myWard={myWard}
/>
</div>
</section>
        
      
      }
      return <>
  <section className='section'>
        <div className='section-title'>
        <Welcome category={category} product={product}
        order={order} myLga={myLga}
        myState={myState}  myWard={myWard} />

        </div>
    <div className='cocktails-center'>
 <Page category={category} product={product}
order={order} myLga={myLga}
myState={myState}  myWard={myWard}
/>
</div>
</section>    
  
    
</>;
  
}

export default Child
