<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Exercise 2 (Week3)</title>
    <style>
    </style>
</head>

<body>
    <h1>Random Num Color</h1>

    <div class='container'>
       
            <?php
                $num1=rand(100,200);
                $num2=rand(100,200);

                if ($num1 > $num2) {
                    echo "<p class='fs-1 fw-bolder text-danger'>".$num1."</p>";
                    echo "<p class='fs-5 text-primary'>".$num2."</p>";
                } else {
                    echo "<p class='fs-5 text-primary'>".$num1."</p>";
                    echo "<p class='fs-1 fw-bolder text-danger'>".$num2."</p>";
                }
            ?>

    </div>


    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>

</html>