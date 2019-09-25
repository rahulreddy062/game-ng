import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers:number[] = [] 
  evenNumbers:number[] = [] 
  onGStart(firednumber:number){
   if(firednumber%2===0){
    this.evenNumbers.push(firednumber)
   }
   else{
     this.oddNumbers.push(firednumber)
   }
  }
}
