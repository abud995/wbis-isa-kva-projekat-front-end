import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl,Validators  } from '@angular/forms';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.css']
})
export class AccountDataComponent implements OnInit {

  @Input() public parrentForm: FormGroup;


  constructor() { }

  ngOnInit() {
  }

}
