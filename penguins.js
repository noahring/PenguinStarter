var penguinPromise = d3.json("classData.json");

var successFCN = function(thePenguins) {
    console.log(thePenguins);
    d3.selectAll("h1")
    .text("Penguins");
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
    
    rows.append("td")
        .text(getHomeworkAvg)
    
    rows.append("td")
        .text(getTestAvg)
    
    rows.append("td")
        .text(getFinalAvg)
    
  
    
    
}

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


 
