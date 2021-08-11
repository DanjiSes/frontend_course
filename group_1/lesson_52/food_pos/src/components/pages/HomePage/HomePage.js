import { useState } from "react";
import { Input } from "../../ui/input/Input";
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
        <Tabs value={activeTab} onChange={(idx) => setActiveTab(idx)}>
          <TabItem label="Hot Dishes" />
          <TabItem label="Cold Dishes" />
          <TabItem label="Soup" />
          <TabItem label="Grill" />
          <TabItem label="Appetizer" />
          <TabItem label="Dessert" />
        </Tabs>
      </div>
    </BaseTemplate>
  )
}

export default HomePage