let video;
let poseNet;
let pose;
let skeleton;


function setup() {
    createCanvas(900, 1000);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

// function findAngle(A1x, A1y, A2x, A2y, B1x, B1y, B2x, B2y) {
//     var dAx = A2x - A1x;
//     var dAy = A2y - A1y;
//     var dBx = B2x - B1x;
//     var dBy = B2y - B1y;
//     var angle = Math.atan2(dAx * dBy - dAy * dBx, dAx * dBx + dAy * dBy);
//     if (angle < 0) { angle = angle * -1; }
//     var degree_angle = angle * (180 / Math.PI);
//     return degree_angle;

// }

function gotPoses(poses) {

    if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;

    }
}

function modelLoaded() {
    console.log('poseNet ready');
    
}





function draw() {
    
    image(video, 0, 0,900,660);
    
    if (pose) {
        
        
        for (let i = 0; i < pose.keypoints.length; i++) {
            let x = pose.keypoints[i].position.x;
            let y = pose.keypoints[i].position.y;
            fill(0, 255, 0);
            ellipse(x, y, 40, 40);
           
        }

        for (let i = 0; i < skeleton.length; i++) {
            let a = skeleton[i][0];
            let b = skeleton[i][1];
            strokeWeight(10);
            stroke(0);
            line(a.position.x, a.position.y, b.position.x, b.position.y);
        }



        // line(pose.leftShoulder.x, pose.leftShoulder.y, pose.leftElbow.x, pose.leftElbow.y);
        // line(pose.leftElbow.x, pose.leftElbow.y, pose.leftWrist.x, pose.leftWrist.y);

        // line(pose.rightShoulder.x, pose.rightShoulder.y, pose.rightElbow.x, pose.rightElbow.y);
        // line(pose.rightElbow.x, pose.rightElbow.y, pose.rightWrist.x, pose.rightWrist.y);

        // line(pose.leftHip.x, pose.leftHip.y, pose.leftKnee.x, pose.leftKnee.y);
        // line(pose.leftKnee.x, pose.leftKnee.y, pose.leftAnkle.x, pose.leftAnkle.y);

        // line(pose.rightHip.x, pose.rightHip.y, pose.rightKnee.x, pose.rightKnee.y);
        // line(pose.rightKnee.x, pose.rightKnee.y, pose.rightAnkle.x, pose.rightAnkle.y);


        // let angleLeftArm = findAngle(pose.leftShoulder.x, pose.leftShoulder.y, pose.leftElbow.x, pose.leftElbow.y, pose.leftElbow.x, pose.leftElbow.y, pose.leftWrist.x, pose.leftWrist.y);
        // let angleRightArm = findAngle(pose.rightShoulder.x, pose.rightShoulder.y, pose.rightElbow.x, pose.rightElbow.y, pose.rightElbow.x, pose.rightElbow.y, pose.rightWrist.x, pose.rightWrist.y);
        // let angleLeftLeg = findAngle(pose.leftHip.x, pose.leftHip.y, pose.leftKnee.x, pose.leftKnee.y, pose.leftKnee.x, pose.leftKnee.y, pose.leftAnkle.x, pose.leftAnkle.y);
        // let angleRightLeg = findAngle(pose.rightHip.x, pose.rightHip.y, pose.rightKnee.x, pose.rightKnee.y, pose.rightKnee.x, pose.rightKnee.y, pose.rightAnkle.x, pose.rightAnkle.y);


        // fill(255,0, 0);
        // textSize(40);
        // text("Angle of Left Arm:" + angleLeftArm, 10, height - 20);
        // text("Angle of Right Arm:" + angleRightArm, 10, height - 70);
        // text("Angle of Left Leg:" + angleLeftLeg, 10, height - 120);
        // text("Angle of Right Leg:" + angleRightLeg, 10, height - 170);

        
    }
}