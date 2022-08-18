import { setupStringArray } from "../common/argumentBuilders.js";

function setupArguments(commandsString, commandDataString) {
    const commands = setupStringArray(commandsString);
    const commandsData = setupStringArray(commandDataString);

    const queue = new MyQueue();

    for (let i = 0; i < commands.length; i++) {
        if(commands[i] === "MyQueue") {
            console.log(`Executing command ${commands[i]}.`);
            console.log(`Queue state: [].\n`);
            continue;
        }
        
        const commandData = isNaN(commandsData[i]) ? "" : parseInt(commandsData[i]);
        const result = queue[commands[i]](commandData);

        const calledWith = commandData ? ` with ${commandData}` : "";
        console.log(`Executing command ${commands[i]}${calledWith}.`);

        if(result !== undefined) {
            console.log(`Command ${commands[i]} returned ${result}.`);
        }
        console.log(`Queue state: ${queue.data}.\n`);
    }
}

class MyQueue {
    data = [];

    constructor() {
        this.data = [];
    }

    push(element) {
        this.data.push(element);
    }

    pop() {
        const tempStack = [];

        while(this.data.length > 1) {
            tempStack.push(this.data.pop());
        }

        const poppedElement = this.data[0];
        this.data = [];
        
        while(tempStack.length) {
            this.data.push(tempStack.pop());
        }

        return poppedElement;
    }

    peek() {
        const tempStack = [];

        while(this.data.length) {
            tempStack.push(this.data.pop());
        }

        const peekedElement = tempStack[tempStack.length - 1];

        while(tempStack.length) {
            this.data.push(tempStack.pop());
        }

        return peekedElement;
    }

    empty() {
        return this.data.length === 0;
    }
}

export default setupArguments;