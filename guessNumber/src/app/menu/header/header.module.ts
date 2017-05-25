import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDesignComponent } from './../header-design/header-design.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';

@NgModule({
  declarations: [
    HeaderDesignComponent,
    LeftmenuComponent
  ],
  exports: [
    HeaderDesignComponent,
    LeftmenuComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [
  ]
})
export class HeaderModule {

  constructor() { 
  
    console.log('init header module');
  }
}
