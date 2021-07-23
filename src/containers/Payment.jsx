import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import AppContext from '../context/AppContext'
import { sumTotal } from '../utils/cart'

import '../styles/components/Payment.css'

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext)
  const { cart, buyer } = state
  const history = useHistory()

  const handlePayment = (method) => {
    const newOrder = {
      buyer,
      product: cart,
      payment: {
        total: sumTotal(cart),
        method,
      },
    }
    addNewOrder(newOrder)
    history.push('/checkout/success')
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.id}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <hr />
        <div>Pagar con:</div>
        <div className="Payment-button">
          <button type="button" onClick={() => handlePayment('PAYPAL')}>
            <i className="fab fa-cc-paypal" />
          </button>
          <button type="button" onClick={() => handlePayment('VISA')}>
            <i className="fab fa-cc-visa" />
          </button>
          <button type="button" onClick={() => handlePayment('STRIPE')}>
            <i className="fab fa-cc-stripe" />
          </button>
        </div>
      </div>
      <div className="Payment-sideber" />
    </div>
  )
}

export default Payment
