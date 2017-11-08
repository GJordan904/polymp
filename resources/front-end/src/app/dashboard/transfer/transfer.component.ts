import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  storage = {
    max: 0,
    used: 0,
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data
      .subscribe((data: {stats: TransferStats}) => {
        let stats = data.stats;
        this.storage.max = stats.storage.used + stats.storage.remaining;
        this.storage.used = stats.storage.used;
      })
  }



}
