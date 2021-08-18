import React, { useEffect, useState } from "react";
import { api } from "../../../api";
import { Cart } from "../../blocks/cart/Cart";
import { ProductCard } from "../../blocks/product-card/ProductCard";
import { Input } from "../../ui/input/Input";
import { Select } from "../../ui/select/Select";
import { Tabs } from "../../ui/tabs/Tabs";
import BaseTemplate from "../_templates/base/BaseTemplate";
const {TabItem} = Tabs

function HomePage() {
  const [activeTab, setActiveTab] = useState(0)
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.getProducts()
      .then(res => setProducts(res.products))
    // api.getCategories()
      // .then(res => setCatigories(res.cat))
  }, [])

  return (
    <BaseTemplate>
      <div className="p-24">
        {/* Title & Search */}
        <div className="row mb-3">
          <div className="col-6">
            <h1 className="h1 mb-1">Jaegar Resto</h1>
            <div className="text-white2">{new Date().toLocaleDateString('US-us', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
          </div>
          <div className="col-6">
            <Input placeholder="Search for food, coffe, etc.." className="ml-auto" icon="Home" />
          </div>
        </div>
        {/* Tabs */}
        <Tabs className="mb-3" value={activeTab} onChange={(idx) => setActiveTab(idx)}>
          <TabItem label="Hot Dishes" value="hot" />
          <TabItem label="Cold Dishes" />
          <TabItem label="Soup" />
          <TabItem label="Grill" />
          <TabItem label="Appetizer" />
          <TabItem label="Dessert" />
        </Tabs>
        {/* Products */}
        <div className="row mb-5">
          <div className="col-6">
            Products
          </div>
          <div className="col-6">
            <Select defaultValue="delivery"
                    onChange={console.log}
                    className="ml-auto"
                    style={{
                      width: 120,
                      maxWidth: '100%',
                    }}
            >
              <Select.Option label="Dile In" value="dilein" />
              <Select.Option label="To Go" value="togo" />
              <Select.Option label="Delivery" value="delivery" />
            </Select>
          </div>
        </div>
        <div className="row">
          {products.map(product => (
              <div className="col-4">
                <ProductCard data={product} key={product.id} />
              </div>
            ))}
        </div>
      </div>
      <Cart />
    </BaseTemplate>
  )
}

export default HomePage