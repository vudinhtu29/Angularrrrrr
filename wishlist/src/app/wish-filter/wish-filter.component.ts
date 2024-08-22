import { Component,OnInit,Input,Output,EventEmitter, untracked } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { AnimationDriver } from '@angular/animations/browser';
import { animate, keyframes } from '@angular/animations';
const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete

]
@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
  constructor(){}
  ngOnInit(): void {
    this.updateFilter('0')

  }
  listFilter: any = '0';
 updateFilter(value: any){
  this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
  
}

