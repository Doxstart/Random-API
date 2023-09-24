import { Component, OnInit } from '@angular/core';
import { IData, IMeme, IMemeInfo } from 'src/app/models/memes';
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
  data: IData[] = [];
  meme: IMeme[] = [];


  constructor(private connServ: ConnectionService){}

  ngOnInit(): void {
      this.connServ.getData().subscribe({
        next: (info: IMemeInfo) => ((this.info = info), (console.log(info))),
        error: (err: any) => console.log(err),
      });
  }
}
