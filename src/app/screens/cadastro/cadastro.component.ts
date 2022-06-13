import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  submitForm() {
    if (this.form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Revise as informações preenchidas e tente novamente!',
      });
    }
  }

  createForm() {
    this.form = this.fb.group({
      age: [{ value: null, disabled: false }], //
      cpf: [{ value: null, disabled: false }], //
      description: [{ value: null, disabled: false }], //
      isActive: [{ value: null, disabled: false }], //
      Services: [{ value: null, disabled: false }], //
      price: [{ value: null, disabled: false }], //
      login: [{ value: null, disabled: false }],
      name: [{ value: null, disabled: false }], //
      password: [{ value: null, disabled: false }], //
      street: [{ value: null, disabled: false }], //
      number: [{ value: null, disabled: false }], //
      postalCode: [{ value: null, disabled: false }], //
      city: [{ value: null, disabled: false }], //
      state: [{ value: null, disabled: false }], //
    });
  }

  testee() {
    console.log('oi');
  }

  teste() {
    if(this.radioValue == 'idoso') {
      this.idoso = true;
    } else {
      this.idoso = false;
    }
  }

  form: FormGroup = new FormGroup({});
  radioValue: any;
  idoso: boolean = false;

  ngOnInit(): void {
    this.createForm();
  }

}
