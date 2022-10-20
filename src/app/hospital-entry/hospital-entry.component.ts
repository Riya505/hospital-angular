import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-entry',
  templateUrl: './hospital-entry.component.html',
  styleUrls: ['./hospital-entry.component.css']
})
export class HospitalEntryComponent implements OnInit {

  constructor() { }

  patientName=""
  doctorName=""
  appoinmentDate=""
  appoinmentTime=""

  readValue=()=>{
    let data={
      "patientName":this.patientName,
      "doctorName":this.patientName,
      "appoinmentDate":this.appoinmentDate,
      "appoinmentTime":this.appoinmentTime

    }
    console.log(data)
  }



  ngOnInit(): void {
  }

}
