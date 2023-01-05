$(document).ready(function(){

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    var globalUpdateData = [];

    //gapi.auth2.init();

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
                var categories_options_html="";

                $.each(data.records, function(key, val){
                    // pre-select option is category id is the same
                    if(val.id==category_id){ categories_options_html+="<td>"+val.name+"</td>"+
                        "<input name='category_id' value='"+val.id+"' type='hidden'>"; }

                    else{ categories_options_html+="<input value='"+val.id+"' type='hidden'>"; }
                });

                var userEmail = readCookie('email');

                categories_options_html+="";

                // store 'update product' html to this variable
                var update_product_html="" +
                    "<div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>" +
                    "   <span class='glyphicon glyphicon-list'></span> Takaisin" +
                    "</div>" +
                    "<!-- build 'update product' html form -->" +
                    "<!-- we used the 'required' html5 property to prevent empty fields -->" +
                    "<form id='update-product-form' action='#' method='post' style='border: 0'>" +
                    "   <table class='table table-hover table-responsive table-bordered'>" +
                    "       <!-- name field -->" +
                    "       <tr>" +
                    "           <td>Tekijä</td>" +
                    "           <td>"+name+"</td>" +
                    "           <input value='"+name+"' name='name' type='hidden'>" +
                    "       </tr>" +
                    "       <!-- description field -->\n" +
                    "       <tr>" +
                    "           <td>Teos</td>" +
                    "           <td>"+description+"</td>" +
                    "           <input name='description' value='"+description+"' type='hidden'>" +
                    "       </tr>" +
                    "       <!-- price field-->" +
//                    "       <tr>" +
//                    "           <td>Varaus</td>" +
//                    "           " +
//                    "           <td><select name='price' required>" +
//                    "               <option value='"+price+"' selected>"+price+"</option>" +
//                    "               <option value='Varattu'>Varattu</option>" +
//                    "               <option value='Vapaa'>Vapaa</option>" +
//                    "           </select></td>" +
//                    "       </tr>" +
                    "       <!-- categories 'select' field -->\n" +
                    "       <tr>" +
                    "           <td>Luokka</td>" +
                    "           "+categories_options_html+
                    "       </tr>" +
                    "       <tr>" +
                    "           <!-- hidden 'product id' to identify which record to delete -->" +
                    "           <td><input value='"+id+"' name='id' type='hidden' /></td>" +
                    "           <input value='"+userEmail+"' name='price' type='hidden'>" +
                    "           <!-- button to submit form -->" +
                    "           <td>" +
                    "               <button type='submit' class='btn btn-info'>" +
                    "                   <span class='glyphicon glyphicon-edit'></span> Varaa " +
                    "               </button>" +
                    "           </td>" +
                    "       </tr>" +
                    "   </table>" +
                    "</form>";

                // inject to 'page-content' of our app
                $("#page-content").html(update_product_html);

                // chage page title
                changePageTitle("Varaa teos");

            });
        });
    });

    // will run if 'create product' form was submitted
    $(document).on('submit', '#update-product-form', function(){

        // get form data
        var form_data=JSON.stringify($(this).serializeObject());
        globalUpdateData = JSON.stringify($(this).serializeObject());

        // submit form data to kirjasto_api
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
    console.log(globalUpdateData);
    //onSignIn(googleUser);
});