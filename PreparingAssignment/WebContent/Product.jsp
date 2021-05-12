<%@page import="com.Product"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Items Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/items.js"></script>
</head>
<body> 
<div class="container"><div class="row"><div class="col-6"> 
<h1>Items Management V10.1</h1>
<form id="FormProduct" name="FormProduct">
Product Name: 
 <input id="productName" name="productName" type="text" 
 class="form-control form-control-sm">
 <br> Product Type: 
 <input id="productType" name="productType" type="text" 
 class="form-control form-control-sm">
 <br> Minimum Price: 
 <input id="minimumPrice" name="minimumPrice" type="text" 
 class="form-control form-control-sm">
 <br> Product Description: 
 <input id="productDesc" name="productDesc" type="text" 
 class="form-control form-control-sm">
 <br> Closing Date: 
 <input id="ClosingDate" name="ClosingDate" type="text" 
 class="form-control form-control-sm">
 <br>
 <input id="btnSave" name="btnSave" type="button" value="Save" 
 class="btn btn-primary">
 <input type="hidden" id="hidProductIDSave" 
 name="hidProductIDSave" value="">
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divItemsGrid">
 <%
 Product productObj = new Product(); 
 out.print(productObj.readAllProduct()); 
 %>
</div>
</div> </div> </div> 
</body>
</html>