import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currentDate: string;

  ngOnInit(): void {
    this.currentDate = new Date().getFullYear().toString();
    }s

}
