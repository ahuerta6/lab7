function init(){
 //add your javascrip between these two lines of code
  var d1 = document.getElementById('entryinput');
  var d2 = document.getElementById('entrybutton');
  var d3 = document.getElementById('textoutput');
  var n = document.getElementById('na');
  d2.addEventListener('click', function(){
    n.innerHTML = "Avery Huerta:";
    alert(n.value + ": " + d1.value);
    d3.innerHTML = d1.value;
  });
}
 window.addEventListener('load', init);