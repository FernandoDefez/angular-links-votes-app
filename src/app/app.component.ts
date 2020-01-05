import { Component, Input} from '@angular/core';
import { Link } from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: Link[];

  constructor(){
    this.links = [
      new Link("Angular", "http://angular.io", 100),
      new Link("Google", "http://google.com", 10),
    ];
  }
  

  //Add links method
  addLink(title: HTMLInputElement, link: HTMLInputElement){
    this.links.push(new Link(title.value, link.value)); //The push method is for add a new object
    
    //Clean inputs fields
    title.value=""; 
    link.value="";
    return false; //Cancel the refresh page
  }


}
