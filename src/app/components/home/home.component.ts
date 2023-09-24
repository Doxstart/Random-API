import { Component, OnInit } from '@angular/core';
import { IMemeInfo } from 'src/app/models/memes';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  info: IMemeInfo = {
    success: false,
    data: {
      memes: []
    }
  };

  constructor(private connServ: ConnectionService){}

  ngOnInit(): void {
      this.connServ.getData().subscribe({
        next: (info: IMemeInfo) => ((this.info = info), (console.log(info))),
        error: (err: any) => console.log(err),
      });
  }
}
