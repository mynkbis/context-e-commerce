import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from 'axios'



const Paymentform = () => {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();


    const Card_options = {
        iconStyle: "solid"
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        
        if (error) {
            try {
                const { id } = paymentMethod
                const res = await axios.post("https://localhost:3000/payment", {
                    amount: 1000,
                    id
                })

                if (res.data.success) {
                    console.log("success")
                    setSuccess(true)
                }
            } catch (error) {
console.log(error)                
            }
          
        }
          else {
            console.log(error.message)
            }
    }

  return (
      <div>
          {!success ? <form onSubmit={handleSubmit}>
              <fieldset>
                  <div className='cardPayment'>
                      <CardElement options={Card_options}/>
                  </div>
                  <button>pay</button>
              </fieldset>


          </form>: <h2>you did it</h2>}
    </div>
  )
}

export default Paymentform