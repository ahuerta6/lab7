function init(){
 //add your javascrip between these two lines of code
  var d1 = document.getElementById('entryinput');
  var d2 = document.getElementById('entrybutton');
  var d3 = document.getElementById('textoutput');
  var name = document.getElementsByTagName("h2");
  d2.addEventListener('click', function(){
    alert(name.value + ":" + d1.value);
    d3.innerHTML = d1.value;
  });
}
 window.addEventListener('load', init);