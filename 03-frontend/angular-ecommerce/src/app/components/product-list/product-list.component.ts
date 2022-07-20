import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products!: Product[];
  currentCategoryId!: number;
  currentCategoryName!: string;
  searchMode!: boolean;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    //checking to see if there is a keyword
    // if there is a keyword param, then a search is being performed
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleSearchProducts() {

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    //now search for products using that keyword
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    );
  }

  handleListProducts() {
  
    //check if "id" parameter is available
  const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
 
  if (hasCategoryId) {
    //get the 'id' param string. convert string to a number using the '+' symbol
    this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    //get the "name" param string
    this.currentCategoryName = this.route.snapshot.paramMap.get('name')!;
  } else {
    // no category id available, default to category id 1
    this.currentCategoryId = 1;
    this.currentCategoryName = 'Books';
  }

  // method is invoked once you subscribe

  //now get the products for the given categoryId
    this.productService.getProductList(this.currentCategoryId).subscribe(
      //assign results to the Product array
      data => {
        this.products = data;
      }
    )

  }

}
