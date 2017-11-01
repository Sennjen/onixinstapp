import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  posts: Array<any>;
  
  constructor(private apiService: ApiService) { }
  getPosts(): void {
    this.apiService.getPosts().subscribe(data => this.posts=data);
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
