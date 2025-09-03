import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { StorageService } from './services/storage/storage';
import { SelectComponent } from './components/select/select';



const modules = [IonicModule, ReactiveFormsModule, FormsModule];
const components = [InputComponent,
   ButtonComponent, SelectComponent, 
   ];
@NgModule({
  declarations: [components],
  providers: [StorageService, ],
  imports: [
    CommonModule, modules
  ],
  exports: [modules, components]
})
export class SharedModule { }