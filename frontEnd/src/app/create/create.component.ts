import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
// import { Persons } from '../persons';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  personForm: any;

  constructor(private apiService: ApiServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  id = this.activatedRoute.snapshot.params["id"]
  ngOnInit(): void {

    if (this.id) {
      this.apiService.getPersonById(this.id).subscribe({
        next: (value) => { this.fillform(value) }
      })

    }

    this.personForm = new FormGroup({
      "fName": new FormControl(''),
      "lName": new FormControl(''),
      "fatherName": new FormControl(''),
      "sex": new FormControl(''),
      "eduQua": new FormControl(''),
      "mobile": new FormControl(''),
      "address": new FormControl(''),
    })
  }




  onSubmit() {
    this.apiService.postPerson(this.personForm.value).subscribe({
      next: (value) => {
        console.log(value);
        this.personForm.reset();
        alert("Created Succesfully")
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("sucessfully post data");
      }
    })
  }

  fillform(data: any) {
    this.personForm.controls["fName"].setValue(data.fName);
    this.personForm.controls["lName"].setValue(data.lName);
    this.personForm.controls["fatherName"].setValue(data.fatherName);
    this.personForm.controls["sex"].setValue(data.sex);
    this.personForm.controls["eduQua"].setValue(data.eduQua);
    this.personForm.controls["mobile"].setValue(data.mobile);
    this.personForm.controls["address"].setValue(data.address);
  }

  onUpdate() {
    this.apiService.putPerson(this.id, this.personForm.value).subscribe({
      next: (value) => {
        this.personForm.reset();
        alert("Update Succesfully");
        this.router.navigate([`/info/${this.id}`])
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("sucessfully put data");
      }
    })
  }

}
