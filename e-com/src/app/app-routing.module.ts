import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHoomeComponent } from './seller-hoome/seller-hoome.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'seller-auth',component:SellerAuthComponent},
  {
    path:'seller-hoome',component:SellerHoomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'seller-add-product',
    component:SellerAddProductComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'seller-update-product/:id',
    component:SellerUpdateProductComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'search/:query',
    component:SearchComponent
  },
  {
    path:'detail/:productId',
    component:ProductDetailsComponent
  },
  {
    path:'user-auth',
    component:UserAuthComponent,
    canActivate:[AuthGuard]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
