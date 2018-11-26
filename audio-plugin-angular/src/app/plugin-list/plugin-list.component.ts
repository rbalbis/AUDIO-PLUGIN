import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-plugin-list',
  templateUrl: './plugin-list.component.html',
  styleUrls: ['./plugin-list.component.css']
})
export class PluginListComponent implements OnInit {
  value;
  plugins = [1,2,3,4,5];
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f6f6f6';
 }
}
