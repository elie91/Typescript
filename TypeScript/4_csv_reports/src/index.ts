//Interface solution

import { CsvFileReader } from './InterfaceSolution/CsvFileReader.interface';
import { MatchReader } from './InterfaceSolution/MatchReader.interface';
import { MatchResult } from './utils/MatchResult';

const csvFileReader = new CsvFileReader('football.csv');
const matchReder = new MatchReader(csvFileReader);
matchReder.load();


let manUnitedWins = 0;
for (let match of matchReder.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}


console.log(`Manchester United won ${manUnitedWins} games`);