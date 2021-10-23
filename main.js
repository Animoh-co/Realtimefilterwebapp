noseX = 0;
noseY = 0;



function preload(){
mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
Lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
Cap = loadImage("https://i.postimg.cc/W32mw2bD/Whitecap-removebg-preview.png");
}


function setup(){
Canvas1 = createCanvas(450,450);
Canvas1.center();
video = createCapture(VIDEO);
    video.hide();
    
    Posenet = ml5.poseNet(video, Modelloaded);
    Posenet.on('pose', gotresult);
}

function Modelloaded(){
    console.log("model has been loaded");
}


function gotresult(result){
    if(result.length > 0)
    {
      console.log(result);
      noseX = result[0].pose.nose.x;
      noseY = result[0].pose.nose.y;
    
    }
    }



function draw(){
    image(video, 0, 0, 450, 450);
    if(document.getElementById("buttonmushtache").checked){
        image(mustache, noseX-120, noseY-15, 50,50);
    }
        if(document.getElementById("buttonLipstick").checked){
            image(Lipstick, noseX-120, noseY, 50,50);
        }
            if(document.getElementById("buttonCap").checked){
                image(Cap, noseX-160, noseY-235, 130,130);
    }
}

function takeimage(){
    save("myimage.png");
}



