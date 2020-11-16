var inquirer = require("inquirer");
var fs = require("fs");

const data = "";

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
		console.log("Project title: " + userAnswers.projTitle);
		// Project Title
		fs.appendFile(
			"README.md",
			`# ${userAnswers.projTitle}` + "\n" + "\n",
			function (err) {
				if (err) {
					console.log(err);
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
				}
			}
		);

		// Github user Profile
		fs.appendFile(
			"README.md",
			`## Questions \n  \n Github Profile: ${userAnswers.projGithubUser}` +
				"\n" +
				"\n",
			function (err) {
				if (err) {
					console.log(err);
				}
			}
		);

		fs.appendFile(
			"README.md",
			`Questions? Contact Mark Shelgren at: ${userAnswers.projUserEmail}` +
				"\n" +
				"\n",
			function (err) {
				if (err) {
					console.log(err);
				}
			}
		);

		// License and Associated Badge
		const linkApache =
			"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
		const linkBoost =
			"[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
		const linkMIT =
			"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

		const linkDefault =
			"[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";

		switch (userAnswers.projLicense) {
			case "Apache":
				fs.appendFile(
					"README.md",
					`## This application is licensed by \n ${linkApache}` + "\n" + "\n",
					function (err) {
						if (err) {
							console.log(err);
						}
					}
				);
				break;

			case "Boost":
				fs.appendFile(
					"README.md",
					`## This application is licensed by \n ${linkBoost}` + "\n" + "\n",
					function (err) {
						if (err) {
							console.log(err);
						}
					}
				);
				break;

			case "MIT":
				fs.appendFile(
					"README.md",
					`## This application is licensed by \n ${linkMIT}` + "\n" + "\n",
					function (err) {
						if (err) {
							console.log(err);
						}
					}
				);

			default:
				fs.appendFile(
					"README.md",
					`## This application is licensed by \n ${linkDefault}` + "\n" + "\n",
					function (err) {
						if (err) {
							console.log(err);
						}
					}
				);
				break;
		}

		console.log("After the Switch Statements Correct variable: ");
	})
	.catch((error) => {
		if (error.isTtyError) {
			console.log("ERROR");
		} //else
	});
