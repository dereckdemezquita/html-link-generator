//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, "images");

const fileNames = [];
const filePaths = [];
const rootPath = "/blog/entries/documents/quickdump/"; // Set root path

for (let file of fs.readdirSync(directoryPath, { withFileTypes: true })) {
	if (!file.isDirectory()) {
		fileNames.push(file.name);
	}
}

function createHtml(rootPath, fileNames) {
	for (let fileName of fileNames) {
		filePaths.push(rootPath + fileName);
	};

	let writeToHtml = "";
	
	for(let i = 0; i < filePaths.length; i++) {
		writeToHtml += `
			<figure>
				<img class="lazy" data-src="${filePaths[i]}">
				<figcaption>${fileNames[i]}</figcaption>
			</figure>`;
	};

	console.log(writeToHtml);
	// console.log(fileNames);

	fs.writeFile('links.html', writeToHtml, function (err) {
		if (err) throw err;
		console.log('Saved!');
	});
};

createHtml(rootPath, fileNames);

