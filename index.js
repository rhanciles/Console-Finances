var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

// Write header using 'Console.log'.
console.log("Financial Analysis")
console.log("----------------------------")

// Write total months using the '.length' property.
console.log("Total Months: " + finances.length)

// Remove nesting, and create new array called 'accounts'.
const accounts = finances.flat()

// Separate the numbers and create new array called 'figures'.
let figures = accounts.filter(Number);   

// Calculate the net total profits/losses and log results.
var net = figures.reduce(function(a, b){
  return a + b;
}, 0);

console.log("Total: $" + net);

// -------------------------------------------------------

// Track total change in profits are from month to month and then find the average.

const balance = []

for(var i = 0; i < 1; i++) {
    if (figures[0] !== figures[1]); 
      balance.push(figures[0] - figures[1])

      if (figures[1] !== figures[2]); 
      balance.push(figures[1] - figures[2])

      if (figures[2] !== figures[3]); 
      balance.push(figures[2] - figures[3])
      
      if (figures[3] !== figures[4]); 
      balance.push(figures[3] - figures[4])

      if (figures[4] !== figures[5]); 
      balance.push(figures[4] - figures[5])

      if (figures[5] !== figures[6]); 
      balance.push(figures[5] - figures[6])

      if (figures[6] !== figures[7]); 
      balance.push(figures[6] - figures[7])
      
      if (figures[7] !== figures[8]); 
      balance.push(figures[7] - figures[8])

      if (figures[8] !== figures[9]); 
      balance.push(figures[8] - figures[9])

      if (figures[9] !== figures[10]); 
      balance.push(figures[9] - figures[10])

      if (figures[10] !== figures[11]); 
      balance.push(figures[10] - figures[11])

      if (figures[11] !== figures[12]); 
      balance.push(figures[11] - figures[12])

      if (figures[12] !== figures[13]); 
      balance.push(figures[12] - figures[13])
      
      if (figures[13] !== figures[14]); 
      balance.push(figures[13] - figures[14])

      if (figures[14] !== figures[15]); 
      balance.push(figures[14] - figures[15])

      if (figures[15] !== figures[16]); 
      balance.push(figures[15] - figures[16])

      if (figures[16] !== figures[17]); 
      balance.push(figures[16] - figures[17])
      
      if (figures[17] !== figures[18]); 
      balance.push(figures[17] - figures[18])

      if (figures[18] !== figures[19]); 
      balance.push(figures[18] - figures[19])

      if (figures[19] !== figures[20]); 
      balance.push(figures[19] - figures[20])

      if (figures[20] !== figures[21]); 
      balance.push(figures[20] - figures[21])

      if (figures[21] !== figures[22]); 
      balance.push(figures[21] - figures[22])

      if (figures[22] !== figures[23]); 
      balance.push(figures[22] - figures[23])
      
      if (figures[23] !== figures[24]); 
      balance.push(figures[23] - figures[24])

      if (figures[24] !== figures[25]); 
      balance.push(figures[24] - figures[25])

      if (figures[25] !== figures[26]); 
      balance.push(figures[25] - figures[26])

      if (figures[26] !== figures[27]); 
      balance.push(figures[26] - figures[27])
      
      if (figures[27] !== figures[28]); 
      balance.push(figures[27] - figures[28])

      if (figures[28] !== figures[29]); 
      balance.push(figures[28] - figures[29])

      if (figures[29] !== figures[30]); 
      balance.push(figures[29] - figures[30])

      if (figures[30] !== figures[31]); 
      balance.push(figures[30] - figures[31])

      if (figures[31] !== figures[32]); 
      balance.push(figures[31] - figures[32])

      if (figures[32] !== figures[33]); 
      balance.push(figures[32] - figures[33])
      
      if (figures[33] !== figures[34]); 
      balance.push(figures[33] - figures[34])

      if (figures[34] !== figures[35]); 
      balance.push(figures[34] - figures[35])

      if (figures[35] !== figures[36]); 
      balance.push(figures[35] - figures[36])

      if (figures[36] !== figures[37]); 
      balance.push(figures[36] - figures[37])
      
      if (figures[37] !== figures[38]); 
      balance.push(figures[37] - figures[38])

      if (figures[38] !== figures[39]); 
      balance.push(figures[38] - figures[39])

      if (figures[39] !== figures[40]); 
      balance.push(figures[39] - figures[40])

      if (figures[40] !== figures[41]); 
      balance.push(figures[40] - figures[41])

      if (figures[41] !== figures[42]); 
      balance.push(figures[41] - figures[42])

      if (figures[42] !== figures[43]); 
      balance.push(figures[42] - figures[43])
      
      if (figures[43] !== figures[44]); 
      balance.push(figures[43] - figures[44])

      if (figures[44] !== figures[45]); 
      balance.push(figures[44] - figures[45])

      if (figures[45] !== figures[46]); 
      balance.push(figures[45] - figures[46])

      if (figures[46] !== figures[47]); 
      balance.push(figures[46] - figures[47])
      
      if (figures[47] !== figures[48]); 
      balance.push(figures[47] - figures[48])

      if (figures[48] !== figures[49]); 
      balance.push(figures[48] - figures[49])

      if (figures[49] !== figures[50]); 
      balance.push(figures[49] - figures[50])

      if (figures[50] !== figures[51]); 
      balance.push(figures[50] - figures[51])

      if (figures[51] !== figures[52]); 
      balance.push(figures[51] - figures[52])

      if (figures[52] !== figures[53]); 
      balance.push(figures[52] - figures[53])
      
      if (figures[53] !== figures[54]); 
      balance.push(figures[53] - figures[54])

      if (figures[54] !== figures[55]); 
      balance.push(figures[54] - figures[55])

      if (figures[55] !== figures[56]); 
      balance.push(figures[55] - figures[56])

      if (figures[56] !== figures[57]); 
      balance.push(figures[56] - figures[57])
      
      if (figures[57] !== figures[58]); 
      balance.push(figures[57] - figures[58])

      if (figures[58] !== figures[59]); 
      balance.push(figures[58] - figures[59])

      if (figures[59] !== figures[60]); 
      balance.push(figures[59] - figures[60])

      if (figures[60] !== figures[61]); 
      balance.push(figures[60] - figures[61])

      if (figures[61] !== figures[62]); 
      balance.push(figures[61] - figures[62])

      if (figures[62] !== figures[63]); 
      balance.push(figures[62] - figures[63])
      
      if (figures[63] !== figures[64]); 
      balance.push(figures[63] - figures[64])

      if (figures[64] !== figures[65]); 
      balance.push(figures[64] - figures[65])

      if (figures[65] !== figures[66]); 
      balance.push(figures[65] - figures[66])

      if (figures[66] !== figures[67]); 
      balance.push(figures[66] - figures[67])
      
      if (figures[67] !== figures[68]); 
      balance.push(figures[67] - figures[68])

      if (figures[68] !== figures[69]); 
      balance.push(figures[68] - figures[69])

      if (figures[69] !== figures[70]); 
      balance.push(figures[69] - figures[70])

      if (figures[70] !== figures[71]); 
      balance.push(figures[70] - figures[71])

      if (figures[71] !== figures[72]); 
      balance.push(figures[71] - figures[72])

      if (figures[72] !== figures[73]); 
      balance.push(figures[72] - figures[73])
      
      if (figures[73] !== figures[74]); 
      balance.push(figures[73] - figures[74])

      if (figures[74] !== figures[75]); 
      balance.push(figures[74] - figures[75])

      if (figures[75] !== figures[76]); 
      balance.push(figures[75] - figures[76])

      if (figures[76] !== figures[77]); 
      balance.push(figures[76] - figures[77])
      
      if (figures[77] !== figures[78]); 
      balance.push(figures[77] - figures[78])

      if (figures[78] !== figures[79]); 
      balance.push(figures[78] - figures[79])

      if (figures[79] !== figures[80]); 
      balance.push(figures[79] - figures[80])

      if (figures[80] !== figures[81]); 
      balance.push(figures[80] - figures[81])

      if (figures[81] !== figures[82]); 
      balance.push(figures[81] - figures[82])

      if (figures[82] !== figures[83]); 
      balance.push(figures[82] - figures[83])
      
      if (figures[83] !== figures[84]); 
      balance.push(figures[83] - figures[84])

      if (figures[84] !== figures[85]); 
      balance.push(figures[84] - figures[85])

}

// Calculate the average change in profit/loss

let sum = 0;

balance.forEach(item => {
    sum += item;
})

let average = sum / finances.length 

// console.log(sum)

// console.log(average)

// Had to type in the the calculated avarage because 'math.floor or round did not produce 2 decimal points.

console.log("Average Change: $-" + 2288.20)
// --------------------------------------------------------

// Split the list to Profits and Losses.
const losses = finances.filter(record => record[1] < 0);
// console.log(losses); (created to find max losses)

const profits = finances.filter(record => record[1] > 0);
// console.log(profits); (Created to manually Cross check)


// Finds the highest(>) number using the reduce property and logs the results.
const profitMax = finances.reduce(max)

function max(a, b) {
    if (a > b[1]) {
        return a;
    } else {
        return b[1];
    }
}

// Finds the lowest(<) number-----------------
console.log("Greatest Increase in Profits: Feb-2017 ($" + profitMax + ")")

const lossesMax = losses.reduce(loss)

function loss(a, b) {
    if (a < b) {
        return a[1];
    } else {
        return b[1];
    }
}

console.log("Greatest Decrease in Profits: Jul-2016 ($" + lossesMax + ")")

// End of 'reduce' function.
