/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Barriecito-Regular.ttf */ "./src/styles/Barriecito-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background-image-empty-list.png */ "./src/images/background-image-empty-list.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
--opaque-dark: #001927;
--transparent-dark: rgba(0, 0, 0, .75);
--opaque-grey: rgb(233, 228, 224);
--primary-light: #fff;
--logo-color: #00BBBB;
--primary-orange: #eab308;
--large-container-border-radius: 0.7rem;
--small-container-border-radius: 0.2rem;
}

@font-face {
    font-family: 'Barriecito';
    src:  url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
}

*,
*::before,
*::after{
    box-sizing: border-box;
}

body{
    margin: 0;
    background-color: var(--primary-light);
    color: var(--opaque-dark);
}

button, input{
    outline: none;
    border: none;
}

#overlay{
    position: absolute;
    display: none ;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--transparent-dark);
    z-index: 2
}


#overlay.active{
    display: block;
}

#app-wrapper{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

#top-bar{
    display: flex;
    align-items: center;
    background-color:var(--primary-light);;
    width: 100vw;
    height: 5vh;
    box-shadow: 0 3px 3px -1px #c3c6c6;
}

#top-bar-title{
    padding-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Barriecito', cursive;
    font-size: 1.8rem;
    color:  var(--opaque-dark);
    font-weight: bold;
}

p[data-end]::before {
    content: attr(data-end) ;
    color: var(--logo-color);
}

#top-bar-icon{
    margin-left: 20px;
    width: 2.3rem;
}

#top-bar-add-task-icon{
    margin-left: auto;
    margin-right: 20px;
    width: 2.2rem;
}

#content-wrapper{
    width: 100vw;
    height: 100vh;
    display: flex;
}

#sidebar{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: var(--primary-light);;
    width: 350px;
}

#left-menu{
    height: 25%;
    width: 90%;
    background-color: var(--primary-orange);
    border-radius: var(--large-container-border-radius);
}

#left-menu>ul{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 90%;
    width: 90%;
}

ul>li{
    display: flex;
    align-items: center;
    font-family: 'Barriecito', cursive;
    list-style: none;
    cursor: pointer;
    font-size: 1.2rem;
    padding-left: .5rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    margin: 0;
}

li > img {
  margin-right: 1rem;
  padding: 0;
  width: 40px;
  height: 35px;
}

#projects-container{
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 65%;
    width: 90%;
    background-color:  var(--opaque-dark);
    border-radius: var(--large-container-border-radius);
    font-family: 'Barriecito', cursive;
}

#projects-top-bar{
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    padding-top: 1rem;
    padding-left: 2.3rem;
    padding-bottom: 1rem;
}

#create-project-div{
    display: flex;
    align-items: center;
    padding-left: .5rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    color:var(--primary-orange);
}

#create-project-div.inactive,
.task-card.inactive{
    display: none;
}

.projects-content{
    align-self: center;
    width: 80%;
    height: 25px;
    margin-top: .5rem;
    border-radius: .5rem;
}

#add-project-wrapper{
    display: flex;
    flex-direction: column;
}

#new-project-popup{
    display: none;
}

 #new-project-popup.active{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
}

#project-name-input{
    font-family: inherit;
    border-radius: var(--small-container-border-radius);
}

#project-buttons-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
}

#project-buttons-wrapper>button{
    background-color:var(--primary-orange);
    color: var(--opaque-dark);
    font-family: inherit;
    font-size: .9rem;
    border-radius: var(--small-container-border-radius);
    width: 55px;
    height: 20px;
    margin-top: .4rem;
    margin-right: .4rem;
}

.project-card{
    display: flex;
    align-items: center;
}

div[data-project-delete]{
    margin-left: auto;
    padding-right: .5rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    color:  var(--opaque-dark);
}

div[data-project-delete]:hover{
    color: var(--primary-light);;
}

div[data-project-title]{
    padding-left: .5rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
}

.project-selected:hover {
    cursor: pointer;
    background-color: #3b3f42;
    border-radius: var(--small-container-border-radius);
}

#main-content{
    flex-grow: 4;
    height: 95%;
    align-self: center;
    margin-right: 20px;
    border-radius: 1.2rem;
    display: flex;
    flex-direction: column;
}

.empty-todo-list-background{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: 400px 400px;
    background-repeat: no-repeat;
    background-position: center;
}

.empty-todo-list-background.inactive{
    background-image: none;
}

#todo-list-container{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#project-name{
    font-family: 'Barriecito', cursive;
    color: var(--opaque-dark);
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 30px;
    width: 50%;
}

.task-card{
    width: 700px;
    border-bottom-color:  var(--opaque-dark);
    border-bottom-style: solid;
    border-bottom-width: thin;
    font-family: 'Barriecito', cursive;
    font-size: .9rem;
    display: flex;
    line-height: 1.3rem;
    margin-bottom: .5rem;
}

div[data-priority-color]{
    min-width: 10px;
}

#task-checkbox:hover,
button:hover,
button:focus{
    cursor: pointer;
}

#task-checkbox:checked{
   accent-color:  var(--opaque-dark);
}

div[data-details],
div[data-due-date]{
    font-size: .7rem;
    color:  var(--opaque-dark);
    opacity: .8;
}

.task-action-items{
    margin-left: auto;
    min-width: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.task-action-items>button{
    background-color: var(--primary-light);;
}

.task-action-items>button:hover{
    background-color: var(--opaque-grey);
    border-radius: var(--small-container-border-radius);
}

#form-container{
    position: absolute;
    display: none;
    min-width: 400px;
    width: 25%;
    min-height: 300px;
    height: 30%;
    top: 20%;
    left: 50%;
    background-color: var(--opaque-grey);
    border-radius: var(--large-container-border-radius);
    z-index: 3;
}

#form-container.active{
    display: flex;
    justify-content: center;
    align-items: center;
}

#task-form{
    min-width: 95%;
    min-height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
    outline: none;
    padding: 10px;
}

#task-form>* {
    border: none;
    border-radius: var(--small-container-border-radius);
    color: var(--opaque-dark);
    background-color: inherit;
    font-size: 1rem;
}

#task-form-name-desc-wrapper{
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 150px;
}

#task-form-name-desc-wrapper>*{
    color: var(--opaque-dark);
    background-color: inherit;
    border: none;
    outline:  none;
}

#task-name{
    font-size: 1.3rem;
    flex-grow: 1;
}

#task-description{
    flex-grow: 3;
    font-size: .9rem;
    resize: none;
}

#task-form-select-wrapper{
    display: flex;
    justify-content: space-evenly;
}

#task-form-select-wrapper > *{
    font-size: .9rem;
    color: var(--opaque-dark);
    background-color: inherit;
    border: none;
    justify-content: center;
    align-items: center;
}

#task-project{
    color: var(--opaque-dark);
}

#task-form-select-wrapper>*:hover,
#task-form-select-wrapper>*:focus{
    cursor: pointer;
    outline: none;
}

#task-buttons-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
  
}

#task-buttons-wrapper>*{
    background-color: var(--opaque-dark);
    width: 18%;
    height: 25px;
    font-size: .8rem;
    font-weight: bold;
    color: var(--primary-light);;
    margin-left: .5rem;
    border-radius: .3rem;
}

#task-buttons-wrapper>input:hover,
#task-buttons-wrapper>input:focus, 
#task-buttons-wrapper>button:hover{
    cursor: pointer;
    background-color: var(--primary-orange);
    color: var(--opaque-dark);
}

#form-btn-save[disabled]{
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events:none;
}

#add-task-button{
    position: fixed;
    bottom: 2rem;
    right: 3rem;
    background-color: var(--opaque-dark);
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

#add-task-button:hover{
    transform: scale(1.1);
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n--opaque-dark: #001927;\n--transparent-dark: rgba(0, 0, 0, .75);\n--opaque-grey: rgb(233, 228, 224);\n--primary-light: #fff;\n--logo-color: #00BBBB;\n--primary-orange: #eab308;\n--large-container-border-radius: 0.7rem;\n--small-container-border-radius: 0.2rem;\n}\n\n@font-face {\n    font-family: 'Barriecito';\n    src:  url('Barriecito-Regular.ttf') format('truetype');\n}\n\n*,\n*::before,\n*::after{\n    box-sizing: border-box;\n}\n\nbody{\n    margin: 0;\n    background-color: var(--primary-light);\n    color: var(--opaque-dark);\n}\n\nbutton, input{\n    outline: none;\n    border: none;\n}\n\n#overlay{\n    position: absolute;\n    display: none ;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--transparent-dark);\n    z-index: 2\n}\n\n\n#overlay.active{\n    display: block;\n}\n\n#app-wrapper{\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n}\n\n#top-bar{\n    display: flex;\n    align-items: center;\n    background-color:var(--primary-light);;\n    width: 100vw;\n    height: 5vh;\n    box-shadow: 0 3px 3px -1px #c3c6c6;\n}\n\n#top-bar-title{\n    padding-left: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Barriecito', cursive;\n    font-size: 1.8rem;\n    color:  var(--opaque-dark);\n    font-weight: bold;\n}\n\np[data-end]::before {\n    content: attr(data-end) ;\n    color: var(--logo-color);\n}\n\n#top-bar-icon{\n    margin-left: 20px;\n    width: 2.3rem;\n}\n\n#top-bar-add-task-icon{\n    margin-left: auto;\n    margin-right: 20px;\n    width: 2.2rem;\n}\n\n#content-wrapper{\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n}\n\n#sidebar{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    color: var(--primary-light);;\n    width: 350px;\n}\n\n#left-menu{\n    height: 25%;\n    width: 90%;\n    background-color: var(--primary-orange);\n    border-radius: var(--large-container-border-radius);\n}\n\n#left-menu>ul{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    height: 90%;\n    width: 90%;\n}\n\nul>li{\n    display: flex;\n    align-items: center;\n    font-family: 'Barriecito', cursive;\n    list-style: none;\n    cursor: pointer;\n    font-size: 1.2rem;\n    padding-left: .5rem;\n    padding-top: .5rem;\n    padding-bottom: .5rem;\n    margin: 0;\n}\n\nli > img {\n  margin-right: 1rem;\n  padding: 0;\n  width: 40px;\n  height: 35px;\n}\n\n#projects-container{\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    height: 65%;\n    width: 90%;\n    background-color:  var(--opaque-dark);\n    border-radius: var(--large-container-border-radius);\n    font-family: 'Barriecito', cursive;\n}\n\n#projects-top-bar{\n    display: flex;\n    align-items: center;\n    font-size: 1.2rem;\n    padding-top: 1rem;\n    padding-left: 2.3rem;\n    padding-bottom: 1rem;\n}\n\n#create-project-div{\n    display: flex;\n    align-items: center;\n    padding-left: .5rem;\n    padding-top: .5rem;\n    padding-bottom: .5rem;\n    color:var(--primary-orange);\n}\n\n#create-project-div.inactive,\n.task-card.inactive{\n    display: none;\n}\n\n.projects-content{\n    align-self: center;\n    width: 80%;\n    height: 25px;\n    margin-top: .5rem;\n    border-radius: .5rem;\n}\n\n#add-project-wrapper{\n    display: flex;\n    flex-direction: column;\n}\n\n#new-project-popup{\n    display: none;\n}\n\n #new-project-popup.active{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 3;\n}\n\n#project-name-input{\n    font-family: inherit;\n    border-radius: var(--small-container-border-radius);\n}\n\n#project-buttons-wrapper{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#project-buttons-wrapper>button{\n    background-color:var(--primary-orange);\n    color: var(--opaque-dark);\n    font-family: inherit;\n    font-size: .9rem;\n    border-radius: var(--small-container-border-radius);\n    width: 55px;\n    height: 20px;\n    margin-top: .4rem;\n    margin-right: .4rem;\n}\n\n.project-card{\n    display: flex;\n    align-items: center;\n}\n\ndiv[data-project-delete]{\n    margin-left: auto;\n    padding-right: .5rem;\n    padding-top: .5rem;\n    padding-bottom: .5rem;\n    color:  var(--opaque-dark);\n}\n\ndiv[data-project-delete]:hover{\n    color: var(--primary-light);;\n}\n\ndiv[data-project-title]{\n    padding-left: .5rem;\n    padding-top: .5rem;\n    padding-bottom: .5rem;\n}\n\n.project-selected:hover {\n    cursor: pointer;\n    background-color: #3b3f42;\n    border-radius: var(--small-container-border-radius);\n}\n\n#main-content{\n    flex-grow: 4;\n    height: 95%;\n    align-self: center;\n    margin-right: 20px;\n    border-radius: 1.2rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.empty-todo-list-background{\n    background-image: url(\"../images/background-image-empty-list.png\");\n    background-size: 400px 400px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n.empty-todo-list-background.inactive{\n    background-image: none;\n}\n\n#todo-list-container{\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#project-name{\n    font-family: 'Barriecito', cursive;\n    color: var(--opaque-dark);\n    font-size: 1.6rem;\n    font-weight: bold;\n    margin-bottom: 30px;\n    width: 50%;\n}\n\n.task-card{\n    width: 700px;\n    border-bottom-color:  var(--opaque-dark);\n    border-bottom-style: solid;\n    border-bottom-width: thin;\n    font-family: 'Barriecito', cursive;\n    font-size: .9rem;\n    display: flex;\n    line-height: 1.3rem;\n    margin-bottom: .5rem;\n}\n\ndiv[data-priority-color]{\n    min-width: 10px;\n}\n\n#task-checkbox:hover,\nbutton:hover,\nbutton:focus{\n    cursor: pointer;\n}\n\n#task-checkbox:checked{\n   accent-color:  var(--opaque-dark);\n}\n\ndiv[data-details],\ndiv[data-due-date]{\n    font-size: .7rem;\n    color:  var(--opaque-dark);\n    opacity: .8;\n}\n\n.task-action-items{\n    margin-left: auto;\n    min-width: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n}\n\n.task-action-items>button{\n    background-color: var(--primary-light);;\n}\n\n.task-action-items>button:hover{\n    background-color: var(--opaque-grey);\n    border-radius: var(--small-container-border-radius);\n}\n\n#form-container{\n    position: absolute;\n    display: none;\n    min-width: 400px;\n    width: 25%;\n    min-height: 300px;\n    height: 30%;\n    top: 20%;\n    left: 50%;\n    background-color: var(--opaque-grey);\n    border-radius: var(--large-container-border-radius);\n    z-index: 3;\n}\n\n#form-container.active{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#task-form{\n    min-width: 95%;\n    min-height: inherit;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: stretch;\n    outline: none;\n    padding: 10px;\n}\n\n#task-form>* {\n    border: none;\n    border-radius: var(--small-container-border-radius);\n    color: var(--opaque-dark);\n    background-color: inherit;\n    font-size: 1rem;\n}\n\n#task-form-name-desc-wrapper{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    min-height: 150px;\n}\n\n#task-form-name-desc-wrapper>*{\n    color: var(--opaque-dark);\n    background-color: inherit;\n    border: none;\n    outline:  none;\n}\n\n#task-name{\n    font-size: 1.3rem;\n    flex-grow: 1;\n}\n\n#task-description{\n    flex-grow: 3;\n    font-size: .9rem;\n    resize: none;\n}\n\n#task-form-select-wrapper{\n    display: flex;\n    justify-content: space-evenly;\n}\n\n#task-form-select-wrapper > *{\n    font-size: .9rem;\n    color: var(--opaque-dark);\n    background-color: inherit;\n    border: none;\n    justify-content: center;\n    align-items: center;\n}\n\n#task-project{\n    color: var(--opaque-dark);\n}\n\n#task-form-select-wrapper>*:hover,\n#task-form-select-wrapper>*:focus{\n    cursor: pointer;\n    outline: none;\n}\n\n#task-buttons-wrapper{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  \n}\n\n#task-buttons-wrapper>*{\n    background-color: var(--opaque-dark);\n    width: 18%;\n    height: 25px;\n    font-size: .8rem;\n    font-weight: bold;\n    color: var(--primary-light);;\n    margin-left: .5rem;\n    border-radius: .3rem;\n}\n\n#task-buttons-wrapper>input:hover,\n#task-buttons-wrapper>input:focus, \n#task-buttons-wrapper>button:hover{\n    cursor: pointer;\n    background-color: var(--primary-orange);\n    color: var(--opaque-dark);\n}\n\n#form-btn-save[disabled]{\n    opacity: 0.5;\n    cursor: not-allowed;\n    pointer-events:none;\n}\n\n#add-task-button{\n    position: fixed;\n    bottom: 2rem;\n    right: 3rem;\n    background-color: var(--opaque-dark);\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n#add-task-button:hover{\n    transform: scale(1.1);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
     ========================================================================== */

