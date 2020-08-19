import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  files: Array<any> = [
    { name: 'be yourself', artist: 'AudioSlave' },
    { name: 'Any colour you like', artist: 'Pink Floyd' },
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
