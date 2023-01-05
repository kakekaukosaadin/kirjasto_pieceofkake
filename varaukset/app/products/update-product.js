$(document).ready(function(){

    // show html form when 'update product' button was clicked
    $(document).on('click', '.update-product-button', function(){
        // get product id
        var id = $(this).attr('data-id');

        // read one record based on given product id
        $.getJSON("https://kirjasto.pieceofkake.fi/api/product/read_one.php?id=" + id, function(data){

            // values will be used to fill out our form
            var name = data.name;
            var price = data.price;
            var description = data.description;
            var category_id = data.category_id;
            var category_name = data.category_name;

            // load list of categories
            $.getJSON("https://kirjasto.pieceofkake.fi/api/category/read.php", function(data){

                // build 'categories option' html
                // loop through returned list of data
                var categories_options_html="<select name='category_id' class='form-control'>";

                $.each(data.records, function(key, val){
                    // pre-select option is category id is the same
                    if(val.id==category_id){ categories_options_html+="<option value='" + val.id + "' selected>" + val.name + "</option>"; }

                    else{ categories_options_html+="<option value='" + val.id + "'>" + val.name + "</option>"; }
                });
                categories_options_html+="</select>";

                // store 'update product' html to this variable
                var update_product_html= "" +
                    "<div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>\n" +
                    "        <span class='glyphicon glyphicon-list'></span> Read Products\n" +
                    "    </div>" +
                    "" +
                    "<!-- build 'update product' html form -->\n" +
                    "" +
                    "<form id='update-product-form' action='#' method='post' style='border: 0'>" +
                    "                       <table class='table table-hover table-responsive table-bordered'>" +
                    "" +
                    "<!-- we used the 'required' html5 property to prevent empty fields -->" +
                    "<!-- name field -->\n" +
                    "        <tr>\n" +
                    "            <td>Name</td>\n" +
                    "            <td><input value='" + name + "' type='text' name='name' class='form-control' required /></td>\n" +
                "        </tr>" +
                "" +
                "<!-- price field -->\n" +
                "        <tr>\n" +
                "            <td>Price</td>\n" +
                "            <td><input value='" + price + "' type='text' name='price' class='form-control' /></td>\n" +
                "        </tr>" +
                "" +
                "<!-- description field -->\n" +
                "        <tr>\n" +
                "            <td>Description</td>\n" +
                "            <td><textarea name='description' class='form-control' required>" + description + "</textarea></td>\n" +
                "        </tr>" +
                "" +
                "<tr>\n" +
                "            <td>Category</td>\n" +
                "            <td>" + categories_options_html + "</td>\n" +
                "        </tr>" +
                "" +
                "<tr>\n" +
                " \n" +
                "            <!-- hidden 'product id' to identify which record to delete -->\n" +
                "            <td><input value='" + id + "' name='id' type='hidden' /></td>\n" +
                " \n" +
                "            <!-- button to submit form -->\n" +
                "            <td>\n" +
                "                <button type='submit' class='btn btn-info'>\n" +
                "                    <span class='glyphicon glyphicon-edit'></span> Update Product\n" +
                "                </button>\n" +
                "            </td>\n" +
                " \n" +
                "        </tr>" +
                "</table>" +
                "</form>";

                // inject to 'page-content' of our app
                $("#page-content").html(update_product_html);

// chage page title
                changePageTitle("Update Product");
            });
        });
    });

    // will run if 'create product' form was submitted
    $(document).on('submit', '#update-product-form', function(){

        // get form data
        var form_data=JSON.stringify($(this).serializeObject());

        // submit form data to api
        $.ajax({
            url: "https://kirjasto.pieceofkake.fi/api/product/update.php",
            type : "POST",
            contentType : 'application/json',
            data : form_data,
            success : function(result) {
                // product was created, go back to products list
                //showProducts();
                location.reload();
            },
            error: function(xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });

        return false;
    });
});