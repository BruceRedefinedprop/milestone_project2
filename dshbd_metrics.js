/* This module builds are arrays to hold data
that will be used create Dashboard tables and
graphs*/

// set up models term years

function Years(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
}

var modelyears = [];
modelyears[0] = new Years;
modelyears[0].startDate = new Date(bldgDiversey.purchaseDate);
modelyears[0].startDate.setMonth(modelyears[0].startDate.getMonth()+1, 1);
modelyears[0].endDate = new Date(modelyears[0].startDate);
modelyears[0].endDate.setFullYear(modelyears[0].endDate.getFullYear() + 1);
modelyears[0].endDate.setDate(modelyears[0].endDate.getDate() - 1);