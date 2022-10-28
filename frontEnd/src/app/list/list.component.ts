import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  persons:any;
  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.showData()
  }

  showData() {
    this.apiService.getPersons().subscribe({
      next: (value) => {
        console.log(value);
        this.persons= value;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("Sucessfully get");
      }
    })
  }
}
