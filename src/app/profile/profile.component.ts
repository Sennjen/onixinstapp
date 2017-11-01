import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit{
  profileData: Object;
  postId: number;

  constructor(private apiService: ApiService) { }

  explorePost(id) {
    this.postId = id;
  }

  getUser(id): void {
    this.apiService.getUser(id).subscribe(data => this.profileData = data);
  }

  ngOnInit(): void {
    this.getUser(1);
  }
}
