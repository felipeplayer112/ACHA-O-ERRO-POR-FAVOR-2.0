music = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
scoreRightWrist = 0;
scoreLeftWrist = 0;

function preload() {
   music = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    PoseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log("Modelo iniciado!");
    window.alert("Modelo iniciado!");
    poseNet.on('pose', gotPoses);
}

function gotPoses() {
    
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    music.play();
}