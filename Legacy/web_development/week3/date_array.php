<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Homework 1 (Week3)</title>
    <style>
    </style>
</head>

<body>
    <h1 class='text-center'>Date</h1>

    <div class='container'>
        <p class='fs-4 fw-bold'>What is your date of birth ?</p>
        <div class="btn-group">
            <button type="button" class="btn btn-primary btn-lg">Day</button>
            <button type="button" class="btn btn-primary btn-lg dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
                <?php
                    $day=1;
                    for ($x = 0; $x < 31; $x++) {
                        echo "<li><a class='dropdown-item' href='#'>".$day++."</a></li>";
                    }
                ?>

            </ul>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-warning btn-lg">Month</button>
            <button type="button" class="btn btn-warning btn-lg dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
                <?php
                    $month=array('January','February','March','April','May',"June","July","August","September","October","November","December");
                    for ($x = 0; $x < 12; $x++) {
                        echo "<li><a class='dropdown-item' href='#'>".$month[$x]."</a></li>";
                    }
                ?>

            </ul>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-danger btn-lg">Year</button>
            <button type="button" class="btn btn-danger btn-lg dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
                <?php
                    $year=1900;
                    for ($x = 2022; $x >= 1900; $x--) {
                        echo "<li><a class='dropdown-item' href='#'>".$year++."</a></li>";
                    }
                ?>

            </ul>
        </div>
        
    </div>


    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>

</html>