<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="google-signin-client_id" content="845491993779-kpgr5djek7qod4u4hbgjgp340r5i6hho.apps.googleusercontent.com">

    <title>Read Products</title>

    <!-- bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- custom CSS -->
    <link href="/app/assets/css/style.css" rel="stylesheet" />
    <link href="/app/assets/css/stylesheet.css" rel="stylesheet" />

    <!-- google signin -->
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <script src="/app/products/login.js"></script>

</head>
<body class="kirjasto-body">



<!-- our app will be injected here -->
<?php if ($_COOKIE['temp'] == 1) : ?>
<div id="app"></div>

<footer>
    <script>
        function signOut() {
            document.cookie = "temp= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
            document.cookie = "yFig= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
            document.cookie = "email= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"

            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');
                window.location.href = "https://kirjasto.pieceofkake.fi/";
            });
        }

        function onLoad() {
            gapi.load('auth2', function() {
                gapi.auth2.init();
            });
        }

    </script>
    <p class="footer-text">Kirjauduttu sisään käyttäjällä <a id="display-user"></a></p>
    <script>
        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        document.getElementById("display-user").innerHTML = getCookie("email");
    </script>
    <a class="footer-text" href="#" onclick="signOut();">Kirjaudu ulos</a>
</footer>

<?php else : ?>
    <p>
        <span class="error">You are not authorized to access this page.</span> Please <a href="https://kirjasto.pieceofkake.fi">login</a>.
    </p>
<?php endif; ?>

<!-- jQuery library -->
<script src="/app/assets/js/jquery-3.6.0.js"></script>

<!-- bootstrap JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<!-- bootbox for confirm pop up -->
<script src="/app/assets/js/bootbox.min.js"></script>

<!-- app js script -->
<script src="/app/app.js"></script>

<!-- products scripts -->
<script src="/app/products/login.js"></script>
<script src="/app/products/read-produts.js"></script>
<script src="/app/products/create-product.js"></script>
<script src="/app/products/read-one-product.js"></script>
<script src="/app/products/update-product.js"></script>
<script src="/app/products/delete-product.js"></script>
<script src="/app/products/products.js"></script>
<script src="/app/products/search-product.js"></script>

<script src="https://apis.google.com/js/platform.js?onload=onLoad" async defer></script>

</body>
</html>