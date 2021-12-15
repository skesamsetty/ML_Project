// main function to initialize the questionnaire
function init() {

  // Objects that will use d3 to get questionslist and responses from Postgres DB
  const allQuestions = d3.json("/questionslistDB");
  // const allResponses = d3.json("/questionnaireDB");  // currently not needed

  // Query the Postgres DB and put questionslist into myData
  allQuestions.then(function(myData) {
    // console.log(myData);
    // Iterate through the myData object and parse out each question number and text
    var qdict = {};
    var qform = d3.select(".survey");
    for (let i = 0; i < myData.length; i++) {
      questionText = Object.values(myData[i])[0];
      questionNum = Object.values(myData[i])[1];
      // console.log(`${questionNum} : ${questionText} : index ${i}`);

      // Append both values as key:value into dictionary qdict
      qdict[questionNum] = questionText;
      
      // Add line into HTML for the question
      d3.select(".survey").append("label")
                            .attr("for", `${questionNum}A`)
                            .text(`${questionNum}: ${questionText}`);
      d3.select(".survey").append("p")
                            .attr("id", `${questionNum}P`)
                          .append("input")
                            .attr("type", "radio")
                            .attr("id", `${questionNum}A1`)
                            .attr("name", `${questionNum}A`)
                            .attr("value", "1")
                            .text(" Disagree");
      d3.select(`#${questionNum}P`).append("input")
                                     .attr("type", "radio")
                                     .attr("id", `${questionNum}A2`)
                                     .attr("name", `${questionNum}A`)
                                     .attr("value", "2")
                                     .text(" Slightly disagree");
                                  //  .append("br");
      d3.select(`#${questionNum}P`).append("input")
                                     .attr("type", "radio")
                                     .attr("id", `${questionNum}A3`)
                                     .attr("name", `${questionNum}A`)
                                     .attr("value", "3")
                                     .attr("checked", "")
                                     .text(" Neutral");
                                  //  .append("br");
      d3.select(`#${questionNum}P`).append("input")
                                     .attr("type", "radio")
                                     .attr("id", `${questionNum}A4`)
                                     .attr("name", `${questionNum}A`)
                                     .attr("value", "4")
                                     .text(" Slightly agree");
                                  //  .append("br");
      d3.select(`#${questionNum}P`).append("input")
                                     .attr("type", "radio")
                                     .attr("id", `${questionNum}A5`)
                                     .attr("name", `${questionNum}A`)
                                     .attr("value", "5")
                                     .text(" Agree");
                                  //  .append("br");
      
    }; // End for loop

    // console.log(qdict);

    // Add survey submission button at end of survey
    d3.select(".survey").append("div")
                          .attr("id", "submitbutton")
                        .append("button")
                          .attr("type", "submit")
                          .attr("id", "submit")
                          .text("Submit Questionnaire");
    
  }); // end of d3.json()

}; // end of function init()

// Call the initialize function (the last line in this code)
init();