/**
   * Remove the margin in all browsers.
   */

body {
  margin: 0;
}

/**
   * Render the \`main\` element consistently in IE.
   */

main {
  display: block;
}

/**
   * Correct the font size and margin on \`h1\` elements within \`section\` and
   * \`article\` contexts in Chrome, Firefox, and Safari.
   */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
     ========================================================================== */

/**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
     ========================================================================== */

/**
   * Remove the gray background on active links in IE 10.
   */

a {
  background-color: transparent;
}

/**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

b,
strong {
  font-weight: bolder;
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
   * Add the correct font size in all browsers.
   */

small {
  font-size: 80%;
}

/**
   * Prevent \`sub\` and \`sup\` elements from affecting the line height in
   * all browsers.
   */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
     ========================================================================== */

/**
   * Remove the border on images inside links in IE 10.
   */

img {
  border-style: none;
}

/* Forms
     ========================================================================== */

/**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

button,
input {
  /* 1 */
  overflow: visible;
}

/**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

button,
select {
  /* 1 */
  text-transform: none;
}

/**
   * Correct the inability to style clickable types in iOS and Safari.
   */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
   * Remove the inner border and padding in Firefox.
   */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
   * Restore the focus styles unset by the previous rule.
   */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
   * Correct the padding in Firefox.
   */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from \`fieldset\` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    \`fieldset\` elements in all browsers.
   */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */

progress {
  vertical-align: baseline;
}

/**
   * Remove the default vertical scrollbar in IE 10+.
   */

textarea {
  overflow: auto;
}

/**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
   * Remove the inner padding in Chrome and Safari on macOS.
   */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to \`inherit\` in Safari.
   */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
     ========================================================================== */

/*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */

details {
  display: block;
}

/*
   * Add the correct display in all browsers.
   */

summary {
  display: list-item;
}

/* Misc
     ========================================================================== */

/**
   * Add the correct display in IE 10+.
   */

template {
  display: none;
}

/**
   * Add the correct display in IE 10.
   */

[hidden] {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,SAAS;AACX;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;IAGI;;AAEJ;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,6BAA6B;AAC/B;;AAEA;;;IAGI;;AAEJ;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;IAEI;;AAEJ;;EAEE,mBAAmB;AACrB;;AAEA;;;IAGI;;AAEJ;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,kBAAkB;AACpB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;IAGI;;AAEJ;;EAEE,MAAM;EACN,iBAAiB;AACnB;;AAEA;;;IAGI;;AAEJ;;EAEE,MAAM;EACN,oBAAoB;AACtB;;AAEA;;IAEI;;AAEJ;;;;EAIE,0BAA0B;AAC5B;;AAEA;;IAEI;;AAEJ;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;IAEI;;AAEJ;;;;EAIE,8BAA8B;AAChC;;AAEA;;IAEI;;AAEJ;EACE,8BAA8B;AAChC;;AAEA;;;;;IAKI;;AAEJ;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;IAEI;;AAEJ;EACE,wBAAwB;AAC1B;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;IAEI;;AAEJ;;EAEE,YAAY;AACd;;AAEA;;;IAGI;;AAEJ;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;IAEI;;AAEJ;EACE,wBAAwB;AAC1B;;AAEA;;;IAGI;;AAEJ;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;IAEI;;AAEJ;EACE,kBAAkB;AACpB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,aAAa;AACf;;AAEA;;IAEI;;AAEJ;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/normalize.css":
/*!**********************************!*\
  !*** ./src/styles/normalize.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/scripts/UI.js":
/*!***************************!*\
  !*** ./src/scripts/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/taskForm.js */ "./src/scripts/app/taskForm.js");
/* harmony import */ var _app_todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/todoList.js */ "./src/scripts/app/todoList.js");
/* harmony import */ var _app_today_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/today.js */ "./src/scripts/app/today.js");
/* harmony import */ var _app_projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/projects.js */ "./src/scripts/app/projects.js");
/* harmony import */ var _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/DOMselectors.js */ "./src/scripts/data/DOMselectors.js");
/* harmony import */ var _app_localStorage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/localStorage.js */ "./src/scripts/app/localStorage.js");
/* harmony import */ var _app_task_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/task.js */ "./src/scripts/app/task.js");








class UI {
  static handleTaskTitleInput() {
    const taskTitle = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.nameElement.value;
    if (taskTitle) {
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.taskSaveButton.disabled = false;
    } else {
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.taskSaveButton.disabled = true;
    }
  }

  static openNewTaskForm() {
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.formContainer.classList.toggle("active");
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.taskSaveButton.disabled = true;
    const titles = (0,_app_projects_js__WEBPACK_IMPORTED_MODULE_3__.getProjectTitles)();
    (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.updateProjectMenu)(titles);
    (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.resetForm)();
  }

  static closeTaskForm() {
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.formContainer.classList.toggle("active");
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
    (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.resetForm)();
  }

  static openNewProjectPopUp() {
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.createProject.classList.toggle("inactive");
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.newProjectPopup.classList.toggle("active");
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
  }

  static updateToDoList(event) {
    event.preventDefault();
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.formContainer.classList.toggle("active");
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
    const existingTaskId = event.target.dataset.taskId;
    const task = (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(existingTaskId);
    const taskNode = (0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.createTaskNode)(task);

    if (!existingTaskId) {
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.todoListContainer.appendChild(taskNode);
    }

    UI.updateMainContentView(_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText);
    const titles = (0,_app_projects_js__WEBPACK_IMPORTED_MODULE_3__.getProjectTitles)();
    (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.updateProjectMenu)(titles);
    (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.resetForm)();
    const todoLists = JSON.stringify((0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.getTodoLists)());
    (0,_app_localStorage_js__WEBPACK_IMPORTED_MODULE_5__.saveToLocalStorage)(todoLists);
  }

  static updateTask(event) {
    const element = event.target;
    if (element.matches("#todo-list-container")) return;

    if (element.matches("#task-checkbox")) {
      const task = element.closest("div[data-task-id]");
      const title = element
        .closest("div[data-task-id]")
        .querySelector("[data-title]");

      if (title.style.textDecoration === "line-through") {
        title.style.textDecoration = "";
        task.style.opacity = 1;
        return;
      }
      title.style.textDecoration = "line-through";
      task.style.opacity = 0.5;
      return;
    }

    if (element.closest("button").matches("[data-task-delete]")) {
      const taskToDelete = element.closest(".task-card");
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.todoListContainer.removeChild(taskToDelete);
      const todoLists = JSON.stringify((0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.getTodoLists)());
      (0,_app_localStorage_js__WEBPACK_IMPORTED_MODULE_5__.saveToLocalStorage)(todoLists);
      UI.updateMainContentView(_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText);
      return;
    }

    if (element.closest("button").matches("[data-task-edit]")) {
      const id = element.closest("div[data-task-id]").dataset.taskId;
      (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.autofill)(id);
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.formContainer.classList.toggle("active");
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
    }
  }

  static updateMainContentView(mainContentTitle) {
    if (mainContentTitle.toLowerCase() === "today") {
      (0,_app_today_js__WEBPACK_IMPORTED_MODULE_2__.displayTodayTasks)();
    } else {
      (0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.loadCurrentProjectTasks)(_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText);
    }
  }

  static handleNewProjectPopUpActions(event) {
    if (event.target.matches("#project-save")) {
      const newProjectTitle = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.newProjectInput.value.trim();
      if (!newProjectTitle) return;

      const reservedNames = (0,_app_projects_js__WEBPACK_IMPORTED_MODULE_3__.getProjectTitles)().map((title) =>
        title.toLowerCase()
      );
      reservedNames.push("inbox", "today");
      if (reservedNames.includes(newProjectTitle.toLowerCase())) {
        alert("Project already exists with this name!");
        return;
      }
      const project = (0,_app_projects_js__WEBPACK_IMPORTED_MODULE_3__.createProjectNode)(newProjectTitle);
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.projectContainer.appendChild(project);
    }

    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.newProjectInput.value = "";
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.createProject.classList.toggle("inactive");
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.newProjectPopup.classList.toggle("active");
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
    const todoLists = JSON.stringify((0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.getTodoLists)());
    (0,_app_localStorage_js__WEBPACK_IMPORTED_MODULE_5__.saveToLocalStorage)(todoLists);
  }

  static displayLeftMenuContent(event) {
    const element = event.target;
    if (element.matches("li#inbox")) {
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText = element.innerText;
    }

    if (element.matches("li#today")) {
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText = element.innerText;
    }

    UI.updateMainContentView(_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText);
  }

  static handleProjectContentActions(event) {
    const element = event.target;

    if (element.matches("#projects-container")) return;

    if (element.matches("[data-project-delete]")) {
      const projectContent = element.closest("div[data-project-id]");
      const projectTitle = projectContent.querySelector(
        "[data-project-title]"
      ).innerText;

      projectContent.remove();
      (0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.deleteProjectTasks)(projectTitle);

      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText = "Inbox";
      UI.updateMainContentView(_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText);
      const todoLists = JSON.stringify((0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.getTodoLists)());
      (0,_app_localStorage_js__WEBPACK_IMPORTED_MODULE_5__.saveToLocalStorage)(todoLists);
      return;
    }

    if (element.matches(".project-card")) {
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText = element.querySelector(
        "div[data-project-title]"
      ).innerText;
    }

    if (element.matches("[data-project-title]")) {
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText = element.innerText;
    }

    UI.updateMainContentView(_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText);
  }

  static loadAppFromLocalStorage() {
    const todoLists = JSON.parse((0,_app_localStorage_js__WEBPACK_IMPORTED_MODULE_5__.getFromLocalStorage)());
    const projectLists = Object.keys(todoLists);

    projectLists.forEach((project) => {
      if (project.toLowerCase() !== "inbox") {
        const projectNode = (0,_app_projects_js__WEBPACK_IMPORTED_MODULE_3__.createProjectNode)(project);
        _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.projectContainer.appendChild(projectNode);
      }

      const tasks = todoLists[project];

      tasks.forEach((task) => {
        const newTask = new _app_task_js__WEBPACK_IMPORTED_MODULE_6__["default"](
          task.id,
          task.title,
          task.details,
          task.dueDate,
          task.priority,
          task.project
        );
        const taskNode = (0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.createTaskNode)(newTask);
        if (task.project.toLowerCase() !== "inbox") {
          taskNode.classList.toggle("inactive");
        }
        _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.todoListContainer.appendChild(taskNode);
      });
    });

    UI.updateMainContentView(_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText);
  }
}


/***/ }),

/***/ "./src/scripts/app/localStorage.js":
/*!*****************************************!*\
  !*** ./src/scripts/app/localStorage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFromLocalStorage: () => (/* binding */ getFromLocalStorage),
/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)
/* harmony export */ });
function saveToLocalStorage(item) {
  localStorage.setItem("todoListApp", item);
}
function getFromLocalStorage() {
  return localStorage.getItem("todoListApp");
}


/***/ }),

/***/ "./src/scripts/app/projects.js":
/*!*************************************!*\
  !*** ./src/scripts/app/projects.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectNode: () => (/* binding */ createProjectNode),
/* harmony export */   getProjectTitles: () => (/* binding */ getProjectTitles)
/* harmony export */ });
/* harmony import */ var _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/DOMselectors.js */ "./src/scripts/data/DOMselectors.js");
/* harmony import */ var _utility_utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/utility.js */ "./src/scripts/utility/utility.js");



function createProjectNode(title) {
  const project = projectFactory(title);
  const projectElement = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.projectTemplate.content.cloneNode(true);
  const id = projectElement.querySelector("[data-project-id]");
  id.dataset.projectId = project.id;
  const projectTitle = projectElement.querySelector("[data-project-title]");
  projectTitle.innerText = project.title;
  return projectElement;
}

function getProjectTitles() {
  const projects = [
    ..._data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.projectContainer.querySelectorAll("div[data-project-title]"),
  ];
  return projects.map((element) => element.innerText);
}

const projectFactory = (title) => {
  return { id: (0,_utility_utility_js__WEBPACK_IMPORTED_MODULE_1__.generateID)(), title };
};


/***/ }),

/***/ "./src/scripts/app/task.js":
/*!*********************************!*\
  !*** ./src/scripts/app/task.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(id, name, description, dueDate, priority, project) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._project = project || "inbox";
  }

  get id() {
    return this._id;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set description(description) {
    this._description = description;
  }

  get description() {
    return this._description;
  }

  set dueDate(date) {
    this._dueDate = date;
  }

  get dueDate() {
    return this._dueDate;
  }

  set priority(priority) {
    this._priority = priority;
  }

  get priority() {
    return this._priority;
  }

  set project(project) {
    this._project = project;
  }

  get project() {
    return this._project;
  }
}


/***/ }),

/***/ "./src/scripts/app/taskForm.js":
/*!*************************************!*\
  !*** ./src/scripts/app/taskForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autofill: () => (/* binding */ autofill),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   resetForm: () => (/* binding */ resetForm),
/* harmony export */   updateProjectMenu: () => (/* binding */ updateProjectMenu)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/scripts/app/task.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/scripts/app/projects.js");
/* harmony import */ var _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/DOMselectors.js */ "./src/scripts/data/DOMselectors.js");
/* harmony import */ var _data_priority_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/priority.js */ "./src/scripts/data/priority.js");
/* harmony import */ var _utility_utility_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/utility.js */ "./src/scripts/utility/utility.js");






function createTask(id) {
  const name = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.nameElement.value.trim();
  const description = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.descriptionElement.value.trim();
  const date = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.dateElement.value.trim();
  const priority = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.priorityElement.value.trim() || "low";
  const project = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.projectElement.value.trim();
  const taskId = id ?? (0,_utility_utility_js__WEBPACK_IMPORTED_MODULE_4__.generateID)();
  const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](taskId, name, description, date, priority, project);
  return newTask;
}

function resetForm() {
  if (_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.taskForm.dataset.taskId) {
    delete _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.taskForm.dataset.taskId;
  }
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.nameElement.value = "";
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.descriptionElement.value = "";
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.dateElement.value = "";
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.priorityElement.value = "";
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.projectElement.value = "";
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.taskSaveButton.disabled = true;
}

function autofill(taskId) {
  const task = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.todoListContainer.querySelector(
    `[data-task-id='${taskId}']`
  );
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.taskForm.dataset.taskId = taskId;
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.nameElement.value = task
    .querySelector("[data-title]")
    .innerText.trim();
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.descriptionElement.value = task
    .querySelector("[data-details]")
    .innerText.trim();

  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.dateElement.value = task
    .querySelector("[data-due-date]")
    .innerText.trim();
  const priorityColor = task.querySelector("[data-priority-color]").style
    .backgroundColor;
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.priorityElement.value = _data_priority_js__WEBPACK_IMPORTED_MODULE_3__.COLOR_PRIORITY_MAP.get(priorityColor);
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.projectElement.value = task.dataset.project;
  const titles = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.getProjectTitles)();
  updateProjectMenu(titles);
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.taskSaveButton.disabled = false;
}

function updateProjectMenu(titles) {
  const reservedOptions = ["Inbox", "Project"];
  const optionsToDel = [
    ..._data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.projectElement.querySelectorAll("option"),
  ].filter((element) => {
    return !reservedOptions.includes(element.innerText);
  });

  optionsToDel.forEach((option) => option.remove());

  titles.forEach((title) => {
    let option = document.createElement("option");
    option.text = title;
    option.value = title;
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.projectElement.add(option);
  });
}


/***/ }),

/***/ "./src/scripts/app/today.js":
/*!**********************************!*\
  !*** ./src/scripts/app/today.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayTodayTasks: () => (/* binding */ displayTodayTasks)
/* harmony export */ });
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/DOMselectors.js */ "./src/scripts/data/DOMselectors.js");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ "./src/scripts/app/todoList.js");




function displayTodayTasks() {
  const tasks = [..._data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.todoListContainer.querySelectorAll(".task-card")];

  tasks.forEach((task) => {
    const dueDate = task.querySelector("[data-due-date]").innerText;
    const classes = [...task.classList];

    if (dueDate) {
      const [year, month, day] = dueDate.split("-");

      // month is 0 based
      const date = new Date(year, parseInt(month) - 1, day);
      let today = (0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_2__["default"])(date);

      if (today) {
        if (classes.includes("inactive")) {
          task.classList.remove("inactive");
        }
      } else {
        if (!classes.includes("inactive")) {
          task.classList.toggle("inactive");
        }
      }
    } else {
      if (!classes.includes("inactive")) {
        task.classList.toggle("inactive");
      }
    }
  });

  const tasksToday = [
    ..._data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.todoListContainer.querySelectorAll("div.task-card:not(.inactive)"),
  ];

  (0,_todoList_js__WEBPACK_IMPORTED_MODULE_1__.handleTodoListBackground)(tasksToday);
}


/***/ }),

/***/ "./src/scripts/app/todoList.js":
/*!*************************************!*\
  !*** ./src/scripts/app/todoList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskNode: () => (/* binding */ createTaskNode),
/* harmony export */   deleteProjectTasks: () => (/* binding */ deleteProjectTasks),
/* harmony export */   getTodoLists: () => (/* binding */ getTodoLists),
/* harmony export */   handleTodoListBackground: () => (/* binding */ handleTodoListBackground),
/* harmony export */   loadCurrentProjectTasks: () => (/* binding */ loadCurrentProjectTasks)
/* harmony export */ });
/* harmony import */ var _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/DOMselectors.js */ "./src/scripts/data/DOMselectors.js");
/* harmony import */ var _data_priority_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/priority.js */ "./src/scripts/data/priority.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/scripts/app/projects.js");




function createTaskNode(task) {
  const elementExists = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.todoListContainer.querySelector(
    `[data-task-id='${task.id}']`
  );
  let taskToRender;
  if (elementExists) {
    taskToRender = elementExists;
  } else {
    taskToRender = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.template.content.cloneNode(true);
    const taskEl = taskToRender.querySelector("[data-task-id]");

    taskEl.dataset.taskId = task.id;
    taskToRender = taskEl;
  }

  setTaskNodeValues(taskToRender, task);
  return taskToRender;
}

function loadCurrentProjectTasks(currentProjectTitle) {
  const tasks = [..._data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.todoListContainer.querySelectorAll(".task-card")];
  const currentProjectTasks = getProjectTasks(currentProjectTitle);
  handleTodoListBackground(currentProjectTasks);

  tasks.forEach((element) => {
    const classes = [...element.classList];
    if (
      element.dataset.project.toLowerCase() ===
      currentProjectTitle.toLowerCase()
    ) {
      if (classes.includes("inactive")) {
        element.classList.remove("inactive");
      }
    } else {
      if (!classes.includes("inactive")) {
        element.classList.toggle("inactive");
      }
    }
  });
}

function deleteProjectTasks(projectTitle) {
  const tasksToDelete = getProjectTasks(projectTitle);
  tasksToDelete.forEach((element) => {
    element.remove();
  });
}

function getTodoLists() {
  const allProjects = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.getProjectTitles)();
  allProjects.push("inbox");
  const todoLists = {};
  allProjects.forEach((title) => {
    const tasks = getProjectTasks(title);
    todoLists[title] = [];
    tasks.forEach((task) => {
      const taskJSON = getTaskNodeValues(task);
      todoLists[title].push(taskJSON);
    });
  });

  return todoLists;
}

function handleTodoListBackground(tasks) {
  const classes = [..._data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.mainContent.classList];
  if (tasks.length !== 0) {
    if (!classes.includes("inactive")) {
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.mainContent.classList.toggle("inactive");
    }
  } else {
    if (classes.includes("inactive")) {
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.mainContent.classList.remove("inactive");
    }
  }
}

function getProjectTasks(projectTitle) {
  const tasks = [..._data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.todoListContainer.querySelectorAll(".task-card")];
  return tasks.filter((element) => {
    return element.dataset.project.toLowerCase() === projectTitle.toLowerCase();
  });
}

function setTaskNodeValues(taskToRender, task) {
  const color = _data_priority_js__WEBPACK_IMPORTED_MODULE_1__.PRIORITY_COLOR_MAP.get(task.priority) ?? "green";
  const priority = taskToRender.querySelector("[data-priority-color]");
  priority.style.backgroundColor = color;
  taskToRender.dataset.project = task.project;

  const title = taskToRender.querySelector("[data-title]");
  title.innerText = task.name;

  const details = taskToRender.querySelector("[data-details]");
  details.innerText = task.description;

  const date = taskToRender.querySelector("[data-due-date]");
  date.innerText = task.dueDate;
}

function getTaskNodeValues(task) {
  let color = task.querySelector("[data-priority-color]").style.backgroundColor;
  let taskJSON = {
    id: task.dataset.taskId,
    project: task.dataset.project,
    priority: _data_priority_js__WEBPACK_IMPORTED_MODULE_1__.COLOR_PRIORITY_MAP.get(color),
    title: task.querySelector("[data-title]").innerText,
    details: task.querySelector("[data-details]").innerText,
    dueDate: task.querySelector("[data-due-date]").innerText,
  };
  return taskJSON;
}


/***/ }),

/***/ "./src/scripts/data/DOMselectors.js":
/*!******************************************!*\
  !*** ./src/scripts/data/DOMselectors.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelButton: () => (/* binding */ cancelButton),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   currentProject: () => (/* binding */ currentProject),
/* harmony export */   dateElement: () => (/* binding */ dateElement),
/* harmony export */   descriptionElement: () => (/* binding */ descriptionElement),
/* harmony export */   formContainer: () => (/* binding */ formContainer),
/* harmony export */   leftMenu: () => (/* binding */ leftMenu),
/* harmony export */   mainContent: () => (/* binding */ mainContent),
/* harmony export */   nameElement: () => (/* binding */ nameElement),
/* harmony export */   newProjectButtons: () => (/* binding */ newProjectButtons),
/* harmony export */   newProjectInput: () => (/* binding */ newProjectInput),
/* harmony export */   newProjectPopup: () => (/* binding */ newProjectPopup),
/* harmony export */   newTaskButton: () => (/* binding */ newTaskButton),
/* harmony export */   overlay: () => (/* binding */ overlay),
/* harmony export */   priorityElement: () => (/* binding */ priorityElement),
/* harmony export */   projectContainer: () => (/* binding */ projectContainer),
/* harmony export */   projectElement: () => (/* binding */ projectElement),
/* harmony export */   projectTemplate: () => (/* binding */ projectTemplate),
/* harmony export */   sidebar: () => (/* binding */ sidebar),
/* harmony export */   taskForm: () => (/* binding */ taskForm),
/* harmony export */   taskSaveButton: () => (/* binding */ taskSaveButton),
/* harmony export */   template: () => (/* binding */ template),
/* harmony export */   todoListContainer: () => (/* binding */ todoListContainer)
/* harmony export */ });
const formContainer = document.querySelector("#form-container");
const newTaskButton = document.querySelector("#add-task-button");
const taskForm = document.querySelector("#task-form");
const overlay = document.querySelector("#overlay");
const todoListContainer = document.querySelector("#todo-list-container");
const cancelButton = document.querySelector("#form-btn-cancel");
const createProject = document.querySelector("#create-project-div");
const newProjectPopup = document.querySelector("#new-project-popup");
const newProjectButtons = document.querySelector(
  "#project-buttons-wrapper"
);
const newProjectInput = document.querySelector("#project-name-input");
const projectContainer = document.querySelector("#projects-container");
const currentProject = document.querySelector("#project-name");
const sidebar = document.querySelector("#sidebar");
const nameElement = document.querySelector("#task-name");
const descriptionElement = document.querySelector("#task-description");
const dateElement = document.querySelector("#task-due-date");
const priorityElement = document.querySelector("#task-priority");
const projectElement = document.querySelector("#task-project");
const template = document.querySelector("#task-template");
const projectTemplate = document.querySelector("#project-template");
const taskSaveButton = document.querySelector("#form-btn-save");
const leftMenu = document.querySelector("#left-menu");
const mainContent = document.querySelector("#main-content");


/***/ }),

/***/ "./src/scripts/data/priority.js":
/*!**************************************!*\
  !*** ./src/scripts/data/priority.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLOR_PRIORITY_MAP: () => (/* binding */ COLOR_PRIORITY_MAP),
/* harmony export */   PRIORITY_COLOR_MAP: () => (/* binding */ PRIORITY_COLOR_MAP)
/* harmony export */ });
const PRIORITY_COLOR_MAP = new Map([
  ["high", "red"],
  ["medium", "yellow"],
  ["low", "green"],
]);

const COLOR_PRIORITY_MAP = new Map([
  ["red", "high"],
  ["yellow", "medium"],
  ["green", "low"],
]);


/***/ }),

/***/ "./src/scripts/utility/utility.js":
/*!****************************************!*\
  !*** ./src/scripts/utility/utility.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateID: () => (/* binding */ generateID)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

function generateID() {
  return (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])().split("-").at(-1);
}


/***/ }),

/***/ "./src/images/background-image-empty-list.png":
/*!****************************************************!*\
  !*** ./src/images/background-image-empty-list.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0499b39dd22080b1186.png";

/***/ }),

/***/ "./src/styles/Barriecito-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/styles/Barriecito-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34e2c53bb0934420ce40.ttf";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/data/DOMselectors.js */ "./src/scripts/data/DOMselectors.js");
/* harmony import */ var _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/UI.js */ "./src/scripts/UI.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/normalize.css */ "./src/styles/normalize.css");





window.onload = _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadAppFromLocalStorage;
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.nameElement.addEventListener("keyup", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleTaskTitleInput);
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.newTaskButton.addEventListener("click", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].openNewTaskForm);
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.taskForm.addEventListener("submit", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateToDoList);
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.cancelButton.addEventListener("click", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].closeTaskForm);
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.todoListContainer.addEventListener("click", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateTask);
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.createProject.addEventListener("click", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].openNewProjectPopUp);
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.newProjectButtons.addEventListener(
  "click",
  _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleNewProjectPopUpActions
);
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.leftMenu.addEventListener("click", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayLeftMenuContent);
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.projectContainer.addEventListener(
  "click",
  _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleProjectContentActions
);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsa0lBQXlDO0FBQ3JGLDRDQUE0Qyw4SkFBNEQ7QUFDeEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG1DQUFtQztBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFB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WUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sTUFBTSxPQUFPLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxTQUFTLHNCQUFzQixxQkFBcUIsdUJBQXVCLHFCQUFxQixPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLFNBQVMsTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxzVkFBc1YsdUJBQXVCLDJDQUEyQyxVQUFVLG9LQUFvSyxjQUFjLEdBQUcsNEVBQTRFLG1CQUFtQixH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QUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBNEQ7QUFDM0I7QUFDTjtBQUNLOztBQUVoQyxnQkFBZ0Isc0RBQUU7QUFDbEIsc0VBQXFCLDJCQUEyQixzREFBRTtBQUNsRCx3RUFBdUIsMkJBQTJCLHNEQUFFO0FBQ3BELG1FQUFrQiw0QkFBNEIsc0RBQUU7QUFDaEQsdUVBQXNCLDJCQUEyQixzREFBRTtBQUNuRCw0RUFBMkIsMkJBQTJCLHNEQUFFO0FBQ3hELHdFQUF1QiwyQkFBMkIsc0RBQUU7QUFDcEQsNEVBQTJCO0FBQzNCO0FBQ0EsRUFBRSxzREFBRTtBQUNKO0FBQ0EsbUVBQWtCLDJCQUEyQixzREFBRTtBQUMvQywyRUFBMEI7QUFDMUI7QUFDQSxFQUFFLHNEQUFFO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3M/NDNmNCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2FwcC9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvYXBwL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2FwcC90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2FwcC90YXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9hcHAvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvYXBwL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2RhdGEvRE9Nc2VsZWN0b3JzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2RhdGEvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvdXRpbGl0eS91dGlsaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIkJhcnJpZWNpdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZS1lbXB0eS1saXN0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuLS1vcGFxdWUtZGFyazogIzAwMTkyNztcbi0tdHJhbnNwYXJlbnQtZGFyazogcmdiYSgwLCAwLCAwLCAuNzUpO1xuLS1vcGFxdWUtZ3JleTogcmdiKDIzMywgMjI4LCAyMjQpO1xuLS1wcmltYXJ5LWxpZ2h0OiAjZmZmO1xuLS1sb2dvLWNvbG9yOiAjMDBCQkJCO1xuLS1wcmltYXJ5LW9yYW5nZTogI2VhYjMwODtcbi0tbGFyZ2UtY29udGFpbmVyLWJvcmRlci1yYWRpdXM6IDAuN3JlbTtcbi0tc21hbGwtY29udGFpbmVyLWJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdCYXJyaWVjaXRvJztcbiAgICBzcmM6ICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXJ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keXtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLW9wYXF1ZS1kYXJrKTtcbn1cblxuYnV0dG9uLCBpbnB1dHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuI292ZXJsYXl7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmUgO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1kYXJrKTtcbiAgICB6LWluZGV4OiAyXG59XG5cblxuI292ZXJsYXkuYWN0aXZle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jYXBwLXdyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4jdG9wLWJhcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1wcmltYXJ5LWxpZ2h0KTs7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNXZoO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAtMXB4ICNjM2M2YzY7XG59XG5cbiN0b3AtYmFyLXRpdGxle1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0JhcnJpZWNpdG8nLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGNvbG9yOiAgdmFyKC0tb3BhcXVlLWRhcmspO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5wW2RhdGEtZW5kXTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtZW5kKSA7XG4gICAgY29sb3I6IHZhcigtLWxvZ28tY29sb3IpO1xufVxuXG4jdG9wLWJhci1pY29ue1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHdpZHRoOiAyLjNyZW07XG59XG5cbiN0b3AtYmFyLWFkZC10YXNrLWljb257XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyLjJyZW07XG59XG5cbiNjb250ZW50LXdyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuI3NpZGViYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpOztcbiAgICB3aWR0aDogMzUwcHg7XG59XG5cbiNsZWZ0LW1lbnV7XG4gICAgaGVpZ2h0OiAyNSU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbGFyZ2UtY29udGFpbmVyLWJvcmRlci1yYWRpdXMpO1xufVxuXG4jbGVmdC1tZW51PnVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogOTAlO1xufVxuXG51bD5saXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdCYXJyaWVjaXRvJywgY3Vyc2l2ZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gICAgbWFyZ2luOiAwO1xufVxuXG5saSA+IGltZyB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMzVweDtcbn1cblxuI3Byb2plY3RzLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiA2NSU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0tb3BhcXVlLWRhcmspO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWxhcmdlLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzKTtcbiAgICBmb250LWZhbWlseTogJ0JhcnJpZWNpdG8nLCBjdXJzaXZlO1xufVxuXG4jcHJvamVjdHMtdG9wLWJhcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAyLjNyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbiNjcmVhdGUtcHJvamVjdC1kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XG59XG5cbiNjcmVhdGUtcHJvamVjdC1kaXYuaW5hY3RpdmUsXG4udGFzay1jYXJkLmluYWN0aXZle1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcm9qZWN0cy1jb250ZW50e1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbn1cblxuI2FkZC1wcm9qZWN0LXdyYXBwZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jbmV3LXByb2plY3QtcG9wdXB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuICNuZXctcHJvamVjdC1wb3B1cC5hY3RpdmV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDM7XG59XG5cbiNwcm9qZWN0LW5hbWUtaW5wdXR7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc21hbGwtY29udGFpbmVyLWJvcmRlci1yYWRpdXMpO1xufVxuXG4jcHJvamVjdC1idXR0b25zLXdyYXBwZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jcHJvamVjdC1idXR0b25zLXdyYXBwZXI+YnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tcHJpbWFyeS1vcmFuZ2UpO1xuICAgIGNvbG9yOiB2YXIoLS1vcGFxdWUtZGFyayk7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWFsbC1jb250YWluZXItYm9yZGVyLXJhZGl1cyk7XG4gICAgd2lkdGg6IDU1cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IC40cmVtO1xuICAgIG1hcmdpbi1yaWdodDogLjRyZW07XG59XG5cbi5wcm9qZWN0LWNhcmR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaXZbZGF0YS1wcm9qZWN0LWRlbGV0ZV17XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICBjb2xvcjogIHZhcigtLW9wYXF1ZS1kYXJrKTtcbn1cblxuZGl2W2RhdGEtcHJvamVjdC1kZWxldGVdOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTs7XG59XG5cbmRpdltkYXRhLXByb2plY3QtdGl0bGVde1xuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbn1cblxuLnByb2plY3Qtc2VsZWN0ZWQ6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzZjQyO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXNtYWxsLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzKTtcbn1cblxuI21haW4tY29udGVudHtcbiAgICBmbGV4LWdyb3c6IDQ7XG4gICAgaGVpZ2h0OiA5NSU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxLjJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZW1wdHktdG9kby1saXN0LWJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwcHggNDAwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5lbXB0eS10b2RvLWxpc3QtYmFja2dyb3VuZC5pbmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4jdG9kby1saXN0LWNvbnRhaW5lcntcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNwcm9qZWN0LW5hbWV7XG4gICAgZm9udC1mYW1pbHk6ICdCYXJyaWVjaXRvJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogdmFyKC0tb3BhcXVlLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnRhc2stY2FyZHtcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIHZhcigtLW9wYXF1ZS1kYXJrKTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiB0aGluO1xuICAgIGZvbnQtZmFtaWx5OiAnQmFycmllY2l0bycsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbmRpdltkYXRhLXByaW9yaXR5LWNvbG9yXXtcbiAgICBtaW4td2lkdGg6IDEwcHg7XG59XG5cbiN0YXNrLWNoZWNrYm94OmhvdmVyLFxuYnV0dG9uOmhvdmVyLFxuYnV0dG9uOmZvY3Vze1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3Rhc2stY2hlY2tib3g6Y2hlY2tlZHtcbiAgIGFjY2VudC1jb2xvcjogIHZhcigtLW9wYXF1ZS1kYXJrKTtcbn1cblxuZGl2W2RhdGEtZGV0YWlsc10sXG5kaXZbZGF0YS1kdWUtZGF0ZV17XG4gICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICBjb2xvcjogIHZhcigtLW9wYXF1ZS1kYXJrKTtcbiAgICBvcGFjaXR5OiAuODtcbn1cblxuLnRhc2stYWN0aW9uLWl0ZW1ze1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnRhc2stYWN0aW9uLWl0ZW1zPmJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTs7XG59XG5cbi50YXNrLWFjdGlvbi1pdGVtcz5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3BhcXVlLWdyZXkpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXNtYWxsLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzKTtcbn1cblxuI2Zvcm0tY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICB0b3A6IDIwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3BhcXVlLWdyZXkpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWxhcmdlLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzKTtcbiAgICB6LWluZGV4OiAzO1xufVxuXG4jZm9ybS1jb250YWluZXIuYWN0aXZle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3Rhc2stZm9ybXtcbiAgICBtaW4td2lkdGg6IDk1JTtcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbiN0YXNrLWZvcm0+KiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXNtYWxsLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzKTtcbiAgICBjb2xvcjogdmFyKC0tb3BhcXVlLWRhcmspO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4jdGFzay1mb3JtLW5hbWUtZGVzYy13cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbn1cblxuI3Rhc2stZm9ybS1uYW1lLWRlc2Mtd3JhcHBlcj4qe1xuICAgIGNvbG9yOiB2YXIoLS1vcGFxdWUtZGFyayk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogIG5vbmU7XG59XG5cbiN0YXNrLW5hbWV7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4jdGFzay1kZXNjcmlwdGlvbntcbiAgICBmbGV4LWdyb3c6IDM7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICByZXNpemU6IG5vbmU7XG59XG5cbiN0YXNrLWZvcm0tc2VsZWN0LXdyYXBwZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuI3Rhc2stZm9ybS1zZWxlY3Qtd3JhcHBlciA+ICp7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBjb2xvcjogdmFyKC0tb3BhcXVlLWRhcmspO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiN0YXNrLXByb2plY3R7XG4gICAgY29sb3I6IHZhcigtLW9wYXF1ZS1kYXJrKTtcbn1cblxuI3Rhc2stZm9ybS1zZWxlY3Qtd3JhcHBlcj4qOmhvdmVyLFxuI3Rhc2stZm9ybS1zZWxlY3Qtd3JhcHBlcj4qOmZvY3Vze1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4jdGFzay1idXR0b25zLXdyYXBwZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbn1cblxuI3Rhc2stYnV0dG9ucy13cmFwcGVyPip7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3BhcXVlLWRhcmspO1xuICAgIHdpZHRoOiAxOCU7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpOztcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07XG59XG5cbiN0YXNrLWJ1dHRvbnMtd3JhcHBlcj5pbnB1dDpob3ZlcixcbiN0YXNrLWJ1dHRvbnMtd3JhcHBlcj5pbnB1dDpmb2N1cywgXG4jdGFzay1idXR0b25zLXdyYXBwZXI+YnV0dG9uOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XG4gICAgY29sb3I6IHZhcigtLW9wYXF1ZS1kYXJrKTtcbn1cblxuI2Zvcm0tYnRuLXNhdmVbZGlzYWJsZWRde1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XG59XG5cbiNhZGQtdGFzay1idXR0b257XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMnJlbTtcbiAgICByaWdodDogM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcGFxdWUtZGFyayk7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuI2FkZC10YXNrLWJ1dHRvbjpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0Esc0JBQXNCO0FBQ3RCLHNDQUFzQztBQUN0QyxpQ0FBaUM7QUFDakMscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekIsdUNBQXVDO0FBQ3ZDLHVDQUF1QztBQUN2Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnRUFBc0Q7QUFDMUQ7O0FBRUE7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCx5Q0FBeUM7SUFDekM7QUFDSjs7O0FBR0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFB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QUFDN0I7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBOzs7SUFHSSxlQUFlO0lBQ2YsdUNBQXVDO0lBQ3ZDLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbi0tb3BhcXVlLWRhcms6ICMwMDE5Mjc7XFxuLS10cmFuc3BhcmVudC1kYXJrOiByZ2JhKDAsIDAsIDAsIC43NSk7XFxuLS1vcGFxdWUtZ3JleTogcmdiKDIzMywgMjI4LCAyMjQpO1xcbi0tcHJpbWFyeS1saWdodDogI2ZmZjtcXG4tLWxvZ28tY29sb3I6ICMwMEJCQkI7XFxuLS1wcmltYXJ5LW9yYW5nZTogI2VhYjMwODtcXG4tLWxhcmdlLWNvbnRhaW5lci1ib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuLS1zbWFsbC1jb250YWluZXItYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCYXJyaWVjaXRvJztcXG4gICAgc3JjOiAgdXJsKCdCYXJyaWVjaXRvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLW9wYXF1ZS1kYXJrKTtcXG59XFxuXFxuYnV0dG9uLCBpbnB1dHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jb3ZlcmxheXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lIDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1kYXJrKTtcXG4gICAgei1pbmRleDogMlxcbn1cXG5cXG5cXG4jb3ZlcmxheS5hY3RpdmV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jYXBwLXdyYXBwZXJ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbiN0b3AtYmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXByaW1hcnktbGlnaHQpOztcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYm94LXNoYWRvdzogMCAzcHggM3B4IC0xcHggI2MzYzZjNjtcXG59XFxuXFxuI3RvcC1iYXItdGl0bGV7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdCYXJyaWVjaXRvJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGNvbG9yOiAgdmFyKC0tb3BhcXVlLWRhcmspO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxucFtkYXRhLWVuZF06OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1lbmQpIDtcXG4gICAgY29sb3I6IHZhcigtLWxvZ28tY29sb3IpO1xcbn1cXG5cXG4jdG9wLWJhci1pY29ue1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgd2lkdGg6IDIuM3JlbTtcXG59XFxuXFxuI3RvcC1iYXItYWRkLXRhc2staWNvbntcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIuMnJlbTtcXG59XFxuXFxuI2NvbnRlbnQtd3JhcHBlcntcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZWJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTs7XFxuICAgIHdpZHRoOiAzNTBweDtcXG59XFxuXFxuI2xlZnQtbWVudXtcXG4gICAgaGVpZ2h0OiAyNSU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktb3JhbmdlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbGFyZ2UtY29udGFpbmVyLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4jbGVmdC1tZW51PnVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbnVsPmxpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0JhcnJpZWNpdG8nLCBjdXJzaXZlO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5saSA+IGltZyB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbiNwcm9qZWN0cy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDY1JTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLW9wYXF1ZS1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbGFyZ2UtY29udGFpbmVyLWJvcmRlci1yYWRpdXMpO1xcbiAgICBmb250LWZhbWlseTogJ0JhcnJpZWNpdG8nLCBjdXJzaXZlO1xcbn1cXG5cXG4jcHJvamVjdHMtdG9wLWJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIuM3JlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbiNjcmVhdGUtcHJvamVjdC1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XFxufVxcblxcbiNjcmVhdGUtcHJvamVjdC1kaXYuaW5hY3RpdmUsXFxuLnRhc2stY2FyZC5pbmFjdGl2ZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRlbnR7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxufVxcblxcbiNhZGQtcHJvamVjdC13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtcG9wdXB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiAjbmV3LXByb2plY3QtcG9wdXAuYWN0aXZle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUtaW5wdXR7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWFsbC1jb250YWluZXItYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbiNwcm9qZWN0LWJ1dHRvbnMtd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0LWJ1dHRvbnMtd3JhcHBlcj5idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tcHJpbWFyeS1vcmFuZ2UpO1xcbiAgICBjb2xvcjogdmFyKC0tb3BhcXVlLWRhcmspO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc21hbGwtY29udGFpbmVyLWJvcmRlci1yYWRpdXMpO1xcbiAgICB3aWR0aDogNTVweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAuNHJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuNHJlbTtcXG59XFxuXFxuLnByb2plY3QtY2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2W2RhdGEtcHJvamVjdC1kZWxldGVde1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XFxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcbiAgICBjb2xvcjogIHZhcigtLW9wYXF1ZS1kYXJrKTtcXG59XFxuXFxuZGl2W2RhdGEtcHJvamVjdC1kZWxldGVdOmhvdmVye1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7O1xcbn1cXG5cXG5kaXZbZGF0YS1wcm9qZWN0LXRpdGxlXXtcXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LXNlbGVjdGVkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzZjQyO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWFsbC1jb250YWluZXItYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbiNtYWluLWNvbnRlbnR7XFxuICAgIGZsZXgtZ3JvdzogNDtcXG4gICAgaGVpZ2h0OiA5NSU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5lbXB0eS10b2RvLWxpc3QtYmFja2dyb3VuZHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZS1lbXB0eS1saXN0LnBuZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMHB4IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5lbXB0eS10b2RvLWxpc3QtYmFja2dyb3VuZC5pbmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG59XFxuXFxuI3RvZG8tbGlzdC1jb250YWluZXJ7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtbmFtZXtcXG4gICAgZm9udC1mYW1pbHk6ICdCYXJyaWVjaXRvJywgY3Vyc2l2ZTtcXG4gICAgY29sb3I6IHZhcigtLW9wYXF1ZS1kYXJrKTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4udGFzay1jYXJke1xcbiAgICB3aWR0aDogNzAwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICB2YXIoLS1vcGFxdWUtZGFyayk7XFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiB0aGluO1xcbiAgICBmb250LWZhbWlseTogJ0JhcnJpZWNpdG8nLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaW5lLWhlaWdodDogMS4zcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuZGl2W2RhdGEtcHJpb3JpdHktY29sb3Jde1xcbiAgICBtaW4td2lkdGg6IDEwcHg7XFxufVxcblxcbiN0YXNrLWNoZWNrYm94OmhvdmVyLFxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXN7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Rhc2stY2hlY2tib3g6Y2hlY2tlZHtcXG4gICBhY2NlbnQtY29sb3I6ICB2YXIoLS1vcGFxdWUtZGFyayk7XFxufVxcblxcbmRpdltkYXRhLWRldGFpbHNdLFxcbmRpdltkYXRhLWR1ZS1kYXRlXXtcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXG4gICAgY29sb3I6ICB2YXIoLS1vcGFxdWUtZGFyayk7XFxuICAgIG9wYWNpdHk6IC44O1xcbn1cXG5cXG4udGFzay1hY3Rpb24taXRlbXN7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50YXNrLWFjdGlvbi1pdGVtcz5idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpOztcXG59XFxuXFxuLnRhc2stYWN0aW9uLWl0ZW1zPmJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3BhcXVlLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWFsbC1jb250YWluZXItYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbiNmb3JtLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9wYXF1ZS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbGFyZ2UtY29udGFpbmVyLWJvcmRlci1yYWRpdXMpO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4jZm9ybS1jb250YWluZXIuYWN0aXZle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Rhc2stZm9ybXtcXG4gICAgbWluLXdpZHRoOiA5NSU7XFxuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI3Rhc2stZm9ybT4qIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWFsbC1jb250YWluZXItYm9yZGVyLXJhZGl1cyk7XFxuICAgIGNvbG9yOiB2YXIoLS1vcGFxdWUtZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI3Rhc2stZm9ybS1uYW1lLWRlc2Mtd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4jdGFzay1mb3JtLW5hbWUtZGVzYy13cmFwcGVyPip7XFxuICAgIGNvbG9yOiB2YXIoLS1vcGFxdWUtZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogIG5vbmU7XFxufVxcblxcbiN0YXNrLW5hbWV7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9ue1xcbiAgICBmbGV4LWdyb3c6IDM7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuI3Rhc2stZm9ybS1zZWxlY3Qtd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbiN0YXNrLWZvcm0tc2VsZWN0LXdyYXBwZXIgPiAqe1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tb3BhcXVlLWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdGFzay1wcm9qZWN0e1xcbiAgICBjb2xvcjogdmFyKC0tb3BhcXVlLWRhcmspO1xcbn1cXG5cXG4jdGFzay1mb3JtLXNlbGVjdC13cmFwcGVyPio6aG92ZXIsXFxuI3Rhc2stZm9ybS1zZWxlY3Qtd3JhcHBlcj4qOmZvY3Vze1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiN0YXNrLWJ1dHRvbnMtd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBcXG59XFxuXFxuI3Rhc2stYnV0dG9ucy13cmFwcGVyPip7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9wYXF1ZS1kYXJrKTtcXG4gICAgd2lkdGg6IDE4JTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpOztcXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcXG59XFxuXFxuI3Rhc2stYnV0dG9ucy13cmFwcGVyPmlucHV0OmhvdmVyLFxcbiN0YXNrLWJ1dHRvbnMtd3JhcHBlcj5pbnB1dDpmb2N1cywgXFxuI3Rhc2stYnV0dG9ucy13cmFwcGVyPmJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LW9yYW5nZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1vcGFxdWUtZGFyayk7XFxufVxcblxcbiNmb3JtLWJ0bi1zYXZlW2Rpc2FibGVkXXtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBwb2ludGVyLWV2ZW50czpub25lO1xcbn1cXG5cXG4jYWRkLXRhc2stYnV0dG9ue1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMnJlbTtcXG4gICAgcmlnaHQ6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9wYXF1ZS1kYXJrKTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4jYWRkLXRhc2stYnV0dG9uOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuXG4vKiBEb2N1bWVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbiAqL1xuXG5odG1sIHtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG59XG5cbi8qIFNlY3Rpb25zXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4gICAqL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAgICogUmVuZGVyIHRoZSBcXGBtYWluXFxgIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxuICAgKi9cblxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gXFxgaDFcXGAgZWxlbWVudHMgd2l0aGluIFxcYHNlY3Rpb25cXGAgYW5kXG4gICAqIFxcYGFydGljbGVcXGAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxuICAgKi9cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gICAqL1xuXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xufVxuXG4vKipcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAgICovXG5cbnByZSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICAgKi9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKipcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAgICovXG5cbmFiYnJbdGl0bGVdIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cbn1cblxuLyoqXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gICAqL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyoqXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gICAqL1xuXG5jb2RlLFxua2JkLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKipcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gICAqL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcbiAgICogUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbiAgICogYWxsIGJyb3dzZXJzLlxuICAgKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLyogRW1iZWRkZWQgY29udGVudFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cbiAgICovXG5cbmltZyB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLyogRm9ybXNcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4gICAqL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cbiAgICovXG5cbmJ1dHRvbixcbmlucHV0IHtcbiAgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLyoqXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXG4gICAqL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuICAvKiAxICovXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAgICovXG5cbmJ1dHRvbixcblt0eXBlPVwiYnV0dG9uXCJdLFxuW3R5cGU9XCJyZXNldFwiXSxcblt0eXBlPVwic3VibWl0XCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbi8qKlxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuICAgKi9cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXG4gICAqL1xuXG5idXR0b246LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAgICovXG5cbmZpZWxkc2V0IHtcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xufVxuXG4vKipcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBJRS5cbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICAgKiAgICBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4gICAqL1xuXG5sZWdlbmQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cbn1cblxuLyoqXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gICAqL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyoqXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxuICAgKi9cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyoqXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXG4gICAqL1xuXG5bdHlwZT1cImNoZWNrYm94XCJdLFxuW3R5cGU9XCJyYWRpb1wiXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMiAqL1xufVxuXG4vKipcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICAgKi9cblxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyoqXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAgICovXG5cblt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLyoqXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiAgICovXG5cblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiAgICovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qIEludGVyYWN0aXZlXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXG4gICAqL1xuXG5kZXRhaWxzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAgICovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qIE1pc2NcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cbiAgICovXG5cbnRlbXBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxuICAgKi9cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLGlCQUFpQixFQUFFLE1BQU07RUFDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0VBQ0UsU0FBUztBQUNYOztBQUVBOztJQUVJOztBQUVKO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0lBR0k7O0FBRUo7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO2lGQUNpRjs7QUFFakY7OztJQUdJOztBQUVKO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQixTQUFTLEVBQUUsTUFBTTtFQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzNCOztBQUVBOzs7SUFHSTs7QUFFSjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0lBR0k7O0FBRUo7RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7SUFFSTs7QUFFSjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztJQUdJOztBQUVKOzs7RUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztJQUVJOztBQUVKO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO2lGQUNpRjs7QUFFakY7OztJQUdJOztBQUVKOzs7OztFQUtFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0VBRUUsTUFBTTtFQUNOLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0VBRUUsTUFBTTtFQUNOLG9CQUFvQjtBQUN0Qjs7QUFFQTs7SUFFSTs7QUFFSjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7SUFFSTs7QUFFSjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0lBRUk7O0FBRUo7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0lBS0k7O0FBRUo7RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7SUFHSTs7QUFFSjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztJQUVJOztBQUVKOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0lBR0k7O0FBRUo7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztJQUdJOztBQUVKO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztJQUVJOztBQUVKO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICogYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gICAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAgICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB7XG4gIGNyZWF0ZVRhc2ssXG4gIHJlc2V0Rm9ybSxcbiAgYXV0b2ZpbGwsXG4gIHVwZGF0ZVByb2plY3RNZW51LFxufSBmcm9tIFwiLi9hcHAvdGFza0Zvcm0uanNcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZVRhc2tOb2RlLFxuICBsb2FkQ3VycmVudFByb2plY3RUYXNrcyxcbiAgZGVsZXRlUHJvamVjdFRhc2tzLFxuICBnZXRUb2RvTGlzdHMsXG59IGZyb20gXCIuL2FwcC90b2RvTGlzdC5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheVRvZGF5VGFza3MgfSBmcm9tIFwiLi9hcHAvdG9kYXkuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3ROb2RlLCBnZXRQcm9qZWN0VGl0bGVzIH0gZnJvbSBcIi4vYXBwL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSBcIi4vZGF0YS9ET01zZWxlY3RvcnMuanNcIjtcbmltcG9ydCB7IHNhdmVUb0xvY2FsU3RvcmFnZSwgZ2V0RnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2FwcC9sb2NhbFN0b3JhZ2UuanNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL2FwcC90YXNrLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIGhhbmRsZVRhc2tUaXRsZUlucHV0KCkge1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHNlbGVjdG9ycy5uYW1lRWxlbWVudC52YWx1ZTtcbiAgICBpZiAodGFza1RpdGxlKSB7XG4gICAgICBzZWxlY3RvcnMudGFza1NhdmVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0b3JzLnRhc2tTYXZlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgb3Blbk5ld1Rhc2tGb3JtKCkge1xuICAgIHNlbGVjdG9ycy5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgc2VsZWN0b3JzLm92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBzZWxlY3RvcnMudGFza1NhdmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNvbnN0IHRpdGxlcyA9IGdldFByb2plY3RUaXRsZXMoKTtcbiAgICB1cGRhdGVQcm9qZWN0TWVudSh0aXRsZXMpO1xuICAgIHJlc2V0Rm9ybSgpO1xuICB9XG5cbiAgc3RhdGljIGNsb3NlVGFza0Zvcm0oKSB7XG4gICAgc2VsZWN0b3JzLmZvcm1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBzZWxlY3RvcnMub3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHJlc2V0Rm9ybSgpO1xuICB9XG5cbiAgc3RhdGljIG9wZW5OZXdQcm9qZWN0UG9wVXAoKSB7XG4gICAgc2VsZWN0b3JzLmNyZWF0ZVByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIpO1xuICAgIHNlbGVjdG9ycy5uZXdQcm9qZWN0UG9wdXAuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBzZWxlY3RvcnMub3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVRvRG9MaXN0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZWxlY3RvcnMuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHNlbGVjdG9ycy5vdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgY29uc3QgZXhpc3RpbmdUYXNrSWQgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWQ7XG4gICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2soZXhpc3RpbmdUYXNrSWQpO1xuICAgIGNvbnN0IHRhc2tOb2RlID0gY3JlYXRlVGFza05vZGUodGFzayk7XG5cbiAgICBpZiAoIWV4aXN0aW5nVGFza0lkKSB7XG4gICAgICBzZWxlY3RvcnMudG9kb0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza05vZGUpO1xuICAgIH1cblxuICAgIFVJLnVwZGF0ZU1haW5Db250ZW50VmlldyhzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0KTtcbiAgICBjb25zdCB0aXRsZXMgPSBnZXRQcm9qZWN0VGl0bGVzKCk7XG4gICAgdXBkYXRlUHJvamVjdE1lbnUodGl0bGVzKTtcbiAgICByZXNldEZvcm0oKTtcbiAgICBjb25zdCB0b2RvTGlzdHMgPSBKU09OLnN0cmluZ2lmeShnZXRUb2RvTGlzdHMoKSk7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHRvZG9MaXN0cyk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVGFzayhldmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhcIiN0b2RvLWxpc3QtY29udGFpbmVyXCIpKSByZXR1cm47XG5cbiAgICBpZiAoZWxlbWVudC5tYXRjaGVzKFwiI3Rhc2stY2hlY2tib3hcIikpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBlbGVtZW50LmNsb3Nlc3QoXCJkaXZbZGF0YS10YXNrLWlkXVwiKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZWxlbWVudFxuICAgICAgICAuY2xvc2VzdChcImRpdltkYXRhLXRhc2staWRdXCIpXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGl0bGVdXCIpO1xuXG4gICAgICBpZiAodGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPT09IFwibGluZS10aHJvdWdoXCIpIHtcbiAgICAgICAgdGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIlwiO1xuICAgICAgICB0YXNrLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgICB0YXNrLnN0eWxlLm9wYWNpdHkgPSAwLjU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQuY2xvc2VzdChcImJ1dHRvblwiKS5tYXRjaGVzKFwiW2RhdGEtdGFzay1kZWxldGVdXCIpKSB7XG4gICAgICBjb25zdCB0YXNrVG9EZWxldGUgPSBlbGVtZW50LmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpO1xuICAgICAgc2VsZWN0b3JzLnRvZG9MaXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tUb0RlbGV0ZSk7XG4gICAgICBjb25zdCB0b2RvTGlzdHMgPSBKU09OLnN0cmluZ2lmeShnZXRUb2RvTGlzdHMoKSk7XG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UodG9kb0xpc3RzKTtcbiAgICAgIFVJLnVwZGF0ZU1haW5Db250ZW50VmlldyhzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KFwiYnV0dG9uXCIpLm1hdGNoZXMoXCJbZGF0YS10YXNrLWVkaXRdXCIpKSB7XG4gICAgICBjb25zdCBpZCA9IGVsZW1lbnQuY2xvc2VzdChcImRpdltkYXRhLXRhc2staWRdXCIpLmRhdGFzZXQudGFza0lkO1xuICAgICAgYXV0b2ZpbGwoaWQpO1xuICAgICAgc2VsZWN0b3JzLmZvcm1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIHNlbGVjdG9ycy5vdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHVwZGF0ZU1haW5Db250ZW50VmlldyhtYWluQ29udGVudFRpdGxlKSB7XG4gICAgaWYgKG1haW5Db250ZW50VGl0bGUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0b2RheVwiKSB7XG4gICAgICBkaXNwbGF5VG9kYXlUYXNrcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2FkQ3VycmVudFByb2plY3RUYXNrcyhzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlTmV3UHJvamVjdFBvcFVwQWN0aW9ucyhldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhcIiNwcm9qZWN0LXNhdmVcIikpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IHNlbGVjdG9ycy5uZXdQcm9qZWN0SW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgaWYgKCFuZXdQcm9qZWN0VGl0bGUpIHJldHVybjtcblxuICAgICAgY29uc3QgcmVzZXJ2ZWROYW1lcyA9IGdldFByb2plY3RUaXRsZXMoKS5tYXAoKHRpdGxlKSA9PlxuICAgICAgICB0aXRsZS50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuICAgICAgcmVzZXJ2ZWROYW1lcy5wdXNoKFwiaW5ib3hcIiwgXCJ0b2RheVwiKTtcbiAgICAgIGlmIChyZXNlcnZlZE5hbWVzLmluY2x1ZGVzKG5ld1Byb2plY3RUaXRsZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICBhbGVydChcIlByb2plY3QgYWxyZWFkeSBleGlzdHMgd2l0aCB0aGlzIG5hbWUhXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdE5vZGUobmV3UHJvamVjdFRpdGxlKTtcbiAgICAgIHNlbGVjdG9ycy5wcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIH1cblxuICAgIHNlbGVjdG9ycy5uZXdQcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHNlbGVjdG9ycy5jcmVhdGVQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICBzZWxlY3RvcnMubmV3UHJvamVjdFBvcHVwLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgc2VsZWN0b3JzLm92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBjb25zdCB0b2RvTGlzdHMgPSBKU09OLnN0cmluZ2lmeShnZXRUb2RvTGlzdHMoKSk7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHRvZG9MaXN0cyk7XG4gIH1cblxuICBzdGF0aWMgZGlzcGxheUxlZnRNZW51Q29udGVudChldmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhcImxpI2luYm94XCIpKSB7XG4gICAgICBzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0ID0gZWxlbWVudC5pbm5lclRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhcImxpI3RvZGF5XCIpKSB7XG4gICAgICBzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0ID0gZWxlbWVudC5pbm5lclRleHQ7XG4gICAgfVxuXG4gICAgVUkudXBkYXRlTWFpbkNvbnRlbnRWaWV3KHNlbGVjdG9ycy5jdXJyZW50UHJvamVjdC5pbm5lclRleHQpO1xuICB9XG5cbiAgc3RhdGljIGhhbmRsZVByb2plY3RDb250ZW50QWN0aW9ucyhldmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cbiAgICBpZiAoZWxlbWVudC5tYXRjaGVzKFwiI3Byb2plY3RzLWNvbnRhaW5lclwiKSkgcmV0dXJuO1xuXG4gICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhcIltkYXRhLXByb2plY3QtZGVsZXRlXVwiKSkge1xuICAgICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBlbGVtZW50LmNsb3Nlc3QoXCJkaXZbZGF0YS1wcm9qZWN0LWlkXVwiKTtcbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiW2RhdGEtcHJvamVjdC10aXRsZV1cIlxuICAgICAgKS5pbm5lclRleHQ7XG5cbiAgICAgIHByb2plY3RDb250ZW50LnJlbW92ZSgpO1xuICAgICAgZGVsZXRlUHJvamVjdFRhc2tzKHByb2plY3RUaXRsZSk7XG5cbiAgICAgIHNlbGVjdG9ycy5jdXJyZW50UHJvamVjdC5pbm5lclRleHQgPSBcIkluYm94XCI7XG4gICAgICBVSS51cGRhdGVNYWluQ29udGVudFZpZXcoc2VsZWN0b3JzLmN1cnJlbnRQcm9qZWN0LmlubmVyVGV4dCk7XG4gICAgICBjb25zdCB0b2RvTGlzdHMgPSBKU09OLnN0cmluZ2lmeShnZXRUb2RvTGlzdHMoKSk7XG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UodG9kb0xpc3RzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5tYXRjaGVzKFwiLnByb2plY3QtY2FyZFwiKSkge1xuICAgICAgc2VsZWN0b3JzLmN1cnJlbnRQcm9qZWN0LmlubmVyVGV4dCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCJkaXZbZGF0YS1wcm9qZWN0LXRpdGxlXVwiXG4gICAgICApLmlubmVyVGV4dDtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5tYXRjaGVzKFwiW2RhdGEtcHJvamVjdC10aXRsZV1cIikpIHtcbiAgICAgIHNlbGVjdG9ycy5jdXJyZW50UHJvamVjdC5pbm5lclRleHQgPSBlbGVtZW50LmlubmVyVGV4dDtcbiAgICB9XG5cbiAgICBVSS51cGRhdGVNYWluQ29udGVudFZpZXcoc2VsZWN0b3JzLmN1cnJlbnRQcm9qZWN0LmlubmVyVGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbG9hZEFwcEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgY29uc3QgdG9kb0xpc3RzID0gSlNPTi5wYXJzZShnZXRGcm9tTG9jYWxTdG9yYWdlKCkpO1xuICAgIGNvbnN0IHByb2plY3RMaXN0cyA9IE9iamVjdC5rZXlzKHRvZG9MaXN0cyk7XG5cbiAgICBwcm9qZWN0TGlzdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QudG9Mb3dlckNhc2UoKSAhPT0gXCJpbmJveFwiKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROb2RlID0gY3JlYXRlUHJvamVjdE5vZGUocHJvamVjdCk7XG4gICAgICAgIHNlbGVjdG9ycy5wcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROb2RlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGFza3MgPSB0b2RvTGlzdHNbcHJvamVjdF07XG5cbiAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgIHRhc2suaWQsXG4gICAgICAgICAgdGFzay50aXRsZSxcbiAgICAgICAgICB0YXNrLmRldGFpbHMsXG4gICAgICAgICAgdGFzay5kdWVEYXRlLFxuICAgICAgICAgIHRhc2sucHJpb3JpdHksXG4gICAgICAgICAgdGFzay5wcm9qZWN0XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHRhc2tOb2RlID0gY3JlYXRlVGFza05vZGUobmV3VGFzayk7XG4gICAgICAgIGlmICh0YXNrLnByb2plY3QudG9Mb3dlckNhc2UoKSAhPT0gXCJpbmJveFwiKSB7XG4gICAgICAgICAgdGFza05vZGUuY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdG9ycy50b2RvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTm9kZSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIFVJLnVwZGF0ZU1haW5Db250ZW50VmlldyhzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0KTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNhdmVUb0xvY2FsU3RvcmFnZShpdGVtKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RBcHBcIiwgaXRlbSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RBcHBcIik7XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0VGVtcGxhdGUsIHByb2plY3RDb250YWluZXIgfSBmcm9tIFwiLi4vZGF0YS9ET01zZWxlY3RvcnMuanNcIjtcbmltcG9ydCB7IGdlbmVyYXRlSUQgfSBmcm9tIFwiLi4vdXRpbGl0eS91dGlsaXR5LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0Tm9kZSh0aXRsZSkge1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkodGl0bGUpO1xuICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IHByb2plY3RUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgY29uc3QgaWQgPSBwcm9qZWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdC1pZF1cIik7XG4gIGlkLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtdGl0bGVdXCIpO1xuICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcbiAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdFRpdGxlcygpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXG4gICAgLi4ucHJvamVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2W2RhdGEtcHJvamVjdC10aXRsZV1cIiksXG4gIF07XG4gIHJldHVybiBwcm9qZWN0cy5tYXAoKGVsZW1lbnQpID0+IGVsZW1lbnQuaW5uZXJUZXh0KTtcbn1cblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUpID0+IHtcbiAgcmV0dXJuIHsgaWQ6IGdlbmVyYXRlSUQoKSwgdGl0bGUgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0IHx8IFwiaW5ib3hcIjtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICBzZXQgbmFtZShuYW1lKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUoZGF0ZSkge1xuICAgIHRoaXMuX2R1ZURhdGUgPSBkYXRlO1xuICB9XG5cbiAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gIH1cblxuICBzZXQgcHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIHNldCBwcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIGdldCBwcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0O1xuICB9XG59XG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0VGl0bGVzIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tIFwiLi4vZGF0YS9ET01zZWxlY3RvcnMuanNcIjtcbmltcG9ydCB7IENPTE9SX1BSSU9SSVRZX01BUCB9IGZyb20gXCIuLi9kYXRhL3ByaW9yaXR5LmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUlEIH0gZnJvbSBcIi4uL3V0aWxpdHkvdXRpbGl0eS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhpZCkge1xuICBjb25zdCBuYW1lID0gc2VsZWN0b3JzLm5hbWVFbGVtZW50LnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBzZWxlY3RvcnMuZGVzY3JpcHRpb25FbGVtZW50LnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgZGF0ZSA9IHNlbGVjdG9ycy5kYXRlRWxlbWVudC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHByaW9yaXR5ID0gc2VsZWN0b3JzLnByaW9yaXR5RWxlbWVudC52YWx1ZS50cmltKCkgfHwgXCJsb3dcIjtcbiAgY29uc3QgcHJvamVjdCA9IHNlbGVjdG9ycy5wcm9qZWN0RWxlbWVudC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHRhc2tJZCA9IGlkID8/IGdlbmVyYXRlSUQoKTtcbiAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tJZCwgbmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gIGlmIChzZWxlY3RvcnMudGFza0Zvcm0uZGF0YXNldC50YXNrSWQpIHtcbiAgICBkZWxldGUgc2VsZWN0b3JzLnRhc2tGb3JtLmRhdGFzZXQudGFza0lkO1xuICB9XG4gIHNlbGVjdG9ycy5uYW1lRWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gIHNlbGVjdG9ycy5kZXNjcmlwdGlvbkVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICBzZWxlY3RvcnMuZGF0ZUVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICBzZWxlY3RvcnMucHJpb3JpdHlFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgc2VsZWN0b3JzLnByb2plY3RFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgc2VsZWN0b3JzLnRhc2tTYXZlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9maWxsKHRhc2tJZCkge1xuICBjb25zdCB0YXNrID0gc2VsZWN0b3JzLnRvZG9MaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFtkYXRhLXRhc2staWQ9JyR7dGFza0lkfSddYFxuICApO1xuICBzZWxlY3RvcnMudGFza0Zvcm0uZGF0YXNldC50YXNrSWQgPSB0YXNrSWQ7XG4gIHNlbGVjdG9ycy5uYW1lRWxlbWVudC52YWx1ZSA9IHRhc2tcbiAgICAucXVlcnlTZWxlY3RvcihcIltkYXRhLXRpdGxlXVwiKVxuICAgIC5pbm5lclRleHQudHJpbSgpO1xuICBzZWxlY3RvcnMuZGVzY3JpcHRpb25FbGVtZW50LnZhbHVlID0gdGFza1xuICAgIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGV0YWlsc11cIilcbiAgICAuaW5uZXJUZXh0LnRyaW0oKTtcblxuICBzZWxlY3RvcnMuZGF0ZUVsZW1lbnQudmFsdWUgPSB0YXNrXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kdWUtZGF0ZV1cIilcbiAgICAuaW5uZXJUZXh0LnRyaW0oKTtcbiAgY29uc3QgcHJpb3JpdHlDb2xvciA9IHRhc2sucXVlcnlTZWxlY3RvcihcIltkYXRhLXByaW9yaXR5LWNvbG9yXVwiKS5zdHlsZVxuICAgIC5iYWNrZ3JvdW5kQ29sb3I7XG4gIHNlbGVjdG9ycy5wcmlvcml0eUVsZW1lbnQudmFsdWUgPSBDT0xPUl9QUklPUklUWV9NQVAuZ2V0KHByaW9yaXR5Q29sb3IpO1xuICBzZWxlY3RvcnMucHJvamVjdEVsZW1lbnQudmFsdWUgPSB0YXNrLmRhdGFzZXQucHJvamVjdDtcbiAgY29uc3QgdGl0bGVzID0gZ2V0UHJvamVjdFRpdGxlcygpO1xuICB1cGRhdGVQcm9qZWN0TWVudSh0aXRsZXMpO1xuICBzZWxlY3RvcnMudGFza1NhdmVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RNZW51KHRpdGxlcykge1xuICBjb25zdCByZXNlcnZlZE9wdGlvbnMgPSBbXCJJbmJveFwiLCBcIlByb2plY3RcIl07XG4gIGNvbnN0IG9wdGlvbnNUb0RlbCA9IFtcbiAgICAuLi5zZWxlY3RvcnMucHJvamVjdEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKSxcbiAgXS5maWx0ZXIoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gIXJlc2VydmVkT3B0aW9ucy5pbmNsdWRlcyhlbGVtZW50LmlubmVyVGV4dCk7XG4gIH0pO1xuXG4gIG9wdGlvbnNUb0RlbC5mb3JFYWNoKChvcHRpb24pID0+IG9wdGlvbi5yZW1vdmUoKSk7XG5cbiAgdGl0bGVzLmZvckVhY2goKHRpdGxlKSA9PiB7XG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnRleHQgPSB0aXRsZTtcbiAgICBvcHRpb24udmFsdWUgPSB0aXRsZTtcbiAgICBzZWxlY3RvcnMucHJvamVjdEVsZW1lbnQuYWRkKG9wdGlvbik7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGlzVG9kYXkgZnJvbSBcImRhdGUtZm5zL2lzVG9kYXlcIjtcbmltcG9ydCB7IHRvZG9MaXN0Q29udGFpbmVyIH0gZnJvbSBcIi4uL2RhdGEvRE9Nc2VsZWN0b3JzLmpzXCI7XG5pbXBvcnQgeyBoYW5kbGVUb2RvTGlzdEJhY2tncm91bmQgfSBmcm9tIFwiLi90b2RvTGlzdC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZGF5VGFza3MoKSB7XG4gIGNvbnN0IHRhc2tzID0gWy4uLnRvZG9MaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jYXJkXCIpXTtcblxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgZHVlRGF0ZSA9IHRhc2sucXVlcnlTZWxlY3RvcihcIltkYXRhLWR1ZS1kYXRlXVwiKS5pbm5lclRleHQ7XG4gICAgY29uc3QgY2xhc3NlcyA9IFsuLi50YXNrLmNsYXNzTGlzdF07XG5cbiAgICBpZiAoZHVlRGF0ZSkge1xuICAgICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gZHVlRGF0ZS5zcGxpdChcIi1cIik7XG5cbiAgICAgIC8vIG1vbnRoIGlzIDAgYmFzZWRcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBwYXJzZUludChtb250aCkgLSAxLCBkYXkpO1xuICAgICAgbGV0IHRvZGF5ID0gaXNUb2RheShkYXRlKTtcblxuICAgICAgaWYgKHRvZGF5KSB7XG4gICAgICAgIGlmIChjbGFzc2VzLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFjbGFzc2VzLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgICAgICB0YXNrLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNsYXNzZXMuaW5jbHVkZXMoXCJpbmFjdGl2ZVwiKSkge1xuICAgICAgICB0YXNrLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHRhc2tzVG9kYXkgPSBbXG4gICAgLi4udG9kb0xpc3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImRpdi50YXNrLWNhcmQ6bm90KC5pbmFjdGl2ZSlcIiksXG4gIF07XG5cbiAgaGFuZGxlVG9kb0xpc3RCYWNrZ3JvdW5kKHRhc2tzVG9kYXkpO1xufVxuIiwiaW1wb3J0IHtcbiAgdG9kb0xpc3RDb250YWluZXIsXG4gIHRlbXBsYXRlLFxuICBtYWluQ29udGVudCxcbn0gZnJvbSBcIi4uL2RhdGEvRE9Nc2VsZWN0b3JzLmpzXCI7XG5pbXBvcnQgeyBQUklPUklUWV9DT0xPUl9NQVAsIENPTE9SX1BSSU9SSVRZX01BUCB9IGZyb20gXCIuLi9kYXRhL3ByaW9yaXR5LmpzXCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0VGl0bGVzIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tOb2RlKHRhc2spIHtcbiAgY29uc3QgZWxlbWVudEV4aXN0cyA9IHRvZG9MaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFtkYXRhLXRhc2staWQ9JyR7dGFzay5pZH0nXWBcbiAgKTtcbiAgbGV0IHRhc2tUb1JlbmRlcjtcbiAgaWYgKGVsZW1lbnRFeGlzdHMpIHtcbiAgICB0YXNrVG9SZW5kZXIgPSBlbGVtZW50RXhpc3RzO1xuICB9IGVsc2Uge1xuICAgIHRhc2tUb1JlbmRlciA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IHRhc2tFbCA9IHRhc2tUb1JlbmRlci5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFzay1pZF1cIik7XG5cbiAgICB0YXNrRWwuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICAgIHRhc2tUb1JlbmRlciA9IHRhc2tFbDtcbiAgfVxuXG4gIHNldFRhc2tOb2RlVmFsdWVzKHRhc2tUb1JlbmRlciwgdGFzayk7XG4gIHJldHVybiB0YXNrVG9SZW5kZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ3VycmVudFByb2plY3RUYXNrcyhjdXJyZW50UHJvamVjdFRpdGxlKSB7XG4gIGNvbnN0IHRhc2tzID0gWy4uLnRvZG9MaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jYXJkXCIpXTtcbiAgY29uc3QgY3VycmVudFByb2plY3RUYXNrcyA9IGdldFByb2plY3RUYXNrcyhjdXJyZW50UHJvamVjdFRpdGxlKTtcbiAgaGFuZGxlVG9kb0xpc3RCYWNrZ3JvdW5kKGN1cnJlbnRQcm9qZWN0VGFza3MpO1xuXG4gIHRhc2tzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gWy4uLmVsZW1lbnQuY2xhc3NMaXN0XTtcbiAgICBpZiAoXG4gICAgICBlbGVtZW50LmRhdGFzZXQucHJvamVjdC50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgY3VycmVudFByb2plY3RUaXRsZS50b0xvd2VyQ2FzZSgpXG4gICAgKSB7XG4gICAgICBpZiAoY2xhc3Nlcy5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNsYXNzZXMuaW5jbHVkZXMoXCJpbmFjdGl2ZVwiKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdFRhc2tzKHByb2plY3RUaXRsZSkge1xuICBjb25zdCB0YXNrc1RvRGVsZXRlID0gZ2V0UHJvamVjdFRhc2tzKHByb2plY3RUaXRsZSk7XG4gIHRhc2tzVG9EZWxldGUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb0xpc3RzKCkge1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IGdldFByb2plY3RUaXRsZXMoKTtcbiAgYWxsUHJvamVjdHMucHVzaChcImluYm94XCIpO1xuICBjb25zdCB0b2RvTGlzdHMgPSB7fTtcbiAgYWxsUHJvamVjdHMuZm9yRWFjaCgodGl0bGUpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IGdldFByb2plY3RUYXNrcyh0aXRsZSk7XG4gICAgdG9kb0xpc3RzW3RpdGxlXSA9IFtdO1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tKU09OID0gZ2V0VGFza05vZGVWYWx1ZXModGFzayk7XG4gICAgICB0b2RvTGlzdHNbdGl0bGVdLnB1c2godGFza0pTT04pO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gdG9kb0xpc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVG9kb0xpc3RCYWNrZ3JvdW5kKHRhc2tzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSBbLi4ubWFpbkNvbnRlbnQuY2xhc3NMaXN0XTtcbiAgaWYgKHRhc2tzLmxlbmd0aCAhPT0gMCkge1xuICAgIGlmICghY2xhc3Nlcy5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICBtYWluQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChjbGFzc2VzLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdFRhc2tzKHByb2plY3RUaXRsZSkge1xuICBjb25zdCB0YXNrcyA9IFsuLi50b2RvTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stY2FyZFwiKV07XG4gIHJldHVybiB0YXNrcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LnByb2plY3QudG9Mb3dlckNhc2UoKSA9PT0gcHJvamVjdFRpdGxlLnRvTG93ZXJDYXNlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRUYXNrTm9kZVZhbHVlcyh0YXNrVG9SZW5kZXIsIHRhc2spIHtcbiAgY29uc3QgY29sb3IgPSBQUklPUklUWV9DT0xPUl9NQVAuZ2V0KHRhc2sucHJpb3JpdHkpID8/IFwiZ3JlZW5cIjtcbiAgY29uc3QgcHJpb3JpdHkgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLXByaW9yaXR5LWNvbG9yXVwiKTtcbiAgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gIHRhc2tUb1JlbmRlci5kYXRhc2V0LnByb2plY3QgPSB0YXNrLnByb2plY3Q7XG5cbiAgY29uc3QgdGl0bGUgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLXRpdGxlXVwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gdGFzay5uYW1lO1xuXG4gIGNvbnN0IGRldGFpbHMgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLWRldGFpbHNdXCIpO1xuICBkZXRhaWxzLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZGF0ZSA9IHRhc2tUb1JlbmRlci5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZHVlLWRhdGVdXCIpO1xuICBkYXRlLmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFza05vZGVWYWx1ZXModGFzaykge1xuICBsZXQgY29sb3IgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcmlvcml0eS1jb2xvcl1cIikuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICBsZXQgdGFza0pTT04gPSB7XG4gICAgaWQ6IHRhc2suZGF0YXNldC50YXNrSWQsXG4gICAgcHJvamVjdDogdGFzay5kYXRhc2V0LnByb2plY3QsXG4gICAgcHJpb3JpdHk6IENPTE9SX1BSSU9SSVRZX01BUC5nZXQoY29sb3IpLFxuICAgIHRpdGxlOiB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10aXRsZV1cIikuaW5uZXJUZXh0LFxuICAgIGRldGFpbHM6IHRhc2sucXVlcnlTZWxlY3RvcihcIltkYXRhLWRldGFpbHNdXCIpLmlubmVyVGV4dCxcbiAgICBkdWVEYXRlOiB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kdWUtZGF0ZV1cIikuaW5uZXJUZXh0LFxuICB9O1xuICByZXR1cm4gdGFza0pTT047XG59XG4iLCJleHBvcnQgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1jb250YWluZXJcIik7XG5leHBvcnQgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWZvcm1cIik7XG5leHBvcnQgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVwiKTtcbmV4cG9ydCBjb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1saXN0LWNvbnRhaW5lclwiKTtcbmV4cG9ydCBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tYnRuLWNhbmNlbFwiKTtcbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtcHJvamVjdC1kaXZcIik7XG5leHBvcnQgY29uc3QgbmV3UHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1wb3B1cFwiKTtcbmV4cG9ydCBjb25zdCBuZXdQcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI3Byb2plY3QtYnV0dG9ucy13cmFwcGVyXCJcbik7XG5leHBvcnQgY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW5hbWUtaW5wdXRcIik7XG5leHBvcnQgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtY29udGFpbmVyXCIpO1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW5hbWVcIik7XG5leHBvcnQgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclwiKTtcbmV4cG9ydCBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1uYW1lXCIpO1xuZXhwb3J0IGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjcmlwdGlvblwiKTtcbmV4cG9ydCBjb25zdCBkYXRlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kdWUtZGF0ZVwiKTtcbmV4cG9ydCBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJpb3JpdHlcIik7XG5leHBvcnQgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJvamVjdFwiKTtcbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10ZW1wbGF0ZVwiKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0VGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGVtcGxhdGVcIik7XG5leHBvcnQgY29uc3QgdGFza1NhdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tYnRuLXNhdmVcIik7XG5leHBvcnQgY29uc3QgbGVmdE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xlZnQtbWVudVwiKTtcbmV4cG9ydCBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuIiwiZXhwb3J0IGNvbnN0IFBSSU9SSVRZX0NPTE9SX01BUCA9IG5ldyBNYXAoW1xuICBbXCJoaWdoXCIsIFwicmVkXCJdLFxuICBbXCJtZWRpdW1cIiwgXCJ5ZWxsb3dcIl0sXG4gIFtcImxvd1wiLCBcImdyZWVuXCJdLFxuXSk7XG5cbmV4cG9ydCBjb25zdCBDT0xPUl9QUklPUklUWV9NQVAgPSBuZXcgTWFwKFtcbiAgW1wicmVkXCIsIFwiaGlnaFwiXSxcbiAgW1wieWVsbG93XCIsIFwibWVkaXVtXCJdLFxuICBbXCJncmVlblwiLCBcImxvd1wiXSxcbl0pO1xuIiwiaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSUQoKSB7XG4gIHJldHVybiB2NCgpLnNwbGl0KFwiLVwiKS5hdCgtMSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gXCIuL3NjcmlwdHMvZGF0YS9ET01zZWxlY3RvcnMuanNcIjtcbmltcG9ydCBVSSBmcm9tIFwiLi9zY3JpcHRzL1VJLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvbm9ybWFsaXplLmNzc1wiO1xuXG53aW5kb3cub25sb2FkID0gVUkubG9hZEFwcEZyb21Mb2NhbFN0b3JhZ2U7XG5zZWxlY3RvcnMubmFtZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIFVJLmhhbmRsZVRhc2tUaXRsZUlucHV0KTtcbnNlbGVjdG9ycy5uZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5vcGVuTmV3VGFza0Zvcm0pO1xuc2VsZWN0b3JzLnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgVUkudXBkYXRlVG9Eb0xpc3QpO1xuc2VsZWN0b3JzLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuY2xvc2VUYXNrRm9ybSk7XG5zZWxlY3RvcnMudG9kb0xpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLnVwZGF0ZVRhc2spO1xuc2VsZWN0b3JzLmNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLm9wZW5OZXdQcm9qZWN0UG9wVXApO1xuc2VsZWN0b3JzLm5ld1Byb2plY3RCdXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoXG4gIFwiY2xpY2tcIixcbiAgVUkuaGFuZGxlTmV3UHJvamVjdFBvcFVwQWN0aW9uc1xuKTtcbnNlbGVjdG9ycy5sZWZ0TWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuZGlzcGxheUxlZnRNZW51Q29udGVudCk7XG5zZWxlY3RvcnMucHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFxuICBcImNsaWNrXCIsXG4gIFVJLmhhbmRsZVByb2plY3RDb250ZW50QWN0aW9uc1xuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==