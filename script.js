//variables

var cpu = 0; //increment this by one every click
var auto_cpu = 0; //automatically cpu once per second
var cost = 1; //the cost of this should increase exponentially
var scost = 1;
var icost = 1;
var cost1 = 100;
var upgrade_speed = 0; //the level of the speed up upgrade
var cpu_rate = 1000; //ms between each autocpu
var interval_auto; //storing our interval here so we can update it
var cpu_increment = 10000000000000; //how many cpu per click
//functions
var speedupPrice = 1;
var cost2=1000;
var cost3=10000;
var cost4=100000;
function update_total_cpu() { //updates the number of cpu   
    var e = document.getElementById("total_cpu");
    e.innerHTML = cpu;
}
function update_clickpow() {
  //updates the cpu per click   
    var e = document.getElementById("clickpow");
    e.innerHTML = cpu_increment;
}
function buy_something(c, button) {
    if (cpu < c) {
        button.className = 'btn btn-danger';
        setTimeout(function() {
            var e = document.getElementsByClassName("btn-danger")[0];
            //e.className = 'btn btn-success';
        }, 1000);
        return false;
    }
    cpu -= c;
    return true;
}

function update_workers() {
    document.getElementById("time_period").innerHTML = parseFloat(cpu_rate / 1000.0).toFixed(2);
    clearInterval(interval_auto);
    interval_auto = setInterval(function() {
        cpu += auto_cpu;
        update_total_cpu();
    }, cpu_rate);
}
function btnClick(){
  cpu = parseFloat(cpu) + parseFloat(cpu_increment);
    update_total_cpu();
}
function autoclicker_button(){
  if (!buy_something(cost, this)) return;
    auto_cpu++;
    cost*=1.1; //new cost
		cost = Math.ceil(cost);
    update_total_cpu();
    update_workers();
    var e = document.getElementById("cpu_per_second");
    e.innerHTML = auto_cpu;
    var e2 = document.getElementById("buy_cpu");
    e2.innerHTML = 'Buy for ' + cost;
}
function speedup_button(){
  //var upgrade_cost = speedupPrice;
    if (!buy_something(scost, this)) return;
    scost*=2;
    scost=Math.ceil(scost);
    cpu_rate = cpu_rate * 0.90;
    update_workers();
    var e2 = document.getElementById("upgrade_speed");
    e2.innerHTML = 'Buy for ' + scost;
    
}
function cpu_Increment(){
  //var upgrade_cost = cpu_increment;
    if (!buy_something(icost, this)) return;
    cpu_increment++/*=floor(Math.pow(cpu_increment,2)/2)+1;*/
    icost*=1.2;
    icost=Math.ceil(icost);
    update_clickpow();
    update_total_cpu();
    //update_workers();
    //var level = 0;
    var e2 = document.getElementById("increase_cpu");
    e2.innerHTML = 'Buy for ' + icost;

}

function lvl1()
{
  if (!buy_something(cost1, this)) return;
document.body.style.backgroundImage = "url(https://s3.amazonaws.com/bwpaperclip-production/auction_images/assets/002/807/289/web_large/computers1.jpg?1515636328)";
document.getElementById("myimage").src= "https://s3.amazonaws.com/bwpaperclip-production/auction_images/assets/002/807/289/web_large/computers1.jpg?1515636328"

  
  console.log();
    auto_cpu+=10;
    cost1 *=100; //new cost
    var e = document.getElementById("cpu_per_second");
    e.innerHTML = auto_cpu;
    update_total_cpu();
    var e3 = document.getElementById("buy_1");
    e3.parentElement.removeChild(e3);
}

function lvl2()
{
  if (!buy_something(cost2, this)) return;
  document.getElementById("myimage").src= "https://static.turbosquid.com/Preview/001174/372/PK/DHQ.jpg"

  
    auto_cpu+=100;
    cost2 *= 100 //new cost
    var e = document.getElementById("cpu_per_second");
    e.innerHTML = auto_cpu;
    var e3 = document.getElementById("buy_2");
    e3.parentElement.removeChild(e3);
}

function lvl3()
{
  if (!buy_something(cost3, this)) return;
  document.getElementById("myimage").src= "https://images.techhive.com/images/article/2015/03/classicpcprograms_primary-100154366-large-100575148-large.jpg"

  
    auto_cpu+=1000;
    cost3 *= 100 //new cost
    var e = document.getElementById("cpu_per_second");
    e.innerHTML = auto_cpu;
    var e3 = document.getElementById("buy_3");
    e3.parentElement.removeChild(e3);
}

function lvl4()
{
  if (!buy_something(cost4, this)) return;
  document.getElementById("myimage").src= "https://cdn.vox-cdn.com/thumbor/F397Vv5E5BMDdfP8JaQBAxHn-bE=/0x0:5500x3667/1200x800/filters:focal(2050x1464:2930x2344)/cdn.vox-cdn.com/uploads/chorus_image/image/64785002/GettyImages_917581126.0.jpg"

  console.log();
    auto_cpu+=100000;
    cost1 *=100; //new cost
    var e = document.getElementById("cpu_per_second");
    e.innerHTML = auto_cpu;
    update_total_cpu();
    var e3 = document.getElementById("buy_4");
    e3.parentElement.removeChild(e3);
}
function lvl6()
{
  if (!buy_something(1000000000, this)) return;
  document.getElementById("myimage").src= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkdmJc92xLrTKq-uheNuR1muUk33Via1Lf62HzxWY1d6DbA7Jh"

  console.log();
    auto_cpu+=500000000;
    var e = document.getElementById("cpu_per_second");
    e.innerHTML = auto_cpu;
    update_total_cpu();
    var e3 = document.getElementById("buy_6");
}
//Start Autoclickers
//update_workers();

function set_cookie(cookie_name, value) {
    expiry = new Date();
    expiry.setTime(new Date().getTime() + (10 * 60 * 1000));
    var c_value = escape(btoa(JSON.stringify(value))) + "; expires=" + expiry.toUTCString();
    document.cookie = cookie_name + "=" + c_value;
}

function get_cookie(cookie_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + cookie_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(cookie_name + "=");
    }
    if (c_start == -1) return false;
    c_start = c_value.indexOf("=", c_start) + 1;
    var c_end = c_value.indexOf(";", c_start);
    if (c_end == -1) {
        c_end = c_value.length;
    }
    c_value = atob(unescape(c_value.substring(c_start, c_end)));
    return JSON.parse(c_value);
}

function win()
{
  if (!buy_something(10000000, this)) return;
  auto_cpu+=30000;
  alert("YOU WIN! Continue to grow and develop yourself");
  document.getElementById("myimage").src= "https://cdn.images.express.co.uk/img/dynamic/151/590x/artificial-intelligence-733033.jpg"

  var e3 = document.getElementById("buy_5");
    e3.parentElement.removeChild(e3);
}