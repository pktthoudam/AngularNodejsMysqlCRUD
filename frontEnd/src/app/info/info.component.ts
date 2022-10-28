import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  person: any;
  id= this.activatedRoute.snapshot.params['id'];

  constructor(private apiService: ApiServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
     // show 1 data

    this.apiService.getPersonById(this.id).subscribe({
      next: (value) => {
        console.log(value);
        this.person = value;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("Sucessfully get one data");
      }
    })
    
  }

 

  // delete data

  deletePerson(id: number) {
    this.apiService.deletePerson(id).subscribe({
      next: (value) => {
        this.router.navigate(["/list"]);
        alert("Delete Successfully")

      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("Successfully delete");
      }
    })
  }
 
  updatePerson(){
    this.router.navigate([`/update/${this.id}`])
  }

}
