import { Component,  HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isFocused: boolean = false;
  searchQuery: string = '';
  navIsFixed: boolean = false;

  focusSearch(el) {
    this.isFocused = true;
    el.focus();
  }

  clearSearch() {
    this.isFocused = false;
    this.searchQuery = '';
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.navIsFixed = offset > 51;
  }
}
