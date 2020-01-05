import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peoples;
  content = 'Home';
  constructor() { }

  ngOnInit() {
    // this.headerService.setTitle('Home');
    this.peoples = ['grahamcampbell', 'fabpot', 'weierophinney', 'rkh', 'josh'];
  }

}
