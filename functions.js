function myCosts(rent, education, food) {
    var total = rent + education + food
    console.log("My costs its: " + total)
    if (total > 2000) {
        console.log("Away to high to live, I need find another job!")

    } else if (total < 1500) {
        console.log("We are living on the edge")
    }
}

myCosts(450, 300, 700)