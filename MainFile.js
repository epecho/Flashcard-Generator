var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var BasicJSON = require("./BasicJSON");
var ClozeJSON = require("./ClozeJSON");
var inquirer = require('inquirer');


var counter = 0;


// function askQuestion() {
//   if (counter < BasicJSON.length) {
//     // "let" is equal to the "var" key word
//     let presidents = new BasicCard(BasicJSON[counter].front, BasicJSON[counter].back);
//
//     inquirer.prompt([ /* Pass your questions in here */ {
//       name: 'questions',
//       message: presidents.front
//
//     }]).then(function(answers) {
//       // Use user feedback for... whatever!!
//       if (answers.questions.toLowerCase() === presidents.back.toLowerCase()) {
//         console.log('You are Correct');
//       } else {
//         console.log('You are Wrong');
//       }
//       counter++;
//       console.log('=======================================================================================================');
//       askQuestion();
//
//     });
//   }
// }
// askQuestion();


function askQuestionCloze() {
  if (counter < ClozeJSON.length) {
    // "let" is equal to the "var" key word
    let presidentsCloze = new ClozeCard(ClozeJSON[counter].text, ClozeJSON[counter].cloze);

    inquirer.prompt([ /* Pass your questions in here */ {
      name: 'questionsCloze',
      message: presidentsCloze.cloze

    }]).then(function(answers) {
      // Use user feedback for... whatever!!
      if (answers.questionsCloze.toLowerCase() == presidentsCloze.cloze.toLowerCase()) {
        console.log('You are Correct');
      } else {
        console.log('You are Wrong');
      }
      counter++;
      console.log('=======================================================================================================');
    });
  }
}
askQuestionCloze();
