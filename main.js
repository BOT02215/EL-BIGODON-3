nose_x = 0
nose_y = 0

function preload() {
    mustache = loadImage("mustache.webp")
}

function setup() {
    canvas = createCanvas(400, 300)
    canvas.center()
    filtro = createCapture(VIDEO)
    filtro.size(400, 300)
    filtro.hide()

    poseNet = ml5.poseNet(filtro, modelLoaded)
    poseNet.on("pose", result)
}

function modelLoaded() {
    console.log("Modelo carregado")
}

function result(result) {
    if (result.length > 0) {
        console.log(result)
        nose_x = result[0].pose.nose.x
        nose_y = result[0].pose.nose.y
    }
}

function draw() {
    image(filtro, 0, 0, 400, 300)

    image(mustache, nose_x - 50, nose_y - 20, 100, 90)
}

function takeSnaphot() {
    save("ElBigodon.png")
}
