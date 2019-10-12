import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @ Input() postItemTitle: string ;
  @ Input()postItemContent: string;

  @ Input()postItemLoveItnb: number;

  @ Input() postItemCreatedAt: Date;
  constructor() {
    this.postItemLoveItnb = 0;
  }

  ngOnInit() {
  }

  getTitle() {
    return this.postItemTitle;
  }
  getContent() {
    return this.postItemContent;
  }

  getDate() {
    return this.postItemCreatedAt;
  }
  getColor() {
    if ( this.postItemLoveItnb > 0) {
      return 'green';
    } else if (this.postItemLoveItnb < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }
    isLoveIt() {
      if (this.postItemLoveItnb > 0) {
        return true;
      }
    }
    isDontLoveIt() {
      if (this.postItemLoveItnb < 0) {
        return true;
      }
    }

  onLoveIt() {
    this.postItemLoveItnb = ++this.postItemLoveItnb ; }

  onDoNotLoveIt() {
    this.postItemLoveItnb = --this.postItemLoveItnb; }

}
