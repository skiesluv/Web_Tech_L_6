var images = ["../images/427393.jpg", "../images/2848170.jpg", "../images/mini-cat.jpg", "../images/ducky.gif"];

var index = 0;

var the_image = document.getElementById("mainImg");
the_image.src = images[0];

function show_image(direction)
{
  if (direction == "left")
  {
    index--;
  }
  else
  {
    index++;
    index %= images.length;
  }
  
  if (index < 0)
  {
    index = images.length - 1;
  }
  
  the_image.src = images[index];
}

function smallImgChange(index) {
  the_image.src = images[index];
}