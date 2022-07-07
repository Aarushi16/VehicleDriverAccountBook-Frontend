import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
// import {MatDialog, MatDialogRef} from '@angular/material/dialog';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {

  displayedColumns: string[] = ['Registration_No', 'Model_Name', 'Vehicle_Type', 'Number_Of_Seat', 'AC_Avail'];

  dataSource: any = [];
  res: any;
  vehiclesData: any = [];
  selected = 'option2';
  registrationNo: any;
  modelNo: any;
  vechicalType:any;
  noOfSeat: any;
  acAvl: any;

  registrationNoU: any;
  modelNoU: any;
  vechicalTypeU:any;
  noOfSeatU: any;
  acAvlU: any;


  constructor(private dataService: DataService,) {

  }

  ngOnInit() {
    this.getVehicleData();

  }

  handelRegistration_No(event: any) {
    this.registrationNo = event.target.value;

  }
  handelModel_Name(event: any) {
    this.modelNo = event.target.value;
  }
  handelVehicle_Type(event: any) {
    this.vechicalType = event.target.value;
  }
  handelNumber_Of_Seat(event: any) {
    this.noOfSeat = event.target.value;
  }
  handelAC_Available(event: any) {
    this.acAvl = event.target.value;
  }

  handelVechile(){
    window.location.href = '/dashboard';
  }
  handelBooking(){
    window.location.href = '/booking';

  }
  handelAddVechice() {
    // console.log("user name len",this.username,this.username.length)
    // if(this.username.length === 0 && this.password.length === 0){
    if (this.registrationNo.length > 0 && this.modelNo.length > 0 && this.noOfSeat.length > 0 && this.vechicalType.length > 0 && this.acAvl.length > 0) {
      this.dataService.handelAddVechice(this.registrationNo, this.modelNo, this.noOfSeat, this.vechicalType, this.acAvl).subscribe((data) => {
        // const resSTR = JSON.stringify(res);
        // const resJSON = JSON.parse(resSTR);
        console.log("data", data)
        this.res = data;
        console.log("data 1", this.res.isSuccess)
        if (this.res.isSuccess == true) {

          // localStorage.setItem('token', JSON.stringify(this.res.token));
          // window.location.href = '/dashboard';
          alert('vechicle  added sucessfull');

        } else {

          alert('sorry vechicle not added');
        }

      });

    }
    else {
      alert('Please Enter All Fields');
    }


  }


  getVehicleData() {
    this.dataService.getVehicleData().subscribe((data) => {
      console.log("data vec", data)
      this.res = data;
      if (this.res.isSuccess == true) {
        this.vehiclesData = this.res.vehicles
        console.log("this.vehiclesData", this.vehiclesData)
        //  this.dataSource=this.vehiclesData

      } else {

        alert('Sorry Login Fail');
      }

    })
  }

  // updatevehicledata(data){

  // }
  deletevehicledata(data: { registrationNo: any; }) {
    console.log("delete", data.registrationNo)
    this.dataService.deleteVehicleData(data.registrationNo).subscribe((data) => {
      console.log("data vec", data)
      this.res = data;
      if (this.res.isSuccess == true) {

        alert('data delete sucess');
      } else {

        alert('data not delete ');
      }

    })
  }

  handelRegistration_NoU(event: any) {
    this.registrationNoU = event.target.value;

  }
  handelModel_NameU(event: any) {
    this.modelNoU = event.target.value;
  }
  handelVehicle_TypeU(event: any) {
    this.vechicalTypeU = event.target.value;
  }
  handelNumber_Of_SeatU(event: any) {
    this.noOfSeatU = event.target.value;
  }
  handelAC_AvailableU(event: any) {
    this.acAvlU = event.target.value;
  }

  handelUpdateVechice(){

    if (this.registrationNoU.length > 0 && this.modelNoU.length > 0 && this.noOfSeatU.length > 0 && this.vechicalTypeU.length > 0 && this.acAvlU.length > 0) {
      this.dataService.handelUpdateVechice(this.registrationNoU, this.modelNoU, this.noOfSeatU, this.vechicalTypeU, this.acAvlU).subscribe((data) => {
        // const resSTR = JSON.stringify(res);
        // const resJSON = JSON.parse(resSTR);
        console.log("data", data)
        this.res = data;
        console.log("data 1", this.res.isSuccess)
        if (this.res.isSuccess == true) {

          // localStorage.setItem('token', JSON.stringify(this.res.token));
          // window.location.href = '/dashboard';
          alert('data  added sucessfull');

        } else {

          alert('sorry data not updated');
        }

      });

    }
    else {
      alert('Please Enter All Fields');
    }

  }





}
