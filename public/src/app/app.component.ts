import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "";
  image = "";
  abilities = [];
  constructor(private _httpService: HttpService){}
  getTheData(event: any){
    this.abilities = [];
    var num = event.target.value;
    let observe = this._httpService.getPokemon(num);
    observe.subscribe(data => {
      this.name = data['name'];
      this.image = data['sprites']['front_default'];
      for(var i = 0; i < data['abilities'].length; i++){
        this.abilities.push(data['abilities'][i].ability['name']);
      }
    })
  }
}