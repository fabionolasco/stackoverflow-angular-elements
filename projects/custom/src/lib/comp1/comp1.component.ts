import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Comp1Component implements OnInit {

  public i = 1;
  public list = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5}
  ];

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.i++;
  }

}


import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  imports: [BrowserModule],
  declarations: [Comp1Component],
  entryComponents: [Comp1Component],
})
export class Comp1ComponentModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(Comp1Component, {
      injector: this.injector
    });

    customElements.define('comp-one', el);
  }
}

function bootstrap() {
  platformBrowserDynamic().bootstrapModule(Comp1ComponentModule).catch(err => console.error(err));
}

bootstrap();
