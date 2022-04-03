function init(){
 //add your javascrip between these two lines of code
  var d1 = document.getElementById('entryinput');
  var d2 = document.getElementById('entrybutton');
  var d3 = document.getElementById('textoutput');
  d2.addEventListener('onclick', function(){
    alert(d1.value);
    d1.innerHTML = ''
  });
  d1.attachEvent('onclick', modifyText);
 
 
 
 
 
 
}
 window.addEventListener('load', init);