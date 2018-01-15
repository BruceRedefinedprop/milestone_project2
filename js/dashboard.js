$('#nav-submenu li.nav-building').click(function() {
    $('#building').css('display', 'block');
    $('#tenant').css('display', 'none');
    $('#expenses').css('display', 'none');
    $('#loan').css('display', 'none');
})

$('#nav-submenu li.nav-tenants').click(function() {
    $('#building').css('display', 'none');
    $('#tenant').css('display', 'block');
    $('#expenses').css('display', 'none');
    $('#loan').css('display', 'none');
})

$('#nav-submenu li.nav-expenses').click(function() {
    $('#building').css('display', 'none');
    $('#tenant').css('display', 'none');
    $('#expenses').css('display', 'block');
    $('#loan').css('display', 'none');
})

$('#nav-submenu li.nav-loan').click(function() {
    $('#building').css('display', 'none');
    $('#tenant').css('display', 'none');
    $('#expenses').css('display', 'none');
    $('#loan').css('display', 'block');
})

$('#nav-submenu li.nav-dashboard').click(function() {
    $('#building').css('display', 'none');
    $('#tenant').css('display', 'none');
    $('#expenses').css('display', 'none');
    $('#loan').css('display', 'none');
})


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
    $('#bldgTermCap').val(building.terminalCap);
    var dateSetter = dt_formater(building.purchaseDate)
    $('#bldgPurDate').val(dateSetter);
}

function dt_formater(dateText) {
    var date = new Date(dateText);
    var day = ("0" + date.getDate()).slice(-2);
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var formateddate = date.getFullYear() + "-" + (month) + "-" + (day);
    return formateddate;
}



setBuildingHtml(bldgDiversey);
