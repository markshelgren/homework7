var inquirer = require("inquirer");
var fs = require("fs");

let data = "";

fs.writeFile("README.md", data, function (err) {
	if (err) throw err;
	// console.log("Readme.md File Creation Failed");
});

console.log("Readme.md File Created Successfully");

inquirer
	.prompt([
		{
			type: "input",
			name: "projTitle",
			message: "What is your Project Title?",
		},
		{
			type: "input",
			name: "projDescription",
			message: "Enter a description of the Project?",
		},
		{
			type: "input",
			name: "projInstallInst",
			message: "Enter the instructions for installing the project?",
		},
		{
			type: "input",
			name: "projUsageInfo",
			message: "Enter any instructions that will help the user?",
		},
		{
			type: "input",
			name: "projContribInst",
			message: "Enter instructions for contributing to the project?",
		},
		{
			type: "input",
			name: "projTestInst",
			message: "Enter test instructions to help users test the application?",
		},
		{
			type: "list",
			message: "Choose the license for your application ?",
			name: "projLicense",
			choices: ["Apache", "Boost", "MIT", "The Artistic License 2.0"],
		},
		{
			type: "input",
			name: "projGithubUser",
			message: "Enter your Github user profile?",
		},
		{
			type: "input",
			name: "projUserEmail",
			message: "Enter the email address for for questions?",
		},
	])
	.then((answers) => {
		const userAnswers = answers;
		console.log(userAnswers);

		// Add a newline character to each line

		// Project Title
		fs.appendFile(
			"README.md",
			`# ${userAnswers.projTitle}` + "\n" + "\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Commit logged!");
				}
			}
		);

		// Project Description
		fs.appendFile(
			"README.md",
			`## Project Description \n ${userAnswers.projDescription}` + "\n" + "\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Commit logged!");
				}
			}
		);

		// Installation Instructions
		fs.appendFile(
			"README.md",
			`## Installation Instructions \n ${userAnswers.projInstallInst}` +
				"\n" +
				"\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Commit logged!");
				}
			}
		);

		// Usage Instructions
		fs.appendFile(
			"README.md",
			`## Usage Instructions \n ${userAnswers.projUsageInfo}` + "\n" + "\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Commit logged!");
				}
			}
		);

		// Contribution Instructions
		fs.appendFile(
			"README.md",
			`## Guidelines to Contribute \n ${userAnswers.projContribInst}` +
				"\n" +
				"\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Commit logged!");
				}
			}
		);

		// Test Instructions
		fs.appendFile(
			"README.md",
			`## Application Testing Instructions \n ${userAnswers.projTestInst}` +
				"\n" +
				"\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Commit logged!");
				}
			}
		);

		// License and Associated Badge
		fs.appendFile(
			"README.md",
			`## Badge \n ${userAnswers.projLicense}` + "\n" + "\n",
			function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Commit logged!");
				}
			}
		);
		/* 		fs.appendFile(
			"README.md",
			`
			Table of Contents:  
			
			## Articles

			[Art of Readme - Learn the art of writing quality READMEs.](https://github.com/noffle/art-of-readme#readme) - *Stephen Whitmore*
			
			[# H1](Title: ${userAnswers.projTitle}) 
			Description: ${userAnswers.projDescription}
			License badge: ${userAnswers.projLicense}
			Instructions for installation: ${userAnswers.projInstallInst}
			Usage: ${userAnswers.projUsageInfo}
			License notice: This software is covered under the ${userAnswers.projLicense} license. 
			Contributors & Contributing: Project Contributors: ${userAnswers.projContribInst}
			Tests: ${userAnswers.projTestInst}
			Questions: Please direct all questions to ${userAnswers.projUserEmail}.`,
			function (err) {
				console.log(err);
				if (err) throw err;
			}
		); */
	})
	.catch((error) => {
		if (error.isTtyError) {
			console.log("ERROR");
		} //else
	});
