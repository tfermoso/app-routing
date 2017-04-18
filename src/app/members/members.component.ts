import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:any):void{
    console.log('El formulario tiene',form);
  }

}
