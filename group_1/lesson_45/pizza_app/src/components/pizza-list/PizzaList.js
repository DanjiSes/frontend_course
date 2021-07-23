import { api } from "../../api"
import { PizzaItem } from "../pizza-item/PizzaItem"

api.getPizzas().then(console.log)

function PizzaList() {
  return (
    <div className="PizzaList">
      <h1>Все пиццы</h1>
      {[].map((pizzaData, idx) => (
        <PizzaItem data={pizzaData} key={idx} />
      ))}
    </div>
  )
}

export {PizzaList}