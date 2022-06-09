//let x = prompt("Width:",400);
//let y = prompt("Height:",400);
//let x=200;
//let y=200;

let palettes = ['#4a4e4d', '#0e9aa7', '#3da4ab', '#f6cd61', '#fe8a71'];
//let palettes = ['#ee4035' , '#f37736' , '#fdf498' , '#7bc043' , '#0392cf']    

function mysetup() {
    x = parseInt(document.getElementById('height').value);
    y = parseInt(document.getElementById('width').value);
    let rectWidth = x / 10;
    let rectHeight = y / 10;

    createCanvas(x, y);
    //background(220);
    tileGenerator(x, y, rectWidth, rectHeight)
}

//generate in loop
function draw() {
}


function tileGenerator(x, y, rectWidth, rectHeight) {
    for (let i = 0; i < x; i = i + 10) {
        for (let j = 0; j < y; j = j + 10) {
            //select one out of 4 random colors
            randomColor = palettes[round(Math.random() * 4)];

            fill(color(randomColor));
            rect(i, j, rectWidth, rectHeight);
        }
    }
}

function download(){
    //get the first and only cnavas
    let canvas = document.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    
    let downloaderLink = document.getElementById("downloader");
    //set image as url
    downloaderLink.href=image;
    //assign image download name
    downloaderLink.download="generativeArtNo"+round(Math.random()*10000);
    //trigger click to download
    document.getElementById("downloader").click();    
  };