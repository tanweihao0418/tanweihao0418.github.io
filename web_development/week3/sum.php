<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Exercise 3 (Week3)</title>
    <style>
    </style>
</head>

<body>
    <h1 class='text-center'>Sum</h1>

    <div class='container'>

        <?php
            $num1 = 0;
            $sum=0;
            for ($x = 1; $x <= 100; $x++) {
                $sum=$sum+$num1;
                if ($num1%2==0) {
                    echo "<p class='text-center fs-5 text-danger fw-bolder'>".$num1++ . "</p>";
                }
                else{
                    echo "<p class='text-center fs-5 text-danger'>".$num1++ . "</p>";
                }
            }
            echo "<p class='text-center fs-4 text-warning'>Total : ".$sum . "</p>";
        ?>

    </div>


    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>

</html>