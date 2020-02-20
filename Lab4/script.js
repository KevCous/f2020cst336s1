/*global $*/
console.log($("zip").val());
$("#zip").on("change", function(){
    console.log($("zip").val());
    $.ajax({
        method: "GET",
        url: "https://itcdland.csumb.edu/~milara/ajax/cityInfoByZip.php?zip=93955",
        dataType: "json",
        data: { "zip": $("zip").val()},
        success: function (result, status) {
            console.log(result);
            $("#city").html(result.city);
            $("#latitude").html(result.latitude);
            $("#longitude").html(result.longitude);
        }
    });
});

$("#state").on("change", function(){
    $.ajax({
        method: "GET",
        url: "https://itcdland.csumb.edu/~milara/ajax/countyList.php?state=ca",
        dataType: "json",
        data: { "state": $("#state").val() },
        success: function(result, status) {
            $("#county").html("<option> Select One </option>");
            for (let i=0; i < result.length; i++)
                $("#county").append("<option>" + result[i].county + "</option>");
        }
    });
});