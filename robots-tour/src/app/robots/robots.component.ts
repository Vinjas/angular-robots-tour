import { Component, OnInit } from '@angular/core';
import { Robot } from "../robot"

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.css']
})
export class RobotsComponent implements OnInit {
  robot: Robot = {
    id: 1,
    name: "Windstorm"
  };  

  constructor() { }

  ngOnInit(): void {
  }
}
