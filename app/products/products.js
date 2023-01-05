// product list html
function readProductsTemplate(data, keywords){

    var read_products_html="" +
        "<!-- search products form -->" +
        "<form id='search-product-form' action='#' method='post'>" +
        "<div class='input-group pull-left w-30-pct'>" +
        "   <input type='text' value='"+keywords+"' name='keywords' class='form-control product-search-keywords' placeholder='Hae kirjastosta...' />" +
        "   <span class='input-group-btn'>" +
        "       <button type='submit' class='btn btn-default' type='button'>" +
        "           <span class='glyphicon glyphicon-search'></span>" +
        "       </button>" +
        "   </span>" +
        "</div>" +
        "</form>" +
        "<!-- when clicked, it will load the create product form -->" +
//        "<div id='create-product' class='btn btn-primary pull-right m-b-15px create-product-button'>" +
//        "   <span class='glyphicon glyphicon-plus'></span> Create Product" +
//        "</div>" +
        "<!-- start table -->" +
        "<table class='table table-bordered table-hover'>" +
        "   <!-- creating our table heading -->" +
        "   <tr>" +
        "       <th class='w-25-pct'>Tekijä</th>" +
        "       <th class='w-20-pct'>Teos</th>" +
        "       <th class='w-20-pct'>Luokka</th>" +
        "       <th class='w-8-pct'>Varaustilanne</th>" +
        "       <th class='w-27-pct text-align-center'>Varaa</th>" +
        "   </tr>";

    // loop through returned list of data
    $.each(data.records, function(key, val) {
        // give exception if category null
        var clean_category_name = "";
        var varaustilanne = "";
        var varausbutton = "";
        if(val.category_name==null){
            clean_category_name = "Ei määritelty";
        } else {
            clean_category_name = val.category_name;
        }
        if(val.price==""){
            varaustilanne = "Vapaa";
            varausbutton = "";
        } else {
            varaustilanne = "Varattu";
            varausbutton = "disabled";
        }

        // creating new table row per record
        read_products_html+="" +
            "<tr>" +
            "   <td>"+val.name+"</td>" +
            "   <td>"+val.description+"</td>"
            +
            "   <td>"+clean_category_name+"</td>" +
            "" +
            "   <td>"+varaustilanne+"</td>" +
            "   <!-- action buttons -->" +
            "   <td>" +
            "       <!-- edit button -->" +
            "       <button class='btn btn-primary update-product-button' data-id='"+val.id+"' "+varausbutton+">" +
            "           <span class='glyphicon glyphicon-edit'></span>Varaa " +
            "       </button>" +
            "   </td>" +
            "</tr>";
    });

    // end table
    read_products_html+="</table>";

    //pagination
    if(data.paging){
        read_products_html+= "<ul class='pagination pull-left margin-zero padding-bottom-2em'>";
        //first page
        if(data.paging.first!=""){
            read_products_html+="<li><a data-page='"+data.paging.first+"'>1. sivu</a></li>";
        }
        // loop through pages
        $.each(data.paging.pages, function(key, val){
            var active_page=val.current_page=="yes" ? "class='active'" : "";
            read_products_html+="<li "+active_page+"><a data-page='"+val.url+"'>"+val.page+"</a></li>";
        });
        // last page
        if(data.paging.last!=""){
            read_products_html+="<li><a data-page='"+data.paging.last+"'>Viim. sivu</a></li>";
        }
        read_products_html+="</ul>";

    }

    // inject to 'page-content' of our app
    $("#page-content").html(read_products_html);

    }