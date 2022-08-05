import { ProblemMap } from "./common/constants.js";

function problemExecutor() {
    const args = process.argv;
    
    if(args.length === 2) {
        console.log("No problem number provided");
        process.exit(0);
    }
    
    const problemId = parseInt(args[2] || "");

    if(isNaN(problemId)) {
        console.log("Invalid problem id passed, please provide a number.");
        process.exit(1);
    }

    const problemArgs = args.slice(3);

    if(!ProblemMap[problemId]) {
        console.log(`No solution exists for problem with id ${problemId}.`);
        process.exit(0);
    }

    const problem = ProblemMap[problemId];

    if(problemArgs.length !== problem.requiredArguments) {
        console.log(`Invalid arguments provided to problem ${problemId}.`);
        process.exit(1);
    }

    console.log(`Running problem ${problemId} from ${problem.link}.`);
    const result = problem.solution(...problemArgs);
    
    if(result !== undefined) {
        console.log("Logging result:");
        console.log(result);
    }
}

problemExecutor();