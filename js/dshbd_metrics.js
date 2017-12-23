/* This module builds are arrays to hold data
that will be used create Dashboard tables and
graphs*/

// set up models term years

function Years(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
}

function buildModelYears(duration) {
    this.duration = duration;
    var modelyears = [];

    for (var i = 0; i < this.duration; i++) {
        if (i == 0) {

            modelyears[0] = new Years;
            modelyears[0].startDate = new Date(bldgDiversey.purchaseDate);
            modelyears[0].startDate.setMonth(modelyears[0].startDate.getMonth() + 1, 1);
            modelyears[0].endDate = new Date(modelyears[0].startDate);
            modelyears[0].endDate.setFullYear(modelyears[0].endDate.getFullYear() + 1);
            modelyears[0].endDate.setDate(modelyears[0].endDate.getDate() - 1);
        }
        else {
            console.log(i);
            modelyears[i] = new Years;
            modelyears[i].startDate = new Date(modelyears[i - 1].endDate);
            modelyears[i].startDate.setDate(modelyears[i].startDate.getDate() + 1);
            modelyears[i].endDate = new Date(modelyears[i].startDate);
            modelyears[i].endDate.setFullYear(modelyears[i].endDate.getFullYear() + 1);
            modelyears[i].endDate.setDate(modelyears[i].endDate.getDate() - 1);
        }
    }

    return modelyears;
}

var modelyears = buildModelYears(MODEL_YEARS);

// build Rent Array

//get rent function

function getRent(compDate, tenant) {
    var rentTotal = 0;
    this.compDate = compDate;
    this.tenant = tenant;
    for (var i = 0; i < this.tenant.length; i++) {
        for (var j = 0; j < this.tenant[i].rents.length; j++) {
            if (this.tenant[i].rents[j].startDate <= this.compDate && this.tenant[i].rents[j].endDate >= this.compDate) {
                rentTotal += this.tenant[i].rents[j].monthlyRent;
            }
        }

    }
    return rentTotal;
}

function buildYearRent(start) {
    this.start = start;

    var yearRent = [];
    var compDate;
    for (var i = 0; i < 12; i++) {
        // if statement for first month.. then increment compare data...
        if (i == 0) {
            compDate = new Date(this.start);
        }
        else {
            compDate = compDate.add(1).month();
        }
        console.log("compDate:" + compDate);

        yearRent[i] = getRent(compDate, tenants)
    }
    return yearRent;
}


var modelRent = [];
function getSum(total, num) {
        return total + num;
    }
for (var i = 0; i < modelyears.length; i++) {
    var yearRent = buildYearRent(modelyears[i].startDate);
    modelRent[i] = yearRent.reduce(getSum);
}

var modelExpenses = [];
var yearExpense = 0;

for (x in expenses) {
    yearExpense += expenses[x];
}

for (var i = 0; i < modelyears.length; i++) {
    if (i == 0) {
        modelExpenses[i] = yearExpense;
    } else {
        modelExpenses[i] = modelExpenses[i-1] * 1.02;
    }
}

var modelNOI = [];
for (var i = 0; i < modelyears.length; i++) {
    modelNOI[i] = modelRent[i] - modelExpenses[i];
}

var debtService = pmt(divLoan.rate, divLoan.amort, divLoan.loan);
var basis = bldgDiversey.purchasePrice + bldgDiversey.improvements;
var equity = basis - divLoan.loan;

var modelCashonCash = [];
for (var i = 0; i < modelyears.length; i++) {
    modelCashonCash[i] = (modelNOI[i] - debtService) / equity ;
}

var terminalVal = [];
var termCap = bldgDiversey.terminalCap;
for (var i = 0; i < modelyears.length; i++) {
    if (i == 0) {
        terminalVal[i] = basis;
    } else {
        terminalVal[i] = modelNOI[i] / termCap ;
    }
    
}
