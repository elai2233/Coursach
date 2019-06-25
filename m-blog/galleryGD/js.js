;(function gallery(){
    var leftArrow = document.getElementById('leftArrow'),
        rightArrow = document.getElementById('rightArrow'),
        imagenumber = 1,
        maximagenumber = 6;

leftArrow.addEventListener('click', moveBackward);
rightArrow.addEventListener('click', moveForward);

function moveBackward() {
    var image = document.getElementById('image');
	if (imagenumber == 1) imagenumber = maximagenumber+1; 
    imagenumber --;
    image.setAttribute('src', 'img/'+ imagenumber +'gd.jpg');
};
function moveForward() {
    var image = document.getElementById('image');
    imagenumber ++;
    if (imagenumber > maximagenumber) imagenumber = 1;
    image.setAttribute('src', 'img/'+ imagenumber +'gd.jpg');
};

})();