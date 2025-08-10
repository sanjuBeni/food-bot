const {exec} = require('child_process');

const command = process.argv[2];
const migrationName = process.argv[3]  

//Validate Migration Command
const validCommands = ['create', 'up', 'down', 'list', 'prune'];
if(!validCommands.includes(command)){
  console.error(`Invalid command: ${command}`);
  process.exit(1);
}

const commandsWithoutMigrationNameRequired = ['list', 'prune'];
if(!commandsWithoutMigrationNameRequired.includes(command) && !migrationName) {
  console.error(`Migration name is required for command: ${command}`);
  process.exit(1);
}

function runNpmScript() {
  return new Promise((resolve, reject) => {
    let execCommand = ``;

    if(commandsWithoutMigrationNameRequired.includes(command)) {
      execCommand = `migrate ${command}`;
    }else {
      execCommand = `migrate ${command} ${migrationName}`;
    }
    const childProcess = exec(execCommand, (error, stdout) => {
      if(error) {
        reject(`Error runnig script: ${error}`);
      }
      resolve(stdout);
    });

    childProcess.stdout.on('data', (data) => {
      console.log(data);
    })
  
  });
}

runNpmScript()
.then((output) => {
  console.log(output);
}).catch((error) =>{
  console.error(error);
})