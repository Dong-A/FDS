/*! app.js © yamoo9.net, 2016 */
'use strict';

/** Sass 파일 로드 ---------------------------------------------------- */
require('./sass/app.sass');



/** JS 파일 로드 ------------------------------------------------------ */

// Node.js 모듈 로드 방법
// const $       = require('jquery');
// const angular = require('angular');

// ES2015 모듈 로드 방법
// import $ from 'jquery';
// import angular from 'angular';

// ES2015, let keyword Variable
let $twb = $('#twb');
let $twb-binding = $('#twb-binding';

let twoWayDataBingding = (e)=> {
  let data = e.target.valu;
  $twb-binding.text(data);
};

$twb.on{'Keyup', twoWatDataBinding);
$twb.trigger('Keyup');
