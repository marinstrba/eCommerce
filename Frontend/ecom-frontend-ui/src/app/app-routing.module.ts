import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'
import { CartComponent } from './cart/cart.component'
import { ShopComponent } from './shop/shop.component'
import { CheckoutComponent } from './checkout/checkout.component'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { ItemDetailsComponent } from './shop/item/item-details/item-details.component'

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'shop', component: ShopComponent
  },
  {
    path: 'user-profile', component: UserProfileComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'item-details', component: ItemDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
