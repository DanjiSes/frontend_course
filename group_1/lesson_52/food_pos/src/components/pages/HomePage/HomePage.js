import React, { useState } from "react";
import { ProductCard } from "../../blocks/product-cart/ProductCart";
import { Input } from "../../ui/input/Input";
import { Select } from "../../ui/select/Select";
import { Tabs } from "../../ui/tabs/Tabs";
import BaseTemplate from "../_templates/base/BaseTemplate";
const {TabItem} = Tabs

function HomePage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <BaseTemplate>
      <div className="p-24">
        {/* Title & Search */}
        <div className="row mb-3">
          <div className="col-6">
            <h1 className="h2 mb-1">Jaegar Resto</h1>
            <div className="text-white2">{new Date().toLocaleDateString('US-us', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
          </div>
          <div className="col-6">
            <Input placeholder="Search for food, coffe, etc.." className="ml-auto" icon="Home" />
          </div>
        </div>
        {/* Tabs */}
        <Tabs className="mb-3" value={activeTab} onChange={(idx) => setActiveTab(idx)}>
          <TabItem label="Hot Dishes" />
          <TabItem label="Cold Dishes" />
          <TabItem label="Soup" />
          <TabItem label="Grill" />
          <TabItem label="Appetizer" />
          <TabItem label="Dessert" />
        </Tabs>
        {/* Products */}
        <div className="row">
          <div className="col-6">
            Products
          </div>
          <div className="col-6">
            <Select className="ml-auto" />
            {/* 
            То как должен выглядить селект
            <Select defaultValue="lucy" onChange={handleChange}>  
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            */}
          </div>
        </div>
        <div className="row">
          {[
              {
                id: '15',
                image: 'https://picsum.photos/100/100',
                name: 'Spicy seasoned seafood noodles',
                price: 2.29,
                avaliable_count: 20
              },
              {
                id: '10',
                image: 'https://picsum.photos/100/100',
                name: 'Spicy seasoned seafood noodles',
                price: 2.29,
                avaliable_count: 20
              },
              {
                id: '11',
                image: 'https://picsum.photos/100/100',
                name: 'Spicy seasoned seafood noodles',
                price: 2.29,
                avaliable_count: 20
              },
              {
                id: '12',
                image: 'https://picsum.photos/100/100',
                name: 'Spicy seasoned seafood noodles',
                price: 2.29,
                avaliable_count: 20
              },
              {
                id: '13',
                image: 'https://picsum.photos/100/100',
                name: 'Spicy seasoned seafood noodles',
                price: 2.29,
                avaliable_count: 20
              },
            ].map(product => (
              <div className="col-4">
                <ProductCard data={product} key={product.id} />
              </div>
            ))}
        </div>
      </div>
    </BaseTemplate>
  )
}

export default HomePage