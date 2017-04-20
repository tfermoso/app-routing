import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userform:FormGroup;
  constructor(private _formBuilder:FormBuilder){

  }
  /*
  userform=new FormGroup({
    name:new FormControl('Tomas',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
    apellidos:new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    postalCode:new FormControl('',Validators.pattern('^[1-9][0-9]{4}'))
  })
  */
 
   
  ngOnInit() {
    this.userform=this._formBuilder.group({
      name: ['Tomas',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      apellidos:['',Validators.required],
      email:['',Validators.email],
      postalCode:['',Validators.pattern('^[1-9][0-9]{4}')]
    })
  }
  
  onSubmit():void{
    console.log(this.userform.value);
  }
}
