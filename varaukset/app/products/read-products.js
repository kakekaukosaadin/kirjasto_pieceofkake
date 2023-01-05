$(document).ready(function(){

    // show list of product on first load
    showProducts();

    // when a 'read products' button was clicked
    $(document).on('click', '.read-products-button', function(){
        showProducts();
    });

});

// function to show list of products
function showProducts(){
// get list of products from the API
    $.getJSON("https://kirjasto.pieceofkake.fi/api/product/read.php", function(data){

        // html for listing products
        var read_products_html="" +
            "<!-- when clicked, it will load the create product form -->\n" +
            "    <div id='create-product' class='btn btn-primary pull-right m-b-15px create-product-button'>\n" +
            "        <span class='glyphicon glyphicon-plus'></span> Create Product\n" +
            "    </div>" +
            "<!-- start table -->\n" +
            "<table class='table table-bordered table-hover'>\n" +
            " \n" +
            "    <!-- creating our table heading -->\n" +
            "    <tr>\n" +
            "        <th class='w-15-pct'>Tekijä</th>\n" +
            "        <th class='w-25-pct'>Teos</th>" +
            "        <th class='w-10-pct'>Luokka</th>\n" +
            "        <th class='w-20-pct'>Varaaja</th>\n" +
            "        <th class='w-20-pct'>Varattu</th>" +
            "        <th class='w-10-pct text-align-center'>Toiminnot</th>\n" +
            "    </tr>";

        //loop through returned list of data
        $.each(data.records, function(key, val) {

            if(val.price!=""){
                read_products_html+="" +
                    "<tr>\n" +
                    " \n" +
                    "            <td>" + val.name + "</td>\n" +
                    "            <td>" + val.description + "</td>" +
                    "            <td>" + val.category_name + "</td>\n" +
                    "            <td>" + val.price + "</td>\n" +
                    "            <td>" + val.modified + "</td>" +
                    " \n" +
                    "            <!-- 'action' buttons -->\n" +
                    "            <td>\n" +
                    " \n" +
                    "                <!-- edit button -->\n" +
                    "                <button class='btn btn-info m-r-10px update-product-button' data-id='" + val.id + "'>\n" +
                    "                    <span class='glyphicon glyphicon-edit'></span> Muokkaa\n" +
                    "                </button>\n" +
                    " \n" +
//                    "                <!-- delete button -->\n" +
//                    "                <button class='btn btn-danger delete-product-button' data-id='" + val.id + "'>\n" +
//                    "                    <span class='glyphicon glyphicon-remove'></span> Poista\n" +
//                    "                </button>\n" +
                    "            </td>\n" +
                    " \n" +
                    "        </tr>";
            } else return "";
            // creating new table row per record

        })
        // end table
        read_products_html+="</table>";

        // inject to 'page-content' of our app
        $("#page-content").html(read_products_html);

        // chage page title
        changePageTitle("Varaukset");
    });
}