$(document).ready(function()
{ 
if ($("#alertSuccess").text().trim() == "") 
 { 
 $("#alertSuccess").hide(); 
 } 
 $("#alertError").hide(); 
}); 
// SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{ 
// Clear alerts---------------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
// Form validation-------------------
var status = validateProductForm(); 
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 
// If valid------------------------
var type = ($("#hidProductIDSave").val() == "") ? "POST" : "PUT"; 
 $.ajax( 
 { 
 url : "ProductAPI", 
 type : type, 
 data : $("#FormProduct").serialize(), 
 dataType : "text", 
 complete : function(response, status) 
 { 
 onProductSaveComplete(response.responseText, status); 
 } 
 }); 
});

function onProductSaveComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully saved."); 
 $("#alertSuccess").show(); 
 $("#divProductGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while saving."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while saving.."); 
 $("#alertError").show(); 
 } 
 $("#hidProductIDSave").val(""); 
 $("#FormProduct")[0].reset(); 
}




// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) 
{ 
 $("#hidProductIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val());
 $("#productName").val($(this).closest("tr").find('td:eq(0)').text()); 
 $("#productType").val($(this).closest("tr").find('td:eq(1)').text()); 
 $("#productDesc").val($(this).closest("tr").find('td:eq(2)').text()); 
 $("#ClosingDate").val($(this).closest("tr").find('td:eq(3)').text()); 
}); 


$(document).on("click", ".btnRemove", function(event)
{ 
 $.ajax( 
 { 
 url : "ProductAPI", 
 type : "DELETE", 
 data : "productID=" + $(this).data("productid"),
 dataType : "text", 
 complete : function(response, status) 
 { 
 onProductDeleteComplete(response.responseText, status); 
 } 
 }); 
});
function onProductDeleteComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully deleted."); 
 $("#alertSuccess").show(); 
 $("#divProductGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while deleting."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while deleting.."); 
 $("#alertError").show(); 
 }
 }
// CLIENT-MODEL================================================================
function validateItemForm() 
{ 
// NAME
if ($("#productName").val().trim() == "") 
 { 
 return "Insert Product Name."; 
 } 
// TYPE
if ($("#productType").val().trim() == "") 
 { 
 return "Insert Product Type."; 
 } 
// PRICE-------------------------------
if ($("#minimumPrice").val().trim() == "") 
 { 
 return "Insert Product Price."; 
 } 
// is numerical value
var tmpPrice = $("#minimumPrice").val().trim(); 
if (!$.isNumeric(tmpPrice)) 
 { 
 return "Insert a numerical value for Product Price."; 
 } 
// convert to decimal price
 $("#minimumPrice").val(parseFloat(tmpPrice).toFixed(2)); 
// DESCRIPTION------------------------
if ($("#productDesc").val().trim() == "") 
 { 
 return "Insert Product Description."; 
 } 
 // CLOSING DATE------------------------
if ($("#productDesc").val().trim() == "") 
 { 
 return "Insert Product Description."; 
 }
return true; 
}