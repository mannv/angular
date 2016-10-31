import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ClientFromComponent} from "./client-form.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ClientFromComponent
    ],
    bootstrap:    [ ClientFromComponent ]
})
export class AppModule { }
