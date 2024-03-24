// Statement & Output Clear
document.getElementById("clear-statement").onclick = function () {
    document.getElementById("statement").innerHTML = ""
}
document.getElementById("clear-output").onclick = function () {
    document.getElementById("output").innerHTML = ""
}

// Concatinate Strings
document.getElementById("concatinate").onclick = function () {
    let w1 = "well";
    let w2 = "done";
    let w3 = "!";
    let sum = (w1 + w2 + w3)
    document.getElementById("statement").innerHTML = '<p> "well" +"done" +"!"</p>'
    document.getElementById("output").innerHTML = sum;
}
// Ask User for name 
document.getElementById("user-name").onclick = function () {
    let fullName = prompt("Enter your name");
    if (fullName == null || fullName.length < 3) {
        alert("Name must be more than 3 letters")
    } else
        document.getElementById("statement").innerHTML = `Name= ${fullName}`
    document.getElementById("output").innerHTML = `<span class="text-success fw-bold" >Your name is very beautiful!</span>`

}
// Comparison operator 
document.getElementById("comparison").onclick = function () {
    let num1 = +prompt("Enter your first number");
    let num2 = +prompt("Enter your second number");
    let sum = ("${num1}" + "${num2}")
    if (num1 == num2) {
        alert("your condition is Right!")

        document.getElementById("statement").innerHTML = `num1=${num1} <br/> num2=${num2} <br/> sum=${sum}`
        document.getElementById("output").innerHTML = `<span class="text-success fw-bold" >your condition is Right!</span>`
    } else {
        alert("your condition is wrong!")

        document.getElementById("statement").innerHTML = `num1=${num1} <br/> num2=${num2} <br/> sum=${sum}`
        document.getElementById("output").innerHTML = `<span class="text-danger fw-bold" >your condition is wrong!</span>`

    }
}
// If Else If 
document.getElementById("if-else-if").onclick = function () {
    let marks = +prompt("Enter your marks")
    if (marks >= 90) {
        alert("Congrates! You got A+")
        document.getElementById("output").innerHTML = `<span class="text-success fw-bold" >Congrates! You got A+</span>`

    } else if (marks >= 80) {
        alert("Congrates! You got A")
        document.getElementById("output").innerHTML = `<span class="text-success fw-bold" >Congrates! You got A</span>`
    } else if (marks >= 70) {
        alert("Congrates! You got B")
        document.getElementById("output").innerHTML = `<span class="text-success fw-bold" >Congrates! You got B</span>`
    } else {
        alert(" You are FAIL!")
        document.getElementById("output").innerHTML = `<span class="text-danger fw-bold" >You are FAIL!</span>`
    }
}
// Testing the sets of conditions
document.getElementById("testing").onclick = function () {
    let age = +prompt("What is your age?")
    let weight = +prompt("What is your weight?")
    if (age <= 40) {
        if (weight <= 75) {
            alert("You are fit")
            document.getElementById("output").innerHTML = `<span class="text-success fw-bold" >You are fit</span>`

        } else if (weight >= 76) {
            alert("You are fat")
            document.getElementById("output").innerHTML = `<span class="text-danger fw-bold" >You are fat</span>`

        }
    }
    else {
        alert("You are old")
        document.getElementById("output").innerHTML = `<span class="text-primary fw-bold" >You are old</span>`
    }

}