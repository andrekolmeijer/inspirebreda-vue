const fs = require('fs');
const gs = require('ghostscript4js');

const inputFolder = 'public/menu';
const outputFolder = 'src/assets/img';

fs.readdir(inputFolder, (err, files) => {
  if (err) throw err;

  files.filter(file => file.endsWith('.pdf')).forEach(file => {
    const inputPath = `${inputFolder}/${file}`;
    const outputPath = `${outputFolder}/${file.replace('.pdf', '.jpg')}`;

    const args = [
      '-dSAFER',
      '-dBATCH',
      '-dNOPAUSE',
      '-sDEVICE=jpeg',
      '-r300',
      `-sOutputFile=${outputPath}`,
      inputPath
    ];

    gs.execute(args, (err) => {
      if (err) throw err;
      console.log(`Converted ${file} to ${outputPath}`);
    });
  });
});
