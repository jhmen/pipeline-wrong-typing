import {pipeline} from 'stream';
import {createReadStream, createWriteStream} from 'fs';
import * as Path from 'path';
import * as process from "process";

const testFileIn = Path.join(process.cwd(), './test.txt')
const testFileOut = Path.join(process.cwd(), './test-2.txt')

// Throws error
pipeline(createReadStream(testFileIn), createWriteStream(testFileOut))

// Throws no error
pipeline(createReadStream(testFileIn), createWriteStream(testFileOut), (error) => {
    console.error(error)
})
