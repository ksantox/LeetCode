function interpret(command) {
    return command.replace(/(\(\))/g, "o").replace(/(\(al\))/g, "al");
}

export default interpret;