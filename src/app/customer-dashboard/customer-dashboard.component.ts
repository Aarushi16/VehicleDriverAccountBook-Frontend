import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
// import {MatDialog, MatDialogRef} from '@angular/material/dialog';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})

export class CustomerDashboardComponent implements OnInit {
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

  handelDriver(){
    window.location.href = '/driver';

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
