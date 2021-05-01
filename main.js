function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modeloaded)
    posenet.on('pose', gotPoses)

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        console.log("hatX=" + results[0].pose.rightEar.x);
        console.log("hatX=" + results[0].pose.leftEar.x);
        console.log("hatY=" + results[0].pose.rightEar.y);
        console.log("hatY=" + results[0].pose.leftEar.y);

    }

}

function modeloaded() {
    console.log("posenet worked");
}

function draw() {
    image(video, 0, 0, 300, 300)
}

function takeSnap() {
    save("face.png");
}