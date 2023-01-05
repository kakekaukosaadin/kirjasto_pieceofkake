$(document).ready(function(){

    // handle 'read one' button click
    $(document).on('click', '.read-one-product-button', function(){
        // get product id
        var id = $(this).attr('data-id');

        // read product record based on given ID
        $.getJSON("https://kirjasto.pieceofkake.fi/api/product/read_one.php?id=" + id, function(data){
            // start html
            var read_one_product_html ="" +
                "<!-- when clicked, it will show the product's list -->\n" +
                "    <div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>\n" +
                "        <span class='glyphicon glyphicon-list'></span> Read Products\n" +
                "    </div>" +
                "<!-- product data will be shown in this table -->\n" +
                "<table class='table table-bordered table-hover'>\n" +
                " \n" +
                "    <!-- product name -->\n" +
                "    <tr>\n" +
                "        <td class='w-30-pct'>Name</td>\n" +
                "        <td class='w-70-pct'>" + data.name + "</td>\n" +
                "    </tr>\n" +
                " \n" +
                "    <!-- product price -->\n" +
                "    <tr>\n" +
                "        <td>Price</td>\n" +
                "        <td>" + data.price + "</td>\n" +
                "    </tr>\n" +
                " \n" +
                "    <!-- product description -->\n" +
                "    <tr>\n" +
                "        <td>Description</td>\n" +
                "        <td>" + data.description + "</td>\n" +
                "    </tr>\n" +
                " \n" +
                "    <!-- product category name -->\n" +
                "    <tr>\n" +
                "        <td>Category</td>\n" +
                "        <td>" + data.category_name + "</td>\n" +
                "    </tr>\n" +
                " \n" +
                "</table>";

            // inject html to 'page-content' of our app
            $("#page-content").html(read_one_product_html);

// chage page title
            changePageTitle("Create Product");
        });
    });

});