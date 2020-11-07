var inquirer = require("inquirer");
var fs = require("fs");

inquirer
	.prompt([
		{
			type: "checkbox",
			message: "What languages do you know?",
			name: "stack",
			choices: ["HTML", "CSS", "JavaScript", "MySQL"],
		},
		{
			type: "list",
			message: "What is your preferred method of communication?",
			name: "contact",
			choices: ["email", "phone", "telekinesis"],
		},
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
			choices: ["Apache", "Boost", "MIT", "The Artistic License 2.0", "WTFPL"],
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
	.then(function (data) {
		console.log(data);
		var filename = data.projTitle.toLowerCase().split(" ").join("") + ".json";

		fs.writeFile(filename, JSON.stringify(data, null, "\t"), function (err) {
			if (err) {
				return console.log(err);
			}

			console.log("Success!");
		});
	});
