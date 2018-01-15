var $TABLE = $('#tenant-table');
var $BTN = $('#export-btn');
var $EXPORT = $('#export');

$('.table-add').click(function() {
    var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide');
    $TABLE.find('table').append($clone);
})


$('.table-remove').click(function() {
    $(this).parents('tr').detach();
})

$('.table-up').click(function() {
    var $row = $(this).parents('tr');
    if ($row.index() === 1) return; // index 0 is the header
    $row.prev().before($row.get(0));
})


$('.table-down').click(function() {
    var $row = $(this).parents('tr');
    $row.next().after($row.get(0));
})

// create jquery prototypes for array functions

jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;

$BTN.click(function() {
            var $rows = $TABLE.find('tr.not(:hidden)');
            var headers = [];
            var data = [];

            // get headers
            $($rows.shift()).find('th:not(:empty)').each(function() {
                headers.push($(this).text().toLowerCase());
            });

            //turn all existing rows into a loopable array
            $rows.each(function() {
                var $td = $(this).find('td');
                var h = {};


                headers.forEach(function(header, i) {
                    h[header] = $td.eq(i).text();
                });
            });
            
        data.push(h);
        
        //output the result
        $EXPORT.text(JSON.stringify(data));
})