(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _directives_email_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/email.validator.directive */ "./src/app/directives/email.validator.directive.ts");
/* harmony import */ var _account_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.routing */ "./src/app/account/account.routing.ts");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/account/registration-form/registration-form.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/account/login-form/login-form.component.ts");
/* harmony import */ var _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./facebook-login/facebook-login.component */ "./src/app/account/facebook-login/facebook-login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _account_routing__WEBPACK_IMPORTED_MODULE_6__["routing"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationFormComponent"], _directives_email_validator_directive__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_8__["LoginFormComponent"], _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_9__["FacebookLoginComponent"]],
            providers: [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/account.routing.ts":
/*!********************************************!*\
  !*** ./src/app/account/account.routing.ts ***!
  \********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/account/registration-form/registration-form.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/account/login-form/login-form.component.ts");
/* harmony import */ var _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facebook-login/facebook-login.component */ "./src/app/account/facebook-login/facebook-login.component.ts");




var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
    { path: 'register', component: _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_1__["RegistrationFormComponent"] },
    { path: 'login', component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"] },
    { path: 'facebook-login', component: _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginComponent"] }
]);


/***/ }),

/***/ "./src/app/account/facebook-login/facebook-login.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/account/facebook-login/facebook-login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"col\" style=\"text-align:center\">\n    <a *ngIf=\"!isRequesting\" href=\"javascript:void(0)\" (click)=\"launchFbLogin()\"> <img class=\"img-fluid\" src=\"/assets/facebook-login.png\" /></a>\n    <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\n    <div *ngIf=\"failed\" class=\"alert alert-danger\" role=\"alert\">\n      <p><strong>Oops!</strong> Your facebook login failed.</p>\n      <ul>\n        <li>Error: {{error}}</li>\n        <li>Description: {{errorDescription}}</li>\n      </ul>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/account/facebook-login/facebook-login.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/account/facebook-login/facebook-login.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZmFjZWJvb2stbG9naW4vZmFjZWJvb2stbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/facebook-login/facebook-login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/account/facebook-login/facebook-login.component.ts ***!
  \********************************************************************/
/*! exports provided: FacebookLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginComponent", function() { return FacebookLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FacebookLoginComponent = (function () {
    function FacebookLoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        if (window.addEventListener) {
            window.addEventListener('message', this.handleMessage.bind(this), false);
        }
        else {
            window.attachEvent('onmessage', this.handleMessage.bind(this));
        }
    }
    FacebookLoginComponent.prototype.launchFbLogin = function () {
        // tslint:disable-next-line:max-line-length
        this.authWindow = window.open('https://www.facebook.com/v2.11/dialog/oauth?&response_type=token&display=popup&client_id=312472109343376&display=popup&redirect_uri=https://trvlblg.azurewebsites.net/facebook-auth.html&scope=email', null, 'width=600,height=400');
    };
    FacebookLoginComponent.prototype.handleMessage = function (event) {
        var _this = this;
        var message = event;
        // Only trust messages from the below origin.
        if (message.origin !== 'https://trvlblg.azurewebsites.net')
            return;
        this.authWindow.close();
        var result = JSON.parse(message.data);
        if (!result.status) {
            this.failed = true;
            this.error = result.error;
            this.errorDescription = result.errorDescription;
        }
        else {
            this.failed = false;
            this.isRequesting = true;
            this.userService.facebookLogin(result.accessToken)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/dashboard/home']);
                }
            }, function (error) {
                _this.failed = true;
                _this.error = error;
            });
        }
    };
    FacebookLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-facebook-login',
            template: __webpack_require__(/*! ./facebook-login.component.html */ "./src/app/account/facebook-login/facebook-login.component.html"),
            styles: [__webpack_require__(/*! ./facebook-login.component.scss */ "./src/app/account/facebook-login/facebook-login.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());



/***/ }),

