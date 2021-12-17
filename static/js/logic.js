// main function to initialize the questionnaire
function init() {

  // Objects that will use d3 to get questionslist and responses from Postgres DB
  const allQuestions = d3.json("/questionslistDB");
  // const allResponses = d3.json("/questionnaireDB");  // currently not needed

  // Query the Postgres DB and put questionslist into myData
  allQuestions.then(function(myData) {
    // console.log(myData);
    // Iterate through the myData object and parse out each question number and text
    // var qdict = {};
    // var qform = d3.select(".qform");
    for (let i = 0; i < myData.length; i++) {
      questionText = Object.values(myData[i])[0];
      questionNum = Object.values(myData[i])[1];
      // console.log(`${questionNum} : ${questionText} : index ${i}`);

      // Append both values as key:value into dictionary qdict
      // qdict[questionNum] = questionText;

                //       <p>Choose your favorite Web language:</p>

                // <form>
                //   <input type="radio" id="html" name="fav_language" value="HTML">
                //   <label for="html">HTML</label><br>
                //   <input type="radio" id="css" name="fav_language" value="CSS">
                //   <label for="css">CSS</label><br>
                //   <input type="radio" id="javascript" name="fav_language" value="JavaScript">
                //   <label for="javascript">JavaScript</label>
                // </form>
      
      // Add the question and the 5 options to the questionnaire HTML
      // d3.select(".qform").append("br");
      d3.select(".qform").append("p");
      d3.select(".qform").append("p")
                           .text(`${questionNum}: ${questionText}`);
      for (let j = 1; j < 6; j++) {
        if (j == 1) inputText = " Disagree"
        else if (j == 2) inputText = " Slightly disagree"
        else if (j == 3) inputText = " Neutral "
        else if (j == 4) inputText = " Slightly agree"
        else inputText = " Agree";
        // d3.select(".qform").append("br");
        d3.select(".qform").append("input")
                             .attr("type", "radio")
                             .attr("id", `${questionNum}A${j}`)
                             .attr("name", `${questionNum}A`)
                             .attr("value", j);
        d3.select(".qform").append("label")
                             .attr("for", `${questionNum}A${j}`)
                             .text(inputText);
        d3.select(".qform").append("br");
        if (j == 3) d3.select(`#${questionNum}A${j}`).attr("checked", "");
      }
      // d3.select(".qform").append("input")
      //                       .attr("type", "radio")
      //                       .attr("id", `${questionNum}A1`)
      //                       .attr("name", `${questionNum}A`)
      //                       .attr("value", "1");
      // d3.select(".qform").append("label")
      //                       .attr("for", `${questionNum}A`)
      //                       .text("Disagree");
      // d3.select(".qform").append("br")

      // //                       .attr("id", `${questionNum}P`);
      // // d3.select(`#${questionNum}P`).append("input")
      // d3.select(".qform").append("input")
      //                       .attr("type", "radio")
      //                       .attr("id", `${questionNum}A1`)
      //                       .attr("name", `${questionNum}A`)
      //                       .attr("value", "1")
      //                       .text(" Disagree")
      //                    .append("br");
      // // d3.select(`#${questionNum}P`).append("input")
      // d3.select(".qform").append("input")
      //                                .attr("type", "radio")
      //                                .attr("id", `${questionNum}A2`)
      //                                .attr("name", `${questionNum}A`)
      //                                .attr("value", "2")
      //                                .text(" Slightly disagree")
      //                              .append("br");
      // d3.select(".qform").append("input")
      //                                .attr("type", "radio")
      //                                .attr("id", `${questionNum}A3`)
      //                                .attr("name", `${questionNum}A`)
      //                                .attr("value", "3")
      //                                .attr("checked", "")
      //                                .text(" Neutral")
      //                              .append("br");
      // d3.select(".qform").append("input")
      //                                .attr("type", "radio")
      //                                .attr("id", `${questionNum}A4`)
      //                                .attr("name", `${questionNum}A`)
      //                                .attr("value", "4")
      //                                .text(" Slightly agree")
      //                              .append("br");
      // d3.select(".qform").append("input")
      //                                .attr("type", "radio")
      //                                .attr("id", `${questionNum}A5`)
      //                                .attr("name", `${questionNum}A`)
      //                                .attr("value", "5")
      //                                .text(" Agree")
      //                              .append("br");
      
    }; // End for loop

    // console.log(qdict);

    // Add survey submission button at end of survey
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