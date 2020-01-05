import { Component, OnInit } from '@angular/core';
import { DetailService } from '../../services/people-detail/detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {
  detail;
  peopleName;
  constructor(
    private detailService: DetailService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.peopleName = this.route.snapshot.params.peopleName;
    this.detailService.getDetailPeople(this.peopleName).subscribe((res) => {
      if (res) {
        this.detail = res;
      }
    });
  }
}
