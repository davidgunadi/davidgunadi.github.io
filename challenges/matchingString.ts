/* eslint-disable no-console */
/* eslint-disable no-empty */
/* eslint-disable no-plusplus */

export class Helper {
    static getSubStringLowerCase(text: string, pos: number) {
        return text.substring(pos - 1, pos).toLowerCase();
    }

    static addNonDuplicateValueIntoArray(arr: string[], text: string) {
        // Declare default status duplicate as false
        let duplicate: boolean = false;

        // If text matches any item in the array, we set duplicate status to true
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === text) {
                console.log(`${text} exists in ${arr} - NOT ADDING`);
                duplicate = true;
            }
        }

        // If duplicate status is false, we add the text into the array
        if (duplicate === false) {
            console.log(`${text} does not exist in ${arr} - ADDING INTO ARRAY`);
            arr.push(text);
        }
    }

    static addMatchingStringsIntoArray(arrayName: string[], stringOne: string, stringTwo: string) {
        // Iterate through each letter of stringOne
        for (let counterOne = 1; counterOne <= stringOne.length; counterOne++) {
            console.log(`Running Iteration ${counterOne} for first loop`);

            // Iterate through each letter of stringTwo
            for (let counterTwo = 1; counterTwo <= stringTwo.length; counterTwo++) {
                console.log(`Running Iteration ${counterTwo} for second loop`);

                const letterOneToCheck = Helper.getSubStringLowerCase(stringOne, counterOne);
                const letterTwoToCheck = Helper.getSubStringLowerCase(stringTwo, counterTwo);

                // If letter in stringOne matches letter in stringTwo, call function 'addNonDuplicateValueIntoArray'
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
