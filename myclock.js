function showTime() {
   var date = new Date();
   var h = date.getHours();
   var m = date.getMinutes();
   var s = date.getSeconds();
   var session = "AM";
   if (h==12){
      session = "PM";
   }
   if (h == 0) {
      h = 12;
   }
   if (h > 12) {
      h = h - 12;
      session = "PM";
   }
   h = (h < 10) ? "0" + h : h;
   m = (m < 10) ? "0" + m : m;
   s = (s < 10) ? "0" + s : s;
   var time = h + ":" + m + ":" + s + session;
   document.getElementById("MyClockDisplay").innerText = time;
   document.getElementById("MyClockDisplay").textcontent = time;
   setTimeout(showTime, 1000);
}
function showTime24() {
   var date = new Date();
   var h = date.getHours();
   var m = date.getMinutes();
   var s = date.getSeconds();

   h = (h < 10) ? "0" + h : h;
   m = (m < 10) ? "0" + m : m;
   s = (s < 10) ? "0" + s : s;
   var time = h + ":" + m + ":" + s;
   document.getElementById("MyClockDisplay24").innerText = time;
   document.getElementById("MyClockDisplay24").textcontent = time;
   setTimeout(showTime24, 1000);
   return h;
}
function partyImage(){
   var btnval= document.getElementById("partytime").value;
   if(btnval=="partytime")
   {
      document.getElementById('default').src = 'partytime.jpg';
      document.getElementById('partytime').value = 'partyover';
   }
   else{
      document.getElementById('default').src = 'default.jpg';
      document.getElementById('partytime').value = 'partytime';      
   }
}
function myfunction(){
   var x = document.getElementById("time1");
   var y = document.getElementById("time2");
   var z = document.getElementById("time3");
   var selx = x.options[x.selectedIndex].value;
   var sely = y.options[y.selectedIndex].value;
   var selz = z.options[z.selectedIndex].value;
   var currtime = showTime24();
   if(currtime == selx.substring(0,2)){
      document.getElementById("default").src='wakeup.jpg';
      return true;
   }
   if(currtime == sely.substring(0,2)){
      document.getElementById("default").src='lunch.jpg';
      return true;
   }
   if(currtime == selz.substring(0,2)){
      document.getElementById("default").src='sleep.jpg';
      return true;
   }
   document.getElementById("default").src='default.jpg';

}
