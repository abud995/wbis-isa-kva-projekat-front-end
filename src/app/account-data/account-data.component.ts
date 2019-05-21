import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl,Validators  } from '@angular/forms';


@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.css']
})
export class AccountDataComponent implements OnInit {

  @Input() public parrentForm: FormGroup;
  public accountDataForm : FormGroup;

  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.accountDataForm = this.fb.group({
      firstName: ['', {validators: [Validators.pattern('[a-zA-Z]{3,}')]}],
      lastName: ['', {validators: [Validators.pattern('[a-zA-Z]{3,}')]}],
      jmbg: ['', {validators: [Validators.pattern('[0-9]{13}')]}],
      username: ['', {validators: [Validators.required, Validators.minLength(3)]}],
      email: ['', {validators: [Validators.required, Validators.email]}],
      password: ['', {validators: [Validators.required, Validators.minLength(8)]}],
      confirmPassword: [''],

    });

    this.parrentForm.addControl("accountData", this.accountDataForm);
  }

}
