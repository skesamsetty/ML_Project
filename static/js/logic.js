// main function to initialize the questionnaire
function init() {

  // Objects that will use d3 to get questionslist and responses from Postgres DB
  const allQuestions = d3.json("/questionslistDB");
  // const allResponses = d3.json("/questionnaireDB");  // currently not needed

  // Query the Postgres DB and put questionslist into myData
  allQuestions.then(function(myData) {
    // console.log(myData);
   
    for (let i = 0; i < myData.length; i++) {
      questionText = Object.values(myData[i])[0];
      questionNum  = Object.values(myData[i])[1];
      // console.log(`${questionNum} : ${questionText} : index ${i}`);

      // Add the question and options to the questionnaire HTML
      d3.select(".qform").append("div")
                         .attr("class", `qseparator ${questionNum}`);
      d3.select(`.${questionNum}`).append("p");
      d3.select(`.${questionNum}`).append("p")
                           .text(`${questionNum}: ${questionText}`);
      
      for (let j = 1; j < 6; j++) {
        // The correct label text has to be displayed
        if (j == 1) inputText = "- Disagree"
        else if (j == 2) inputText = "- Slightly disagree"
        else if (j == 3) inputText = "- Neutral "
        else if (j == 4) inputText = "- Slightly agree"
        else inputText = "- Agree";

        // d3.select(".qform").append("input")
        // d3.select(".qform").append("div")
        //                  .attr("class", `qseparator ${questionNum}A${j}`);
        d3.select(`.${questionNum}`).append("input")
                             .attr("type", "radio")
                             .attr("id", `${questionNum}A${j}`)
                             .attr("name", `${questionNum}A`)
                             .attr("value", j);
        // d3.select(".qform").append("label")
        d3.select(`.${questionNum}`).append("label")
                             .attr("for", `${questionNum}A${j}`)
                             .text(inputText);
        // d3.select(".qform").append("br");

        // Pre-selection criteria to use
        if (j == 3) d3.select(`#${questionNum}A${j}`).attr("checked", "");
      } // End for j loop

      d3.select(`${questionNum}`).append("br"); 

    }; // End for i loop

    // Add survey submission button at end of questionnaire
    d3.select(".qform").append("div")
                          .attr("id", "submitbutton")
                        .append("button")
                          .attr("type", "submit")
                          .attr("id", "submit")
                          .text("Submit Questionnaire");
    
  }); // end of d3.json()

}; // end of function init()

// Call the initialize function (the last line in this code)
init();