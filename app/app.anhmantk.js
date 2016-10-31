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
var core_1 = require('@angular/core');
var student_1 = require("./student");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'hello angular';
        this.version = 'Angular 2.0';
        this.listStudent = ["Student 1", "Student 2", "Student 3"];
        this.listStudents = [
            new student_1.Student("Student A", 1),
            new student_1.Student("Student B", 2),
            new student_1.Student("Student C", 3),
            new student_1.Student("Student D", 4),
        ];
        this.student = {
            name: "Nguyen van A",
            age: 10
        };
    }
    AppComponent.prototype.onClickBtn = function () {
        this.title = "Change title";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'anhmantk',
            templateUrl: '/temp/demo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.anhmantk.js.map