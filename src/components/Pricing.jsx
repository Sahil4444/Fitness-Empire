import { Check } from 'lucide-react'
import React from 'react'

const Pricing = () => {
  const price = [
    {
      imgUrl: './pricing.jpg',
      title: 'QUARTER',
      price: 18000,
      length: 3
    },
    {
      imgUrl: './pricing.jpg',
      title: 'HALF_YEAR',
      price: 34000,
      length: 6
    },
    {
      imgUrl: './pricing.jpg',
      title: '1 YEAR',
      price: 60000,
      length: 12
    },
  ]
  return (
    <section className='pricing'>
      <h1>THE FITNESS EMPIRES'S SUBSCRIPTION PLANS</h1>
      <div className="wrapper">
        {
          price.map((ele)=>{
            return(
              <div className='card' key={ele.title}>
                <img src={ele.imgUrl} alt={ele.title} />
                <div className="title">
                  <h1>{ele.title}</h1>
                  <h1>PACKAGE</h1>
                  <h3>Rs {ele.price}</h3>
                  <p>FOR {ele.length} MONTHS</p>
                </div>
                <div className="description">
                  <p>
                    <Check /> Equipment 
                  </p>
                  <p>
                    <Check /> Free Training 
                  </p>
                  <p>
                    <Check /> Free Restroom 
                  </p>
                  <p>
                    <Check /> 24/7 Skilled Support 
                  </p>
                  <p>
                    <Check /> 20 days Freezing Option
                  </p>
                  <a href='/'>Join Now</a>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Pricing
