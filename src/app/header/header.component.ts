import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType: string = 'default';
  sellerName: string = '';
  searchresult: undefined | product[];
  UserName: string = '';
  constructor(private route: Router, private product: ProductService) {

  }
  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
            this.menuType = 'seller';
          }
          // else if(localStorage.getItem('user')) {
          //   let userStore = localStorage.getItem('user');
          //   let userData = userStore && JSON.parse(userStore);
          //   //console.log(userData.name);
          //   this.UserName = userData.name;
          //   this.menuType = 'user';
          // }
          else {
            this.menuType = 'default';
          }
      }
      })
  }
  logout() {
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

  userLogout() {
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth']);
  }

  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      //console.log(element.value);
      this.product.searchProducts(element.value).subscribe((result) => {
        //console.warn(result);
        //result.length=5;
        this.searchresult = result;
      })
    }
  }
  hideSearch() {
    this.searchresult = undefined;
  }

  redirectToDetails(id: number) {
    this.route.navigate(['/detail/' + id]);
  }

  submitSearch(val: string) {
    //console.warn(val);
    this.route.navigate([`search/${val}`]);

  }
}
