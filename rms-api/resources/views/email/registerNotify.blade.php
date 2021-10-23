<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Registraion Success</title>
</head>
<body>
    <h2 style="color: rgba(86, 88, 88, 0.027);">Registration Success</h2>
    <h2>Dear <span style="color: rgb(96, 9, 136);">{{ $details['name'] }}</span> ,</h2>
    <p>We are requesting to click this link to verify your account, please click bellow link to Verify</p>
    <h1><a href="http://127.0.0.1:8000/api/verify/{{$details['token']}}/{{$details['email']}}" style="padding:1rem;margin-top: 5px;margin-bottom: 5px;background:rgb(4, 79, 141);color:#ffff;">Verify</a></h1>
    <p style="color: rgb(9, 7, 37)">Thank You</p>
    <a href="http://127.0.0.1:3000" style="color: blue">Go to website</a>
</body>
</html>
