/* eslint-disable no-console */

export class Helper {
    /**
     * Get a substring of a string, first letter is pos 1, not 0
     * @param text 
     * @param pos 
     * @returns 
     */
    static getSubStringInLowerCase(text: string, pos: number) {
        let substring = text.substring(pos - 1, pos).toLowerCase();
        console.log(`Getting substring position "${pos}" from the text "${text}", which is "${substring}"`);
        return substring;
    }

    /**
     * Iterate a value through an array and add it only if it is unique (does not exist in the array)
     * @param arr
     * @param value 
     */
    static addUniqueValueIntoArray(array: string[], valueToAdd: string) {
        // Declare default value as unique
        let isUnique: boolean = true;

        // Iterate value through the array, and if it matches existing value, set value to not unique
        for (let i = 0; i < array.length; i++) {
            if (array[i] === valueToAdd) {
                console.log(`"${valueToAdd}" exists in array "${array}" --- xxxxx Ignoring xxxxx`);
                isUnique = false;
            }
        }

        // If value is unique, then add it to the end of the array
        if (isUnique === true) {
            console.log(`"${valueToAdd}" does not exist in array "${array}" --- +++++++++++++++ Adding +++++++++++++++`);
            array.push(valueToAdd);
        }
    }

    /**
     * Compare each letter in stringOne and stringTwo, and add unique matches to the array ignoring cases
     * @param arrayName 
     * @param stringOne 
     * @param stringTwo 
     */
    static addMatchingStringsIntoArray(arrayName: string[], stringOne: string, stringTwo: string) {
        // Iterate through each letter of stringOne
        for (let posA = 1; posA <= stringOne.length; posA += 1) {
            console.log(`****************************** Running Iteration ${posA} for OUTER LOOP ******************************`);

            // Iterate through each letter of stringTwo
            for (let posB = 1; posB <= stringTwo.length; posB += 1) {
                console.log(`Running Iteration ${posB} for Inner LOOP`);

                const letterOneToCheck = Helper.getSubStringInLowerCase(stringOne, posA);
                const letterTwoToCheck = Helper.getSubStringInLowerCase(stringTwo, posB);

                // If letter in stringOne matches letter in stringTwo, call function 'addNonDuplicateValueIntoArray'
                if (letterOneToCheck === letterTwoToCheck) {
                    console.log(`"${letterOneToCheck}" matches "${letterTwoToCheck}"`);
                    Helper.addUniqueValueIntoArray(arrayName, letterOneToCheck);
                } else {
                    console.log(`"${letterOneToCheck}" does not match "${letterTwoToCheck}"`);
                }
            }
        }
    }
}

const stringOne: string = 'AdAss';
const stringTwo: string = 'XDaxqs';
const finalArray: string[] = [];

Helper.addMatchingStringsIntoArray(finalArray, stringOne, stringTwo);
console.log(finalArray);
