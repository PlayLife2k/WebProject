import { Component, OnInit } from '@angular/core';
import {Task} from '../../Models/Task';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  completedTasks = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
