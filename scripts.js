function getRandomColor() {
    // Generates a random hex code color
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function addSquare() {
    let allSquares = document.getElementsByClassName("square")
    let squareIds = []
    for (let item of allSquares) {
        squareIds.push(item.id)
    }
    let totalSquares = allSquares.length
    let square = document.createElement("div")
    square.className = "col-1 square"
    square.id = totalSquares + 1
    // Continuously increment id if the id already exists until a unique one is found
    while(squareIds.includes(square.id)) {
        square.id++
    }
    square.addEventListener('mouseover', function() {
        let idText = document.createElement('span');
        idText.textContent = this.id;
        this.appendChild(idText);
    });
    square.addEventListener('mouseout', function() {
        this.innerHTML = ''; // Clear the square's innerHTML, removing the ID text
    });
    square.addEventListener('click', function() {
        this.style.backgroundColor = getRandomColor()
    });
    square.addEventListener('dblclick', function() {
        if(this.id % 2 == 0) {
            // Remove square after if even
            if (this.nextElementSibling) {
                this.nextElementSibling.remove();
            } else {
                alert(`No square after square with id: ${this.id}`)
            }
        } else {
            // Remove square before if odd
            if (this.previousElementSibling) {
                this.previousElementSibling.remove();
            } else {
                alert(`No square before square with id: ${this.id}`)
            }
        }
    });
    row.appendChild(square)
}

let button = document.createElement("button")
button.appendChild(document.createTextNode("Add Square"))
button.addEventListener('click', addSquare)
let container = document.createElement("div")
container.className = "container-fluid"
let row = document.createElement("div")
row.className = "row"
container.appendChild(row)


window.addEventListener('DOMContentLoaded', function() {
    document.body.appendChild(button)
    document.body.appendChild(container)
});