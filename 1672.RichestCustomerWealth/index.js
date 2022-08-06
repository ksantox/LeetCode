import { setupNestedArray } from "../common/argumentBuilders.js";

function setupArguments(accountsString) {
    const accounts = setupNestedArray(accountsString);
    return maximumWealth(accounts);
}

function maximumWealth(accounts) {
    let biggestWealth = 0;

    for (let account = 0; account < accounts.length; account++) {
        const totalWealth = accounts[account].reduce((sum, value) => sum + value, 0);
        
        if(biggestWealth < totalWealth) {
            biggestWealth = totalWealth;
        }
    }

    return biggestWealth;
}

export default setupArguments;