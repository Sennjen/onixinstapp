import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.component.html'
})
export class ExploreComponent implements OnInit{
  postId: number;

  usersList: Array<any>;
  gallery: Array<any>;

  explorePost(id) {
    this.postId = id;
  }

  constructor(private apiService: ApiService) { }

  getGallery(): void {
    this.apiService.getGallery().subscribe(data => this.gallery = data);
  }

  getUsers(): void {
    this.apiService.getUsers().subscribe(data => this.usersList = data);
  }

  ngOnInit(): void {
    this.getGallery();
    this.getUsers();
  }
}
