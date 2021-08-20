import React, { useEffect, useState } from "react";
import { api } from "../../../api";
import { Cart } from "../../blocks/cart/Cart";
import { ProductCard } from "../../blocks/product-card/ProductCard";
import { Input } from "../../ui/input/Input";
import { Select } from "../../ui/select/Select";
import { Tabs } from "../../ui/tabs/Tabs";
import BaseTemplate from "../_templates/base/BaseTemplate";
const { TabItem } = Tabs;

function HomePage() {
  const [activeTab, setActiveTab] = useState(0);
  // TODO: Обединить лоадинг в один общий стейт
  const [products, setProducts] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const [categories, setCategories] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    // Начинаю загрузку
    setProducts({ ...products, loading: true });
    setCategories({ ...categories, loading: true });

    Promise.all([api.getCategories(), api.getProducts()])
      .then((res) => {
        // Записываю список продуктов в стейт
        setCategories({
          ...categories,
          items: res[0].categories,
          loading: false,
        });

        // Записываю список продуктов в стейт
        setProducts({
          ...products,
          items: res[1].products,
          loading: false,
        });
      })
      .catch((err) => {
        // Записываю ошибку в стейт
        setCategories({
          ...categories,
          error: err[0].error,
          loading: false,
        });

        // Записываю ошибку в стейт
        setProducts({
          ...products,
          error: err[1].error,
          loading: false,
        });
      });
  }, []);

  return (
    <BaseTemplate>
      <div className="p-24">
        {/* Title & Search */}
        <div className="row mb-3">
          <div className="col-6">
            <h1 className="h1 mb-1">Jaegar Resto</h1>
            <div className="text-white2">
              {new Date().toLocaleDateString("US-us", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
          <div className="col-6">
            <Input
              placeholder="Search for food, coffe, etc.."
              className="ml-auto"
              icon="Home"
            />
          </div>
        </div>
        {/* Tabs */}
        {categories.loading ? (
          <div>Categories loading...</div>
        ) : categories.error ? (
          <div>Error</div>
        ) : (
          <Tabs
            className="mb-3"
            value={activeTab}
            onChange={(idx) => setActiveTab(idx)}
          >
            {categories.items.map((c) => (
              <TabItem label={c.name} />
            ))}
          </Tabs>
        )}
        {/* Products */}
        <div className="row mb-5">
          <div className="col-6">Products</div>
          <div className="col-6">
            <Select
              defaultValue="delivery"
              onChange={console.log}
              className="ml-auto"
              style={{
                width: 120,
                maxWidth: "100%",
              }}
            >
              <Select.Option label="Dile In" value="dilein" />
              <Select.Option label="To Go" value="togo" />
              <Select.Option label="Delivery" value="delivery" />
            </Select>
          </div>
        </div>
        <div className="row">
          {products.loading ? (
            <div>Loading...</div>
          ) : products.error ? (
            <div>{products.error.message}</div>
          ) : (
            products.items.map((product) => (
              <div className="col-4">
                <ProductCard data={product} key={product.id} />
              </div>
            ))
          )}
        </div>
      </div>
      <Cart />
    </BaseTemplate>
  );
}

export default HomePage;
