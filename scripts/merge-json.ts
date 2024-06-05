import fs from 'fs';
import mergePatch from 'json-merge-patch';
import { program } from 'commander';

program
  .option('-i, --inputs [inputs...]', 'specify json files')
  .option('-o, --output <output>', 'specify output file');

program.parse();
const opts = program.opts();

const files: string[] = opts.inputs;
const output: string = opts.output;

const merged = files
  .map((file) => {
    const fileContents = fs.readFileSync(file, 'utf8');
    return JSON.parse(fileContents);
  })
  .reduce((a, b) => mergePatch.apply(a, b));

const sorted = Object.fromEntries(Object.entries(merged).sort());

fs.writeFileSync(output, JSON.stringify(sorted, null, 2));
