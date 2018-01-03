function myCosts(rent, education, food) {
    var total = rent + education + food
    console.log("My costs its: " + total)
    if (total > 2000) {
        console.log("Away to high to live, I need find another job!")

    } else if (total < 1500 || total > 1400) {
        console.log("We are living on the edge")
    }
}

myCosts(450, 300, 700)


function sum(x, y) {
    return x + y
}

var sum = sum(5, 60)
console.log("The sum is: " + sum)