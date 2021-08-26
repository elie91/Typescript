//Abstract class solution

import { MatchReader } from './AbstractClassSolution/MatchReader.abstract';
import { MatchResult } from './utils/MatchResult';

const fileReader = new MatchReader('football.csv');
fileReader.read();

let manUnitedWins = 0;
for (let match of fileReader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}


console.log(`Manchester United won ${manUnitedWins} games`);