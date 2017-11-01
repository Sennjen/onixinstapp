import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html'
})
export class PostViewComponent implements OnInit{
  @Input() isShown: boolean;
  @Output() isShownChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  postData: Object;

  constructor(private apiService: ApiService) { }

  hideModal() {
    this.isShown = !this.isShown;
    this.isShownChange.emit(this.isShown);
  }

  getPost(id): void {
    this.apiService.getPost(id).subscribe(data => {this.postData=data;console.log(data)});
  }

  ngOnInit(): void {
    this.getPost(1);
  }
}