/***/ "./src/app/account/login-form/login-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" novalidate (ngSubmit)=\"login(f)\">\n  <div class=\"container\">\n    <div *ngIf=\"brandNew\" class=\"alert alert-success\" role=\"alert\">\n      <strong>All set!</strong> Please signin with your account\n    </div>\n  <h1>S I G N</h1>\n  \n    <label for=\"email\">Email</label>\n    <input id=\"email\" type=\"text\" required name=\"email\" class=\"form-control\" placeholder=\"Email\" [ngModel]=\"credentials.email\" #email=\"ngModel\" tmFocus validateEmail>\n    <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\n\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\" required name=\"password\" placeholder=\"Password\" ngModel>\n\n    <p>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">S I G N - I N</button> \n      OR \n      <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/register\">\n        S I G N - U P\n      </button> \n    </p>\n    <p>\n    </p>\n    \n    <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\n        \n    <hr>\n      <app-facebook-login></app-facebook-login>\n    <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\n      <strong>Oops!</strong> {{errors}}\n    </div>\n  </div>\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-user-alert {\n  padding-top: 2.5rem; }\n\nform {\n  font-family: Arial, Helvetica, sans-serif;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  color: #f1f1f1; }\n\n.container {\n  padding: 30px;\n  width: 35%; }\n\ndiv {\n  border-radius: 15px;\n  background-color: #31312f;\n  padding: 20px; }\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 15px; }\n\ninput[type=text], input[type=password], select {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 0px 0px 8px 0px;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box; }\n\nh1 {\n  text-align: center; }\n\np {\n  margin-bottom: 5px;\n  margin-top: 10px;\n  text-align: center; }\n\nbutton[type=button] {\n  margin-left: 9.5px; }\n\nbutton[type=submit] {\n  margin-right: 9.5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9sb2dpbi1mb3JtL0M6XFxVc2Vyc1xcU2FzaGthXFxEZXNrdG9wXFxTb2Z0XFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nLkFuZ3VsYXIvc3JjXFxhcHBcXGFjY291bnRcXGxvZ2luLWZvcm1cXGxvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFDRixFQUFDOztBQUNEO0VBQ0UsMENBQXlDO0VBQ3pDLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsZUFBYyxFQUVmOztBQUNEO0VBQ0UsY0FBYTtFQUNiLFdBQVUsRUFDWDs7QUFDRDtFQUNFLG9CQUFtQjtFQUNuQiwwQkFBeUI7RUFFekIsY0FBYSxFQUNkOztBQUNEO0VBQ0UsMEJBQXlCO0VBQ3pCLG9CQUFtQixFQUNwQjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLHNCQUFxQjtFQUNyQix1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ25COztBQUNEO0VBRUUsbUJBQWtCLEVBQ25COztBQUNEO0VBRUUsb0JBQ0YsRUFBQyIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy11c2VyLWFsZXJ0IHtcbiAgcGFkZGluZy10b3A6IDIuNXJlbVxufVxuZm9ybXtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGNvbG9yOiAjZjFmMWYxO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCA0LCAxNSwgMC41NTUpIFxufVxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHdpZHRoOiAzNSU7XG59XG5kaXYge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMTJmO1xuICAvLyBib3JkZXI6IDhweCBzb2xpZCAjMzcxOTY2O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogMHB4IDBweCA4cHggMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5we1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmJ1dHRvblt0eXBlID0gYnV0dG9uXXtcbiAgLy93aWR0aDogNDAlO1xuICBtYXJnaW4tbGVmdDogOS41cHg7XG59XG5idXR0b25bdHlwZSA9IHN1Ym1pdF17XG4gIC8vd2lkdGg6IDQwJTtcbiAgbWFyZ2luLXJpZ2h0OiA5LjVweFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.ts ***!
  \************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = (function () {
    function LoginFormComponent(userService, router, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.credentials = { email: '', password: '' };
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            _this.credentials.email = param['email'];
        });
    };
    LoginFormComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    };
    LoginFormComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.login(value.email, value.password)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/dashboard/home']);
                }
            }, function (error) { return _this.errors = error; });
        }
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/account/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/account/login-form/login-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" novalidate (ngSubmit)=\"registerUser(f)\">\n  <div class=\"container\">\n      <h1>Register</h1>\n      <p>Please fill in this form to create an account.</p>\n      <p>OR</p>\n      <p><app-facebook-login></app-facebook-login></p>\n      <hr>\n<!-- Enter firstName part-->\n    <label for=\"first-name\"><b>First name</b></label>\n    <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Your first name\" name=\"firstName\" tmFocus ngModel>\n  \n<!-- Enter lastName part -->\n    <label for=\"last-name\"><b>Last name</b></label>\n    <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Your last name\" name=\"lastName\" ngModel>\n  \n<!-- Enter email -->\n    <label for=\"email\"><b>Email</b></label>\n    <input id=\"email\" type=\"text\" required name=\"email\" validateEmail class=\"form-control\" placeholder=\"Email\" ngModel #email=\"ngModel\">\n    <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\n\n<!-- password part -->\n    <label for=\"password\"><b>Password</b></label>\n    <input id=\"password\" type=\"password\" class=\"form-control\"name=\"password\" placeholder=\"Password\" ngModel>\n  \n<!-- Choose country -->\n    <label for=\"country\"><b>Country</b></label>\n    <input type=\"text\" class=\"form-control\" id=\"location\"  name=\"location\" ngModel placeholder=\"Location\" ngModel>\n        \n    <hr>\n    <p>By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.</p>\n\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">Sign Up</button>\n\n    <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\n\n  </div>\n    <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\n      <strong>Oops!</strong> {{errors}}\n    </div>\n\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  font-family: Arial, Helvetica, sans-serif;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  color: #f1f1f1; }\n\n.container {\n  padding: 30px;\n  width: 65%; }\n\ndiv {\n  border-radius: 15px;\n  background-color: #31312f;\n  padding: 20px; }\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 15px; }\n\na {\n  color: dodgerblue; }\n\ninput {\n  margin-left: 10px; }\n\ninput[type=text], input[type=password], select {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 0px 0px 8px 0px;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box; }\n\nlabel {\n  margin-bottom: 0px; }\n\nh1 {\n  text-align: center; }\n\np {\n  margin-bottom: 3px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9yZWdpc3RyYXRpb24tZm9ybS9DOlxcVXNlcnNcXFNhc2hrYVxcRGVza3RvcFxcU29mdFxcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZy5Bbmd1bGFyL3NyY1xcYXBwXFxhY2NvdW50XFxyZWdpc3RyYXRpb24tZm9ybVxccmVnaXN0cmF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBeUM7RUFDekMsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixlQUFjLEVBRWY7O0FBQ0Q7RUFDRSxjQUFhO0VBQ2IsV0FBVSxFQUVYOztBQUNEO0VBQ0Usb0JBQW1CO0VBQ25CLDBCQUF5QjtFQUV6QixjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSwwQkFBeUI7RUFDekIsb0JBQW1CLEVBQ3BCOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsWUFBVztFQUNYLG1CQUFrQjtFQUNsQix3QkFBdUI7RUFDdkIsc0JBQXFCO0VBQ3JCLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsdUJBQXNCLEVBQ3ZCOztBQUNEO0VBQ0UsbUJBQ0YsRUFBQzs7QUFDRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L3JlZ2lzdHJhdGlvbi1mb3JtL3JlZ2lzdHJhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGNvbG9yOiAjZjFmMWYxO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCA0LCAxNSwgMC41NTUpIFxufVxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHdpZHRoOiA2NSU7XG5cbn1cbmRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTMxMmY7XG4gIC8vIGJvcmRlcjogOHB4IHNvbGlkICMzNzE5NjY7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5ociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5hIHtcbiAgY29sb3I6IGRvZGdlcmJsdWU7XG59XG5pbnB1dHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDhweCAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxubGFiZWx7XG4gIG1hcmdpbi1ib3R0b206IDBweFxufVxuaDF7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnB7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationFormComponent = (function () {
    function RegistrationFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.submitted = false;
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    RegistrationFormComponent.prototype.registerUser = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.register(value.email, value.password, value.firstName, value.lastName, value.location)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
                }
            }, function (errors) { return _this.errors = errors; });
        }
    };
    RegistrationFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-form',
            template: __webpack_require__(/*! ./registration-form.component.html */ "./src/app/account/registration-form/registration-form.component.html"),
            styles: [__webpack_require__(/*! ./registration-form.component.scss */ "./src/app/account/registration-form/registration-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  margin: 0px;\n  padding: 0px;\n  max-width: 100%;\n  min-height: 200%;\n  max-height: 200%;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxTYXNoa2FcXERlc2t0b3BcXFNvZnRcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2cuQW5ndWxhci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ3BCLFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUVqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDIwMCU7XG4gIG1heC1oZWlnaHQ6IDIwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _authenticate_xhr_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authenticate-xhr.backend */ "./src/app/authenticate-xhr.backend.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account/account.module */ "./src/app/account/account.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/utils/config.service */ "./src/app/shared/utils/config.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/* App Root */



/* Account Imports */

/* Dashboard Imports */




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"]
            ],
            imports: [
                _account_account_module__WEBPACK_IMPORTED_MODULE_9__["AccountModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_10__["DashboardModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            providers: [_shared_utils_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"], {
                    provide: _angular_http__WEBPACK_IMPORTED_MODULE_3__["XHRBackend"],
                    useClass: _authenticate_xhr_backend__WEBPACK_IMPORTED_MODULE_4__["AuthenticateXHRBackend"]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");



var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// auth.guard.ts



var AuthGuard = (function () {
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.user.isLoggedIn()) {
            this.router.navigate(['/account/login']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/authenticate-xhr.backend.ts":
/*!*********************************************!*\
  !*** ./src/app/authenticate-xhr.backend.ts ***!
  \*********************************************/
/*! exports provided: AuthenticateXHRBackend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateXHRBackend", function() { return AuthenticateXHRBackend; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// sweet global way to handle 401s - works in tandem with existing AuthGuard route checks
// http://stackoverflow.com/questions/34934009/handling-401s-globally-with-angular-2
var AuthenticateXHRBackend = (function (_super) {
    __extends(AuthenticateXHRBackend, _super);
    function AuthenticateXHRBackend(_browserXhr, _baseResponseOptions, _xsrfStrategy) {
        return _super.call(this, _browserXhr, _baseResponseOptions, _xsrfStrategy) || this;
    }
    AuthenticateXHRBackend.prototype.createConnection = function (request) {
        var xhrConnection = _super.prototype.createConnection.call(this, request);
        xhrConnection.response = xhrConnection.response.catch(function (error) {
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                console.log('The authentication session expired or the user is not authorized. Force refresh of the current page.');
                /* Great solution for bundling with Auth Guard!
                1. Auth Guard checks authorized user (e.g. by looking into LocalStorage).
                2. On 401/403 response you clean authorized user for the Guard (e.g. by removing coresponding parameters in LocalStorage).
                3. As at this early stage you can't access the Router for forwarding to the login page,
                4. refreshing the same page will trigger the Guard checks, which will forward you to the login screen */
                localStorage.removeItem('auth_token');
                window.location.href = window.location.href + '?' + new Date().getMilliseconds();
            }
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error);
        });
        return xhrConnection;
    };
    AuthenticateXHRBackend = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["BrowserXhr"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["XSRFStrategy"]])
    ], AuthenticateXHRBackend);
    return AuthenticateXHRBackend;
}(_angular_http__WEBPACK_IMPORTED_MODULE_0__["XHRBackend"]));



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root/root.component */ "./src/app/dashboard/root/root.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/dashboard.service */ "./src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dashboard_routing__WEBPACK_IMPORTED_MODULE_4__["routing"],
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_root_root_component__WEBPACK_IMPORTED_MODULE_5__["RootComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"]],
            exports: [],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root/root.component */ "./src/app/dashboard/root/root.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");





