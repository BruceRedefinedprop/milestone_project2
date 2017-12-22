/* This module builds are arrays to hold data
that will be used create Dashboard tables and
graphs*/

// set up models term years

function Years(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
}

var modelyears = [];

for (var i = 0; i < MODEL_YEARS; i++) {
    if (i == 0) {
         
        modelyears[0] = new Years;
        modelyears[0].startDate = new Date(bldgDiversey.purchaseDate);
        modelyears[0].startDate.setMonth(modelyears[0].startDate.getMonth() + 1, 1);
        modelyears[0].endDate = new Date(modelyears[0].startDate);
        modelyears[0].endDate.setFullYear(modelyears[0].endDate.getFullYear() + 1);
        modelyears[0].endDate.setDate(modelyears[0].endDate.getDate() - 1);
    } else {
        console.log(i);
        modelyears[i] = new Years;
        modelyears[i].startDate = new Date(modelyears[i-1].endDate);
        modelyears[i].startDate.setDate(modelyears[i].startDate.getDate() + 1);
        modelyears[i].endDate = new Date(modelyears[i].startDate);
        modelyears[i].endDate.setFullYear(modelyears[i].endDate.getFullYear() + 1);
        modelyears[i].endDate.setDate(modelyears[i].endDate.getDate() - 1);
    }
}

// build Rent Array

//get rent function

 function getRent(compDate, tenant) {
     var rentTotal = 0;
    this.compDate = compDate;
    this.tenant = tenant;
    for (var i = 0; i < this.tenant.length; i++) {
        for (var j = 0; j < this.tenant[i].rents.length; j++) {
            if (this.tenant[i].rents[j].startDate <= this.compDate && this.tenant[i].rents[j].endDate >= this.compDate) {
                rentTotal +=  this.tenant[i].rents[j].monthlyRent;
            }
        }
        
    }
    return rentTotal;
}

 console.log(getRent(modelyears[0].startDate, tenants));


yearRent = []
for (var i = 0; i < 12; i++) {
    // if statement for first month.. then increment compare data...
    if (i == 0) {
        compDate = new Date(modelyears[0].startDate);
    } else {
        compDate = compDate.add(1).month();
    }
    console.log("compDate:" + compDate);
    
    yearRent[i] = getRent(compDate, tenants)
}
function getSum(total, num) {
    return total + num;
}

yearRentTotal = yearRent.reduce(getSum);


