import inquirer from "inquirer";
import chalk from "chalk";
console.log(`\t\t\t${chalk.bold.italic.underline.bgYellow.black(`Welcome to quiz genetor`)}`);
let user = await inquirer.prompt({
    type: "input",
    name: "user1",
    message: chalk.bold.redBright("\nEnter your username to start this quiz:"),
    validate: (ans) => {
        if (!ans) {
            return `Please enter your name!`;
        }
        else
            return true;
    }
});
let doneArr = [];
let isQuiz1 = false;
let isQuiz2 = false;
let score = 0;
let scoreQuiz2 = 0;
let Quizs;
let exit;
do {
    Quizs = await inquirer.prompt({
        type: "rawlist",
        name: "quiz",
        message: "select the quiz from the following",
        choices: ["quiz1", "quiz2"]
    });
    if (Quizs.quiz === "quiz1") {
        if (!isQuiz1) {
            console.log(chalk.blue.bold.underline("\t\t\tTypescript question"));
            let quesQuiz1 = await inquirer.prompt({
                type: "list",
                name: "ques1",
                message: `\n${chalk.yellow.italic("What is TypeScript?")}`,
                choices: ["A JavaScript library", "A superset of JavaScript", "An alternative to HTML", "A database management system"],
            });
            if (quesQuiz1.ques1 !== "A superset of JavaScript") {
                console.log("correct answer is:A superset of JavaScript");
            }
            else {
                console.log("You guess the right");
                score++;
            }
            let quesQuiz2 = await inquirer.prompt({
                type: "list",
                name: "ques2",
                message: `${chalk.yellow.italic("\nWhich of the following is a correct way to declare a variable with a specific type in TypeScript?")}`,
                choices: ["let x: number = 10;", "var x = 10", "const x = Hello", "let x = true"],
            });
            if (quesQuiz2.ques2 !== "let x: number = 10;") {
                console.log("correct answer is:let x: number = 10;");
            }
            else {
                console.log("You guess the right");
                score++;
            }
            let quesQuiz3 = await inquirer.prompt({
                type: "list",
                name: "ques3",
                message: `${chalk.yellow.italic("\nWhat is the purpose of the 'interface' keyword in TypeScript?")}`,
                choices: ["To define a class", "To create an object", "To declare a type", "To include external libraries"],
            });
            if (quesQuiz3.ques3 !== "To declare a type") {
                console.log("correct answer is:To declare a type");
            }
            else {
                console.log("You guess the right");
                score++;
            }
            let quesQuiz4 = await inquirer.prompt({
                type: "list",
                name: "ques4",
                message: `${chalk.yellow.italic("\nWhich TypeScript feature allows you to combine multiple types into one?")}`,
                choices: ["Type assertions", "Type guards", "Union types", "Intersection types"],
            });
            if (quesQuiz4.ques4 !== "Union types") {
                console.log("correct answer is:Union types");
            }
            else {
                console.log("You guess the right");
                score++;
            }
            console.log(chalk.bold.red("\nYour Total score is: "), score);
            isQuiz1 = true;
        }
        else {
            console.log(chalk.bgGray.green("You have already attempted the Quiz 1"));
        }
    }
    else if (Quizs.quiz === "quiz2") {
        if (!isQuiz2) {
            console.log(chalk.blue.bold.underline("\t\t\tNodeJs Questions"));
            let quesQuiz1 = await inquirer.prompt({
                type: "list",
                name: "ques1",
                message: `\n${chalk.yellow.italic("What is Node.js?")}`,
                choices: ["A front-end JavaScript framework", "A server-side JavaScript runtime", "A database management system", "A programming language"],
            });
            if (quesQuiz1.ques1 !== "A server-side JavaScript runtime") {
                console.log("correct answer is:A server-side JavaScript runtime");
            }
            else {
                console.log("You guess the right");
                scoreQuiz2++;
            }
            let quesQuiz2 = await inquirer.prompt({
                type: "list",
                name: "ques2",
                message: `${chalk.yellow.italic("\nWhich event-driven architecture is Node.js based on?")}`,
                choices: ["Observer pattern", "Singleton pattern", "Factory pattern", "Publisher-Subscriber pattern"],
            });
            if (quesQuiz2.ques2 !== "Observer pattern") {
                console.log("correct answer is:Observer pattern");
            }
            else {
                console.log("You guess the right");
                scoreQuiz2++;
            }
            let quesQuiz3 = await inquirer.prompt({
                type: "list",
                name: "ques3",
                message: `${chalk.yellow.italic("\nWhat is the package manager for Node.js that is commonly used to install third-party packages?")}`,
                choices: ["npm (Node Package Manager)", "git", "yarn", "npmjs"],
            });
            if (quesQuiz3.ques3 !== "npm (Node Package Manager)") {
                console.log("correct answer is:npm (Node Package Manager)");
            }
            else {
                console.log("You guess the right");
                scoreQuiz2++;
            }
            let quesQuiz4 = await inquirer.prompt({
                type: "list",
                name: "ques4",
                message: `${chalk.yellow.italic("\nIn Node.js, what does the term 'callback' refer to?")}`,
                choices: ["A function passed as an argument to another function, to be executed later", "A built-in Node.js module", "A data type", "A debugging tool"],
            });
            if (quesQuiz4.ques4 !== "A function passed as an argument to another function, to be executed later") {
                console.log(" correct answer is:A function passed as an argument to another function, to be executed later");
            }
            else {
                console.log(" You guess the right");
                scoreQuiz2++;
            }
            console.log(chalk.bold.red("\nYour Total score is: "), scoreQuiz2);
            isQuiz2 = true;
        }
        else {
            console.log(chalk.bgGray.green("You have already attempted Quiz 2"));
        }
    }
    exit = await inquirer.prompt({
        type: "input",
        name: "quit",
        message: "\npress C if you want to continue..."
    });
} while (exit.quit === "C" || exit.quit === "c");
