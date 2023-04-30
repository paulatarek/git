$(document).ready(function(){

$(window).scroll(function(){
  var scr =  $(window).scrollTop()
  console.log(scr)
  if(scr > 300){

    document.getElementById("h1").style.opacity="1"
    document.getElementById("p").style.opacity="1"
    document.getElementById("card").style.opacity="1"

  }else{
    document.getElementById("h1").style.opacity="0"
    document.getElementById("p").style.opacity="0"
    document.getElementById("card").style.opacity="0"
  }

})

})


var arr = ["pexels-elti-meshau-333850.jpg","pexels-philippe-donn-1169754.jpg","pexels-tomaz-barcellos-2746187.jpg","pexels-toni-cuenca-619419.jpg"]
var text =["Coupons and Deals From Stores and Brands You Love","Patio Umbrella Deals (Up to 64% Off) to Shop This Weekend","You Don't Want to Miss These +60% Off Kate Spade Savings","40+ Spots to Enjoy Free Treats, Brunch Specials "]


var x = 0
var y = 0
setInterval(function()  {
 
  document.getElementById("js").style.backgroundImage="url("+arr[x++]+")"
  if(x>arr.length-1){
x=0
  }
}, 5000);
setInterval(function()  {
 
  document.getElementById("hh").innerHTML=text[y++]
 
  if(y>arr.length-1){
y=0
  }
}, 5000);