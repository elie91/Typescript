import {Analyzer} from "../Summary";
import {MatchData} from "../MatchData";
import {MatchResult} from "../../utils/MatchResult";

export class WinsAnalysis implements Analyzer {

    public team: string;

    constructor(team: string) {
        this.team = team;
    }

    run(matches: MatchData[]): string {
        let teamWins = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
                teamWins++;
            } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
                teamWins++;
            }
        }
        return `Team ${this.team} won ${teamWins} games`;
    }
}