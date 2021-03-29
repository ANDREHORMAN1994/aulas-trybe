const fs = require('fs').promises;

const createFiles = (arrays) => {
  arrays.forEach((array, index) => {
    fs.writeFile(`./file${index + 1}.txt`, array);
  });
};

// createFiles(['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']);

const readFile = (file) => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (error, content) => {
      if (error) return reject(error);
      resolve(content);
    });
  });
  return promise;
};

const executePromises = async () => {
  const docs = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  try {
    const fileContents = await Promise.all(
      docs.map((doc) => fs.readFile(doc, 'utf-8')),
    );
    console.log(fileContents);

    const newFileContent = fileContents.join(' ');
    console.log(newFileContent);

    await fs.writeFile('./fileAll.txt', newFileContent);
  } catch (error) {
    console.log(error);
  }
};

executePromises();
