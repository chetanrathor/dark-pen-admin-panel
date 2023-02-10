import { Component, OnInit } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-mycom',
  templateUrl: './mycom.component.html',
  styleUrls: ['./mycom.component.css']
})
export class MycomComponent implements OnInit {
name:string = "sohit"
  constructor() { }

  ngOnInit(): void {

  // const myPromise = new Promise(((res)=>{
  //     setTimeout(() => {
  //      this.name = "chetan"    
  //     }, 4000);
  //   }))

  // const myObservable = new Observable((sb)=>{
  //   setTimeout(()=>{
  //     this.name = 'rakesh'
  //   },5000
  //   )
  // })
    
  // myObservable.subscribe()
  // }

   
  

}


onClick(){
  window.sessionStorage.removeItem('TOKEN_KEY');
  window.sessionStorage.setItem('TOKEN_KEY', 'token');
}

}