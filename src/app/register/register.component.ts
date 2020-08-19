import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  types: Array<any> = [
    { name: 'Rock' },
    { name: 'Jazz' },
    { name: 'Reggae' },
    { name: 'Ska' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
