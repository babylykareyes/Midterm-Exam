function Generate()
{
    var random = Math.random()*10;
    random = Math.floor (random)+1;

    if (random == 1)
    {document.querySelector("image").style.background = "darkblue";}
    else if (random == 2) {document.querySelector(".image").style.background = "peachpuff";}
    else if (random == 3) {document.querySelector(".image").style.background = "darkgreen";}
    else if (random == 4) {document.querySelector(".image").style.background = "violet";}
    else if (random == 5) {document.querySelector(".image").style.background = "orangered";}
    else if (random == 6) {document.querySelector(".image").style.background = "red";}
    else if (random == 7) {document.querySelector(".image").style.background = "darkgoldenrod";}
    else if (random == 8) {document.querySelector(".image").style.background = "crimson";}
    else if (random == 9) {document.querySelector(".image").style.background = "chartreuse";}
    else
    {document.querySelector("image").style.background = "yellow";}
}

function Show()
{
    var color = document.querySelector("#select-colors").value;
    document.querySelector(".image").style.backgroundColor = color;
}

function Reset()
{
    document.querySelector(".image").style.backgroundColor = "white";
}

