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
    <link href="/app/assets/css/style.css" rel="stylesheet" />
    <link href="/app/assets/css/stylesheet.css" rel="stylesheet" />

    <!-- google signin -->
    <script src="https://apis.google.com/js/platform.js" async defer></script>

</head>
<body>



<!-- our app will be injected here -->
<div class="login-screen">
    <!-- signin button -->
    <div class='container'>
        <div class='g-signin2' data-onsuccess='onSignIn'></div>
    </div>
</div>
<script>
    function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        var email = profile.getEmail();
        var yFig = profile.getId();
        document.cookie = "yFig=" + yFig +";secure"
        document.cookie = "email=" + email +";secure"
        document.cookie = "varaustemp=1;secure"
        var domain = googleUser.getHostedDomain();

        if (1 == 1) {
            window.location.href = "https://kirjasto.pieceofkake.fi/varaukset/varaukset.php";
        } else {
            signOut();
            window.location.href = "https://kirjasto.pieceofkake.fi/varaukset/";
        }
    }

    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        document.cookie = "temp= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = "yFig= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = "email= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        auth2.signOut().then(function () {
        });
    }
</script>

<!-- jQuery library -->
<script src="/app/assets/js/jquery-3.6.0.js"></script>

<!-- bootstrap JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<!-- bootbox for confirm pop up -->
<script src="/app/assets/js/bootbox.min.js"></script>

<!-- app js script -->
<script src="/app/app.js"></script>

<!-- products scripts -->


</body>
</html>
