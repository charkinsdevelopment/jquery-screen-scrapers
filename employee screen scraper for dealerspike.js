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
$('.group-wrap').each(function(){
	var department = $(this).find('.trigger').text();
	//console.log(department);
	var employees =  $(this).find('.staffperson').each(function(){
		var employee = {};
		employee.department = department;
		var title = $(this).find('.title').text();
		//console.log(title);
		var name = $(this).find('.name').text();
		//console.log(name);
		var firstName = name.split(' ')[0];
		var lastName = name.split(' ')[1];
		if(name.split(' ').length > 2){
			lastName = name.split(' ')[2];
		}
		employee.firstName = firstName;
		employee.lastName = lastName;
		employee.title = title;
		var image = $(this).find('.image');
		var bg = image.css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
		employee.imageurl = bg;
		employeelist.push(employee);
		//console.log(employee);
		//console.log(employeelist);
	});
});
copy(CSV(employeelist));

console.log('done');
