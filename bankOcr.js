/******* Bank OCR kata - David Amaya  *******/

function parseSingleDigit(digitString){
    switch(digitString){
        case " _ "+
             "| |"+
             "|_|":
                return 0;
                break;
        case "   "+
             "  |"+
             "  |":
                return 1;
                break;
        case " _ "+
             " _|"+
             "|_ ":
                return 2;
                break;
        case " _ "+
             " _|"+
             " _|":
                return 3;
                break;
        case "   "+
             "|_|"+
             "  |":
                return 4;
                break;
        case " _ "+
             "|_ "+
             " _|":
                return 5;
                break;
        case " _ "+
             "|_ "+
             "|_|":
                return 6;
                break;
        case " _ "+
             "  |"+
             "  |":
                return 7;
                break;
        case " _ "+
             "|_|"+
             "|_|":
                return 8;
                break;
        case " _ "+
             "|_|"+
             " _|":
                return 9;
                break;
        default:
            return "?";
    }
}            

        

function parseBankOcr(ocrText){
    const topNumberLine = ocrText.slice(0,27);
    const midNumberLine = ocrText.slice(27,54);
    const bottomNumberLine = ocrText.slice(54,81);
    
    /*
    console.log(topNumberLine + ": "+topNumberLine.length);
    console.log(midNumberLine + ": "+midNumberLine.length);
    console.log(bottomNumberLine + ": "+bottomNumberLine.length);
    // */

    let accountNumberArray = [];

    for(let d = 0; d< topNumberLine.length; d+=3){
        let topDigitString = topNumberLine.slice(d,d+3);
        let midDigitString = midNumberLine.slice(d,d+3);
        let bottomDigitString = bottomNumberLine.slice(d,d+3)
        
        /*
        console.log(d);

        console.log(topDigitString);
        console.log(midDigitString);
        console.log(bottomDigitString);
        // */
        
        accountNumberArray.push(parseSingleDigit(topDigitString+midDigitString+bottomDigitString));

    }

    //console.log(accountNumberArray);
    return accountNumberArray.join('');


}
        
function accountNumberChecksum(accountNumber)
{
    let checksum = 0;
    for(x=0; x <9; x++){
        //console.log(accountNumber[x]);
        if(!isNaN(accountNumber[x])){
            let factor = (9-x);
            checksum += (parseInt(accountNumber[x])*factor);
        } else {
            console.log(accountNumber[x]+"is not a number.")
            return false;
        }
    }

    //console.log(checksum);
    if(checksum % 11 === 0){
        return true;
    } else {
        return false;
    }
}


/**************************************************************************\
 * RE: User Story 3
 * -----------------------------------------------------------------------
 * I would use the parseBankOcr function to parse the account number.
 * It is already set up to insert a "?" where no number is identified.
 * 
 * I would then use the accountNumberChecksum function to determine 
 * if the number is valid/invalid/illegible and insert the appropriate code. 
 * I would need to modify the function to return the checksum status,
 * rather than a true/false flag. 
 * 
 *
 * RE: User Story 4
 * ------------------------------------------------------------------------
 * This would involve breaking down the possible numbers that could be 
 * created by adding/removing a pipe or an underscore. Then creating a
 * variant of the parseSingleDigit function that has the flexibility to
 * account for the variety of digits.
 * 
 * I'm not sure if the two hours include explanation time. 
 * If so, I believe my time is up.
 * 
\**************************************************************************/