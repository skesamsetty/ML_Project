// Create a questionnaire object from the database containing all survey data
d3.json("/testconnect").then(function(testobject) {
  console.log(testobject);
  d3.json("/questionnaire").then(function(questionnaireDF) {
    console.log(questionnaireDF)

    
  });
});