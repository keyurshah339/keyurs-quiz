var score=0;
function yo(question, answer)
{var readlineSync = require('readline-sync');
var reply = readlineSync.question(question);
if(reply==answer)
score++;
else
score--;

}

var pikachu = [{ 
  question:"Where is keyur from? \n 1).jabalpur \n 2).indore \n 3).bhopal\n",
  answer:"jabalpur"
},
{
  question:"\nFrom where Keyur completed his engineering?\n 1).bangalore \n 2).mumbai \n 3).indore\n",
  answer:"bangalore"

},

{question:"\nWhat is Keyurs current age? \n 1).21 \n 2).22 \n 3).23\n",
  answer:"22"}]

  var zapdos = [{ 
  question:"Whats keyur favourite food?\n 1).chinese \n 2).italian \n 3).mexican \n ",
  answer:"italian"
},
{
  question:"Whats Keyurs favourite author? \n  1).dan brown \n 2)J.K Rowling \n 3).paulo coelho \n ",
  answer:"dan brown"

},

{question:"Which music genre Keyur like? \n 1).hiphop \n 2)jass \n 3).metal \n",
  answer:"metal"}]
 for ( ; ; )
{ score=0;
  var readlineSync = require('readline-sync');
  var ask = readlineSync.question("What is your name ?\n")
  const chalk = require('chalk');
 
  
  console.log("\nHola!"+ ask +" this is the level 1 of quiz \n");
  console.log(chalk.blue('Rules:\n'));
   console.log(chalk.red('There are two levels in this game!\n'));
    console.log(chalk.red('For every correct answer you will get a +1 and for every wrong answer -1\n'));
     console.log(chalk.red('You need a score more than 1 to proceed to next level\n'));
    
  for(var i=0;i<pikachu.length;i++)
  yo(pikachu[i].question,pikachu[i].answer)
  console.log("your final score is =" + score);

  if (score>=1 )

{ console.log("-----------------------------------")
  console.log("Welcome to level 2!!Kudos you are a true fan")
  for(var i=0;i<zapdos.length;i++)
  yo(zapdos[i].question,zapdos[i].answer)
  console.log("CONGRATS!!! Your final score is =" + score);
  break;
}
}

