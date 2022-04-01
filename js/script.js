function init(){
 //add your javascrip between these two lines of code
  var d1 = document.getElementById('entryinput');
  alert(d1.value);
  d1.addEventListener('onclick', myEventFunction);
 
 
 
 
 
 
}
 window.addEventListener('load', init);