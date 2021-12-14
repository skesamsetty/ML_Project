// main function to initialize the questionnaire
function init() {

  // Define object that will use d3 to get questions list from
  //   questionslist table in AWS database
  const allQuestions = d3.json("/questionslistDB");

  // (If needed) define object that will use d3 to get responses from
  //  questionnaire table in AWS database
  // const allResponses = d3.json("/questionnaireDB");

  // Query the db and put questions list into myData
  allQuestions.then(function(myData) {
    console.log(myData);

    // Iterate through the myData object and parse out each question number and text
    for (let i = 0; i < myData.length; i++) {
      questionText = Object.values(myData[i])[0];
      questionNum = Object.values(myData[i])[1];
      // console.log(`${questionNum} : ${questionText} with index ${i}`);

      // Append them into an array/list for use in drawing the page with d3?
      
    }
    
  });
};


// Call the initialize function (the last line in this code)
init();