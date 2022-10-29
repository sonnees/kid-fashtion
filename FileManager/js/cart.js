var gia1 = 299;
var gia2 = 299;
var gia3 = 99;

$("#input1").change( function() {
    alert(sds);
    updateTotal();

});

function updateTotal() {
    var gia1 = 299;
    var gia2 = 299;
    var gia3 = 99;
    var QTY1 =  document.getElementById("input1").value;
    
    var total =0;
    var QTY1 =  document.getElementById("input1").value;
    var QTY2 =  document.getElementById("input2").value;
    var QTY3 =  document.getElementById("input3").value;
    total= gia1*parseInt(QTY1)+gia2*parseInt(QTY2)+gia3*parseInt(QTY3)
    var totalString = total.toString(). 
            replace(/\B(?=(\d{3})+(?!\d))/g,".");
    document.getElementById('txtTotal').innerHTML = totalString;
}

