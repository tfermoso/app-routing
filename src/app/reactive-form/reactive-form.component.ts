import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userform=new FormGroup({
    name:new FormControl('Tomas'),
    apellidos:new FormControl(),
    email:new FormControl()
  })
 
   


  ngOnInit() {
  }
  
  onSubmit():void{
    console.log(this.userform.value);
  }
}
