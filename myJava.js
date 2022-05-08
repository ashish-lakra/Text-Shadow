const container = document.querySelector(".container");
const text = container.querySelector("h1");

function shadow(e) {
	const { offsetWidth: width, offsetHeight: height } = container;
	let { offsetX: x, offsetY: y } = e;
	if (this !== e.target) {
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}
	const movement = 100;
	const xMovement = (x / width) * movement - movement / 2;
	const yMovement = (y / width) * movement - movement / 2;
	text.style.textShadow = `  
    ${xMovement}px ${yMovement}px 0 rgba(218, 83, 44, 0.7),
    ${xMovement * -1}px ${yMovement}px 0 rgba(45, 137, 239, 0.6),
    ${xMovement}px ${yMovement * -1}px 0 rgba(96, 60, 186, 0.5),
    ${xMovement * -1}px ${yMovement * -1}px 0 rgba(0, 163, 0, 0.4)`;
	//add as many shadows as you like 🙂
}

container.addEventListener("mousemove", shadow);
