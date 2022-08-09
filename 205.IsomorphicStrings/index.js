function isIsomorphicOld(s, t) {
    const mapST = {};
    const mapTS = {};

    for(let i = 0; i < s.length; i++) {
        const c1 = s[i];
        const c2 = t[i];
        
        if(!mapST[c1] && !mapTS[c2]) {
            mapST[c1] = c2;
            mapTS[c2] = c1;
            continue;
        }

        if(mapST[c1] === c2 && mapTS[c2] === c1) {
            return false;
        }
    }

    return true;
}

function isIsomorphic(firstString, secondString) {
    const occurrences = {
        first: {},
        second: {},
    };

    for(let i = 0; i < firstString.length; i++) {
        const firstCharacter = firstString[i];
        const secondCharacter = secondString[i];
        
        if(!occurrences.first[firstCharacter] && !occurrences.second[secondCharacter]) {
            occurrences.first[firstCharacter] = secondCharacter;
            occurrences.second[secondCharacter] = firstCharacter;
            continue;
        }

        if(occurrences.first[firstCharacter] !== secondCharacter && occurrences.second[secondCharacter] !== firstCharacter) {
            return false;
        }
    }

    return true;
}

export default isIsomorphic;