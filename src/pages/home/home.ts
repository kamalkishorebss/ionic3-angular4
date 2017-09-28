import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';
import 'chart.js';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public showHide:boolean=false;

  public lineChartColors:Array<any> = [
	   {
		    backgroundColor: 'rgba(232, 76, 61,0.2)',
            borderColor: 'rgba(232, 76, 61,1)',
            pointBackgroundColor: 'rgba(232, 76, 61,1)',
            pointBorderColor: '#FD5C2C',
            pointHoverBackgroundColor: '#FD5C2C',
            pointHoverBorderColor: 'rgba(232, 76, 61,1)'
	 },
  ];
  public lineChartType:string = 'line';
  public lineChartData:Array<any> = [{data: [18, 48, 27, 39, 10, 27, 40], label: 'Series'}];
  public lineChartLabels:Array<any> = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']; 
     
  constructor(
          public navCtrl: NavController,
          public ChartModule:ChartsModule
        ) {
      this.showHide=true;
  }
   
  submenu(){
   this.showHide=!this.showHide; 
  } 
  

}
