import { useState } from 'react';
import { Button } from '../../ui/button/Button';
import { Input } from '../../ui/input/Input';
import './Cart.scss';

const btns = [
  'Dine In',
  'To Go',
  'Delivery',
]

function Cart() {
  const [active, setActive] = useState(0)

  return (
    <div class="Cart">
      <h2 className="h2">Orders #34562</h2>
      
      {/* 
      <BtnTabs active="0" onChange={console.log}>
        <Button label="Dile In" color="primary" />
        <Button label="Dile In" color="primary" />
        <Button label="Dile In" color="primary" />
      </BtnTabs>
      */}
      
      <div>
        {btns.map((label, idx) => (
          <Button onClick={() => setActive(idx)} label={label} key={idx} color="primary" theme={idx === active ? 'default' : 'outline'} className="mr-2" />
        ))}
      </div>
      
      {/* <CartProducts /> */}
      <div className="CartProducts" style={{ flex: '1', overflow: 'auto' }}>
        <table className="CartProducts__list">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2">
                <div className="CartProducts__item">
                  <img />
                  <div>
                    <h3>Spicy seasoned sea...</h3>
                    <Input value="2" />
                    <Input placeholder="Order Note..." />
                  </div>
                </div>
              </td>
              <td>
                <span className="CartProducts__price">$ 4,58</span>
                <Button theme="outline" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{padding: '30px 0'}}>
        <Button label="Continue to payment" />
      </div>
    </div>
  )
}

export {Cart}