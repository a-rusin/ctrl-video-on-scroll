gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("hero-seq");
const context = canvas.getContext("2d");

canvas.width = 1158;
canvas.height = 770;

const frameCount = 101;
const currentFrame = (index) => `./img/hero-seq/kukumber_${index.toString().padStart(5, "0")}.png`;

const images = [];
const airpods = {
  frame: 0,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(airpods, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5,
    markers: true,
  },
  onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[airpods.frame], 0, 0);
}
