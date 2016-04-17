import { exec } from 'child_process';

function puts(error, stdout, stderr) {
  console.log(stdout);
}
exec('echo "foo" > test.txt', puts);
