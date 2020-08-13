"use strict";
var html = document.documentElement,
    canvas = document.getElementById("hero-lightpass"),
    context = canvas.getContext("2d"),
    frameCount = 29,
    currentFrame = function currentFrame(index) {
        return "./image-layers/".concat(index.toString().padStart(4, "0"), ".jpg")
    },
    preloadImages = function preloadImages() {
        for (var i = 1; i < frameCount; i++) {
            var _img;
            (new Image).src = currentFrame(i)
        }
    },
    img = new Image;
img.src = currentFrame(1), canvas.width = 1158, canvas.height = 770, img.onload = function () {
    context.drawImage(img, 0, 0)
};
var updateImage = function updateImage(index) {
    img.src = currentFrame(index), context.drawImage(img, 0, 0)
};
window.addEventListener("scroll", (function () {
    var scrollTop, maxScrollTop, scrollFraction = html.scrollTop / (html.scrollHeight - window.innerHeight),
        frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount));
    requestAnimationFrame((function () {
        return updateImage(frameIndex + 1)
    }))
})), preloadImages();


