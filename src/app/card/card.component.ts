import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public getJsonValue:any;
  public getCountryValue:any;
  icon:string ="https://openweathermap.org/img/wn/" 
  icon1:string="@2x.png"
  city:any
  country:any
  option!:string
  dataArray:[] = []
  constructor(private http: HttpClient) { }
  search(){
    console.log(this.city)
    
  }
  ngOnInit(): void {
    this.getMethod()
    this.getMethod2()

 
  }
  public getMethod(){
    this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+this.city+','+this.country+'&appid=0f3fb9fa31ad3d41f1bb2bd0841c3f2f&units=imperial').subscribe((data)=>{
      console.log(data)
      console.log()
      this.getJsonValue = data
      
      console.log(this.getJsonValue.list[0].main)

      
    })
  }
  getMethod2(){
    this.http.get('https://countriesnow.space/api/v0.1/countries').subscribe((data1)=>{
        console.log(data1)
        this.getCountryValue= data1
        for (var i of this.getCountryValue.data){
          console.log(i.country)
        }
        
      })
  }

}
