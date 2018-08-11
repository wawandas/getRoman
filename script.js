/*
*
* the idea to get roman number is to convert firstly thousends, then hundreds, then tens and then unity
*
*/


//function supports arabic number till 3999 only
function func(number) {
    //roman letter represents arabic number
    var romanToArabic = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    var roman = '';

    //on each iteration every class of arabic number will be deducted and translated to its roman letter representation
    for (var romanKey in romanToArabic) {
        while (number >= romanToArabic[romanKey]) {
            roman += romanKey;
            number -= romanToArabic[romanKey];
        }
    }

    return roman;
}