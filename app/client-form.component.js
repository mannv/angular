"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Code on 10/31/2016.
 */
var core_1 = require('@angular/core');
var client_1 = require("./client");
var forms_1 = require("@angular/forms");
var GlobalValidator_1 = require("./GlobalValidator");
var ClientFromComponent = (function () {
    function ClientFromComponent(builder) {
        this.listStatus = [{ "status": 0, "label": "Inactive" }, { "status": 1, "label": "Active" }];
        this.listCountry = [{ "code": "VN", "name": "Vietnamese" }, { "code": "JP", "name": "Japanese" }, { "code": "US", "name": "USA" }];
        this.client = new client_1.Client("Khachhang 1", "JP", 1, "", "");
        // get diagnostic() { return JSON.stringify(this.client); }
        this.isSubmit = false;
        this.username = new forms_1.FormControl('', [forms_1.Validators.required, GlobalValidator_1.GlobalValidator.mailFormat]);
        this.password = new forms_1.FormControl('', forms_1.Validators.required);
        this.loginForm = builder.group({
            username: this.username,
            password: this.password
        });
    }
    ClientFromComponent.prototype.resetForm = function () {
        this.client = new client_1.Client("", "VN", 1, "", "");
    };
    ClientFromComponent.prototype.onSubmit = function () {
        this.isSubmit = true;
    };
    ClientFromComponent.prototype.login = function () {
        alert(this.username.value + " -- " + this.password.value);
    };
    ClientFromComponent = __decorate([
        core_1.Component({
            selector: 'client-form',
            templateUrl: '/temp/client-form.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ClientFromComponent);
    return ClientFromComponent;
}());
exports.ClientFromComponent = ClientFromComponent;
//# sourceMappingURL=client-form.component.js.map