/script start
var unitList = [];
 
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
 
$('.vehicle_row').each(function(){
var obj = {};
var video = $(this).find('.viewvideo');
if(video != undefined){ 
var videoUrl = video.attr('href');
obj.videoUrl = videoUrl;
    }
var details = $(this).find('.VehicleDetail');
var stock = details.find('.stockno');
var stockNumber = stock.find('.unitValue');
if(stockNumber != undefined)
{
obj.stockNumber = stockNumber[0].innerText;
    }
//console.log(obj);
unitList.push(obj);
});
copy(CSV(unitList));
alert('Data copied to your clipboard');


//script end.