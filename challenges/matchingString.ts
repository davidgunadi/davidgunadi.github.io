/* eslint-disable no-console */
/* eslint-disable no-empty */
/* eslint-disable no-plusplus */

export class Helper {
    static getSubStringLowerCase(text: string, pos: number) {
        return text.substring(pos - 1, pos).toLowerCase();
    }

    static addNonDuplicateValueIntoArray(arr: string[], textToCheck: string) {
        let duplicate: boolean = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === textToCheck) {
                console.log(`${textToCheck} exists in ${arr} - NOT ADDING`);
                duplicate = true;
            }
        }
        if (duplicate === false) {
            console.log(`${textToCheck} does not exist in ${arr}`);
            arr.push(textToCheck);
        }
    }

    static addMatchingStringsIntoArray(arrayName: string[], stringOne: string, stringTwo: string) {
        for (let counterOne = 1; counterOne <= stringOne.length; counterOne++) {
            console.log(`Running Iteration ${counterOne} for first loop`);

            for (let counterTwo = 1; counterTwo <= stringTwo.length; counterTwo++) {
                console.log(`Running Iteration ${counterTwo} for second loop`);

                const letterOneToCheck = Helper.getSubStringLowerCase(stringOne, counterOne);
                const letterTwoToCheck = Helper.getSubStringLowerCase(stringTwo, counterTwo);

                if (letterOneToCheck === letterTwoToCheck) {
                    console.log(`${letterOneToCheck} matches ${letterTwoToCheck}`);
                    Helper.addNonDuplicateValueIntoArray(arrayName, letterOneToCheck);
                }
            }
        }
    }
}

const stringOne: string = 'AdA';
const stringTwo: string = 'XDa';
const finalArray: string[] = [];

Helper.addMatchingStringsIntoArray(finalArray, stringOne, stringTwo);
console.log(finalArray);
