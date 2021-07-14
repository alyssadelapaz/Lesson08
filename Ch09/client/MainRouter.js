import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import NewShop from './shop/NewShop'
import Shops from './shop/Shops'
import MyShops from './shop/MyShops'
import Shop from './shop/Shop'
import EditShop from './shop/EditShop'
import NewProduct from './product/NewProduct'
import EditProduct from './product/EditProduct'
import Product from './product/Product'
import Cart from './cart/Cart'
import StripeConnect from './user/StripeConnect'
import ShopOrders from './order/ShopOrders'
import Order from './order/Order'
import MyAuctions from './auction/MyAuctions'
import OpenAuctions from './auction/OpenAuctions'
import NewAuction from './auction/NewAuction'
import EditAuction from './auction/EditAuction'
import Auction from './auction/Auction'

const MainRouter = () => {
  return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>

        {/* Page 353 */}
        <Route path="/cart" component={Cart}/>
        {/* Page 335 */}
        <Route path="/product/:productId" component={Product}/>
        {/* Page 305 */}
        <Route path="/shops/all" component={Shops}/>
        {/* Page 312 */}
        <Route path="/shops/:shopId" component={Shop}/>

        <Route path="/order/:orderId" component={Order}/>
        {/* Page 385 */}
        <PrivateRoute path="/seller/orders/:shop/:shopId" component={ShopOrders}/>

        {/* Page 308 */}
        <PrivateRoute path="/seller/shops" component={MyShops}/>
        {/* Page 301 */}
        <PrivateRoute path="/seller/shop/new" component={NewShop}/>
        {/* Page 315 */}
        <PrivateRoute path="/seller/shop/edit/:shopId" component={EditShop}/>
        {/* Page 323 */}
        <PrivateRoute path="/seller/:shopId/products/new" component={NewProduct}/>
        {/* Page 337 */}
        <PrivateRoute path="/seller/:shopId/:productId/edit" component={EditProduct}/>

        <Route path="/seller/stripe/connect" component={StripeConnect}/>
        <PrivateRoute path="/myauctions" component={MyAuctions}/>
        <PrivateRoute path="/auction/new" component={NewAuction}/>
        <PrivateRoute path="/auction/edit/:auctionId" component={EditAuction}/>
        {/* Page 424 */}
        <Route path="/auction/:auctionId" component={Auction}/>
        <Route path="/auctions/all" component={OpenAuctions}/>
      </Switch>
    </div>)
}

export default MainRouter
