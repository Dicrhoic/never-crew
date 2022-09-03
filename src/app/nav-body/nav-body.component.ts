import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-body',
  templateUrl: './nav-body.component.html',
  styleUrls: ['./nav-body.component.css'],
})
export class NavBodyComponent {
  public navElement: HTMLElement;

  @ViewChild(NavBodyComponent, { read: ElementRef }) private navBodyEle: ElementRef;

  ngAfterViewInit() {
    //const navElement = this.navBodyEle.nativeElement;
  }
}
