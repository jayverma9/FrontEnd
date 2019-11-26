(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-for-creating-class/dialog-for-creating-class.component.html": 
        /*!**************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-for-creating-class/dialog-for-creating-class.component.html ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form id=\"formNewClass\" (submit)=\"onNewClass($event)\">\r\n  <div class=\"flex flex-col w-full text-center \">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"What is name of your class\" id=\"name\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Class Description\" id=\"description\"></textarea>\r\n    </mat-form-field>\r\n\r\n    <button\r\n      class=\"cursor-pointer bg-indigo-600 hover:bg-indigo-500 text-orange-100 py-2 px-4 rounded inline-flex items-center rounded-full justify-center\"\r\n    type=\"submit\">\r\n      Add Class\r\n    </button>\r\n  </div>\r\n</form>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/grocery-dialog-content-dialog/grocery-dialog-content-dialog.component.html": 
        /*!**********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grocery-dialog-content-dialog/grocery-dialog-content-dialog.component.html ***!
          \**********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Install Angular</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <div *ngFor=\"let ingredient of allIngredients\">\r\n    <button (click)=\"selectedIngre(ingredient)\">\r\n    {{ingredient.name}}\r\n    </button>\r\n  </div>\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n<!--  <button mat-button mat-dialog-close>Cancel</button>-->\r\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Done</button>\r\n</mat-dialog-actions>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/grocery-store-modals/select-items-modal.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grocery-store-modals/select-items-modal.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--<div #selectIngredients>-->\r\n<!--  <button type=\"text\" (click)=\"addMango()\">Mango</button>-->\r\n<!--  <button type=\"text\" (click)=\"addMilk()\">Milk</button>-->\r\n<!--</div>>-->\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"dateOfBirth\">Date of birth</label>\r\n        <div class=\"input-group\">\r\n          <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Launch demo modal</button>\r\n\r\n<hr>\r\n\r\n<pre>{{closeResult}}</pre>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/grocery/grocery.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grocery/grocery.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!doctype html>\r\n<html lang=\"en\">\r\n<link href=\"https://fonts.googleapis.com/css?family=Zilla+Slab&display=swap\" rel=\"stylesheet\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\"\r\n        content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n  <title>Document</title>\r\n</head>\r\n<body>\r\n<header class=\"flex justify-around items-center px-4 md:px-16 \">\r\n  <img class=\" w-10 sm:w-20 md:w-40 cursor-pointer\" src=\"../../assets/logo_sharp_image.png\" alt=\"\">\r\n\r\n  <div class=\"pt-2 relative mx-auto text-gray-600\">\r\n    <input class=\"border-2 border-gray-300 bg-white h-7 md:h-10 px-15 sm:pr-24 md:pr-64 rounded-lg text-md focus:outline-none shadow-xl\"\r\n           type=\"search\" name=\"Search Recipe\" placeholder=\"Search Recipe\">\r\n    <button type=\"submit\" class=\"absolute right-0 top-0 mt-5 mr-4\">\r\n      <svg class=\"text-gray-600 h-4 w-4 fill-current\" xmlns=\"http://www.w3.org/2000/svg\"version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\"\r\n           viewBox=\"0 0 56.966 56.966\" style=\"enable-background:new 0 0 56.966 56.966;\" xml:space=\"preserve\"\r\n           width=\"512px\" height=\"512px\">\r\n            <path\r\n              d=\"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z\" />\r\n          </svg>\r\n    </button>\r\n  </div>\r\n  <div class=\"flex mx-3\">\r\n  <button type=\"submit\" class=\"mx-3 cursor-pointer bg-orange-600 hover:bg-orange-500 shadow-xl px-5 py-2 inline-block text-orange-100 hover:text-white rounded\" (click)=\"showGrocery()\">Grocery</button>\r\n  <button type=\"submit\" class=\"cursor-pointer bg-orange-600 hover:bg-orange-500 shadow-xl px-5 py-2 inline-block text-orange-100 hover:text-white rounded\" (click)=\"showutensil()\">Utensils</button>\r\n    <img class=\"ml-4 h-8\" src=\"../../assets/grocery/shopping-cart.svg\" alt=\"\">\r\n  </div>\r\n  <div class=\"relative \">\r\n    <button tabindex=\"-1\" (click)=\"dropdownShowOrNot()\" class=\" relative z-10 block h-10 w-10 mx-8\">\r\n      <img class=\"md:w-1/2 md:h-1/2 lg:w-full lg:h-full object-cover rounded-full overflow-hidden border-2 hover:border-blue-600  hover:shadow-2xl\" src=\"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\" alt=\"\">\r\n    </button>\r\n    <button *ngIf=\"isOpen\" (click)=\"isOpen=false\"  class=\"fixed top-0 right-0 left-0 bottom-0 h-full w-full bg-white opacity-50 cursor-default\"></button>\r\n    <div  *ngIf=\"isOpen\" class=\"absolute top-auto right-0 w- 48 mt-4 py-2 bg-white rounded-b-lg shadow-2xl\" >\r\n      <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white \" href=\"\">Settings</a>\r\n      <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white\" href=\"\">Support</a>\r\n      <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white\" href=\"\">Sign out</a>\r\n    </div>\r\n  </div>\r\n</header>\r\n<hr>\r\n<div class=\"bg-white border-b\">\r\n  <div class=\"container mx-auto px-4\">\r\n\r\n    <div *ngIf=\"grocery\" class=\"flex grocery \">\r\n    <div class=\"flex -mb-px mr-8 border-transparent hover:text-blue-600 font-bold\">\r\n      <a class=\"no-underline flex text-blue-dark items-center py-4 border-b border-blue-dark\" href=\"\">\r\n        <img class=\"h-8 mr-2\" src=\"../../assets/grocery/lactose-intolerant.svg\" alt=\"\">\r\n        Dairy\r\n      </a>\r\n    </div>\r\n    <div class=\"flex -mb-px mr-8 border-transparent hover:text-blue-600 font-bold\">\r\n      <a class=\"no-underline flex text-blue-dark items-center py-4 border-b border-blue-dark\" href=\"\">\r\n        <img class=\"h-8 mr-2\" src=\"../../assets/grocery/apple.svg\" alt=\"\">\r\n\r\n        Fruits\r\n      </a>\r\n    </div>\r\n    <div class=\"flex -mb-px mr-8 border-transparent hover:text-blue-600 font-bold\">\r\n      <a class=\"no-underline flex text-blue-dark items-center py-4 border-b border-blue-dark\" href=\"\">\r\n        <img class=\"h-8 mr-2\" src=\"../../assets/grocery/agronomy.svg\" alt=\"\">\r\n\r\n        Grains and Beans\r\n      </a>\r\n    </div>\r\n    <div class=\"flex -mb-px mr-8 border-transparent hover:text-blue-600 font-bold\">\r\n      <a class=\"no-underline flex text-blue-dark items-center py-4 border-b border-blue-dark\" href=\"\">\r\n        <img class=\"h-8 mr-2\" src=\"../../assets/grocery/fish.svg\" alt=\"\">\r\n        Meat\r\n      </a>\r\n    </div>\r\n    <div class=\"flex -mb-px mr-8 border-transparent hover:text-blue-600 font-bold\">\r\n      <a class=\"no-underline flex text-blue-dark items-center py-4 border-b border-blue-dark\" href=\"\">\r\n        <img class=\"h-8 mr-2\" src=\"../../assets/grocery/candy-wrap.svg\" alt=\"\">\r\n        Confections\r\n      </a>\r\n    </div>\r\n    <div class=\"flex -mb-px mr-8 border-transparent hover:text-blue-600 font-bold\">\r\n      <a class=\"no-underline flex text-blue-dark items-center py-4 border-b border-blue-dark\" href=\"\">\r\n        <img class=\"h-8 mr-2\" src=\"../../assets/grocery/salad.svg\" alt=\"\">\r\n        Vegetables\r\n      </a>\r\n    </div>\r\n    <div class=\"flex -mb-px mr-8 border-transparent hover:text-blue-600 font-bold\">\r\n      <a class=\"no-underline flex text-blue-dark items-center py-4 border-b border-blue-dark\" href=\"\">\r\n        <img class=\"h-8 mr-2\" src=\"../../assets/grocery/olive-oil.svg\" alt=\"\">\r\n\r\n        Liquid\r\n      </a>\r\n    </div>\r\n  </div>\r\n    <div *ngIf=\"utensil\" class=\"flex grocery \">\r\n      <div class=\"flex -mb-px mr-8 border-transparent hover:text-blue-600 font-bold\">\r\n        <a class=\"no-underline flex text-blue-dark items-center py-4 border-b border-blue-dark\" href=\"\">\r\n          <img class=\"h-8 mr-2\" src=\"../../assets/grocery/small.svg\" alt=\"\">\r\n          Small\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"flex -mb-px mr-8 border-transparent hover:text-blue-600 font-bold\">\r\n        <a class=\"no-underline flex text-blue-dark items-center py-4 border-b border-blue-dark\" href=\"\">\r\n          <img class=\"h-8 mr-2\" src=\"../../assets/grocery/medium.svg\" alt=\"\">\r\n          Medium\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"flex -mb-px mr-8 border-transparent hover:text-blue-600 font-bold\">\r\n        <a class=\"no-underline flex text-blue-dark items-center py-4 border-b border-blue-dark\" href=\"\">\r\n          <img class=\"h-8 mr-2\" src=\"../../assets/grocery/large.svg\" alt=\"\">\r\n          Large\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<hr>\r\n\r\n<div class=\" \">\r\n  <!--______________________________________________________________________________________-->\r\n\r\n  <div class=\"block  md:px-12\">\r\n    <div class=\"flex flex-wrap lg:mx-4 mt-3\">\r\n      <div class=\"my-1  w-full md:w-1/3 lg:my-4 lg:w-1/5 hover:shadow-2xl \">\r\n        <article class=\"overflow-hidden rounded-lg shadow-lg\">\r\n          <a href=\"#\">\r\n            <img alt=\"Placeholder\" class=\"block h-auto w-full\" src=\"https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/246623d990be42b7a60270fc0e188750.jpg\">\r\n          </a>\r\n          <header class=\"flex items-center justify-between leading-tight p-2 md:p-4\">\r\n            <h1 class=\"text-lg\">\r\n              <a class=\"no-underline hover:underline text-black font-bold\" href=\"#\">\r\n              Tomatos\r\n              </a>\r\n            </h1>\r\n\r\n            <li class =\"inline-block hover:shadow-2xl \">\r\n              <a href=\"#\"> <img class=\"h-8\"  src=\"../../assets/grocery/add-to-cart.svg\" alt=\"Add\"> </a>\r\n            </li>\r\n\r\n          </header>\r\n\r\n        </article>\r\n\r\n      </div>\r\n<!--      <div class=\"my-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 hover:shadow-2xl\">-->\r\n<!--        <article class=\"overflow-hidden rounded-lg shadow-lg\">-->\r\n\r\n<!--          <a href=\"#\">-->\r\n<!--            <img alt=\"Placeholder\" class=\"block h-auto w-full\" src=\"http://oivietnam.com/wp-content/uploads/2017/07/Portugal-5.jpg\">-->\r\n<!--          </a>-->\r\n<!--          <header class=\"flex items-center justify-between leading-tight p-2 md:p-4\">-->\r\n<!--            <h1 class=\"text-lg\">-->\r\n<!--              <a class=\"no-underline hover:underline text-black font-bold\" href=\"#\">-->\r\n<!--                Portugese Food Recipes-->\r\n<!--              </a>-->\r\n<!--            </h1>-->\r\n\r\n<!--            <li class =\"inline-block hover:shadow-2xl \">-->\r\n<!--              <a href=\"#\"> <img class=\"h-8\"  src=\"../../assets/instructor_svg/remove.svg\" alt=\"Add\"> </a>-->\r\n<!--            </li>-->\r\n<!--          </header>-->\r\n\r\n<!--        </article>-->\r\n\r\n<!--      </div>-->\r\n<!--      <div class=\"my-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 hover:shadow-2xl\">-->\r\n<!--        <article class=\"overflow-hidden rounded-lg shadow-lg\">-->\r\n\r\n<!--          <a href=\"#\">-->\r\n<!--            <img alt=\"Placeholder\" class=\"block h-auto w-full\" src=\"https://www.strongertogether.coop/sites/default/files/Chinese_and_Japanese_Cuisine.jpg\">-->\r\n<!--          </a>-->\r\n\r\n<!--          <header class=\"flex items-center justify-between leading-tight p-2 md:p-4\">-->\r\n<!--            <h1 class=\"text-lg\">-->\r\n<!--              <a class=\"no-underline hover:underline text-black font-bold\" href=\"#\">-->\r\n<!--                Japense Food Recipes-->\r\n<!--              </a>-->\r\n<!--            </h1>-->\r\n\r\n<!--            <li class =\"inline-block hover:shadow-2xl \">-->\r\n<!--              <a href=\"#\"> <img class=\"h-8\"  src=\"../../assets/instructor_svg/remove.svg\" alt=\"Add\"> </a>-->\r\n<!--            </li>-->\r\n<!--          </header>-->\r\n\r\n<!--        </article>-->\r\n<!--      </div>-->\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"my-32\"></div>\r\n\r\n</body>\r\n<footer>\r\n  <img class=\" \" src=\"https://mondiv.com/wp-content/themes/default-bs3/img/template/bg_footer_all.jpg\" alt=\"\">\r\n</footer>\r\n\r\n</html>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/instructor-dashboard/instructor-dashboard.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/instructor-dashboard/instructor-dashboard.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!doctype html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\"\r\n        content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n  <title>Document</title>\r\n</head>\r\n<body>\r\n\r\n<div class=\"navbar mx-4\" >\r\n  <header class=\"flex justify-between items-center\">\r\n    <img class=\" h-16 cursor-pointer\" src=\"../../assets/logo.png\" alt=\"\">\r\n    <div class=\"pt-2 relative mx-auto text-gray-600\">\r\n      <div class=\"border-black border-4 rounded \">\r\n        <input class=\"w-64 \" type=\"text\" placeholder=\"What type of food you want to cook?\"><i class=\"fas fa-search\"></i>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\" flex items-center\">\r\n\r\n      <a class =\"mr-4\"> <img class=\"h-4 md:h-8\"  src=\"../../assets/instructor_svg/plus-sign-in-a-black-circle.svg\" alt=\"Add\"></a>\r\n      <a  routerLink=\"/grocery\"> <img class=\"h-4 md:h-8\" src=\"../../assets/instructor_svg/shop.svg\" alt=\"shop\"></a>\r\n\r\n      <div class=\"relative z-10\">\r\n        <button tabindex=\"-1\" (click)=\"dropdownShowOrNot()\" class=\" relative block h-10 w-10 mx-8\">\r\n          <img class=\"md:w-1/2 md:h-1/2 lg:w-full lg:h-full object-cover rounded-full overflow-hidden border-2 hover:border-blue-600  hover:shadow-2xl\" src=\"https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\" alt=\"\">\r\n        </button>\r\n        <button *ngIf=\"isOpen\" (click)=\"isOpen=false\"  class=\"fixed top-0 right-0 left-0 bottom-0 h-full w-full bg-white opacity-50 cursor-default\"></button>\r\n        <div  *ngIf=\"isOpen\" class=\"absolute top-auto right-0 w-48 mt-4 py-2 bg-white rounded-b-lg shadow-2xl\" >\r\n          <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white \" href=\"\">Settings</a>\r\n          <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white\" href=\"\">Support</a>\r\n          <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white\" href=\"\">Sign out</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </header>\r\n</div>\r\n<hr class=\"border-t-2 border-black mb-2\">\r\n<div class=\"mx-16\">\r\n\r\n  <div class=\" font-bold text-2xl\">Welcome back, {{teach.name}}</div>\r\n\r\n  <div class=\"flex flex-wrap lg:-mx-4\">\r\n    <div class=\"my-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 \">\r\n      <article class=\"overflow-hidden rounded-lg shadow-lg\" routerLink=\"/instructorDash\" >\r\n        <a >\r\n          <img alt=\"Placeholder\" class=\"block h-auto w-full\" src=\"https://www.tiffin.com/images/structured-data/catering/photos/ctm3.jpg\">\r\n        </a>\r\n        <div class=\"flex justify-around p-2 md:p-4\" >\r\n          <a class=\"text-2xl no-underline hover:underline text-black font-bold cursor-pointer\" >\r\n            Indian Food Recipes\r\n          </a>\r\n\r\n          <a > <img class=\"h-8\"  src=\"../../assets/instructor_svg/edit.svg\" alt=\"Add\"> </a>\r\n          <a > <img class=\"h-8\"  src=\"../../assets/instructor_svg/remove.svg\" alt=\"Add\"> </a>\r\n\r\n        </div>\r\n\r\n      </article>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"my-32\"></div>\r\n\r\n</body>\r\n<footer>\r\n  <img class=\" \" src=\"https://mondiv.com/wp-content/themes/default-bs3/img/template/bg_footer_all.jpg\" alt=\"\">\r\n</footer>\r\n</html>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/instructor-new-recipe/instructor-new-recipe.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/instructor-new-recipe/instructor-new-recipe.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!doctype html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\"\r\n        content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n  <link href=\"https://unpkg.com/@angular/material/prebuilt-themes/indigo-pink.css\" rel=\"stylesheet\">\r\n  <title>Document</title>\r\n</head>\r\n<body>\r\n\r\n<div class=\"navbar mx-6\" >\r\n  <header class=\"flex justify-between items-center\">\r\n    <img routerLink=\"\" class=\" h-16 cursor-pointer\" src=\"../../assets/logo_edited_2.jpeg\" alt=\"\">\r\n    <div class=\"pt-2 relative mx-auto text-gray-900\">\r\n      <div class=\"relative text-gray-600 w-full text-3xl text-black font-extrabold\">\r\n        Create New Dish\r\n      </div>\r\n    </div>\r\n    <div class=\"relative z-10\">\r\n      <button tabindex=\"-1\" (click)=\"dropdownShowOrNot()\" class=\" relative block h-10 w-10 mx-8\">\r\n        <img class=\"md:w-1/2 md:h-1/2 lg:w-full lg:h-full object-cover rounded-full overflow-hidden border-2 hover:border-blue-600  hover:shadow-2xl\" src=\"https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\" alt=\"\">\r\n      </button>\r\n      <button *ngIf=\"isOpen\" (click)=\"isOpen=false\"  class=\"fixed top-0 right-0 left-0 bottom-0 h-full w-full bg-white opacity-50 cursor-default\"></button>\r\n      <div  *ngIf=\"isOpen\" class=\"absolute top-auto right-0 w-48 mt-4 py-2 bg-white rounded-b-lg shadow-2xl\" >\r\n        <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white \" href=\"\">Settings</a>\r\n        <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white\" href=\"\">Support</a>\r\n        <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white\" href=\"\">Sign out</a>\r\n      </div>\r\n    </div>\r\n\r\n  </header>\r\n</div>\r\n<hr class=\"border-t-2 border-black mb-2\">\r\n\r\n  <form class=\" flex flex-col mx-32 justify-center items-center\" (submit)=\"createNewRecipe($event)\">\r\n\r\n  <input id=\"name\" type=\"text\" jyg placeholder=\"Name of Dish\" class=\"bg-blue-100 w-1/2 m-2 p-3 rounded text-lg border-4  hover:border-blue-500 text-black\">\r\n\r\n  <input id=\"description\" type=\"text\" placeholder=\"Description\" class=\"bg-blue-100 w-1/2 m-2 p-3 rounded text-lg border-4  hover:border-blue-500\">\r\n\r\n  <input id=\"cookTime\" type=\"number\" placeholder=\"Cooking Time (minutes)\" class=\"bg-blue-100 w-1/2 m-2 p-3 rounded text-lg border-4  hover:border-blue-500\">\r\n\r\n  <input id=\"image\" type=\"file\" placeholder=\"Image\" class=\"bg-blue-100 w-1/2 m-2 p-3 rounded text-lg border-4  hover:border-blue-500\">\r\n\r\n  <input id=\"type\" type=\"text\" placeholder=\"What type of dish is it?\" class=\"bg-blue-100 w-1/2 m-2 p-3 rounded text-lg border-4  hover:border-blue-500\">\r\n\r\n  <div class=\"flex flex-row m-2\">\r\n    <div class=\"m-2\">\r\n    <a  (click)=\"openGroceryDialog()\" class=\"cursor-pointer bg-orange-600 hover:bg-orange-500 text-orange-100 py-2 px-4 rounded inline-flex items-center rounded-full animated zoomIn\">\r\n      Choose Grocery\r\n    </a></div>\r\n    <div class=\"m-2\">\r\n    <a (click)=\"openUtensilsDialog()\" class=\"cursor-pointer bg-orange-600 hover:bg-orange-500 text-orange-100 py-2 px-4 rounded inline-flex items-center rounded-full animated zoomIn\">\r\n      Choose Utensils\r\n    </a></div>\r\n  </div>\r\n\r\n      <div id=\"steps\" class=\"flex flex-col mx-32 justify-center items-center\">\r\n          <input id=\"step0\"type=\"text\" placeholder=\"Describe Step\" class=\"bg-blue-100 w-100% m-2 p-3 rounded text-lg border-4  hover:border-blue-500 text-black\">\r\n<!--          <label for=\"step-des\">Describe Step</label>-->\r\n<!--          <input id=\"step-des\" class=\"bg-blue-100 w-1/6 m-2 p-3 rounded text-lg border-4  hover:border-blue-500\">-->\r\n<!--          <select>-->\r\n<!--            <option>This</option>-->\r\n<!--            <option>That</option>-->\r\n<!--          </select>-->\r\n<!--          <select></select>-->\r\n<!--          <select></select>-->\r\n<!--          <select></select>-->\r\n<!--          <input class=\"bg-blue-100 w-1/6 m-1 p-2 rounded text-lg border-4  hover:border-blue-500\">-->\r\n        </div>\r\n      <a class=\"cursor-pointer bg-orange-600 hover:bg-orange-500 text-orange-100 py-2 px-4 rounded inline-flex items-center rounded-full animated zoomIn\" (click)=\"addStep()\">Add new step</a><br>\r\n  <button  class=\"cursor-pointer bg-orange-600 hover:bg-orange-500 text-orange-100 py-2 px-4 rounded inline-flex items-center rounded-full animated zoomIn\" type=\"submit\">\r\n    Publish Recipe\r\n  </button>\r\n</form>\r\n</body>\r\n</html>\r\n\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/instructor-recipe-dashboard/instructor-recipe-dashboard.component.html": 
        /*!******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/instructor-recipe-dashboard/instructor-recipe-dashboard.component.html ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!doctype html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\"\r\n        content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n  <title>Document</title>\r\n</head>\r\n<body>\r\n<div class=\"navbar mx-6\" >\r\n  <header class=\"flex justify-between items-center\">\r\n    <img routerLink=\"\" class=\" h-16 cursor-pointer\" src=\"../../assets/logo_edited_2.jpeg\" alt=\"\">\r\n    <div class=\"pt-2 relative mx-auto text-gray-900\">\r\n<!--      <div class=\"relative text-gray-600 w-full border-4 border-black rounded-full\">-->\r\n<!--        <input type=\"search\" name=\"search\" placeholder=\"Search a Recipe\" class=\"bg-white h-10 px-2 pr-10 rounded-full text-sm focus:outline-none hover:shadow-2xl\">-->\r\n<!--        <button type=\"submit\" class=\"absolute right-0 top-0 mt-3 mr-4 \">-->\r\n<!--          <svg class=\"h-4 w-4 fill-current\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 56.966 56.966\" style=\"enable-background:new 0 0 56.966 56.966;\" xml:space=\"preserve\" width=\"512px\" height=\"512px\">-->\r\n<!--      <path d=\"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z\"/>-->\r\n<!--    </svg>-->\r\n<!--        </button>-->\r\n<!--      </div>-->\r\n      <form class=\" mt-3  flex  flex-row  flex-wrap\" (submit)=\"searchBarRecipe($event)\">\r\n        <input type=\"text\" class=\" text-gray-600  w-2/3  p-2  rounded-l-lg border-2 border-blue-600\" placeholder=\"Search a Recipe\" id = \"searchBarRecipeText\"/>\r\n        <button class=\" p-2  w-1/3  bg-blue-600  rounded-r-lg  text-white hover: bg-blue-600 tracking-widest\" type=\"submit\">Search</button>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"relative z-10\">\r\n      <button tabindex=\"-1\" (click)=\"dropdownShowOrNot()\" class=\" relative block h-10 w-10 mx-8\">\r\n        <img class=\"md:w-1/2 md:h-1/2 lg:w-full lg:h-full object-cover rounded-full overflow-hidden border-2 hover:border-blue-600  hover:shadow-2xl\" src=\"https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\" alt=\"\">\r\n      </button>\r\n      <button *ngIf=\"isOpen\" (click)=\"isOpen=false\"  class=\"fixed top-0 right-0 left-0 bottom-0 h-full w-full bg-white opacity-50 cursor-default\"></button>\r\n      <div  *ngIf=\"isOpen\" class=\"absolute top-auto right-0 w-48 mt-4 py-2 bg-white rounded-b-lg shadow-2xl\" >\r\n        <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white \" href=\"\">Settings</a>\r\n        <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white\" href=\"\">Support</a>\r\n        <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white\" href=\"\">Sign out</a>\r\n      </div>\r\n    </div>\r\n\r\n  </header>\r\n</div>\r\n<hr class=\"border-t-2 border-black m-2\">\r\n<div class=\"mx-32\">\r\n  <div class=\"flex items-start m-4\">\r\n    <div class=\"font-bold text-2xl pr-4 \" *ngIf=\"teacher.name != null && teacher != undefined\">Welcome back, {{teacher.name}} </div>\r\n    <a routerLink=\"/newRecipe\" class=\"cursor-pointer bg-orange-600 hover:bg-orange-500 text-orange-100 py-2 px-4 rounded inline-flex items-center rounded-full animated zoomIn\">\r\n      Add Recipe\r\n    </a>\r\n  </div>\r\n\r\n  <div *ngIf=\"classs == undefined || classs == null\">\r\n    <p> NO RECIPES TO SHOW!, ADD NEW RECIPES BY CLICKING THE ADD RECIPE BUTTON ABOVE</p>\r\n  </div>\r\n\r\n  <ul class=\"ClassList \" *ngIf=\"classs != null\">\r\n    <li class=\"classList_Element m-4 animated zoomIn\" *ngFor=\"let rec of displayingRecipeList\">\r\n      <div class=\"flex items-center bg-yellow-400 mx-32 pr-8 rounded\" >\r\n        <div class=\"my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2\">\r\n          <img class=\"rounded \" src=\"https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipes%2F2019-08-recipe-easiest-20-minute-butter-chicken%2FEasiest-20-Minute-Butter-Chicken_012\" alt=\"\">\r\n        </div>\r\n        <div class=\"flex flex-col \">\r\n          <div class=\"mainHeading font-bold text-3xl\">{{rec.name}}</div>\r\n          <div class=\"description py-3\">\r\n            {{rec.description}}\r\n          </div>\r\n          <div class=\"actionDiv flex justify-start\">\r\n            <div class=\" bg-blue-600 rounded-full py-2 px-6 text-white tracking-wider\">\r\n              <a (click) = editRecipe(rec)>Edit Recipe </a></div>\r\n            <div class=\" bg-blue-600 rounded-full py-2 px-6 text-white  tracking-wider mx-4\">\r\n              <a (click)=\"deleteRecipe(rec)\">Delete Recipe</a></div>\r\n            <div class=\" bg-blue-600 rounded-full py-2 px-6 text-white  tracking-wider\">\r\n              <a>Info</a></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n</body>\r\n\r\n</html>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/instructor/instructor.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/instructor/instructor.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!doctype html>\r\n<html lang=\"en\">\r\n<link href=\"https://fonts.googleapis.com/css?family=Zilla+Slab&display=swap\" rel=\"stylesheet\">\r\n<!--<link rel=\"stylesheet\" href=\"path/to/font-awesome/css/font-awesome.min.css\">-->\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\"\r\n        content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n  <link href=\"https://unpkg.com/@angular/material/prebuilt-themes/indigo-pink.css\" rel=\"stylesheet\">\r\n\r\n  <title>Document</title>\r\n</head>\r\n<body>\r\n\r\n<div class=\"navbar mx-6\" >\r\n  <header class=\"flex justify-between items-center\">\r\n    <img class=\" h-16 cursor-pointer\" src=\"../../assets/logo_edited_2.jpeg\" alt=\"\">\r\n    <div class=\"pt-2 relative mx-auto text-gray-900\">\r\n<!--      <div class=\"relative text-gray-600 w-full border-4 border-black rounded-full\">-->\r\n<!--        <input type=\"search\" name=\"search\" placeholder=\"Search Classes\" class=\"bg-white h-10 px-2 pr-10 rounded-full text-sm focus:outline-none hover:shadow-2xl\">-->\r\n<!--        <button type=\"submit\" class=\"absolute right-0 top-0 mt-3 mr-4 \">-->\r\n<!--          <svg class=\"h-4 w-4 fill-current\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 56.966 56.966\" style=\"enable-background:new 0 0 56.966 56.966;\" xml:space=\"preserve\" width=\"512px\" height=\"512px\">-->\r\n<!--      <path d=\"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z\"/>-->\r\n<!--    </svg>-->\r\n<!--        </button>-->\r\n<!--      </div>-->\r\n      <form class=\" mt-3  flex  flex-row  flex-wrap\" (submit)=\"searchBar($event)\">\r\n        <input type=\"text\" class=\" text-gray-600  w-2/3  p-2  rounded-l-lg border-2 border-blue-600\" placeholder=\"Search a Class\" id = \"searchBarText\"/>\r\n        <button class=\" p-2  w-1/3  bg-blue-600  rounded-r-lg  text-white hover: bg-blue-600 tracking-widest\" type=\"submit\">Search</button>\r\n      </form>\r\n    </div>\r\n\r\n    <!--    <div class=\" flex items-center\">-->\r\n\r\n    <!--      <a class =\"mr-4\"> <img class=\"h-4 md:h-8\"  src=\"../../assets/instructor_svg/plus-sign-in-a-black-circle.svg\" alt=\"Add\"></a>-->\r\n    <!--      <a  routerLink=\"/grocery\"> <img class=\"h-4 md:h-8\" src=\"../../assets/instructor_svg/shop.svg\" alt=\"shop\"></a>-->\r\n\r\n    <div class=\"relative z-10\">\r\n      <button tabindex=\"-1\" (click)=\"dropdownShowOrNot()\" class=\" relative block h-10 w-10 mx-8\">\r\n        <img class=\"md:w-1/2 md:h-1/2 lg:w-full lg:h-full object-cover rounded-full overflow-hidden border-2 hover:border-blue-600  hover:shadow-2xl\" src=\"https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\" alt=\"\">\r\n      </button>\r\n      <button *ngIf=\"isOpen\" (click)=\"isOpen=false\"  class=\"fixed top-0 right-0 left-0 bottom-0 h-full w-full bg-white opacity-50 cursor-default\"></button>\r\n      <div  *ngIf=\"isOpen\" class=\"absolute top-auto right-0 w-48 mt-4 py-2 bg-white rounded-b-lg shadow-2xl\" >\r\n        <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white \" href=\"\">Settings</a>\r\n        <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white\" href=\"\">Support</a>\r\n        <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white\" href=\"\">Sign out</a>\r\n      </div>\r\n    </div>\r\n    <!--    </div>-->\r\n\r\n  </header>\r\n</div>\r\n<hr class=\"border-t-2 border-black m-2\">\r\n<div class=\"mx-32\">\r\n  <div class=\"flex items-start m-4\">\r\n    <div class=\"font-bold text-2xl pr-4 \" *ngIf=\"teacher != null\">Welcome back, {{teacher.name}} </div>\r\n    <a (click)=\"openDialogue()\" class=\"cursor-pointer bg-orange-600 hover:bg-orange-500 text-orange-100 py-2 px-4 rounded inline-flex items-center rounded-full animated zoomIn\">\r\n      Add Class\r\n    </a>\r\n  </div>\r\n\r\n  <ul class=\"ClassList\">\r\n    <li class=\"classList_Element m-4 animated zoomIn\" *ngFor=\"let clas of displayingClassList\">\r\n      <div class=\"flex items-center bg-yellow-400 mx-32 pr-8 rounded\">\r\n        <div class=\"my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 \">\r\n          <img class=\"rounded\" src=\"https://www.tiffin.com/images/structured-data/catering/photos/ctm3.jpg\" alt=\"\">\r\n        </div>\r\n        <form class=\"flex flex-col \" id=\"{{clas.name}}\">\r\n          <div class=\"mainHeading font-bold text-3xl\">{{clas.name}}</div>\r\n          <div class=\"description py-3\">{{clas.description}}</div>\r\n          <div class=\"actionDiv flex justify-start\">\r\n            <div class=\" bg-blue-600 rounded-full py-2 px-6 text-white tracking-wider\">\r\n              <a (click)=\"goToClass(clas)\"> See Recipes </a></div>\r\n            <div class=\" bg-blue-600 rounded-full py-1 px-6 text-white  tracking-wider mx-4\">\r\n              <a (click)=\"deleteClass(clas)\">Delete Class</a></div>\r\n            <div class=\" bg-blue-600 rounded-full py-1 px-6 text-white  tracking-wider\">\r\n              <a>Info</a></div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n\r\n  <!--  <div class=\"flex flex-wrap lg:-mx-4\">-->\r\n  <!--    <div class=\"my-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 \">-->\r\n  <!--      <article class=\"overflow-hidden rounded-lg shadow-lg\" routerLink=\"/instructorDash\" >-->\r\n  <!--        <a >-->\r\n  <!--          <img alt=\"Placeholder\" class=\"block h-auto w-full\" src=\"https://www.tiffin.com/images/structured-data/catering/photos/ctm3.jpg\">-->\r\n  <!--        </a>-->\r\n  <!--        <div class=\"flex justify-around p-2 md:p-4\" >-->\r\n  <!--          <a class=\"text-2xl no-underline hover:underline text-black font-bold cursor-pointer\" >-->\r\n  <!--            Indian Food Recipes-->\r\n  <!--          </a>-->\r\n  <!--          <a > <img class=\"h-8\"  src=\"../../assets/instructor_svg/edit.svg\" alt=\"Add\"> </a>-->\r\n  <!--          <a > <img class=\"h-8\"  src=\"../../assets/instructor_svg/remove.svg\" alt=\"Add\"> </a>-->\r\n  <!--        </div>-->\r\n  <!--      </article>-->\r\n\r\n  <!--    </div>-->\r\n  <!--  </div>-->\r\n</div>\r\n\r\n\r\n<div class=\"my-32\"></div>\r\n\r\n</body>\r\n<footer>\r\n  <img class=\" \" src=\"https://mondiv.com/wp-content/themes/default-bs3/img/template/bg_footer_all.jpg\" alt=\"\">\r\n</footer>\r\n</html>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"absolute z-1 \">\r\n  <video autoplay=\"true\" class=\"h-screen w-screen bg-gray-900\" loop=\"true\" src=\"../../assets/.student_video.mp4.icloud\"></video>\r\n</div>\r\n\r\n<div class=\"flex flex-row justify-center pt-64 block\">\r\n  <div class=\"  z-2 opacity-75 student  \" *ngIf=\"user != 'teacher'\">\r\n    <button class=\"button font-bold\" (click)=\"setAsStudent()\" *ngIf=\"user == ''\">\r\n      Student\r\n    </button>\r\n\r\n\r\n      <div class=\"shadow-xl p-10 bg-white max-w-xl  rounded\" *ngIf=\"user == 'student'\">\r\n        <form class=\"max-w-xl\" method=\"POST\" action=\"#\" id = \"stform\" (submit)=\"studentLogin($event)\">\r\n        <h1 class=\"text-4xl font-black mb-4 mx-2\">Student Login</h1>\r\n        <div class=\"mb-4 relative\">\r\n          <input autofocus\r\n                 class=\"input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600\"\r\n                 id=\"stemail\" type=\"text\">\r\n          <label class=\"label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text\"\r\n                 for=\"email\">Email Address</label>\r\n        </div>\r\n        <div class=\"mb-4 relative\">\r\n          <input autofocus\r\n                 class=\"input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600\"\r\n                 id=\"stpassword\" type=\"password\">\r\n          <label class=\"label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text\"\r\n                 for=\"password\">Password</label>\r\n        </div>\r\n        <button class=\"bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded\" type=\"submit\">\r\n          Login\r\n        </button>\r\n    </form>\r\n      </div>\r\n\r\n\r\n    <button class=\"button font-bold \" routerLink=\"/signup\">Sign Up</button>\r\n  </div>\r\n\r\n  <div class=\"  z-2 opacity-75  instructor block \" *ngIf=\"user != 'student'\">\r\n\r\n    <button class=\"button font-bold \" (click)=\"setAsTeacher()\" *ngIf=\"user == ''\">\r\n      Instructor\r\n    </button>\r\n\r\n\r\n      <div class=\"shadow-xl p-10 bg-white max-w-xl  rounded\" *ngIf=\"user == 'teacher'\">\r\n        <form class=\"max-w-xl\" method=\"POST\" action=\"#\"  (submit)=\"teacherLogin($event)\">\r\n        <h1 class=\"text-4xl font-black mb-4\">Instructor Login</h1>\r\n        <div class=\"mb-4 relative\">\r\n          <input autofocus\r\n                 class=\"input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600\"\r\n                 id=\"email\" type=\"text\">\r\n          <label class=\"label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text\"\r\n                 for=\"email\">Email Address</label>\r\n        </div>\r\n        <div class=\"mb-4 relative\">\r\n          <input autofocus\r\n                 class=\"input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600\"\r\n                 id=\"password\" type=\"password\">\r\n          <label class=\"label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text\"\r\n                 for=\"password\">Password</label>\r\n        </div>\r\n        <button class=\"bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded\" type=\"submit\">\r\n          Login\r\n        </button>\r\n        </form>\r\n      </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!doctype html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\"\r\n        content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n  <title>Document</title>\r\n</head>\r\n<body>\r\n<div class=\"absolute z-1 \">\r\n  <video autoplay =\"true\" class=\"h-screen w-screen bg-gray-900\" loop = \"true\" src=\"../../assets/instructor_video.mp4\"></video>\r\n</div>\r\n\r\n\r\n<div class=\"flex flex-row justify-center  block\">\r\n  <div class=\"  z-2 opacity-75 student \">\r\n    <div class=\" min-h-screen flex flex-col\">\r\n      <div class=\"container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2\">\r\n        <div class=\"bg-white px-6 py-8 rounded shadow-md text-black w-full\">\r\n          <h1 class=\"mb-8 text-3xl text-center font-bold text-2xl\">Sign up</h1>\r\n          <input\r\n            type=\"text\"\r\n            class=\"block border border-grey-light w-full p-3 rounded mb-4\"\r\n            name=\"fullname\"\r\n            placeholder=\"Full Name\" />\r\n\r\n          <input\r\n            type=\"text\"\r\n            class=\"block border border-grey-light w-full p-3 rounded mb-4\"\r\n            name=\"email\"\r\n            placeholder=\"Email\" />\r\n\r\n          <input\r\n            type=\"password\"\r\n            class=\"block border border-grey-light w-full p-3 rounded mb-4\"\r\n            name=\"password\"\r\n            placeholder=\"Password\"/>\r\n          <input\r\n            type=\"password\"\r\n            class=\"block border border-grey-light w-full p-3 rounded mb-4\"\r\n            name=\"confirm_password\"\r\n            placeholder=\"Confirm Password\" />\r\n          <input\r\n            type=\"password\"\r\n            class=\"block border border-grey-light w-full p-3 rounded mb-4\"\r\n            name=\"confirm_password\"\r\n            placeholder=\"Student or Teacher\" />\r\n\r\n          <button\r\n            type=\"submit\"\r\n            class=\"w-full text-center py-3 rounded bg-green text-black bg-blue-200 hover:bg-blue-600 hover:font-bold focus:outline-none my-1\"\r\n          >Create Account</button>\r\n\r\n          <div class=\"text-center text-sm text-grey-dark mt-4\">\r\n            By signing up, you agree to the\r\n            <a class=\"no-underline border-b border-grey-dark text-grey-dark\" href=\"#\">\r\n              Terms of Service\r\n            </a> and\r\n            <a class=\"no-underline border-b border-grey-dark text-grey-dark\" href=\"#\">\r\n              Privacy Policy\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"text-white mt-6\">\r\n          Already have an account?\r\n          <a class=\"no-underline border-b border-blue text-white\" href=\"\">\r\n            Log in\r\n          </a>.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</body>\r\n</html>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stu-dash/stu-dash.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stu-dash/stu-dash.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!doctype html>\r\n<html lang=\"en\">\r\n<link href=\"https://fonts.googleapis.com/css?family=Zilla+Slab&display=swap\" rel=\"stylesheet\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\"\r\n        content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n  <title>Document</title>\r\n</head>\r\n<body>\r\n<header class=\"flex justify-around items-center px-4 md:px-16 \">\r\n  <img class=\" w-10 sm:w-20 md:w-40 cursor-pointer\" src=\"../../assets/logo_sharp_image.png\" alt=\"\">\r\n\r\n  <div class=\"pt-2 relative mx-auto text-gray-600\">\r\n    <input class=\"border-2 border-gray-300 bg-white h-7 px-4 md:h-10 px-15 sm:pr-24 md:pr-64 rounded-lg text-md focus:outline-none shadow-xl\"\r\n           type=\"search\" name=\"Search Recipe\" placeholder=\"Search Recipe\">\r\n    <button type=\"submit\" class=\"absolute right-0 top-0 mt-5 mr-4\">\r\n      <svg class=\"text-gray-600 h-4 w-4 fill-current\" xmlns=\"http://www.w3.org/2000/svg\"version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\"\r\n           viewBox=\"0 0 56.966 56.966\" style=\"enable-background:new 0 0 56.966 56.966;\" xml:space=\"preserve\"\r\n           width=\"512px\" height=\"512px\">\r\n            <path\r\n              d=\"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z\" />\r\n          </svg>\r\n    </button>\r\n  </div>\r\n  <a href=\"#\"> <img class=\"w-12\"  src=\"../../assets/student_svg/subscribe.svg\" alt=\"Add\"> </a>\r\n\r\n\r\n  <div class=\"relative \">\r\n    <button tabindex=\"-1\" (click)=\"dropdownShowOrNot()\" class=\" relative z-10 block h-10 w-10 mx-8\">\r\n      <img class=\"md:w-1/2 md:h-1/2 lg:w-full lg:h-full object-cover rounded-full overflow-hidden border-2 hover:border-blue-600  hover:shadow-2xl\" src=\"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\" alt=\"\">\r\n    </button>\r\n    <button *ngIf=\"isOpen\" (click)=\"isOpen=false\"  class=\"fixed top-0 right-0 left-0 bottom-0 h-full w-full bg-white opacity-50 cursor-default\"></button>\r\n    <div  *ngIf=\"isOpen\" class=\"absolute top-auto right-0 w- 48 mt-4 py-2 bg-white rounded-b-lg shadow-2xl\" >\r\n      <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white \" href=\"\">Settings</a>\r\n      <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white\" href=\"\">Support</a>\r\n      <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white\" href=\"\">Sign out</a>\r\n    </div>\r\n  </div>\r\n</header>\r\n<hr>\r\n\r\n<div class=\" \">\r\n\r\n  <h1 class=\"m-8 text-2xl font-bold\">Welcome back, Adam</h1>\r\n\r\n  <!--______________________________________________________________________________________-->\r\n\r\n  <div class=\"block  mx-auto  md:px-12\">\r\n    <div class=\"flex flex-wrap -mx-1 lg:-mx-4\">\r\n      <div class=\"my-1  w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 hover:shadow-2xl\" routerLink=\"/studentDashboard\">\r\n        <article class=\"overflow-hidden rounded-lg shadow-lg\" >\r\n          <a>\r\n            <img alt=\"Placeholder\" class=\"block h-auto w-full\" src=\"http://cdn.cnn.com/cnnnext/dam/assets/190624122444-15-best-greek-food-restricted.jpg\">\r\n          </a>\r\n          <header class=\"flex items-center justify-between leading-tight p-2 md:p-4\">\r\n            <h1 class=\"text-lg\">\r\n              <a  class=\"no-underline hover:underline text-black font-bold\" href=\"#\">\r\n                Greek Food Recipes\r\n              </a>\r\n            </h1>\r\n\r\n\r\n            <li class =\"inline-block hover:shadow-2xl \">\r\n              <a > <img class=\"h-8\"  src=\"../../assets/instructor_svg/remove.svg\" alt=\"Add\"> </a>\r\n            </li>\r\n\r\n          </header>\r\n\r\n        </article>\r\n\r\n      </div>\r\n      <div class=\"my-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 hover:shadow-2xl\">\r\n        <article class=\"overflow-hidden rounded-lg shadow-lg\">\r\n\r\n          <a href=\"#\">\r\n            <img alt=\"Placeholder\" class=\"block h-auto w-full\" src=\"http://oivietnam.com/wp-content/uploads/2017/07/Portugal-5.jpg\">\r\n          </a>\r\n          <header class=\"flex items-center justify-between leading-tight p-2 md:p-4\">\r\n            <h1 class=\"text-lg\">\r\n              <a class=\"no-underline hover:underline text-black font-bold\" href=\"#\">\r\n                Portugese Food Recipes\r\n              </a>\r\n            </h1>\r\n\r\n            <li class =\"inline-block hover:shadow-2xl \">\r\n              <a href=\"#\"> <img class=\"h-8\"  src=\"../../assets/instructor_svg/remove.svg\" alt=\"Add\"> </a>\r\n            </li>\r\n          </header>\r\n\r\n        </article>\r\n\r\n      </div>\r\n      <div class=\"my-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 hover:shadow-2xl\">\r\n        <article class=\"overflow-hidden rounded-lg shadow-lg\">\r\n\r\n          <a href=\"#\">\r\n            <img alt=\"Placeholder\" class=\"block h-auto w-full\" src=\"https://www.strongertogether.coop/sites/default/files/Chinese_and_Japanese_Cuisine.jpg\">\r\n          </a>\r\n\r\n          <header class=\"flex items-center justify-between leading-tight p-2 md:p-4\">\r\n            <h1 class=\"text-lg\">\r\n              <a class=\"no-underline hover:underline text-black font-bold\" href=\"#\">\r\n                Japanese Food Recipes\r\n              </a>\r\n            </h1>\r\n\r\n            <li class =\"inline-block hover:shadow-2xl \">\r\n              <a href=\"#\"> <img class=\"h-8\"  src=\"../../assets/instructor_svg/remove.svg\" alt=\"Add\"> </a>\r\n            </li>\r\n          </header>\r\n\r\n        </article>\r\n        <!-- END Article -->\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"my-32\"></div>\r\n\r\n</body>\r\n<footer>\r\n  <img class=\" \" src=\"https://mondiv.com/wp-content/themes/default-bs3/img/template/bg_footer_all.jpg\" alt=\"\">\r\n</footer>\r\n\r\n</html>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student-dashbard/student-dashbard.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student-dashbard/student-dashbard.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<!doctype html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\"\r\n        content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n  <title>Document</title>\r\n</head>\r\n<body >\r\n<div class=\"everything \" >\r\n  <div class=\"navbar mx-4\" >\r\n    <header class=\"flex justify-between\">\r\n      <div>\r\n        <div class=\" flex items-center\">\r\n          <img class=\" h-16 cursor-pointer\" src=\"../../assets/logo.png\" alt=\"\">\r\n          <h3 class=\"no-underline hover:underline text-black font-bold text-3xl  \">Greek Food Recipes</h3>\r\n        </div>\r\n      </div>\r\n      <!--      <div>-->\r\n      <div class=\" flex items-center\">\r\n        <div class=\"px-2\">\r\n          <circle-progress\r\n            [percent]=\"85\"\r\n            [radius]=\"25\"\r\n            [titleFontSize]=\"12\"\r\n            [outerStrokeWidth]=\"4\"\r\n            [innerStrokeWidth]=\"4\"\r\n            [outerStrokeColor]=\"'#78C000'\"\r\n            [innerStrokeColor]=\"'#C7E596'\"\r\n            [animation]=\"true\"\r\n            [animationDuration]=\"800\"\r\n            [maxPercent]=\"100\"\r\n            [showSubtitle]=\"false\"\r\n          ></circle-progress>\r\n\r\n        </div>\r\n        <!--        <div class=\"px-2\"><a href=\"#\" class=\"cursor-pointer bg-teal-600 hover:bg-teal-500 px-3 inline-block text-teal-100 hover:text-white rounded\">Share</a></div>-->\r\n\r\n        <div class=\"relative z-10\">\r\n          <button tabindex=\"-1\" (click)=\"dropdownShowOrNot()\" class=\" relative z-10 block h-10 w-10 mx-8\">\r\n            <img class=\"md:w-1/2 md:h-1/2 lg:w-full lg:h-full object-cover rounded-full overflow-hidden border-2 hover:border-blue-600  hover:shadow-2xl\" src=\"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\" alt=\"\">\r\n          </button>\r\n          <button *ngIf=\"isOpen\" (click)=\"isOpen=false\"  class=\"fixed top-0 right-0 left-0 bottom-0 h-full w-full bg-white opacity-50 cursor-default\"></button>\r\n          <div  *ngIf=\"isOpen\" class=\"absolute top-auto right-0 w-48 mt-4 py-2 bg-white rounded-b-lg shadow-2xl\" >\r\n            <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white \" href=\"\">Settings</a>\r\n            <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white\" href=\"\">Support</a>\r\n            <a class=\"block px-8 py-2 hover:bg-indigo-400 hover:text-white\" href=\"\">Sign out</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--      </div>-->\r\n    </header>\r\n  </div>\r\n  <hr class=\"border-t-2 border-black mb-2\">\r\n  <div class=\"flex m-4\">\r\n    <div class=\" w-3/4 colomn_1 mr-8 md:mr-14 hidden sm:flex flex-col justify-center\">\r\n      <div class=\"flex justify-center items-center row_1 mainarea bg-gray-300 animated fadeInLeft border-8 border-gray-400 rounded-lg\">\r\n        <div class=\" flex-col grocery_ul m-8  \"\r\n             cdkDropList (cdkDropListDropped)=\"drop($event)\"\r\n              [cdkDropListData]=\"workspaceItems\"\r\n              [cdkDropListConnectedTo]=\"fruit \"\r\n              #workspace = \"cdkDropList\">\r\n          <div class=\"grocer_ul_li \" *ngFor=\"let item of workspaceItems \" cdkDrag >{{item}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"flex my-4 bottomarea\">\r\n        <div class=\" relative overflow-auto groceries bg-blue-200 w-1/2 mr-4 overflow-scroll animated fadeInUp border-8 border-blue-300 rounded-lg\" >\r\n          <div class=\"  flex-col grocery_ul m-8 \"\r\n               cdkDropList (cdkDropListDropped)=\"drop($event)\"\r\n                [cdkDropListData]=\"fruits\"\r\n                [cdkDropListConnectedTo]=\"workspace\"\r\n                #fruit= \"cdkDropList\">\r\n            <div class=\"grocer_ul_li \" *ngFor=\"let fruit of fruits \" cdkDrag >{{fruit}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\" relative bg-blue-300 w-1/2 overflow-scroll  items-center ml-4 animated fadeInUp  border-8 border-blue-400 rounded-lg\" >\r\n          <div class=\"  flex-col grocery_ul m-8  \" >\r\n            <div class=\"grocer_ul_li \" *ngFor=\"let utensil of utensils \"  cdkDrag >{{utensil}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\" flex colomn_2 overflow-y-auto font-bold text-md w-full sm:w-1/4 bg-gray-300 pt-4 justify-center animated fadeInRight border-8 border-gray-400 rounded-lg\">\r\n      <div class=\"fixed\">\r\n        <mat-accordion >\r\n          <mat-expansion-panel class=\" bg-blue-100\">\r\n            <mat-expansion-panel-header class=\"bg-blue-200\">\r\n              <mat-panel-title class=\"\">\r\n                Section # 1\r\n              </mat-panel-title>\r\n              <mat-panel-description >\r\n                something\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"flex justify-start items-center\">\r\n              <input type=\"checkbox\"> Step #1\r\n            </div>\r\n          </mat-expansion-panel>\r\n          <hr class=\"border-black my-2 \">\r\n          <mat-expansion-panel class=\" bg-indigo-400 \" (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header class=\"bg-indigo-200\">\r\n              <mat-panel-title>\r\n                Section # 2\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Currently: {{panelOpenState ? 'open' : 'closed'}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"\">\r\n              this is inside div\r\n            </div>\r\n          </mat-expansion-panel>\r\n\r\n          <hr class=\"border-black my-2 \">\r\n\r\n          <mat-expansion-panel class=\" bg-indigo-400 \" (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header class=\"bg-indigo-200\">\r\n              <mat-panel-title>\r\n                Section # 2\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Currently: {{panelOpenState ? 'open' : 'closed'}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"\">\r\n              this is inside div\r\n            </div>\r\n          </mat-expansion-panel>\r\n          <hr class=\"border-black my-2 \">\r\n          <mat-expansion-panel class=\" bg-indigo-400 \" (opened)=\"panelOpenState = true\"\r\n                               (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header class=\"bg-indigo-200\">\r\n              <mat-panel-title>\r\n                Section # 2\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Currently: {{panelOpenState ? 'open' : 'closed'}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"\">\r\n              this is inside div\r\n            </div>\r\n          </mat-expansion-panel>\r\n          <hr class=\"border-black my-2 \">\r\n          <mat-expansion-panel class=\" bg-indigo-400 \" (opened)=\"panelOpenState = true\"\r\n                               (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header class=\"bg-indigo-200\">\r\n              <mat-panel-title>\r\n                Section # 2\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Currently: {{panelOpenState ? 'open' : 'closed'}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"\">\r\n              this is inside div\r\n            </div>\r\n          </mat-expansion-panel>\r\n          <hr class=\"border-black my-2 \">\r\n          <mat-expansion-panel class=\" bg-indigo-400 \" (opened)=\"panelOpenState = true\"\r\n                               (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header class=\"bg-indigo-200\">\r\n              <mat-panel-title>\r\n                Section # 2\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Currently: {{panelOpenState ? 'open' : 'closed'}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"\">\r\n              this is inside div\r\n            </div>\r\n          </mat-expansion-panel>\r\n          <hr class=\"border-black my-2 \">\r\n          <mat-expansion-panel class=\" bg-indigo-400 \" (opened)=\"panelOpenState = true\"\r\n                               (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header class=\"bg-indigo-200\">\r\n              <mat-panel-title>\r\n                Section # 2\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Currently: {{panelOpenState ? 'open' : 'closed'}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"\">\r\n              this is inside div\r\n            </div>\r\n          </mat-expansion-panel>\r\n          <hr class=\"border-black my-2 \">\r\n          <mat-expansion-panel class=\" bg-indigo-400 \" (opened)=\"panelOpenState = true\"\r\n                               (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header class=\"bg-indigo-200\">\r\n              <mat-panel-title>\r\n                Section # 2\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Currently: {{panelOpenState ? 'open' : 'closed'}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"\">\r\n              this is inside div\r\n            </div>\r\n          </mat-expansion-panel>\r\n          <hr class=\"border-black my-2 \">\r\n          <mat-expansion-panel class=\" bg-indigo-400 \" (opened)=\"panelOpenState = true\"\r\n                               (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header class=\"bg-indigo-200\">\r\n              <mat-panel-title>\r\n                Section # 2\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Currently: {{panelOpenState ? 'open' : 'closed'}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"\">\r\n              this is inside div\r\n            </div>\r\n          </mat-expansion-panel>\r\n          <hr class=\"border-black my-2 \">\r\n          <mat-expansion-panel class=\" bg-indigo-400 \" (opened)=\"panelOpenState = true\"\r\n                               (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header class=\"bg-indigo-200\">\r\n              <mat-panel-title>\r\n                Section # 2\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Currently: {{panelOpenState ? 'open' : 'closed'}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"\">\r\n              this is inside div\r\n            </div>\r\n          </mat-expansion-panel>\r\n          <hr class=\"border-black my-2 \">\r\n          <mat-expansion-panel class=\" bg-indigo-400 \" (opened)=\"panelOpenState = true\"\r\n                               (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header class=\"bg-indigo-200\">\r\n              <mat-panel-title>\r\n                Section # 2\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Currently: {{panelOpenState ? 'open' : 'closed'}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"\">\r\n              this is inside div\r\n            </div>\r\n          </mat-expansion-panel>\r\n          <hr class=\"border-black my-2 \">\r\n          <mat-expansion-panel class=\" bg-indigo-400 \" (opened)=\"panelOpenState = true\"\r\n                               (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header class=\"bg-indigo-200\">\r\n              <mat-panel-title>\r\n                Section # 2\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Currently: {{panelOpenState ? 'open' : 'closed'}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"\">\r\n              this is inside div\r\n            </div>\r\n          </mat-expansion-panel>\r\n          <hr class=\"border-black my-2 \">\r\n          <mat-expansion-panel class=\" bg-indigo-400 \" (opened)=\"panelOpenState = true\"\r\n                               (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header class=\"bg-indigo-200\">\r\n              <mat-panel-title>\r\n                Section # 2\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Currently: {{panelOpenState ? 'open' : 'closed'}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"\">\r\n              this is inside div\r\n            </div>\r\n          </mat-expansion-panel>\r\n          <hr class=\"border-black my-2 \">\r\n          <mat-expansion-panel class=\" bg-indigo-400 \" (opened)=\"panelOpenState = true\"\r\n                               (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header class=\"bg-indigo-200\">\r\n              <mat-panel-title>\r\n                Section # 2\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Currently: {{panelOpenState ? 'open' : 'closed'}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"\">\r\n              this is inside div\r\n            </div>\r\n          </mat-expansion-panel>\r\n          <hr class=\"border-black my-2 \">\r\n          <mat-expansion-panel class=\" bg-indigo-400 \" (opened)=\"panelOpenState = true\"\r\n                               (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header class=\"bg-indigo-200\">\r\n              <mat-panel-title>\r\n                Section # 2\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Currently: {{panelOpenState ? 'open' : 'closed'}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"\">\r\n              this is inside div\r\n            </div>\r\n          </mat-expansion-panel>\r\n          <hr class=\"border-black my-2 \">\r\n          <mat-expansion-panel class=\" bg-indigo-400 \" (opened)=\"panelOpenState = true\"\r\n                               (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header class=\"bg-indigo-200\">\r\n              <mat-panel-title>\r\n                Section # 2\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Currently: {{panelOpenState ? 'open' : 'closed'}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div class=\"\">\r\n              this is inside div\r\n            </div>\r\n          </mat-expansion-panel>\r\n          <hr class=\"border-black my-2 \">\r\n\r\n        </mat-accordion>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n</body>\r\n</html>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utensil-dialog-content-dialog/utensil-dialog-content-dialog.component.html": 
        /*!**********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utensil-dialog-content-dialog/utensil-dialog-content-dialog.component.html ***!
          \**********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Install Angular</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <div *ngFor=\"let utensil of allUtensils\">\r\n    <button (click)=\"selectedUten(utensil)\">\r\n    {{utensil.name}}\r\n    </button>\r\n  </div>\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n<!--  <button mat-button mat-dialog-close>Cancel</button>-->\r\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Done</button>\r\n</mat-dialog-actions>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'FrontEnd';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _stu_dash_stu_dash_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stu-dash/stu-dash.component */ "./src/app/stu-dash/stu-dash.component.ts");
            /* harmony import */ var _instructor_instructor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instructor/instructor.component */ "./src/app/instructor/instructor.component.ts");
            /* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _grocery_grocery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./grocery/grocery.component */ "./src/app/grocery/grocery.component.ts");
            /* harmony import */ var _student_dashbard_student_dashbard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student-dashbard/student-dashbard.component */ "./src/app/student-dashbard/student-dashbard.component.ts");
            /* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
            /* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js");
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
            /* harmony import */ var _grocery_store_modals_select_items_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./grocery-store-modals/select-items-modal.component */ "./src/app/grocery-store-modals/select-items-modal.component.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
            /* harmony import */ var _instructor_dashboard_instructor_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./instructor-dashboard/instructor-dashboard.component */ "./src/app/instructor-dashboard/instructor-dashboard.component.ts");
            /* harmony import */ var _instructor_recipe_dashboard_instructor_recipe_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./instructor-recipe-dashboard/instructor-recipe-dashboard.component */ "./src/app/instructor-recipe-dashboard/instructor-recipe-dashboard.component.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _dialog_for_creating_class_dialog_for_creating_class_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dialog-for-creating-class/dialog-for-creating-class.component */ "./src/app/dialog-for-creating-class/dialog-for-creating-class.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _instructor_new_recipe_instructor_new_recipe_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./instructor-new-recipe/instructor-new-recipe.component */ "./src/app/instructor-new-recipe/instructor-new-recipe.component.ts");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _grocery_dialog_content_dialog_grocery_dialog_content_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./grocery-dialog-content-dialog/grocery-dialog-content-dialog.component */ "./src/app/grocery-dialog-content-dialog/grocery-dialog-content-dialog.component.ts");
            /* harmony import */ var _utensil_dialog_content_dialog_utensil_dialog_content_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./utensil-dialog-content-dialog/utensil-dialog-content-dialog.component */ "./src/app/utensil-dialog-content-dialog/utensil-dialog-content-dialog.component.ts");
            // @ts-ignore
            var approutes = [
                { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                { path: 'stuDash', component: _stu_dash_stu_dash_component__WEBPACK_IMPORTED_MODULE_5__["StuDashComponent"] },
                { path: 'instructor', component: _instructor_instructor_component__WEBPACK_IMPORTED_MODULE_6__["InstructorComponent"] },
                { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
                { path: 'grocery', component: _grocery_grocery_component__WEBPACK_IMPORTED_MODULE_9__["GroceryComponent"] },
                { path: 'studentDashboard', component: _student_dashbard_student_dashbard_component__WEBPACK_IMPORTED_MODULE_10__["StudentDashbardComponent"] },
                { path: 'newRecipe', component: _instructor_new_recipe_instructor_new_recipe_component__WEBPACK_IMPORTED_MODULE_28__["InstructorNewRecipeComponent"] },
                { path: 'modal', component: _grocery_store_modals_select_items_modal_component__WEBPACK_IMPORTED_MODULE_18__["SelectItemsModalComponent"] },
                { path: 'instructorDash', component: _instructor_dashboard_instructor_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["InstructorDashboardComponent"] },
                { path: 'instructorDashRecipe', component: _instructor_recipe_dashboard_instructor_recipe_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["InstructorRecipeDashboardComponent"] }
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                        _stu_dash_stu_dash_component__WEBPACK_IMPORTED_MODULE_5__["StuDashComponent"],
                        _instructor_instructor_component__WEBPACK_IMPORTED_MODULE_6__["InstructorComponent"],
                        _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                        _grocery_grocery_component__WEBPACK_IMPORTED_MODULE_9__["GroceryComponent"],
                        _student_dashbard_student_dashbard_component__WEBPACK_IMPORTED_MODULE_10__["StudentDashbardComponent"],
                        _grocery_store_modals_select_items_modal_component__WEBPACK_IMPORTED_MODULE_18__["SelectItemsModalComponent"],
                        _grocery_store_modals_select_items_modal_component__WEBPACK_IMPORTED_MODULE_18__["SelectItemsModalComponent"],
                        _instructor_dashboard_instructor_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["InstructorDashboardComponent"],
                        _instructor_recipe_dashboard_instructor_recipe_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["InstructorRecipeDashboardComponent"],
                        _dialog_for_creating_class_dialog_for_creating_class_component__WEBPACK_IMPORTED_MODULE_25__["DialogForCreatingClassComponent"],
                        _instructor_new_recipe_instructor_new_recipe_component__WEBPACK_IMPORTED_MODULE_28__["InstructorNewRecipeComponent"],
                        _grocery_dialog_content_dialog_grocery_dialog_content_dialog_component__WEBPACK_IMPORTED_MODULE_30__["GroceryDialogContentDialogComponent"],
                        _utensil_dialog_content_dialog_utensil_dialog_content_dialog_component__WEBPACK_IMPORTED_MODULE_31__["UtensilDialogContentDialogComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        // Here, our routes are registered in angular app. and RouterModule gives us this functionality.
                        _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(approutes),
                        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDropModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
                        ng_circle_progress__WEBPACK_IMPORTED_MODULE_16__["NgCircleProgressModule"].forRoot({
                            backgroundOpacity: 0.1,
                            backgroundPadding: -24,
                            radius: 33,
                            // @ts-ignore
                            unitsFontWeight: 200,
                            // @ts-ignore
                            titleFontSize: 11,
                            // @ts-ignore
                            titleFontWeight: 300,
                            imageHeight: 67,
                            imageWidth: 30,
                            animationDuration: 600
                        }),
                        _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"],
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                    entryComponents: [_dialog_for_creating_class_dialog_for_creating_class_component__WEBPACK_IMPORTED_MODULE_25__["DialogForCreatingClassComponent"], _grocery_dialog_content_dialog_grocery_dialog_content_dialog_component__WEBPACK_IMPORTED_MODULE_30__["GroceryDialogContentDialogComponent"], _utensil_dialog_content_dialog_utensil_dialog_content_dialog_component__WEBPACK_IMPORTED_MODULE_31__["UtensilDialogContentDialogComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/dialog-for-creating-class/dialog-for-creating-class.component.css": 
        /*!***********************************************************************************!*\
          !*** ./src/app/dialog-for-creating-class/dialog-for-creating-class.component.css ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy1mb3ItY3JlYXRpbmctY2xhc3MvZGlhbG9nLWZvci1jcmVhdGluZy1jbGFzcy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/dialog-for-creating-class/dialog-for-creating-class.component.ts": 
        /*!**********************************************************************************!*\
          !*** ./src/app/dialog-for-creating-class/dialog-for-creating-class.component.ts ***!
          \**********************************************************************************/
        /*! exports provided: DialogForCreatingClassComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogForCreatingClassComponent", function () { return DialogForCreatingClassComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
            /* harmony import */ var _models_app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/app-models */ "./src/app/models/app-models.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DialogForCreatingClassComponent = /** @class */ (function () {
                function DialogForCreatingClassComponent(service, router) {
                    var _this = this;
                    this.service = service;
                    this.router = router;
                    this.teacherSubscription = this.service.$teacher.subscribe(function (teacher) {
                        _this.teacher = teacher;
                    });
                }
                DialogForCreatingClassComponent.prototype.ngOnInit = function () {
                };
                DialogForCreatingClassComponent.prototype.onNewClass = function (event) {
                    event.preventDefault();
                    var target = event.target;
                    var name = target.querySelector('#name').value;
                    var description = target.querySelector('#description').value;
                    var clase = new _models_app_models__WEBPACK_IMPORTED_MODULE_3__["Class"]();
                    clase.name = name;
                    clase.description = description;
                    console.log(this.teacher.classList);
                    this.teacher.classList.push(clase);
                    this.service.setTeacher(this.teacher);
                    this.service.addNewClass(clase).subscribe(function (data) {
                        console.log(data);
                    });
                    window.location.reload();
                };
                return DialogForCreatingClassComponent;
            }());
            DialogForCreatingClassComponent.ctorParameters = function () { return [
                { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DialogForCreatingClassComponent.prototype, "teacher", void 0);
            DialogForCreatingClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dialog-for-creating-class',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-for-creating-class.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-for-creating-class/dialog-for-creating-class.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-for-creating-class.component.css */ "./src/app/dialog-for-creating-class/dialog-for-creating-class.component.css")).default]
                })
            ], DialogForCreatingClassComponent);
            /***/ 
        }),
        /***/ "./src/app/grocery-dialog-content-dialog/grocery-dialog-content-dialog.component.css": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/grocery-dialog-content-dialog/grocery-dialog-content-dialog.component.css ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb2NlcnktZGlhbG9nLWNvbnRlbnQtZGlhbG9nL2dyb2NlcnktZGlhbG9nLWNvbnRlbnQtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/grocery-dialog-content-dialog/grocery-dialog-content-dialog.component.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/grocery-dialog-content-dialog/grocery-dialog-content-dialog.component.ts ***!
          \******************************************************************************************/
        /*! exports provided: GroceryDialogContentDialogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryDialogContentDialogComponent", function () { return GroceryDialogContentDialogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
            var GroceryDialogContentDialogComponent = /** @class */ (function () {
                function GroceryDialogContentDialogComponent(service) {
                    this.service = service;
                    this.ingredientsSelected = [];
                    this.allIngredients = [];
                }
                GroceryDialogContentDialogComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.ingredientSubscription = this.service.$ingredients.subscribe(function (ingredients) {
                        _this.allIngredients = ingredients;
                    });
                };
                GroceryDialogContentDialogComponent.prototype.selectedIngre = function (ingredient) {
                    this.ingredientsSelected.push(ingredient);
                    this.allIngredients = this.allIngredients.filter(function (value, index, arr) {
                        return value != ingredient;
                    });
                    this.service.setIngredients(this.ingredientsSelected);
                };
                return GroceryDialogContentDialogComponent;
            }());
            GroceryDialogContentDialogComponent.ctorParameters = function () { return [
                { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            GroceryDialogContentDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-grocery-dialog-content-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grocery-dialog-content-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/grocery-dialog-content-dialog/grocery-dialog-content-dialog.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grocery-dialog-content-dialog.component.css */ "./src/app/grocery-dialog-content-dialog/grocery-dialog-content-dialog.component.css")).default]
                })
            ], GroceryDialogContentDialogComponent);
            /***/ 
        }),
        /***/ "./src/app/grocery-store-modals/select-items-modal.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/grocery-store-modals/select-items-modal.component.ts ***!
          \**********************************************************************/
        /*! exports provided: SelectItemsModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectItemsModalComponent", function () { return SelectItemsModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            var SelectItemsModalComponent = /** @class */ (function () {
                function SelectItemsModalComponent(modalService) {
                    this.modalService = modalService;
                    this.itemsArr = [];
                }
                SelectItemsModalComponent.prototype.open = function (content) {
                    var _this = this;
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
                        _this.closeResult = "Closed with: " + result;
                    }, function (reason) {
                        _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
                    });
                };
                SelectItemsModalComponent.prototype.getDismissReason = function (reason) {
                    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
                        return 'by pressing ESC';
                    }
                    else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
                        return 'by clicking on a backdrop';
                    }
                    else {
                        return "with: " + reason;
                    }
                };
                SelectItemsModalComponent.prototype.addMango = function () {
                    this.itemsArr.push("Mango");
                };
                SelectItemsModalComponent.prototype.addMilk = function () {
                    this.itemsArr.push("Milk");
                };
                return SelectItemsModalComponent;
            }());
            SelectItemsModalComponent.ctorParameters = function () { return [
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
            ]; };
            SelectItemsModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'select-items',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-items-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/grocery-store-modals/select-items-modal.component.html")).default,
                })
            ], SelectItemsModalComponent);
            /***/ 
        }),
        /***/ "./src/app/grocery/grocery.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/grocery/grocery.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb2NlcnkvZ3JvY2VyeS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/grocery/grocery.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/grocery/grocery.component.ts ***!
          \**********************************************/
        /*! exports provided: GroceryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryComponent", function () { return GroceryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var GroceryComponent = /** @class */ (function () {
                function GroceryComponent() {
                    this.user = '';
                    this.case = '';
                }
                GroceryComponent.prototype.ngOnInit = function () {
                };
                GroceryComponent.prototype.setAsTeacher = function () {
                    this.user = 'teacher';
                };
                GroceryComponent.prototype.setAsStudent = function () {
                    this.user = 'student';
                };
                GroceryComponent.prototype.setAsGrocery = function () {
                    this.case = 'grocery';
                };
                GroceryComponent.prototype.showutensil = function () {
                    this.utensil = !this.utensil;
                };
                GroceryComponent.prototype.showGrocery = function () {
                    this.grocery = !this.grocery;
                };
                GroceryComponent.prototype.dropdownShowOrNot = function () {
                    this.isOpen = !this.isOpen;
                };
                return GroceryComponent;
            }());
            GroceryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-grocery',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grocery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/grocery/grocery.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grocery.component.css */ "./src/app/grocery/grocery.component.css")).default]
                })
            ], GroceryComponent);
            /***/ 
        }),
        /***/ "./src/app/instructor-dashboard/instructor-dashboard.component.css": 
        /*!*************************************************************************!*\
          !*** ./src/app/instructor-dashboard/instructor-dashboard.component.css ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RydWN0b3ItZGFzaGJvYXJkL2luc3RydWN0b3ItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/instructor-dashboard/instructor-dashboard.component.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/instructor-dashboard/instructor-dashboard.component.ts ***!
          \************************************************************************/
        /*! exports provided: InstructorDashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorDashboardComponent", function () { return InstructorDashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
            var InstructorDashboardComponent = /** @class */ (function () {
                function InstructorDashboardComponent(service) {
                    this.service = service;
                    this.teach = this.service.teacher;
                    console.dir(document);
                }
                InstructorDashboardComponent.prototype.ngOnInit = function () {
                };
                InstructorDashboardComponent.prototype.dropdownShowOrNot = function () {
                    this.isOpen = !this.isOpen;
                };
                return InstructorDashboardComponent;
            }());
            InstructorDashboardComponent.ctorParameters = function () { return [
                { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            InstructorDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-instructor-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./instructor-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/instructor-dashboard/instructor-dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./instructor-dashboard.component.css */ "./src/app/instructor-dashboard/instructor-dashboard.component.css")).default]
                })
            ], InstructorDashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/instructor-new-recipe/instructor-new-recipe.component.css": 
        /*!***************************************************************************!*\
          !*** ./src/app/instructor-new-recipe/instructor-new-recipe.component.css ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RydWN0b3ItbmV3LXJlY2lwZS9pbnN0cnVjdG9yLW5ldy1yZWNpcGUuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/instructor-new-recipe/instructor-new-recipe.component.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/instructor-new-recipe/instructor-new-recipe.component.ts ***!
          \**************************************************************************/
        /*! exports provided: InstructorNewRecipeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorNewRecipeComponent", function () { return InstructorNewRecipeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _grocery_dialog_content_dialog_grocery_dialog_content_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../grocery-dialog-content-dialog/grocery-dialog-content-dialog.component */ "./src/app/grocery-dialog-content-dialog/grocery-dialog-content-dialog.component.ts");
            /* harmony import */ var _utensil_dialog_content_dialog_utensil_dialog_content_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utensil-dialog-content-dialog/utensil-dialog-content-dialog.component */ "./src/app/utensil-dialog-content-dialog/utensil-dialog-content-dialog.component.ts");
            /* harmony import */ var _models_app_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/app-models */ "./src/app/models/app-models.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var InstructorNewRecipeComponent = /** @class */ (function () {
                function InstructorNewRecipeComponent(service, dialog, router) {
                    var _this = this;
                    this.service = service;
                    this.dialog = dialog;
                    this.router = router;
                    this.teacherSubscription = this.service.$teacher.subscribe(function (teacher) {
                        _this.teacher = teacher;
                    });
                    if (this.teacher == null && window.localStorage.getItem('user') != null) {
                        console.log("in Teacher local storage");
                        this.teacher = JSON.parse(window.localStorage.getItem('user'));
                    }
                    // if(this.selectedRecipe ==  null && window.sessionStorage.getItem('selectedRecipe') != null){
                    //   this.selectedRecipe = JSON.parse(window.sessionStorage.getItem('selectedRecipe'));
                    // }
                }
                InstructorNewRecipeComponent.prototype.ngOnInit = function () {
                    this.stepNum = 0;
                };
                InstructorNewRecipeComponent.prototype.dropdownShowOrNot = function () {
                    this.isOpen = !this.isOpen;
                };
                InstructorNewRecipeComponent.prototype.addStep = function () {
                    // tslint:disable-next-line:max-line-length
                    this.stepNum += 1;
                    var step = document.createElement('input');
                    step.id = "step" + this.stepNum;
                    step.className = "bg-blue-100 w-6/2 m-2 p-3 rounded text-lg border-4  hover:border-blue-500 text-black";
                    step.placeholder = "Describe Step";
                    step.type = "text";
                    var steps = document.getElementById('steps');
                    steps.appendChild(step);
                };
                InstructorNewRecipeComponent.prototype.openGroceryDialog = function () {
                    this.service.getIngredients();
                    var dialogRef = this.dialog.open(_grocery_dialog_content_dialog_grocery_dialog_content_dialog_component__WEBPACK_IMPORTED_MODULE_4__["GroceryDialogContentDialogComponent"], {
                        width: '500px',
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log('The dialog was closed');
                    });
                };
                InstructorNewRecipeComponent.prototype.openUtensilsDialog = function () {
                    this.service.getUtensils();
                    var dialogRef = this.dialog.open(_utensil_dialog_content_dialog_utensil_dialog_content_dialog_component__WEBPACK_IMPORTED_MODULE_5__["UtensilDialogContentDialogComponent"], { width: '500px', });
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log("Dialog result: " + result);
                    });
                };
                InstructorNewRecipeComponent.prototype.createNewRecipe = function (event) {
                    console.log("In Create New Recipe Method()");
                    // if (!this.selectedRecipe) {
                    event.preventDefault();
                    this.service.getUtensils();
                    var target = event.target;
                    var recipe = new _models_app_models__WEBPACK_IMPORTED_MODULE_6__["Recipe"]();
                    recipe.name = target.querySelector('#name').value;
                    recipe.description = target.querySelector('#description').value;
                    recipe.ingredients = this.service.getSelectedIngredients();
                    recipe.utensils = this.service.getSelectedUtensils();
                    recipe.steps = [];
                    for (var i = 0; i <= this.stepNum; i++) {
                        recipe.steps.push(target.querySelector('#step' + i).value);
                    }
                    var clase = this.service.getClass();
                    for (var i = 0; i < this.teacher.classList.length; i++) {
                        if (this.teacher.classList[i].name == clase.name) {
                            if (this.teacher.classList[i].recipes == null) {
                                var recipes = [];
                                recipes.push(recipe);
                                this.teacher.classList[i].recipes = recipes;
                            }
                            else {
                                this.teacher.classList[i].recipes.push(recipe);
                            }
                            this.service.setClass(this.teacher.classList[i]);
                        }
                    }
                    this.service.setTeacher(this.teacher);
                    this.service.addNewRecipe(recipe).subscribe(function (data) {
                        console.log(data);
                    });
                    //
                    // } else{
                    //
                    //   this.service.getUtensils();
                    //
                    //   const target = event.target;
                    //   let recipe: Recipe = this.selectedRecipe;
                    //
                    //   target.querySelector('#name').value.set(recipe.name);
                    //   target.querySelector('#description').value.set(recipe.description);
                    //   this.service.setIngredients(recipe.ingredients);
                    //   this.service.setUtensils(recipe.utensils);
                    //
                    //   recipe.steps = [];
                    //   for (let i = 0; i <= this.stepNum; i++) {
                    //     target.querySelector('#step' + i).value.set(recipe.steps.splice(0));
                    //   }
                    //   //
                    //   // let clase = this.service.getClass();
                    //   //
                    //   // for (let i = 0; i < this.teacher.classList.length; i++) {
                    //   //   if (this.teacher.classList[i].name == clase.name) {
                    //   //     if (this.teacher.classList[i].recipes == null) {
                    //   //       let recipes: Recipe[] = [];
                    //   //       recipes.push(recipe);
                    //   //       this.teacher.classList[i].recipes = recipes;
                    //   //     } else {
                    //   //       this.teacher.classList[i].recipes.push(recipe);
                    //   //     }
                    //   //     this.service.setClass(this.teacher.classList[i])
                    //   //   }
                    //   // }
                    //
                    //   this.service.setTeacher(this.teacher);
                    //   // this.service.addNewRecipe(recipe).subscribe((data: string) => {
                    //   //   console.log(data);
                    //   // });
                    //
                    //   console.log("recipe loaded", recipe);
                    //
                    // }
                    this.router.navigateByUrl('/instructorDashRecipe');
                };
                return InstructorNewRecipeComponent;
            }());
            InstructorNewRecipeComponent.ctorParameters = function () { return [
                { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], InstructorNewRecipeComponent.prototype, "teacher", void 0);
            InstructorNewRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-instructor-new-recipe',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./instructor-new-recipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/instructor-new-recipe/instructor-new-recipe.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./instructor-new-recipe.component.css */ "./src/app/instructor-new-recipe/instructor-new-recipe.component.css")).default]
                })
            ], InstructorNewRecipeComponent);
            /***/ 
        }),
        /***/ "./src/app/instructor-recipe-dashboard/instructor-recipe-dashboard.component.css": 
        /*!***************************************************************************************!*\
          !*** ./src/app/instructor-recipe-dashboard/instructor-recipe-dashboard.component.css ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RydWN0b3ItcmVjaXBlLWRhc2hib2FyZC9pbnN0cnVjdG9yLXJlY2lwZS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/instructor-recipe-dashboard/instructor-recipe-dashboard.component.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/app/instructor-recipe-dashboard/instructor-recipe-dashboard.component.ts ***!
          \**************************************************************************************/
        /*! exports provided: InstructorRecipeDashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorRecipeDashboardComponent", function () { return InstructorRecipeDashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var InstructorRecipeDashboardComponent = /** @class */ (function () {
                function InstructorRecipeDashboardComponent(service, router) {
                    var _this = this;
                    this.service = service;
                    this.router = router;
                    this.displayingRecipeList = [];
                    this.teacherSubscription = this.service.$teacher.subscribe(function (teacher) {
                        _this.teacher = teacher;
                    });
                    if (window.localStorage.getItem('user') != null) {
                        this.teacher = JSON.parse(window.localStorage.getItem('user'));
                    }
                    if (window.sessionStorage.getItem('selectedClass') != null) {
                        console.log('FROM SESSION STORAGE');
                        this.classs = JSON.parse(window.sessionStorage.getItem('selectedClass'));
                    }
                    // if (window.sessionStorage.getItem('selectedRecipe') != null) {
                    //   console.log("selectedRecipe not null: ", this.service.selectedRecipe);
                    //   this.selectedRecipe = JSON.parse(window.sessionStorage.getItem("selectedRecipe"));
                    // }
                    this.displayingRecipeList = Object.assign(this.displayingRecipeList, this.classs.recipes);
                }
                InstructorRecipeDashboardComponent.prototype.ngOnInit = function () {
                };
                InstructorRecipeDashboardComponent.prototype.searchBarRecipe = function (event) {
                    event.preventDefault();
                    var target = event.target;
                    console.log(target.querySelector('#searchBarRecipeText').value);
                    var searchText = target.querySelector('#searchBarRecipeText').value;
                    var n = this.classs.recipes.length;
                    if (searchText == "") {
                        this.displayingRecipeList = Object.assign(this.displayingRecipeList, this.classs.recipes);
                        // this.displayingClassList = this.teacher.classList.splice(0);
                    }
                    else {
                        while (this.displayingRecipeList.length > 0) {
                            this.displayingRecipeList.pop();
                        }
                        for (var i = 0; i < n; i++) {
                            var name = this.classs.recipes[i].name;
                            if (searchText == name) {
                                console.log("is present");
                                this.displayingRecipeList.push(this.classs.recipes[i]);
                            }
                        }
                    }
                };
                InstructorRecipeDashboardComponent.prototype.editRecipe = function (editRecipe) {
                    // this.service.setSelectedRecipe(editRecipe);
                    // this.router.navigateByUrl("/newRecipe");
                    // this.service.setSelectedRecipe(null);
                };
                InstructorRecipeDashboardComponent.prototype.deleteRecipe = function (deleteRecipe) {
                    var i = 0;
                    while (i < this.classs.recipes.length) {
                        var index;
                        if (deleteRecipe == this.classs.recipes[i]) {
                            index = this.classs.recipes.lastIndexOf(deleteRecipe);
                            break;
                        }
                        i++;
                    }
                    var r = this.classs.recipes.splice(i, 1);
                    this.displayingRecipeList.splice(i, 1);
                    console.log("Recipe Deleted: ", r);
                };
                InstructorRecipeDashboardComponent.prototype.dropdownShowOrNot = function () {
                    this.isOpen = !this.isOpen;
                };
                InstructorRecipeDashboardComponent.prototype.openDialog = function () {
                };
                return InstructorRecipeDashboardComponent;
            }());
            InstructorRecipeDashboardComponent.ctorParameters = function () { return [
                { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], InstructorRecipeDashboardComponent.prototype, "teacher", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], InstructorRecipeDashboardComponent.prototype, "classs", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], InstructorRecipeDashboardComponent.prototype, "displayingRecipeList", void 0);
            InstructorRecipeDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-instructor-recipe-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./instructor-recipe-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/instructor-recipe-dashboard/instructor-recipe-dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./instructor-recipe-dashboard.component.css */ "./src/app/instructor-recipe-dashboard/instructor-recipe-dashboard.component.css")).default]
                })
            ], InstructorRecipeDashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/instructor/instructor.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/instructor/instructor.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\nbody{\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n}\r\n\r\n.mainImage{\r\n  transform: translateX(-80px);\r\n}\r\n\r\n.button {\r\n  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);\r\n  padding: 15px 35px;\r\n  border-radius: 50px;\r\n  color: #fff;\r\n  box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);\r\n  letter-spacing: 1px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdHJ1Y3Rvci9pbnN0cnVjdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVOztBQUVaOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0Usa0VBQWtFO0VBQ2xFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdEQUFnRDtFQUNoRCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9pbnN0cnVjdG9yL2luc3RydWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5e1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG59XHJcblxyXG4ubWFpbkltYWdle1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODBweCk7XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgI2ZlOGEzOSAwJSwgI2ZkMzgzOCA3NCUpO1xyXG4gIHBhZGRpbmc6IDE1cHggMzVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxNHB4IDgwcHggcmdiYSgyNTIsIDU2LCA1NiwgMC40KTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/instructor/instructor.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/instructor/instructor.component.ts ***!
          \****************************************************/
        /*! exports provided: InstructorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorComponent", function () { return InstructorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _dialog_for_creating_class_dialog_for_creating_class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog-for-creating-class/dialog-for-creating-class.component */ "./src/app/dialog-for-creating-class/dialog-for-creating-class.component.ts");
            /* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var InstructorComponent = /** @class */ (function () {
                function InstructorComponent(dialog, service, router) {
                    var _this = this;
                    this.dialog = dialog;
                    this.service = service;
                    this.router = router;
                    this.displayingClassList = [];
                    this.selectedClass = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.teacherSubscription = this.service.$teacher.subscribe(function (teacher) {
                        console.log("Came to instructor component");
                        _this.teacher = teacher;
                        _this.displayingClassList = Object.assign(_this.displayingClassList, _this.teacher.classList); /*this.teacher.classList*/
                        ;
                    });
                    if (this.teacher == null && window.localStorage.getItem('user') != null) {
                        console.log("in Teacher local storage");
                        this.teacher = JSON.parse(window.localStorage.getItem('user'));
                    }
                }
                InstructorComponent.prototype.ngOnInit = function () {
                };
                InstructorComponent.prototype.openDialogue = function () {
                    var dialogRef = this.dialog.open(_dialog_for_creating_class_dialog_for_creating_class_component__WEBPACK_IMPORTED_MODULE_3__["DialogForCreatingClassComponent"], {
                        width: '500px',
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log('The dialog was closed');
                    });
                };
                InstructorComponent.prototype.dropdownShowOrNot = function () {
                    this.isOpen = !this.isOpen;
                };
                //   openDialogueForNewEntry() {
                //   // this.dialog.open(InstructorComponent);
                //
                // }
                InstructorComponent.prototype.funcClassList = function (class1) {
                    if (class1 != null) {
                        console.log(class1);
                        // List<Class> k =;
                        return;
                    }
                    else {
                        console.log("All the classes of this teacher are loaded.");
                        return this.teacher.classList;
                    }
                };
                InstructorComponent.prototype.goToClass = function (clas) {
                    console.log(clas);
                    this.service.setClass(clas);
                    this.router.navigateByUrl("/instructorDashRecipe");
                };
                InstructorComponent.prototype.searchBar = function (event) {
                    event.preventDefault();
                    var target = event.target;
                    console.log(target.querySelector('#searchBarText').value);
                    var searchText = target.querySelector('#searchBarText').value;
                    var n = this.teacher.classList.length;
                    if (searchText == "") {
                        this.displayingClassList = Object.assign(this.displayingClassList, this.teacher.classList);
                        // this.displayingClassList = this.teacher.classList.splice(0);
                    }
                    else {
                        while (this.displayingClassList.length > 0) {
                            this.displayingClassList.pop();
                        }
                        for (var i = 0; i < n; i++) {
                            var name = this.teacher.classList[i].name;
                            if (searchText == name) {
                                console.log("is present");
                                this.displayingClassList.push(this.teacher.classList[i]);
                            }
                        }
                    }
                    // var input, filter, ul, li, a, i, txtValue;
                    // filter = input.value.toUpperCase();
                    // ul = document.getElementById("myUL");
                    // li = ul.getElementsByTagName("li");
                    // for (i = 0; i < this.teacher.classList.length; i++) {
                    //
                    //   // a = li[i].getElementsByTagName("a")[0];
                    //   // txtValue = a.textContent || a.innerText;
                    //
                    //   if (searchText.toUpperCase().indexOf(filter) > -1) {
                    //     li[i].style.display = "";
                    //   } else {
                    //     li[i].style.display = "none";
                    //   }
                    // }
                };
                InstructorComponent.prototype.deleteClass = function (deleteClass) {
                    var i = 0;
                    while (i < this.teacher.classList.length) {
                        var index;
                        if (deleteClass == this.teacher.classList[i]) {
                            index = this.teacher.classList.lastIndexOf(deleteClass);
                            break;
                        }
                        i++;
                    }
                    var r = this.teacher.classList.splice(i, 1);
                    this.displayingClassList.splice(i, 1);
                    console.log("Class Deleted: ", r);
                };
                InstructorComponent.prototype.getSelectedClass = function () {
                    return this.selectedClass;
                };
                return InstructorComponent;
            }());
            InstructorComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], InstructorComponent.prototype, "teacher", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], InstructorComponent.prototype, "displayingClassList", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], InstructorComponent.prototype, "selectedClass", void 0);
            InstructorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-instructor',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./instructor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/instructor/instructor.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./instructor.component.css */ "./src/app/instructor/instructor.component.css")).default]
                })
            ], InstructorComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n.input {\r\n  transition: border 0.2s ease-in-out;\r\n  min-width: 280px\r\n}\r\n\r\n.input:focus+.label,\r\n.input:active+.label,\r\n.input.filled+.label {\r\n  font-size: .75rem;\r\n  transition: all 0.2s ease-out;\r\n  top: -0.1rem;\r\n  color: #1a202c;\r\n}\r\n\r\n.label {\r\n  transition: all 0.2s ease-out;\r\n  top: 0.4rem;\r\n  left: 0;\r\n}\r\n\r\nbutton {\r\n  transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);\r\n  display: block;\r\n  margin: 24px auto;\r\n  max-width: 240px;\r\n  text-decoration: none;\r\n  border-radius: 4px;\r\n  padding: 20px 30px;\r\n  color: rgba(118, 81, 66, 1);\r\n  background: blanchedalmond;\r\n  box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 2px inset;\r\n}\r\n\r\nbutton:hover {\r\n  color: rgba(255, 255, 255, 0.85);\r\n  box-shadow: rgba(30, 22, 54, 0.7) 0 0px 0px 40px inset;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkM7QUFDRjs7QUFFQTs7O0VBR0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsT0FBTztBQUNUOztBQUVBO0VBQ0UsOERBQThEO0VBQzlELGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIscURBQXFEO0FBQ3ZEOztBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHNEQUFzRDtFQUN0RCxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pbnB1dCB7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgbWluLXdpZHRoOiAyODBweFxyXG59XHJcblxyXG4uaW5wdXQ6Zm9jdXMrLmxhYmVsLFxyXG4uaW5wdXQ6YWN0aXZlKy5sYWJlbCxcclxuLmlucHV0LmZpbGxlZCsubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xyXG4gIHRvcDogLTAuMXJlbTtcclxuICBjb2xvcjogIzFhMjAyYztcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuICB0b3A6IDAuNHJlbTtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC4zOTAsIDAuNTAwLCAwLjE1MCwgMS4zNjApO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMjRweCBhdXRvO1xyXG4gIG1heC13aWR0aDogMjQwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgY29sb3I6IHJnYmEoMTE4LCA4MSwgNjYsIDEpO1xyXG4gIGJhY2tncm91bmQ6IGJsYW5jaGVkYWxtb25kO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMzAsIDIyLCA1NCwgMC40KSAwIDBweCAwcHggMnB4IGluc2V0O1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgzMCwgMjIsIDU0LCAwLjcpIDAgMHB4IDBweCA0MHB4IGluc2V0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(router, service) {
                    this.router = router;
                    this.service = service;
                    this.user = '';
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.setAsTeacher = function () {
                    this.user = 'teacher';
                };
                LoginComponent.prototype.setAsStudent = function () {
                    this.user = 'student';
                };
                LoginComponent.prototype.teacherLogin = function (event) {
                    var _this = this;
                    event.preventDefault();
                    var target = event.target;
                    var email = target.querySelector('#email').value;
                    var password = target.querySelector('#password').value;
                    var Data = false;
                    this.service.teacherLogin(email, password).subscribe(function (data) {
                        if (data.name != null) {
                            Data = true;
                            _this.teacher = data;
                            console.log(_this.teacher);
                            window.localStorage.setItem('user', JSON.stringify(_this.teacher));
                        }
                        if (Data == false) {
                            confirm("Email and Password combination is wrong. Try Again.");
                        }
                        else
                            _this.router.navigateByUrl("/instructor");
                    });
                };
                LoginComponent.prototype.studentLogin = function (event) {
                    var _this = this;
                    event.preventDefault();
                    var target = event.target;
                    var email = target.querySelector('#stemail').value;
                    var password = target.querySelector('#stpassword').value;
                    var Data = false;
                    this.service.studentLogin(email, password).subscribe(function (data) {
                        console.log(data);
                        if (data.name != null) {
                            Data = true;
                        }
                        if (Data == false) {
                            confirm("Email and Password combination is wrong. Try Again.");
                        }
                        else {
                            _this.router.navigateByUrl("/stuDash");
                        }
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    providers: [
                        _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
                    ]
                }),
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/models/app-models.ts": 
        /*!**************************************!*\
          !*** ./src/app/models/app-models.ts ***!
          \**************************************/
        /*! exports provided: Teacher, Student, Class, Recipe, Utensil, Ingredient */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teacher", function () { return Teacher; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function () { return Student; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Class", function () { return Class; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function () { return Recipe; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utensil", function () { return Utensil; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function () { return Ingredient; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Teacher = /** @class */ (function () {
                function Teacher() {
                }
                return Teacher;
            }());
            var Student = /** @class */ (function () {
                function Student() {
                }
                return Student;
            }());
            var Class = /** @class */ (function () {
                function Class() {
                }
                return Class;
            }());
            var Recipe = /** @class */ (function () {
                function Recipe() {
                }
                return Recipe;
            }());
            var Utensil = /** @class */ (function () {
                function Utensil() {
                }
                return Utensil;
            }());
            var Ingredient = /** @class */ (function () {
                function Ingredient() {
                }
                return Ingredient;
            }());
            /***/ 
        }),
        /***/ "./src/app/service/api.service.ts": 
        /*!****************************************!*\
          !*** ./src/app/service/api.service.ts ***!
          \****************************************/
        /*! exports provided: ApiService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function () { return ApiService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
            /* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _models_app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/app-models */ "./src/app/models/app-models.ts");
            var ApiService = /** @class */ (function () {
                function ApiService(http) {
                    this.http = http;
                    this.teacher = null;
                    this.$teacher = new rxjs_index__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this.$ingredients = new rxjs_index__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this.$utensils = new rxjs_index__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this.selectedRecipe = null;
                    this.teacherURL = 'https://chefitup-backend.herokuapp.com/rest/Teacher/';
                    this.studentURL = 'https://chefitup-backend.herokuapp.com/rest/Student/';
                    this.ingredientURL = 'https://chefitup-backend.herokuapp.com/rest/Ingredient/';
                    this.utensilURL = 'https://chefitup-backend.herokuapp.com/rest/Utensil/';
                    this.recipeURL = 'https://chefitup-backend.herokuapp.com/rest/Recipe/';
                }
                ApiService.prototype.teacherLogin = function (email, password) {
                    // @ts-ignore
                    return this.teacher = this.$teacher = this.http.get(this.teacherURL + "login?username=" + email + "&password=" + password);
                };
                ApiService.prototype.setTeacher = function (teacher) {
                    this.postTeacher(teacher).subscribe(function (data) {
                        console.log(data);
                    });
                    window.localStorage.setItem('user', JSON.stringify(teacher));
                    // @ts-ignore
                    return this.teacher = this.$teacher = this.http.get(this.teacherURL + "login?username=" + teacher.username + "&password=" + teacher.password);
                };
                ApiService.prototype.postTeacher = function (teacher) {
                    return this.http.post(this.teacherURL + "updateTeacher", JSON.stringify(teacher));
                };
                ApiService.prototype.teacherSignUp = function (fullname, email, password) {
                    return this.http.post(this.teacherURL + "signUp?fullname=" + fullname + "&email=" + email + "&password=" + password, { responseType: _models_app_models__WEBPACK_IMPORTED_MODULE_4__["Teacher"] });
                };
                ApiService.prototype.studentLogin = function (email, password) {
                    return this.http.get(this.studentURL + "login?username=" + email + "&password=" + password);
                };
                ApiService.prototype.studentSignUp = function (fullname, email, password) {
                    return this.http.post(this.studentURL + "signUp?fullname=" + fullname + "&email=" + email + "&password=" + password, { responseType: _models_app_models__WEBPACK_IMPORTED_MODULE_4__["Student"] });
                };
                ApiService.prototype.addNewClass = function (clase) {
                    return this.http.post(this.teacherURL + "addNewClass", JSON.stringify(clase));
                };
                ApiService.prototype.getUtensils = function () {
                    // @ts-ignore
                    this.$utensils = this.http.get(this.utensilURL + "utensils");
                };
                ApiService.prototype.getIngredients = function () {
                    // @ts-ignore
                    this.$ingredients = this.http.get(this.ingredientURL + "ingredients");
                };
                ApiService.prototype.setClass = function (clas) {
                    console.log("In API service.ts");
                    window.sessionStorage.setItem('selectedClass', JSON.stringify(clas));
                    this.selectedClass = clas;
                };
                ApiService.prototype.getClass = function () {
                    return this.selectedClass;
                };
                ApiService.prototype.setUtensils = function (utensils) {
                    window.sessionStorage.setItem('selectedUtensils', JSON.stringify(utensils));
                    this.selectedUtensils = utensils;
                };
                ApiService.prototype.getSelectedUtensils = function () {
                    return this.selectedUtensils;
                };
                ApiService.prototype.setIngredients = function (ingredients) {
                    window.localStorage.setItem('selectedIngredients', JSON.stringify(ingredients));
                    this.selectedIngredients = ingredients;
                };
                ApiService.prototype.getSelectedIngredients = function () {
                    return this.selectedIngredients;
                };
                ApiService.prototype.addNewRecipe = function (recipe) {
                    console.log(recipe);
                    return this.http.post(this.recipeURL + "addNewRecipe", JSON.stringify(recipe));
                };
                return ApiService;
            }());
            ApiService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root',
                })
            ], ApiService);
            /***/ 
        }),
        /***/ "./src/app/signup/signup.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/signup/signup.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("body {\r\n  background: linear-gradient(120grad, rgb(100, 57, 134), rgb(152, 174, 213));\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQTJFO0FBQzdFIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMGdyYWQsIHJnYigxMDAsIDU3LCAxMzQpLCByZ2IoMTUyLCAxNzQsIDIxMykpO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/signup/signup.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/signup/signup.component.ts ***!
          \********************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SignupComponent = /** @class */ (function () {
                function SignupComponent() {
                }
                SignupComponent.prototype.ngOnInit = function () {
                };
                return SignupComponent;
            }());
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
                })
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/stu-dash/stu-dash.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/stu-dash/stu-dash.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dS1kYXNoL3N0dS1kYXNoLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/stu-dash/stu-dash.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/stu-dash/stu-dash.component.ts ***!
          \************************************************/
        /*! exports provided: StuDashComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StuDashComponent", function () { return StuDashComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var StuDashComponent = /** @class */ (function () {
                function StuDashComponent() {
                }
                StuDashComponent.prototype.ngOnInit = function () {
                };
                StuDashComponent.prototype.dropdownShowOrNot = function () {
                    this.isOpen = !this.isOpen;
                };
                return StuDashComponent;
            }());
            StuDashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-stu-dash',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stu-dash.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stu-dash/stu-dash.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stu-dash.component.css */ "./src/app/stu-dash/stu-dash.component.css")).default]
                })
            ], StuDashComponent);
            /***/ 
        }),
        /***/ "./src/app/student-dashbard/student-dashbard.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/student-dashbard/student-dashbard.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("body,matexppanel{\r\n  margin:0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n.mainarea{\r\n  height: 65vh;\r\n}\r\n.bottomarea{\r\n  height:25vh;\r\n}\r\n.grocer_ul_li\r\n{\r\n  padding: 15px 18px;\r\n  background: white;\r\n  border-bottom: solid 1px #dddddd;\r\n  border-radius: 4px;\r\n  margin-bottom: 10px;\r\n  box-shadow: 0 5px 5px -3px black;\r\n\r\n}\r\n.cdk-drop-dragging .cdk-drag {\r\n  transition: transform 500ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n.cdk-drag-animating {\r\n  transition: transform 550ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n.cdk-drag-placeholder {\r\n  background: rgba(0, 0, 0, .2);\r\n}\r\nbody{\r\n  background: #f2f2f2;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n.search {\r\n  width: 100%;\r\n  position: relative;\r\n  display: flex;\r\n}\r\n.searchTerm {\r\n  width: 100%;\r\n  border: 3px solid #00B4CC;\r\n  border-right: none;\r\n  padding: 5px;\r\n  height: 20px;\r\n  border-radius: 5px 0 0 5px;\r\n  outline: none;\r\n  color: #9DBFAF;\r\n}\r\n.searchTerm:focus{\r\n  color: #00B4CC;\r\n}\r\n.searchButton {\r\n  width: 40px;\r\n  height: 36px;\r\n  border: 1px solid #00B4CC;\r\n  background: #00B4CC;\r\n  text-align: center;\r\n  color: #fff;\r\n  border-radius: 0 5px 5px 0;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n}\r\n/*Resize the wrap to see the search bar change!*/\r\n.wrap{\r\n  width: 30%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1kYXNoYmFyZC9zdHVkZW50LWRhc2hiYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdDQUFnQzs7QUFFbEM7QUFDQTtFQUNFLHNEQUFzRDtBQUN4RDtBQUNBO0VBQ0Usc0RBQXNEO0FBQ3hEO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUEsZ0RBQWdEO0FBQ2hEO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQyIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtZGFzaGJhcmQvc3R1ZGVudC1kYXNoYmFyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSxtYXRleHBwYW5lbHtcclxuICBtYXJnaW46MDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLm1haW5hcmVhe1xyXG4gIGhlaWdodDogNjV2aDtcclxufVxyXG4uYm90dG9tYXJlYXtcclxuICBoZWlnaHQ6MjV2aDtcclxufVxyXG4uZ3JvY2VyX3VsX2xpXHJcbntcclxuICBwYWRkaW5nOiAxNXB4IDE4cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZGRkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggYmxhY2s7XHJcblxyXG59XHJcbi5jZGstZHJvcC1kcmFnZ2luZyAuY2RrLWRyYWcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4yKTtcclxufVxyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zKTtcclxuXHJcbmJvZHl7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc2VhcmNoVGVybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwQjRDQztcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiAjOURCRkFGO1xyXG59XHJcblxyXG4uc2VhcmNoVGVybTpmb2N1c3tcclxuICBjb2xvcjogIzAwQjRDQztcclxufVxyXG5cclxuLnNlYXJjaEJ1dHRvbiB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEI0Q0M7XHJcbiAgYmFja2dyb3VuZDogIzAwQjRDQztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLypSZXNpemUgdGhlIHdyYXAgdG8gc2VlIHRoZSBzZWFyY2ggYmFyIGNoYW5nZSEqL1xyXG4ud3JhcHtcclxuICB3aWR0aDogMzAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/student-dashbard/student-dashbard.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/student-dashbard/student-dashbard.component.ts ***!
          \****************************************************************/
        /*! exports provided: StudentDashbardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDashbardComponent", function () { return StudentDashbardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
            var StudentDashbardComponent = /** @class */ (function () {
                function StudentDashbardComponent() {
                    this.panelOpenState = false;
                    this.length = 10;
                    this.fruits = [
                        'Strawberry',
                        'Apple',
                        'Banana',
                        'Apricots',
                        'Mango',
                        'Orange',
                    ];
                    this.workspaceItems = ['red'];
                    this.utensils = [
                        'Tongs',
                        'Grater',
                        'Can Opener',
                        'Peeler',
                        'Bread Knife',
                        'Rolling Pin'
                    ];
                }
                StudentDashbardComponent.prototype.ngOnInit = function () {
                };
                StudentDashbardComponent.prototype.dropdownShowOrNot = function () {
                    this.isOpen = !this.isOpen;
                };
                StudentDashbardComponent.prototype.drop = function (event) {
                    if (event.previousContainer === event.container) {
                        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
                    }
                    else {
                        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                    }
                };
                return StudentDashbardComponent;
            }());
            StudentDashbardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-student-dashbard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-dashbard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student-dashbard/student-dashbard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-dashbard.component.css */ "./src/app/student-dashbard/student-dashbard.component.css")).default]
                })
            ], StudentDashbardComponent);
            /***/ 
        }),
        /***/ "./src/app/utensil-dialog-content-dialog/utensil-dialog-content-dialog.component.css": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/utensil-dialog-content-dialog/utensil-dialog-content-dialog.component.css ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0ZW5zaWwtZGlhbG9nLWNvbnRlbnQtZGlhbG9nL3V0ZW5zaWwtZGlhbG9nLWNvbnRlbnQtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/utensil-dialog-content-dialog/utensil-dialog-content-dialog.component.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/utensil-dialog-content-dialog/utensil-dialog-content-dialog.component.ts ***!
          \******************************************************************************************/
        /*! exports provided: UtensilDialogContentDialogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtensilDialogContentDialogComponent", function () { return UtensilDialogContentDialogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
            var UtensilDialogContentDialogComponent = /** @class */ (function () {
                function UtensilDialogContentDialogComponent(service) {
                    this.service = service;
                    this.utensilsSelected = [];
                    this.allUtensils = [];
                }
                UtensilDialogContentDialogComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.utensilSubscription = this.service.$utensils.subscribe(function (utensils) {
                        _this.allUtensils = utensils;
                    });
                };
                UtensilDialogContentDialogComponent.prototype.selectedUten = function (utensil) {
                    this.utensilsSelected.push(utensil);
                    this.allUtensils = this.allUtensils.filter(function (value, index, arr) {
                        return value != utensil;
                    });
                    this.service.setUtensils(this.utensilsSelected);
                };
                return UtensilDialogContentDialogComponent;
            }());
            UtensilDialogContentDialogComponent.ctorParameters = function () { return [
                { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            UtensilDialogContentDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-utensil-dialog-content-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./utensil-dialog-content-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utensil-dialog-content-dialog/utensil-dialog-content-dialog.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./utensil-dialog-content-dialog.component.css */ "./src/app/utensil-dialog-content-dialog/utensil-dialog-content-dialog.component.css")).default]
                })
            ], UtensilDialogContentDialogComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Kishore Thamilvanan\Desktop\kishes point\Stony Brook Academics\VI semester\CSE 308\FrontEnd\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map