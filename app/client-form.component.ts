/**
 * Created by Code on 10/31/2016.
 */
import {Component} from '@angular/core';
import {Client} from "./client";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {GlobalValidator} from "./GlobalValidator";
@Component ({
    selector: 'client-form',
    templateUrl: '/temp/client-form.html'
})

export class ClientFromComponent {
    loginForm: FormGroup;
    username: FormControl;
    password: FormControl;
    constructor(builder: FormBuilder){
        this.username = new FormControl('',[Validators.required, GlobalValidator.mailFormat]);
        this.password = new FormControl('',Validators.required);
        this.loginForm = builder.group({
            username: this.username,
            password: this.password
        });
    }


    listStatus = [{"status":0, "label":"Inactive"},{"status":1,"label":"Active"}];
    listCountry = [{"code":"VN", "name":"Vietnamese"},{"code":"JP","name":"Japanese"}, {"code":"US", "name":"USA"}]
    client = new Client("Khachhang 1", "JP", 1, "", "");
    // get diagnostic() { return JSON.stringify(this.client); }
    isSubmit = false;
    resetForm() {
        this.client = new Client("", "VN", 1, "", "");
    }
    onSubmit() {
        this.isSubmit = true;
    }
    login() {
        alert(<string>this.username.value + " -- " + <string>this.password.value);
    }

}