#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";
 let todoList = [];
 let condition = true ;

 console.log(chalk.bgBlue("\n \t Welcome to code with arslan akhtar - todo-list\n"));
 
 while(condition){

    let addTask = await inquirer.prompt([
    {
       name: "task",
       type: "input",
       message: chalk.green("Enter your new task :")

    }
]);
  todoList.push(addTask.task);
  console.log(chalk.red.bold(`${addTask.task} Task add in todo-List successfully`));

  let addMoreTask = await inquirer.prompt([
    {
        name: "addMore",
        type: "confirm",
        message: chalk.bgGray("Do you want to add more task ?"),
        default: "false"
    }
  ]);
  condition = addMoreTask.addMore
 }
 console.log(chalk.greenBright.bold("your updated todolist:" , todoList));