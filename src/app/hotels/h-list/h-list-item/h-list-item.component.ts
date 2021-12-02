import { Component, OnInit, Input} from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service'


@Component({
  selector: 'app-h-list-item',
  templateUrl: './h-list-item.component.html',
  styleUrls: ['./h-list-item.component.css']
})
export class HListItemComponent implements OnInit {

  showModal = false;
  @Input() productItem: Product | any

  constructor(private msg: MessengerService) { }

  ngOnInit() {

  }

  // handleAddToCard() {
  //   this.msg.sendMsg(this.productItem)
  // }

}
