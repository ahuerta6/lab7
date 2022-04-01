function init(){
 //add your javascrip between these two lines of code
  var d1 = document.getElementById('entryinput');
  var d2 = document.getElementById('entrybutton');
  alert(d1.value);
  d2.addEventListener('click', myEventFunction);
  d1.attachEvent('onclick', modifyText);
 
 
 
 
 
 
}
 window.addEventListener('load', init);