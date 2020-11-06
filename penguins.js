var penguinPromise = d3.json("classData.json");
var drawTable = function(thePenguins){
    var rows = d3.select("tbody")
    .selectAll("tr")
    .data(thePenguins)
    .enter()
    .append("tr")

    rows.append("td")
        .append("img")
        .attr("src", getImage);

    rows.append("td")
        .text(getQuizAvg)
        .attr("class", "quiz")
    
    rows.append("td")
        .text(getHomeworkAvg)
        .attr("class", "homework")
    
    rows.append("td")
        .text(getTestAvg)
        .attr("class", "test")
    
    rows.append("td")
        .text(getFinalAvg)
        .attr("class", "final")
    
  
    
    
}

var successFCN = function(thePenguins) {
    console.log(thePenguins);
    d3.selectAll("h1")
    .text("Penguins");
    drawTable(thePenguins);
    initHeaders(thePenguins);}
    


var failFCN = function(errMessage) {
    console.log("failure", errMessage);
    d3.selectAll("h1")
    .text("File not found");
    }
penguinPromise.then(successFCN, failFCN)

var getImage = function(penguin){
    return "imgs/" + penguin.picture;
}
var getQuizGrade = function(quiz){
    return quiz.grade
}
var getQuiz = function(penguin){
    return penguin.quizes.map(getQuizGrade)
}
var getQuizAvg = function(penguin){
    return d3.mean(getQuiz(penguin))
}
var getHomeworkGrade = function(homework){
    return homework.grade
}
var getHomework = function(penguin){
    return penguin.homework.map(getHomeworkGrade)
}
var getHomeworkAvg = function(penguin){
    return d3.mean(getHomework(penguin))
}
var getTestGrade = function(test){
    return test.grade
}
var getTest = function(penguin){
    return penguin.test.map(getTestGrade)
}
var getTestAvg = function(penguin){
    return d3.mean(getTest(penguin))
}
var getFinalGrade = function(final){
    return final.grade
}
var getFinal = function(penguin){
    return penguin.quizes.map(getFinalGrade)
}
var getFinalAvg = function(penguin){
    return d3.mean(getFinal(penguin))
}

var clearTable = function() {
    d3.selectAll("tbody tr")
        .remove();
}

var initHeaders = function(thePenguins) {
    d3.select("#quiz")
        .on("click", function(){
        console.log("clicked quiz");
        thePenguins.sort(function(a,b) {
            var av1 = getQuizAvg(a);
            var av2 = getQuizAvg(b);
            if (av1 < av2) {return -1;}
            else if (av1==av2) {return 0;}
            else {return 1;}
        });
        clearTable();
        drawTable(thePenguins);
        d3.selectAll(".quiz")
            .attr("class", "selected");
    })
    d3.select("#hwk")
        .on("click", function(){
        console.log("clicked homework");
        thePenguins.sort(function(a,b) {
            var av3 = getHomeworkAvg(a);
            var av4 = getHomeworkAvg(b);
            if (av3 < av4) {return -1;}
            else if (av3==av4) {return 0;}
            else {return 1;}
        });
        clearTable();
        drawTable(thePenguins);
        d3.selectAll(".homework")
            .attr("class", "selected");
    })
     d3.select("#test")
        .on("click", function(){
        console.log("clicked test");
        thePenguins.sort(function(a,b) {
            var av5 = getTestAvg(a);
            var av6 = getTestAvg(b);
            if (av5 < av6) {return -1;}
            else if (av5==av6) {return 0;}
            else {return 1;}
        });
        clearTable();
        drawTable(thePenguins);
        d3.selectAll(".test")
            .attr("class", "selected");
    })
     d3.select("#final")
        .on("click", function(){
        console.log("clicked final");
        thePenguins.sort(function(a,b) {
            var av7 = getFinalAvg(a);
            var av8 = getFinalAvg(b);
            if (av7 < av8) {return -1;}
            else if (av7==av8) {return 0;}
            else {return 1;}
        });
        clearTable();
        drawTable(thePenguins);
        d3.selectAll(".homework")
            .attr("class", "selected");
    })
}