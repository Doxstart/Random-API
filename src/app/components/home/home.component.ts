import { Component, OnInit } from '@angular/core';
import { IMemeInfo } from 'src/app/models/memes';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  data: IMemeInfo[] = [];

  constructor(private connServ: ConnectionService){}

  ngOnInit(): void {
      this.connServ.getData().subscribe({
        next: (data: IMemeInfo[]) => ((this.data = data), (console.log(data))),
        error: (err: any) => console.log(err),
      });
  }
}
