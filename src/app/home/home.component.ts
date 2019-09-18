import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ProductsService } from '../services/products.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  closeResult: string;
  shoppingListMock:any = [];
  listItems: any = [
    { id: 1, name: 'banana'},
    { id: 2, name: 'peach' },
    { id: 3, name: 'potato' },
    { id: 4, name: 'apple' }
  ];
  formControl = new FormControl('');

  constructor(private modalService: NgbModal, private config: NgSelectConfig, private service: ProductsService) { 
    this.config.notFoundText = 'Custom not found';
  }
  

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  private saveItem(){
    console.log();
  }
  
  ngOnInit() {
    this.service.getItemsShopping().toPromise().then((result) => {
      setTimeout(() => {
        this.shoppingListMock = result;        
      }, 10000);
    });    
  }
}
