function CSV(array) {
    // Use first element to choose the keys and the order
    var keys = Object.keys(array[0]);

    // Build header
    var result = keys.join(",") + "\n";

    // Add the rows
    array.forEach(function(obj){
        keys.forEach(function(k, ix){
            if (ix) result += ",";
            result += obj[k];
        });
        result += "\n";
    });

    return result;
}

var employeelist = [];
$('.staff-modal-wrap').each(function(){
	var fname = $(this).find('.firstname').text();
	var lname = $(this).find('.lastname').text();
	var bio = $(this).find('.bio .value p').text();
	var employee = {};
	employee.firstName = fname;
	employee.lastName = lname;
	employee.bio = bio;
    employeelist.push(employee);

});
copy(CSV(employeelist));

console.log('done');
