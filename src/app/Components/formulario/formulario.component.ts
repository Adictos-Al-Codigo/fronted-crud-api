import { Component } from '@angular/core';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  email:string = "roberto_alcivar2000@hotmail.com";
  password:string = "12345678";

  constructor (private dataService:DataService){

  }

  login(){
    let data = {email:this.email,password:this.password}

    this.dataService.login(data).subscribe({
      next: (s) =>{
        console.log(s);
        localStorage.setItem("token",s.accesToken);
      },
      error: (err) =>{
        debugger;
      }
    });
  }
}
