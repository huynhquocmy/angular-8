import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private title: string;
  private icon: string;
  constructor() { }

  getTitle(): string {
      return this.title;
  }

  getIcon(): string {
      return this.icon;
  }

  setTitle(newTitle: string): void {
    this.title = newTitle;
  }

  setIcon(newIcon: string): void {
      this.icon = newIcon;
  }
}
