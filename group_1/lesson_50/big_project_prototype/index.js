
function App() {
  return (
    <div id="App">
      <Sidebar>
        <Logo />

        <MainNav>
          <NavLink active icon="home" />
          <NavLink icon="persent" />
          <NavLink icon="stats" />
          <NavLink icon="stats" />
          <NavLink icon="stats" />
          <NavLink icon="stats" />
        </MainNav>
      </Sidebar>

      <PageContent>
        <div>
          <div>
            <h1>Jaegar Resto00</h1>
            <span>Thusday, 2 Feb 2021</span>
          </div>

          <Input icon="search" placehoder="Search for food..." />
        </div>

        <NavTabs
          active="0"
          tabs={['Hot dishes', 'Cold Dishes', 'Soup', 'Grill', 'Appetizer', 'Dissert']}
        />

        <div>
          <h3>Chose dishes</h3>
          <Select values={[
            ['Dine in', 0],
            ['To Go', 1],
            ['Delivery', 3]
          ]} />
        </div>

        <div>
          <ProductCard data={data} />
          <ProductCard data={data} />
          <ProductCard data={data} />
          <ProductCard data={data} />
          <ProductCard data={data} />
          <ProductCard data={data} />
          <ProductCard data={data} />
          <ProductCard data={data} />
        </div>
      </PageContent>

      <OrderCart>
        <h3>Orders #34562</h3>

        <Button theme="default">Dine In</Button>
        <Button theme="outline">To Go</Button>
        <Button theme="outline">Delivery</Button>

        <CartList>
          <CartItem data={data} />
          <CartItem data={data} />
          <CartItem data={data} />
          <CartItem data={data} />
          <CartItem data={data} />
          <CartItem data={data} />
        </CartList>

        <Button>Continue to Payment</Button>
      </OrderCart>
    </div>
  )
}