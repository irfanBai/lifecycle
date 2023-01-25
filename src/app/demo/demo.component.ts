import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy{
@Input() value: string = 'Proacademy';

constructor() {

}

ngOnChanges(changes: SimpleChanges): void {
  console.log("ngonchange called")
}
ngOnInit() {
  console.log("ngOnInit called")
}
ngDoCheck(): void {
  console.log("ngDoCheck called")
}
ngAfterContentInit(): void {
  console.log("ngAfterContentInit called")
}
ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked called")
}
ngAfterViewInit(): void {
  console.log("ngAfterViewInit called")
}
ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked called")
}
ngOnDestroy(): void {
  console.log("ngOnDestroy called")
}
}
