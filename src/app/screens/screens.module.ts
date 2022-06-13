import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzRadioModule,
    NzFormModule
  ]
})
export class ScreensModule { }
