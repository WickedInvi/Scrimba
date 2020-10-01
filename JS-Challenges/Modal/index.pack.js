const overlay = document.getElementById('overlay');

document.getElementById('open-modal').addEventListener('click', () => {
	overlay.style.display = 'block';
});

document.getElementById('close-modal').addEventListener('click', () => {
	overlay.style.display = 'none';
});

// Added this as extra to the challenge.

window.onclick = (event) => {
	if (event.target == overlay) {
		overlay.style.display = 'none';
	}
	console.log(event);
};
