// Create a questionnaire object from the database containing all survey data
d3.json("/questionslist").then(function(questionsObject) {
  console.log(questionsObject);
  // Include if querying for the questionnaire data
  // d3.json("/questionnaire").then(function(questionnaireDF) {
  //   console.log(questionnaireDF)
  // });
});