import React, { useContext, useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from 'axios'
import '../../pages/checkOutPage.css'
import { useNavigate } from 'react-router-dom'
import DataContext from '../../context/context'

const Paymentform = () => {
    const { darkMode } = useContext(DataContext);
  
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const navigate=useNavigate()

    const Card_options = {
        iconStyle: "solid",
        style: {
            base: {
                iconColor: "#c4f0ff",
                color: "black   ",
                fontWeight: 500,
                fontSize: "24px",
            },
            invalid: {
                iconColor: "#ffc7ee",
                color:"#ffc7ee"
            }
        }      
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
                    amount: "",
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
            console.log("payment successfull");
            alert("Order Placed, please continue to shopping")
            navigate('/home')
        }
    }
    return (
        
              <div id={darkMode ? "dark" : "light"} style={{ height: "100vh" }}>
            <div className='paymentContainer'>
                <h1>Enter your card Details</h1>
                4000003560000008
                {!success ? <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className='cardPayment'>
                            <CardElement options={Card_options} />
                        </div>
                        <div className='cardHolder'>
                            <input placeholder="Full Name" />
                            <button>Make a Payment</button>
                        </div>
                    </fieldset>
                    </form> : <h2>you did it</h2>}
                    </div>
            </div>
    
    )
}

export default Paymentform