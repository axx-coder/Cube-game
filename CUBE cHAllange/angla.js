var randomnumber=Math.random()*6;
var randomn=randomnumber+1;
var n=Math.floor(randomn);
var changesource="imagesss/Dice%20" + n +".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",changesource);



var randomnumber2=Math.random()*6;
var randomn2=randomnumber2+1;
var m=Math.floor(randomn2);
var changesource2="imagesss/Dice%20" + m +".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",changesource2);




if(m>n)
	{
		document.querySelector("h1").innerHTML="Player 2 wins";
	}
else if(m<n)
	{
		document.querySelector("h1").innerHTML="Player 1 wins";
	}
else if(m==n)
	{
		document.querySelector("h1").innerHTML="Draw";
	}