import {MatchResult} from '../utils/MatchResult';
import {dateStringToDate} from '../utils/utils';
import {MatchData} from './MatchData';

interface DataReader {
    read(): void;

    data: string[][];
}

export class MatchReader {

    public reader: DataReader;
    public matches: MatchData[] = [];

    constructor(reader: DataReader) {
        this.reader = reader;
    }

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6]
            ]
        })
    }
}