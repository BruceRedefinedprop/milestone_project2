$('#nav-submenu li.nav-building').click(function() {
    $('#building').css('display', 'block');
    $('#tenant').css('display', 'none');
    $('#expenses').css('display', 'none');
    $('#loan').css('display', 'none');
    $('#dashboard').css('display', 'none');
    
})

$('#nav-submenu li.nav-tenants').click(function() {
    $('#building').css('display', 'none');
    $('#tenant').css('display', 'block');
    $('#expenses').css('display', 'none');
    $('#loan').css('display', 'none');
    $('#dashboard').css('display', 'none');
})

$('#nav-submenu li.nav-expenses').click(function() {
    $('#building').css('display', 'none');
    $('#tenant').css('display', 'none');
    $('#expenses').css('display', 'block');
    $('#loan').css('display', 'none');
    $('#dashboard').css('display', 'none');
})

$('#nav-submenu li.nav-loan').click(function() {
    $('#building').css('display', 'none');
    $('#tenant').css('display', 'none');
    $('#expenses').css('display', 'none');
    $('#loan').css('display', 'block');
    $('#dashboard').css('display', 'none');
})

$('#nav-submenu li.nav-dashboard').click(function() {
    $('#building').css('display', 'none');
    $('#tenant').css('display', 'none');
    $('#expenses').css('display', 'none');
    $('#loan').css('display', 'none');
    $('#dashboard').css('display', 'block');
})

// buildTenantRentTbl(0);

 
$('#tenantListdpdwn').change(function() {
    var tntIdx = Number($('#tenantListdpdwn').val());
    buildTenantRentTbl(tntIdx);
});

// Set values of HTML

function setBuildingHtml(building) {
    $('#bldgName').val(building.bldgName);
    $('#bldgAddr').val(building.stAddress);
    $('#bldgCity').val(building.city);
    $('#bldgSt').val(building.state.toUpperCase());
    $('#bldgZip').val(building.zip);
    $('#bldgSize').val(building.bldgSize);
    $('#bldgClosing').val(building.closingCosts);
    $('#bldgPrice').val(building.purchasePrice);
    $('#bldgImprovements').val(building.improvements);
    $('#bldgTermCap').val(building.terminalCap * 100);
    var dateSetter = dt_formater(building.purchaseDate)
    $('#bldgPurDate').val(dateSetter);
}

function setLoanHtml(loan) {
    $('#loanBank').val(loan.bank);
    $('#loanAmount').val(loan.loan);
    $('#loanTerm').val(loan.term);
    $('#loanRate').val(loan.rate);
    $('#loanAmort').val(loan.amort);
    var dateSetter = dt_formater(loan.startDate)
    $('#loanStart').val(dateSetter);
}



function dt_formater(dateText) {
    var date = new Date(dateText);
    var day = ("0" + date.getDate()).slice(-2);
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var formateddate = date.getFullYear() + "-" + (month) + "-" + (day);
    return formateddate;
}

function rentArrayBuilder(bldgArray, header) {
    var data = [];
    data.push(header);
    for (var i = 0; i < bldgArray.rents.length; i++) {
        var arrayRow = [];
        arrayRow[0] = bldgArray.rents[i].startDate.toLocaleDateString();
        arrayRow[1] = bldgArray.rents[i].endDate.toLocaleDateString();
        arrayRow[2] = numeral(bldgArray.rents[i].monthlyRent).format('($0,0)');
        arrayRow[3] = numeral(bldgArray.rents[i].monthlyRent * 12).format('($0,0)');
        arrayRow[4] = numeral(((bldgArray.rents[i].monthlyRent * 12) / bldgArray.unit_size)).format('$0,0.00');
        data.push(arrayRow);
    }
    return data;
}

setBuildingHtml(bldgDiversey);
buildSelect('#tenantListdpdwn',tenant);

setLoanHtml(divLoan);

function buildTenantRentTbl(i) {
    // $('#bldgName').val(building.bldgName);
    

    $('#tenantSize').val(tenant[i].unit_size);
    $('#tenant-table').empty();
    var tenantData = [];
    var tenantHeader = ["start Date", "End Date", "Monthly Rent", "Annualized Rent", "Rent / SF"];
    var tenantData = rentArrayBuilder(tenant[i], tenantHeader);
    console.log(tenantData);
    var Renttable = arrayToTable(tenantData, {
        thead: true,
        attrs: { class: 'table' }
    })
    $('#tenant-table').append(Renttable);

}

buildTenantRentTbl(0);

function buildExpTab(exp) {
    $('#expGrw').val(exp)
}

buildExpTab((.02 * 100));


function expArrayBuilder(exp, header) {
    var expData = [];
    expData.push(header);
    for (var property in exp) {
        var arrayRow = [];
        if (property != "growth") {
           arrayRow[0] = property;
           arrayRow[1] = numeral(exp[property]).format('$0,0.00');
           expData.push(arrayRow); 
        }
    }
    return expData;
};

var expHeader = ["Expense", "Amount"];
var expData = expArrayBuilder(expenses, expHeader);

var ExpTable = arrayToTable(expData, {
    thead: true,
    attrs: { class: 'table' }
})

$('#exp-table').append(ExpTable);

function loadXMLDoc() { var e;
    e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), e.onreadystatechange = function() { 4 == e.readyState && 200 == e.status && (document.getElementById("KeyMarketRates").innerHTML = e.responseText) }, e.open("POST", "https://www.commercialloandirect.com/rates-api.php", !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send("Prime=N&Libor30Day=N&Libor90Day=N&Libor6Month=N&Libor1Year=N&Swap3Year=N&Swap5Year=N&Swap7Year=N&Swap10Year=N&Treasury5Year=Y&Treasury7Year=Y&Treasury10Year=Y&SBA10Year=N&SBA20Year=N&Bordered=N&Center=N&RightCol=N&LeftCol=N&ColorText=000000&Width=50%&WidthCol1=050&WidthCol2=050&TbColor=FFFFFF&BdColor=000000") }
loadXMLDoc();
