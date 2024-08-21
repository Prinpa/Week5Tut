export function capitalize(inputString) {
    let stringArray = inputString.split(" ");
    let newStringArray = [];
    for (let j = 0; j < stringArray.length; j++) {
        let currWordArray = stringArray[j].split("");
        var newWordArray = []
        for (let i = 0; i < currWordArray.length; i++) {
            if (i == 0) {
                newWordArray.push(currWordArray[i].toUpperCase());
            } else {
                newWordArray.push(currWordArray[i]);
            }
        }
        let newWord = newWordArray.join("");
        newStringArray.push(newWord);
    }
    let newString = newStringArray.join(" ");
    console.log(`Capitalised String: ${newString}`);
}