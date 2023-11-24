var coll = document.getElementsByClassName('collapsible')
var i

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click', function () {
		this.classList.toggle('active')
		var content = this.nextElementSibling
		if (content.style.maxHeight) {
			content.style.maxHeight = null
		} else {
			content.style.maxHeight = content.scrollHeight + 'px'
		}
	})
}
// Show password modal
function showPasswordModal() {
	var modal = document.getElementById('passwordModal')
	modal.style.display = 'flex'
}

// Check the entered password
function checkPassword() {
	var password = document.getElementById('password').value
	// Replace 'your_password' with your actual password
	if (password === 'feja2') {
		var modal = document.getElementById('passwordModal')
		modal.style.display = 'none'
		document.body.style.overflow = 'auto' // Enable scrolling
		alert('Jėgelė!!!')
	} else {
		alert(
			'Ne, ne, ne. Bloooooogai!!! Net nebandyk dar kartą, nes tikrai nepavyks! Ar pavyks? Tai apsispręsk gal kąąą?',
		)
		document.getElementById('password').value = '' // Clear the input field
		window.location.href = window.location.href
	}
}

// Blur background on modal display
document
	.getElementById('passwordModal')
	.addEventListener('click', function (e) {
		if (e.target.id === 'passwordModal') {
			document.body.style.overflow = 'hidden' // Disable scrolling
		}
	})

// Close modal if Escape key is pressed
document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape') {
		var modal = document.getElementById('passwordModal')
		modal.style.display = 'none'
		document.body.style.overflow = 'auto' // Enable scrolling
	}
})

// Close modal if close button is clicked
document
	.querySelector('.password-modal-content .password-submit')
	.addEventListener('click', function () {
		var modal = document.getElementById('passwordModal')
		modal.style.display = 'none'
		document.body.style.overflow = 'auto' // Enable scrolling
	})

// Call showPasswordModal function when the window has finished loading
window.onload = function () {
	showPasswordModal()
}
