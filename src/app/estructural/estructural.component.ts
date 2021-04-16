import { Component, OnInit } from '@angular/core';
import { DecoratorPattern } from '../decorator-pattern/decorator-pattern';

@Component({
  selector: 'app-estructural',
  templateUrl: './estructural.component.html',
  styleUrls: ['./estructural.component.scss']
})

@DecoratorPattern({
  name: 'Decorator'
})

export class EstructuralComponent implements OnInit {
  users: any;
  title = 'Gaur Decorator Pattern Works'

  constructor() {
    console.warn(this['name']())
  }

  ngOnInit(): void {
  }


}