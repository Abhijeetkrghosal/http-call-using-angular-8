import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  contents = [1, 2];
  users: any;
  viewMode = 'Something else';
  courses = [
    { id: 1, name: 'Abhijeet'},
    { id: 2, name: 'Abhi'},
    { id: 3, name: 'Ghosal'}
  ];
  // numbers = [1, 2, 3, 4, 5];
  oddnumbers = [1, 3, 5];
  evennumbers = [2, 4];
  onlyodd = false;
  errorMessage = '';
  constructor(private http: HttpClient) {

   }

  ngOnInit() {
// const resp = this.http.get('http://starlord.hackerearth.com/gamesarena');
const resp = this.http.get('https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/gamesarena');

resp.subscribe(
  (data) => this.users = data,
  (error) => this.errorMessage = error.error
);
}


}
