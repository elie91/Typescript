import {MatchData} from "./MatchData";

export interface Analyzer {
    run(matches: MatchData[]): string
}

export interface OutputTarget {
    print(report: string): void
}

export class Summary {

    public analyzer: Analyzer;
    public outputTarget: OutputTarget;

    constructor(analyzer: Analyzer, outputTarget: OutputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
}