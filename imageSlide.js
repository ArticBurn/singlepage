var noImg = 5;
var intSecond = 5;

function slide() {
	Show = 0;
	Vect = new Array(noImg + 10);
	Vect[0] = document.getElementById("img1");
    Vect[0].style.visibility = "visible";

    document.getElementById("indicator" + 0).style.visibility = "visible";

    for (var i = 1; i < noImg; i++)
            {
                Vect[i] = document.getElementById("img" + (i + 1));
                document.getElementById("indicator" + i).style.visibility = "visible";
            }
    document.getElementById("indicator" + 0).style.backgroundColor = "rgba(242, 38, 19, 0.90)";
    document.getElementById("caption" + Show).style.visibility = "visible"; 

    mytime = setInterval(Timer, intSecond * 1000);    
}   

function Timer(){
    Show++;
        if (Show == noImg)
    		Show = 0;
    		Effect();
}

function next(){
    Show++;
    if (Show == noImg)
     	Show = 0;
        Effect();

        clearInterval(mytime);
        mytime = setInterval(Timer, intSecond * 1000);
}

function prev(){
    Show--;
    if (Show == -1)
     	Show = noImg -1;
        Effect();

        clearInterval(mytime);
        mytime = setInterval(Timer, intSecond * 1000);
}

function Effect(){
    for (var i = 0; i < noImg; i++){
        Vect[i].style.opacity = "0";   
        Vect[i].style.visibility = "hidden";

        document.getElementById("indicator" + i).style.backgroundColor = "rgba(0, 0, 0, 0.70)";
        document.getElementById("caption" + i).style.visibility = "hidden";
        }
        Vect[Show].style.opacity = "1";
        Vect[Show].style.visibility = "visible";
        document.getElementById("indicator" + Show).style.backgroundColor = "rgba(242, 38, 19, 0.90)";
        document.getElementById("caption" + Show).style.visibility = "visible";
}