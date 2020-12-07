const fs = require('fs');
const args = process.argv.slice(2);

fs.readFile('./data/employees.csv', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  if(args.length) {
    const content = data.split('\n').map(line => line.split(','));
    const headers = content[0];
    const rows = content.slice(1);

    const result = rows.map((line) => {
        return Object.fromEntries(headers.map((header, i) => [header, line[i]]))
    });

    const emplooye_id = parseInt(args[0]) - 1;
    
    if(args.length === 1) {
      console.log(result[emplooye_id]);
    }
    else {
      const employee_attr = args[1];
      console.log(result[emplooye_id][employee_attr]);
    }
  }
  else
    console.log('No arguments: Pass the emplooye ID and the attribute (optional) as arguments');
});