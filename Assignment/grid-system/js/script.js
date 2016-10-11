var container = document.querySelector('.container');
var show_baseline_btn = document.querySelector('.btn-show-baseline');
var hide_baseline_btn = document.querySelector('.btn-hide-baseline');
var show_columns_btn = document.querySelector('.btn-show-columns');
var hide_columns_btn = document.querySelector('.btn-hide-columns');
var show_grid_btn = document.querySelector('.btn-show-grid');
var hide_grid_btn = document.querySelector('.btn-hide-grid');


console.log('container: ', container);
console.log('show_baseline_btn: ', show_baseline_btn);
console.log('hide_baseline_btn: ', hide_baseline_btn);
console.log('show_columns_btn: ', show_columns_btn);
console.log('hide_columns_btn: ', hide_columns_btn);
console.log('show_grid_btn: ', show_grid_btn);
console.log('hide_grid_btn: ', hide_grid_btn);

//baseline
show_baseline_btn.onclick = function() {
  var pre_assigned_class = container.getAttribute('class');
  container.setAttribute('class', pre_assigned_class + ' ' + 'show-baseline');
};
hide_baseline_btn.onclick = function() {
  pre_assigned_class = container.getAttribute('class');
  remove_class = pre_assigned_class.replace('show-baseline', '');
  container.setAttribute('class', remove_class.trim());
};

//columns
show_columns_btn.onclick = function() {
  pre_assigned_class = container.getAttribute('class');
  container.setAttribute('class', pre_assigned_class + ' ' + 'show-columns');
};

hide_columns_btn.onclick = function() {
  pre_assigned_class = container.getAttribute('class');
  remove_class = pre_assigned_class.replace('show-columns', '');
  container.setAttribute('class', remove_class.trim());
};

//grid
show_grid_btn.onclick = function() {
  pre_assigned_class = container.getAttribute('class');
  container.setAttribute('class', pre_assigned_class + ' ' + 'show-grid');
};
hide_grid_btn.onclick = function() {
  pre_assigned_class = container.getAttribute('class');
  remove_class = pre_assigned_class.replace('show-grid', '');
  container.setAttribute('class', remove_class.trim());
};
