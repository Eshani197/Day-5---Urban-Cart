import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../api';

@Component({
  selector: 'app-singleproduct',
  imports: [],
  templateUrl: './singleproduct.html',
  styleUrl: './singleproduct.css'
})
export class Singleproduct {
  product: any;
  constructor(private api: Api, private route: ActivatedRoute) { }
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.api.getProductsById(id).then((res: any) => this.product = res)
  }
}
