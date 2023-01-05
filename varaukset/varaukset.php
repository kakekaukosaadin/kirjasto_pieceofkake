<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="google-signin-client_id" content="173932586241-jv88efgbsnkge94ltobkfknapu3gbcs6.apps.googleusercontent.com">

    <title>Read Products</title>

    <!-- bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- custom CSS -->
    <link href="app/assets/css/style.css" rel="stylesheet" />
    <link href="/app/assets/css/stylesheet.css" rel="stylesheet" />

    <!-- google signin -->
    <script src="https://apis.google.com/js/platform.js" async defer></script>

</head>
<body>



<!-- our app will be injected here -->
<?php if ($_COOKIE['varaustemp'] == 1) : ?>
    <div id="app"></div>

    <footer>
        <script>
            function signOut() {
                document.cookie = "varaustemp= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
                document.cookie = "yFig= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
                document.cookie = "email= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"

                var auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut().then(function () {
                    console.log('User signed out.');
                    window.location.href = "https://kirjasto.pieceofkake.fi/varaukset";
                });
            }

            function onLoad() {
                gapi.load('auth2', function() {
                    gapi.auth2.init();
                });
            }
        </script>

        <a href="#" onclick="signOut();">Kirjaudu ulos</a>
    </footer>

<?php else : ?>
    <p>
        <span class="error">You are not authorized to access this page.</span> Please <a href="https://kirjasto.pieceofkake.fi/varaukset">login</a>.
    </p>
<?php endif; ?>

<!-- jQuery library -->
<script src="app/assets/js/jquery-3.6.0.js"></script>

<!-- bootstrap JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<!-- bootbox for confirm pop up -->
<script src="app/assets/js/bootbox.min.js"></script>

<!-- app js script -->
<script src="app/app.js"></script>

<!-- products scripts -->
<script src="app/products/read-products.js"></script>
<script src="app/products/create-product.js"></script>
<script src="app/products/read-one-product.js"></script>
<script src="app/products/update-product.js"></script>
<script src="app/products/delete-product.js"></script>

<script src="https://apis.google.com/js/platform.js?onload=onLoad" async defer></script>



</body>
</html>