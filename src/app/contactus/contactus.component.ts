import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  form: FormGroup |any

  ngOnInit() {
    this.form = new FormGroup({

      firstName: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z][a-zA-Z ]+")
      ]) ,

      lastName: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z][a-zA-Z ]+")
      ]) ,

      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern("[0-9]*")

      ]),
      mes: new FormControl('', [
        Validators.required
      ])

    })
  }
  submit() {
    if (this.form.valid) {
      console.log('Form submitted: ', this.form)
      const formData = {...this.form.value}

      console.log('Form Data:' , formData)

      this.form.reset()
    }
  }
  

}
