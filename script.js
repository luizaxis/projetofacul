const images = [
    '/videoframe/videoframe_4800 (1).png',
    '/videoframe/videoframe_2552.png',
    '/videoframe/videoframe_3074.png',
    '/videoframe/videoframe_1391.png'
];

let currentImageIndex = 0;

setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const imageElement = document.getElementById('image');
    imageElement.src = images[currentImageIndex];
}, 570);


const imagesTop3 = [
    '/videoframe/videoframe_3463.png',
    '/videoframe/videoframe_2411.png',
];

let currentTop3Index = 0;

setInterval(() => {
    currentTop3Index = (currentTop3Index + 1) % imagesTop3.length;
    const top3ImageElement = document.getElementById('imagetop3');
    top3ImageElement.src = imagesTop3[currentTop3Index];
}, 1000);



const imagesTop4 = [
    '/videoframe/videoframe_3463.png',
    '/videoframe/videoframe_2411.png',
];

let currentTop4Index = 0;

setInterval(() => {
    currentTop4Index = (currentTop4Index + 1) % imagesTop4.length;
    const top4ImageElement = document.getElementById('imagetop4');
    top4ImageElement.src = imagesTop4[currentTop4Index];
}, 1000);