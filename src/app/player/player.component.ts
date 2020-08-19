import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  files: Array<any> = [
    { name: 'First Song', artist: 'Inder' },
    { name: 'Second Song', artist: 'You' },
  ];
  state;
  currentFile: any = {};

  isFirstPlaying(): any {
    return false;
  }
  isLastPlaying(): any {
    return true;
  }

  constructor() { }

  ngOnInit(): void { }
}