var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
    {
        path: 'dashboard',
        component: _root_root_component__WEBPACK_IMPORTED_MODULE_1__["RootComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"] },
        ]
    }
]);


/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 col-sm-3\">\n    <p>{{homeDetails?.message}}</p>\n    <p><strong>Name:</strong> {{homeDetails?.firstName}} {{homeDetails?.lastName}}</p>\n    <p *ngIf=\"homeDetails?.location\"><strong>Location:</strong> {{homeDetails?.location}}</p>\n    <p *ngIf=\"homeDetails?.locale\"><strong>Locale:</strong> {{homeDetails?.locale}}</p>\n    <p *ngIf=\"homeDetails?.gender\"><strong>Gender:</strong> {{homeDetails?.gender}}</p>\n    <p *ngIf=\"homeDetails?.facebookId\"><strong>Facebook Id:</strong> {{homeDetails?.facebookId}}</p>\n    <div *ngIf=\"homeDetails?.pictureUrl\"><img src=\"{{homeDetails?.pictureUrl}}\" /></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/dashboard/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(dashboardService) {
        this.dashboardService = dashboardService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getHomeDetails()
            .subscribe(function (homeDetails) {
            _this.homeDetails = homeDetails;
        }, function (error) {
            //this.notificationService.printErrorMessage(error);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/dashboard/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/root/root.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/root/root.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <nav class=\"col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar\">\n    <ul class=\"nav nav-pills flex-column\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"/dashboard/home\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"/dashboard/settings\">Settings</a>\n      </li>\n    </ul>\n  </nav>\n  <main role=\"main\" class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\">\n    <router-outlet></router-outlet>\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/root/root.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/root/root.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Sidebar\n */\n.sidebar {\n  position: fixed;\n  top: 51px;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  padding: 20px 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */\n  border-right: 1px solid #eee; }\n.sidebar .nav {\n  margin-bottom: 20px; }\n.sidebar .nav-item {\n  width: 100%; }\n.sidebar .nav-item + .nav-item {\n  margin-left: 0; }\n.sidebar .nav-link {\n  border-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Jvb3QvQzpcXFVzZXJzXFxTYXNoa2FcXERlc2t0b3BcXFNvZnRcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2cuQW5ndWxhci9zcmNcXGFwcFxcZGFzaGJvYXJkXFxyb290XFxyb290LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUg7RUFDRSxnQkFBZTtFQUNmLFVBQVM7RUFDVCxVQUFTO0VBQ1QsUUFBTztFQUNQLGNBQWE7RUFDYixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFBRSw4REFBOEQ7RUFDaEYsNkJBQTRCLEVBQzdCO0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7QUFFRDtFQUNFLFlBQVcsRUFDWjtBQUVEO0VBQ0UsZUFBYyxFQUNmO0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcm9vdC9yb290LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNpZGViYXJcbiAqL1xuXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MXB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvOyAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqL1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xufVxuXG4uc2lkZWJhciAubmF2IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNpZGViYXIgLm5hdi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaWRlYmFyIC5uYXYtaXRlbSArIC5uYXYtaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2lkZWJhciAubmF2LWxpbmsge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/root/root.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/root/root.component.ts ***!
  \**************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootComponent = (function () {
    function RootComponent() {
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    RootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./root.component.html */ "./src/app/dashboard/root/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.scss */ "./src/app/dashboard/root/root.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/services/dashboard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/services/dashboard.service.ts ***!
  \*********************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/config.service */ "./src/app/shared/utils/config.service.ts");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rxjs-operators */ "./src/app/rxjs-operators.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Add the RxJS Observable operators we need in this app.

var DashboardService = (function (_super) {
    __extends(DashboardService, _super);
    function DashboardService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = '';
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    DashboardService.prototype.getHomeDetails = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.baseUrl + "/api/dashboard/home", { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], DashboardService);
    return DashboardService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/dashboard/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/dashboard/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/directives/email.validator.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/email.validator.directive.ts ***!
  \*********************************************************/
/*! exports provided: EmailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function validateEmailFactory() {
    return function (c) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
}
var EmailValidator = (function () {
    function EmailValidator() {
        this.validator = validateEmailFactory();
    }
    EmailValidator_1 = EmailValidator;
    EmailValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    EmailValidator = EmailValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validateEmail][ngModel],[validateEmail][formControl]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EmailValidator_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], EmailValidator);
    return EmailValidator;
    var EmailValidator_1;
}());



/***/ }),

/***/ "./src/app/directives/focus.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/focus.directive.ts ***!
  \***********************************************/
/*! exports provided: myFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myFocus", function() { return myFocus; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var myFocus = (function () {
    function myFocus(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        // focus won't work at construction time - too early
    }
    myFocus.prototype.ngOnInit = function () {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
    };
    myFocus = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[tmFocus]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], myFocus);
    return myFocus;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-basic\">\n    <footer>\n        <div class=\"social\"><a href=\"#\"><i class=\"icon ion-social-instagram\"></i></a><a href=\"#\"><i class=\"icon ion-social-snapchat\"></i></a><a href=\"#\"><i class=\"icon ion-social-twitter\"></i></a><a href=\"#\"><i class=\"icon ion-social-facebook\"></i></a></div>\n        <ul class=\"list-inline\">\n            <li class=\"list-inline-item\"><a href=\"#\">Home</a></li>\n            <li class=\"list-inline-item\"><a href=\"#\">Services</a></li>\n            <li class=\"list-inline-item\"><a href=\"#\">About</a></li>\n            <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n            <li class=\"list-inline-item\"><a href=\"#\">Privacy Policy</a></li>\n        </ul>\n        <p class=\"copyright\">Company Name © 2018</p>\n    </footer>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-basic {\n  padding: 30px 0;\n  background-color: #050505d2;\n  color: #ffffff; }\n\n.footer-basic ul {\n  padding: 0;\n  list-style: none;\n  text-align: center;\n  font-size: 18px;\n  line-height: 1.6;\n  margin-bottom: 0; }\n\n.footer-basic li {\n  padding: 0 10px; }\n\n.footer-basic ul a {\n  color: inherit;\n  text-decoration: none;\n  opacity: 0.8; }\n\n.footer-basic ul a:hover {\n  opacity: 1; }\n\n.footer-basic .social {\n  text-align: center;\n  padding-bottom: 25px; }\n\n.footer-basic .social > a {\n  font-size: 24px;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  display: inline-block;\n  text-align: center;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  margin: 0 8px;\n  color: inherit;\n  opacity: 0.75; }\n\n.footer-basic .social > a:hover {\n  opacity: 0.9; }\n\n.footer-basic .copyright {\n  margin-top: 15px;\n  text-align: center;\n  font-size: 13px;\n  color: #aaa;\n  margin-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcU2FzaGthXFxEZXNrdG9wXFxTb2Z0XFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nLkFuZ3VsYXIvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWM7RUFDZCw0QkFBMEI7RUFDMUIsZUFBYSxFQUNiOztBQUVGO0VBQ0UsV0FBUztFQUNULGlCQUFlO0VBQ2YsbUJBQWlCO0VBQ2pCLGdCQUFjO0VBQ2QsaUJBQWU7RUFDZixpQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGdCQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxlQUFhO0VBQ2Isc0JBQW9CO0VBQ3BCLGFBQVcsRUFDWjs7QUFFRDtFQUNFLFdBQVMsRUFDVjs7QUFFRDtFQUNFLG1CQUFpQjtFQUNqQixxQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBYztFQUNkLFlBQVU7RUFDVixhQUFXO0VBQ1gsa0JBQWdCO0VBQ2hCLHNCQUFvQjtFQUNwQixtQkFBaUI7RUFDakIsbUJBQWlCO0VBQ2pCLHVCQUFxQjtFQUNyQixjQUFZO0VBQ1osZUFBYTtFQUNiLGNBQVksRUFDYjs7QUFFRDtFQUNFLGFBQVcsRUFDWjs7QUFFRDtFQUNFLGlCQUFlO0VBQ2YsbUJBQWlCO0VBQ2pCLGdCQUFjO0VBQ2QsWUFBVTtFQUNWLGlCQUFlLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItYmFzaWMge1xuICAgIHBhZGRpbmc6MzBweCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzA1MDUwNWQyO1xuICAgIGNvbG9yOiNmZmZmZmY7XG4gICB9XG4gIFxuICAuZm9vdGVyLWJhc2ljIHVsIHtcbiAgICBwYWRkaW5nOjA7XG4gICAgbGlzdC1zdHlsZTpub25lO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGZvbnQtc2l6ZToxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OjEuNjtcbiAgICBtYXJnaW4tYm90dG9tOjA7XG4gIH1cbiAgXG4gIC5mb290ZXItYmFzaWMgbGkge1xuICAgIHBhZGRpbmc6MCAxMHB4O1xuICB9XG4gIFxuICAuZm9vdGVyLWJhc2ljIHVsIGEge1xuICAgIGNvbG9yOmluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgb3BhY2l0eTowLjg7XG4gIH1cbiAgXG4gIC5mb290ZXItYmFzaWMgdWwgYTpob3ZlciB7XG4gICAgb3BhY2l0eToxO1xuICB9XG4gIFxuICAuZm9vdGVyLWJhc2ljIC5zb2NpYWwge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOjI1cHg7XG4gIH1cbiAgXG4gIC5mb290ZXItYmFzaWMgLnNvY2lhbCA+IGEge1xuICAgIGZvbnQtc2l6ZToyNHB4O1xuICAgIHdpZHRoOjQwcHg7XG4gICAgaGVpZ2h0OjQwcHg7XG4gICAgbGluZS1oZWlnaHQ6NDBweDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgbWFyZ2luOjAgOHB4O1xuICAgIGNvbG9yOmluaGVyaXQ7XG4gICAgb3BhY2l0eTowLjc1O1xuICB9XG4gIFxuICAuZm9vdGVyLWJhc2ljIC5zb2NpYWwgPiBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OjAuOTtcbiAgfVxuICBcbiAgLmZvb3Rlci1iYXNpYyAuY29weXJpZ2h0IHtcbiAgICBtYXJnaW4tdG9wOjE1cHg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgZm9udC1zaXplOjEzcHg7XG4gICAgY29sb3I6I2FhYTtcbiAgICBtYXJnaW4tYm90dG9tOjA7XG4gIH1cbiAgXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n    <!-- Logo -->\n    <a class=\"navbar-brand mb-0 h1\" href=\"#\">\n      <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDq_dCjo9JFjXBoftUnO0ENqioclM8bgfI3mc9lO22XbqIQ62k\" width=\"45\" height=\"45\" class=\"d-inline-block align-top\" alt=\"\">\n      TraveligBlog\n    </a>\n    <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- end logo -->\n\n    <!-- Navigation components -->\n    <!-- Home - Guide - Trips buttons -->\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav nav1 mr-auto\">\n        <li>\n          <a class=\"nav-link\" href=\"#\">Home</a>\n        </li>\n        <li>\n            <a class=\"nav-link\" href=\"#\">Guids</a>\n        </li>\n        <li>\n            <a class=\"nav-link\" href=\"#\">Trips</a>\n          </li>\n      </ul>\n      <ul class=\"navbar-nav navbar-left\">\n        <form class=\"form-inline my-1 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" href=\"#\" routerLink=\"/search\">Search</button>\n        </form>\n      </ul>\n\n<!-- Right navbar before sign -->\n      <ul *ngIf=\"!status\" class=\"navbar-nav ml-auto\">\n        <li>\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n            <a class=\"btn btn-info btn-sm\" href=\"#\"  routerLink=\"/login\">SIGN-IN</a>\n          </div>\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n            <a class=\"btn btn-info btn-sm \" href=\"#\" routerLink=\"/register\">SIGN-UP</a>\n          </div>\n        </li>\n      </ul>\n\n<!-- Right navbar after sign -->\n      <ul *ngIf=\"status\" class=\"navbar-nav ml-auto\">\n        <li >\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\n              <a class=\"btn btn-info btn-sm \" href=\"#\" routerLink=\"/dashboard\">My Page</a>\n          </div>\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\n              <a class=\"btn btn-info btn-sm \"(click)=\"logout()\" href=\"#\">SIGN OUT</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-right {\n  padding-right: 40px; }\n\n.form-group {\n  padding: 10px; }\n\n.color-blue {\n  color: #0080c5; }\n\n.color-red {\n  color: #FF0000; }\n\n.error-message {\n  font-size: 10px; }\n\n.nav1 {\n  margin-right: 55px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcU2FzaGthXFxEZXNrdG9wXFxTb2Z0XFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nLkFuZ3VsYXIvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWMsb0JBQW1CLEVBQUc7O0FBQ3BDO0VBQVksY0FBYSxFQUFHOztBQUM1QjtFQUFhLGVBQWMsRUFBRzs7QUFDOUI7RUFBWSxlQUFjLEVBQUc7O0FBQzdCO0VBQWdCLGdCQUFlLEVBQUc7O0FBQ2xDO0VBRUksbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItcmlnaHR7cGFkZGluZy1yaWdodDogNDBweDt9XG4uZm9ybS1ncm91cHtwYWRkaW5nOiAxMHB4O31cbi5jb2xvci1ibHVlIHtjb2xvcjogIzAwODBjNTt9XG4uY29sb3ItcmVkIHtjb2xvcjogI0ZGMDAwMDt9XG4uZXJyb3ItbWVzc2FnZSB7Zm9udC1zaXplOiAxMHB4O31cbi5uYXYxe1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent.prototype.logout = function () {
        this.userService.logout();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userService.authNavStatus$.subscribe(function (status) { return _this.status = status; });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"carousel-item active\" style=\"background-image: url('assets/images/carousel-img/7.jpg')\">\n\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h3 class=\"display-4\">Travels inspire us to adventure</h3>\n          <p class=\"lead\">Why us? Our travel blog will help you in organizing a wonderful trip for you.</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\" style=\"background-image: url('assets/images/carousel-img/4.jpg')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h3 class=\"display-4\">Wanna share emotions with other travellers?</h3>\n          <p class=\"lead\">Create a trip and tell everything about your journey. Don`t forget to add photo,\n            descriptions!</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\" style=\"background-image: url('assets/images/carousel-img/5.jpg')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h3 class=\"display-4\">Let`s start! </h3>\n          <p class=\"lead\">Discover the world with us! Read blogs, get inspired and plan your trip!</p>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</header>\n\n\n<aside id=\"testimonials\" class=\"text-center\" data-enllax-ratio=\".2\" tabindex=\"-1\" style=\"background-position: center 34px;\">\n  <div class=\"section-heading\">\n    <h2 class=\"section-title\">Our experienced blogs!</h2>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <blockquote class=\" testimonial classic\">\n        <img src=\"assets/images/user-img/user-1.jpg\" alt=\"User\" />\n        <h3>England - why not?</h3>\n        <q>Brits love to sip, slurp and gulp down tea while occasionally dunking a digestive in there too.\n          Among the three ghosts said to haunt Athelhampton House, one of them is an ape.\n          An interesting fact is that French was the official language of England for about 300 years. </q>\n        <footer>Julie Fan - Happy Customer</footer>\n      </blockquote>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <blockquote class=\"testimonial classic\">\n        <img src=\"assets/images/user-img/user-3.jpg\" alt=\"User\" />\n        <h3>\"Like Spain, I am bound to the past.\"</h3>\n        <q>It’s like a dream to come to Spain and stay for a couple of years and get somebody to teach me Spanish\n          music.\n          I have seen dawn and sunset on moors and windy hills coming in solemn beauty like slow old tunes of Spain.\n        </q>\n        <footer>Thomas Doe </footer>\n      </blockquote>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <blockquote class=\"testimonial classic\">\n        <img src=\"assets/images/user-img/user-2.jpg\" alt=\"User\" />\n        <h3>Trip to the Netherland</h3>\n        <q>Yep, a country so small you can drive through it from its Northern- to its Southern-tip (the largest\n          distance)\n          in just about two hours if you don’t hit any heavy traffic.\n          Somehow the Dutch still manage to crank out enough food to “Feed the World” with so little space! I liked it!</q>\n        <footer>Roslyn Doe </footer>\n      </blockquote>\n    </div>\n  </div>\n\n</aside>\n\n<section id=\"portfolios\" class=\"section-padding\">\n  <div class=\"container\">\n    <h2 class=\"section-title\" data-wow-delay=\"0.4s\">Countries and places which inspire</h2>\n    <div class=\"row\">\n      <div id=\"portfolio\" class=\"row\" data-wow-delay=\"0.4s\">\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/1.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/1.jpg\">\n                    <i class=\"icon-preview\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix design print\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/2.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/2.jpg\">\n                    <i class=\"icon-preview\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/3.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/3.jpg\">\n                    <i class=\"icon-preview\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development design\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/4.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/4.jpg\">\n                    <i class=\"icon-preview\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/5.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/5.jpg\">\n                    <i class=\"icon-preview\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix print design\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/6.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/6.jpg\">\n                    <i class=\"icon-preview\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<form>\n  <div class=\"button-section\">\n    <h3>Let`s register and start your advantures!</h3>\n    <input class=\"registrationButton\" type=\"button\" value=\"Register\" onclick=\"window.location.href='/register'\" />\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item {\n  height: 65vh;\n  min-height: 500px;\n  background: no-repeat center center scroll;\n  background-size: cover; }\n\n.ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  height: 100%;\n  background-color: #333; }\n\n@nest .active {\n  .ul {\n    background-color: #4CAF50; } }\n\nli {\n  float: left; }\n\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none; }\n\n/* Change the link color to #111 (black) on hover */\n\nli a:hover {\n  background-color: #111; }\n\n.btn {\n  color: #4CAF50;\n  margin: 8px;\n  float: right; }\n\n.button-section {\n  text-align: center; }\n\n.container {\n  margin-top: 10px; }\n\ndiv#footer {\n  padding: 10px;\n  color: white;\n  background-color: black; }\n\n.col-3 {\n  width: 33.33%; }\n\n.section-heading {\n  padding: 0 0 15px 0; }\n\n.row {\n  padding: 15px !important;\n  flex-wrap: wrap;\n  margin-left: -15px;\n  margin-right: -15px; }\n\n.row-1 {\n  padding: 15px !important;\n  flex-wrap: wrap;\n  margin-left: -45px;\n  margin-right: -45px; }\n\n.clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.testimonial {\n  padding: 15px; }\n\nblockquote {\n  position: relative; }\n\n.testimonial img {\n  max-height: 250px;\n  border-radius: 300em; }\n\n.testimonial footer {\n  padding-top: 12px; }\n\n.testimonial.classic img {\n  display: inline-block;\n  margin-bottom: 25px; }\n\n.testimonial.classic q {\n  display: block; }\n\n.testimonial.classic footer:before {\n  display: block;\n  content: \"\";\n  width: 30px;\n  height: 4px;\n  margin: 10px auto 15px auto; }\n\n.text-center {\n  text-align: center; }\n\n.registrationButton {\n  background-color: #4CAF50;\n  color: black;\n  font-size: 20px;\n  border: 2px solid black;\n  width: 30%;\n  border: none;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  margin: 4px 2px;\n  cursor: pointer; }\n\n.registrationButton:hover {\n  color: #ffff00;\n  background: #000;\n  border: 1px solid #fff; }\n\n.portfolio {\n  visibility: visible; }\n\n.section-title {\n  text-align: center; }\n\n#portfolios .mix {\n  padding: 10px; }\n\n.col-md-4 {\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%; }\n\n#portfolios .portfolio-item .shot-item {\n  margin: 0px; }\n\n.shot-item {\n  margin-right: 15px;\n  border-radius: 4px;\n  background: #fff;\n  position: relative; }\n\n.shot-item img {\n  width: 100%; }\n\n.shot-item .overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 180, 217, 0.6);\n  opacity: 0; }\n\n.icon-eye:before {\n  content: \"\\e087\"; }\n\n.overlay {\n  opacity: 0; }\n\n.overlay .icons i {\n  height: 42px;\n  width: 42px;\n  line-height: 42px;\n  color: #00b4d9;\n  left: 50%;\n  margin-left: -24px;\n  margin-top: -24px;\n  top: 50%;\n  position: absolute;\n  z-index: 2;\n  cursor: pointer;\n  text-align: center;\n  font-size: 20px;\n  background: #fff;\n  border-radius: 4px; }\n\n.overlay .preview {\n  position: absolute;\n  left: 45%;\n  top: 50%;\n  color: #fff; }\n\n.overlay .link {\n  position: absolute;\n  left: 60%;\n  margin-left: 10px;\n  top: 50%;\n  color: #fff; }\n\n.shot-item:hover .overlay {\n  opacity: 1; }\n\n.icon {\n  width: 50px;\n  height: 60px; }\n\n.lead {\n  text-align: center;\n  color: ghostwhite;\n  font-size: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFNhc2hrYVxcRGVza3RvcFxcU29mdFxcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZy5Bbmd1bGFyL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLGtCQUFpQjtFQUNqQiwyQ0FBMEM7RUFJMUMsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0Usc0JBQXFCO0VBQ3JCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWix1QkFBc0IsRUFLekI7O0FBSEc7RUFSRjtJQVNNLDBCQUF5QixFQUVoQyxFQUFBOztBQUVEO0VBRUksWUFBVyxFQUVkOztBQUVEO0VBQ0ksZUFBYztFQUNkLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLHNCQUFxQixFQUV4Qjs7QUFFRCxvREFBb0Q7O0FBQ3BEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUlEO0VBQ0ksZUFBYztFQUNkLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBRUQ7RUFDQSxtQkFBa0IsRUFDakI7O0FBRUQ7RUFDSSxpQkFBZ0IsRUFHbkI7O0FBR0Q7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLHdCQUF1QixFQUMxQjs7QUFHRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxvQkFBbUIsRUFDdEI7O0FBRUQ7RUFDQyx5QkFBd0I7RUFDeEIsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBRW5COztBQUVEO0VBQ0UseUJBQXdCO0VBQ3pCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNuQjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxlQUFjO0VBQ2QsWUFBVyxFQUNaOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNsQixxQkFBb0IsRUFDdEI7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBR0Q7RUFDSSxzQkFBcUI7RUFDckIsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxZQUFXO0VBQ1gsWUFBVztFQUNYLFlBQVc7RUFDWCw0QkFBMkIsRUFDOUI7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFFSSwwQkFBeUI7RUFDeEIsYUFBWTtFQUNaLGdCQUFlO0VBQ2Ysd0JBQXVCO0VBQ3ZCLFdBQVU7RUFDVixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsc0JBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsZ0JBQWUsRUFFbkI7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLG9CQUFtQixFQUVwQjs7QUFDRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLHFCQUFvQjtFQUVwQixzQkFDRixFQUFDOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osUUFBTztFQUNQLE9BQU07RUFDTixtQ0FBa0M7RUFDbEMsV0FBVSxFQUNYOztBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsV0FBVSxFQUNYOztBQUVEO0VBQ0UsYUFBWTtFQUNaLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsZUFBYztFQUNkLFVBQVM7RUFDVCxtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLFNBQVE7RUFDUixtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsU0FBUTtFQUNSLFlBQVcsRUFDWjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1Qsa0JBQWlCO0VBQ2pCLFNBQVE7RUFDUixZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxXQUFVLEVBQ1g7O0FBRUQ7RUFFRSxZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1pdGVtIHtcbiAgICBoZWlnaHQ6IDY1dmg7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgc2Nyb2xsO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbiAgLnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgXG4gICAgQG5lc3QgLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgfVxufVxuXG5saSB7XG4gICBcbiAgICBmbG9hdDogbGVmdDtcbiAgICBcbn1cblxubGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgXG59XG5cbi8qIENoYW5nZSB0aGUgbGluayBjb2xvciB0byAjMTExIChibGFjaykgb24gaG92ZXIgKi9cbmxpIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG59XG5cblxuXG4uYnRue1xuICAgIGNvbG9yOiAjNENBRjUwO1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmJ1dHRvbi1zZWN0aW9ue1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgXG5cbn1cblxuXG5kaXYjZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuXG4uY29sLTMge1xuICAgIHdpZHRoOiAzMy4zMyU7XG59XG5cbi5zZWN0aW9uLWhlYWRpbmcge1xuICAgIHBhZGRpbmc6IDAgMCAxNXB4IDA7XG59XG5cbi5yb3cge1xuIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbiBmbGV4LXdyYXA6IHdyYXA7XG4gbWFyZ2luLWxlZnQ6IC0xNXB4O1xuIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIFxufVxuXG4ucm93LTF7XG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbiBmbGV4LXdyYXA6IHdyYXA7XG4gbWFyZ2luLWxlZnQ6IC00NXB4O1xuIG1hcmdpbi1yaWdodDogLTQ1cHg7XG59XG4uY2xlYXJmaXg6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50ZXN0aW1vbmlhbCB7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuYmxvY2txdW90ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGVzdGltb25pYWwgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgIGJvcmRlci1yYWRpdXM6IDMwMGVtO1xufVxuXG4udGVzdGltb25pYWwgZm9vdGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuXG4udGVzdGltb25pYWwuY2xhc3NpYyBpbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4udGVzdGltb25pYWwuY2xhc3NpYyBxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRlc3RpbW9uaWFsLmNsYXNzaWMgZm9vdGVyOmJlZm9yZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBtYXJnaW46IDEwcHggYXV0byAxNXB4IGF1dG87XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVnaXN0cmF0aW9uQnV0dG9ue1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICAgY29sb3I6IGJsYWNrO1xuICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICB3aWR0aDogMzAlO1xuICAgICBib3JkZXI6IG5vbmU7XG4gICAgIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgbWFyZ2luOiA0cHggMnB4O1xuICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbn1cblxuLnJlZ2lzdHJhdGlvbkJ1dHRvbjpob3ZlcntcbiAgY29sb3I6ICNmZmZmMDA7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG59XG5cbi5wb3J0Zm9saW97XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG5cbn1cbi5zZWN0aW9uLXRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwb3J0Zm9saW9zIC5taXgge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY29sLW1kLTR7XG4gIGZsZXg6IDAgMCAzMy4zMzMzMzMlO1xuIFxuICBtYXgtd2lkdGg6IDMzLjMzMzMzMyVcbn1cblxuI3BvcnRmb2xpb3MgLnBvcnRmb2xpby1pdGVtIC5zaG90LWl0ZW0ge1xuICBtYXJnaW46IDBweDtcbn1cblxuLnNob3QtaXRlbSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaG90LWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaG90LWl0ZW0gLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxODAsIDIxNywgMC42KTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmljb24tZXllOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDg3XCI7XG59XG5cbi5vdmVybGF5IHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm92ZXJsYXkgLmljb25zIGkge1xuICBoZWlnaHQ6IDQycHg7XG4gIHdpZHRoOiA0MnB4O1xuICBsaW5lLWhlaWdodDogNDJweDtcbiAgY29sb3I6ICMwMGI0ZDk7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yNHB4O1xuICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgdG9wOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ub3ZlcmxheSAucHJldmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDUlO1xuICB0b3A6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5vdmVybGF5IC5saW5rIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0b3A6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zaG90LWl0ZW06aG92ZXIgLm92ZXJsYXkge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaWNvbntcblxuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuIFxuLmxlYWR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGdob3N0d2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/rxjs-operators.js":
/*!***********************************!*\
  !*** ./src/app/rxjs-operators.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.

// Statics


// Operators








/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n  <title>Searchings</title>\n</head>\n<body>\n  \n</body>\n</html>"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modules/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _directives_focus_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/focus.directive */ "./src/app/directives/focus.directive.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
// include directives/components commonly used in features modules in this shared modules
// and import me into the feature module
// importing them individually results in: Type xxx is part of the declarations of 2 modules: ... Please consider moving to a higher module...
// https://github.com/angular/angular/issues/10646  
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_directives_focus_directive__WEBPACK_IMPORTED_MODULE_2__["myFocus"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]],
            exports: [_directives_focus_directive__WEBPACK_IMPORTED_MODULE_2__["myFocus"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/base.service.ts ***!
  \*************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");

var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        // either applicationError in header or model error in body
        if (applicationError) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(applicationError);
        }
        var modelStateErrors = '';
        var serverError = error.json();
        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? undefined : modelStateErrors;
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(modelStateErrors || 'Server error');
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _utils_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/config.service */ "./src/app/shared/utils/config.service.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../rxjs-operators */ "./src/app/rxjs-operators.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Add the RxJS Observable operators we need in this app.

var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = '';
        // Observable navItem source
        _this._authNavStatusSource = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        // Observable navItem stream
        _this.authNavStatus$ = _this._authNavStatusSource.asObservable();
        _this.loggedIn = false;
        _this.loggedIn = !!localStorage.getItem('auth_token');
        // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
        // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        _this._authNavStatusSource.next(_this.loggedIn);
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    UserService.prototype.register = function (email, password, firstName, lastName, location) {
        var body = JSON.stringify({ email: email, password: password, firstName: firstName, lastName: lastName, location: location });
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.baseUrl + "/api/accounts", body, options)
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.login = function (userName, password) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.baseUrl + '/api/auth/login', JSON.stringify({ userName: userName, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            localStorage.setItem('auth_token', res.auth_token);
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            return true;
        })
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        this._authNavStatusSource.next(false);
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService.prototype.facebookLogin = function (accessToken) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify({ accessToken: accessToken });
        return this.http
            .post(this.baseUrl + '/api/externalauth/facebook', body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            localStorage.setItem('auth_token', res.auth_token);
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            return true;
        })
            .catch(this.handleError);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _utils_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], UserService);
    return UserService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/shared/utils/config.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/utils/config.service.ts ***!
  \************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = (function () {
    function ConfigService() {
        this._apiURI = 'https://trvlblg.azurewebsites.net';
    }
    ConfigService.prototype.getApiURI = function () {
        return this._apiURI;
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.html":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isDelayedRunning\" class=\"spinner\">\n  <div class=\"double-bounce1\"></div>\n  <div class=\"double-bounce2\"></div>\n</div> \n"

/***/ }),

/***/ "./src/app/spinner/spinner.component.scss":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 30px auto; }\n\n.double-bounce1, .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out; }\n\n.double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9DOlxcVXNlcnNcXFNhc2hrYVxcRGVza3RvcFxcU29mdFxcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZy5Bbmd1bGFyL3NyY1xcYXBwXFxzcGlubmVyXFxzcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCx1REFBc0Q7RUFDdEQsK0NBQThDLEVBQy9DOztBQUVEO0VBQ0UsK0JBQThCO0VBQzlCLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFO0lBQ0UsNEJBQTZCLEVBQUE7RUFHL0I7SUFDRSw0QkFBNkIsRUFBQSxFQUFBOztBQUlqQztFQUNFO0lBQ0Usb0JBQXFCO0lBQ3JCLDRCQUE2QixFQUFBO0VBRy9CO0lBQ0Usb0JBQXFCO0lBQ3JCLDRCQUE2QixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5cbi5kb3VibGUtYm91bmNlMSwgLmRvdWJsZS1ib3VuY2UyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBvcGFjaXR5OiAwLjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5cbi5kb3VibGUtYm91bmNlMiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gIDAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKVxuICB9XG5cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKVxuICB9XG59XG5cbkBrZXlmcmFtZXMgc2stYm91bmNlIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.isDelayedRunning = false;
        this.delay = 150;
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this.cancelTimeout();
                this.isDelayedRunning = false;
                return;
            }
            if (this.currentTimeout) {
                return;
            }
            // specify window to side-step conflict with node types: https://github.com/mgechev/angular2-seed/issues/901
            this.currentTimeout = window.setTimeout(function () {
                _this.isDelayedRunning = value;
                _this.cancelTimeout();
            }, this.delay);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.cancelTimeout = function () {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.cancelTimeout();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SpinnerComponent.prototype, "delay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SpinnerComponent.prototype, "isRunning", null);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/spinner/spinner.component.scss")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sashka\Desktop\Soft\TravelingBlog\TravelingBlog\TravelingBlog.Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map