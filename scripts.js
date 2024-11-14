// Function to toggle the visibility of the options panel for a specific box
function toggleBox(boxId) {
    const box = document.getElementById(boxId);
    const allBoxes = document.querySelectorAll('.box');
    
    // Close all boxes first
    allBoxes.forEach((box) => {
        if (box.classList.contains('expanded')) {
            box.classList.remove('expanded');
        }
    });

    // Now open the clicked box
    box.classList.add('expanded');
}

// Add click event listener to toggle the box expansion
document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener('click', function() {
        toggleBox(box.id);
    });
});

// Function to change color of the box
function changeColor(boxId) {
    const colorSelect = document.getElementById('color' + boxId.charAt(boxId.length - 1));
    const box = document.getElementById(boxId);
    box.style.backgroundColor = colorSelect.value;
}

// Function to change the size of the box
function changeSize(boxId) {
    const sizeSelect = document.getElementById('size' + boxId.charAt(boxId.length - 1));
    const box = document.getElementById(boxId);
    box.style.width = sizeSelect.value;
}
