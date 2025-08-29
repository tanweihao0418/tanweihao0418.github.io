<!doctype html>
<html>
<head>
    <title>Exercise 1 (Week 3)</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <style>
        #num1{
            font-size: 25px;
            color: green;
            font-style: italic;
        }
        #num2{
            font-size: 25px;
            color: blue;
            font-style: italic;
        }
        #sum{
            font-size: 25px;
            color: red;
            font-weight: bolder;
        }
        #multiplication{
            font-size: 25px;
            font-style: italic;
            font-weight: bolder;
        }
    </style>

</head>

<body>
<div>
    <h1>Random Number</h1>
    <?php
        $num1=rand(100,200);
        $num2=rand(100,200);
        $sum=$num1+$num2;
        $multiplication=$num1*$num2;

        echo "<p id='num1'>".$num1."</p>";
        echo "<p id='num2'>".$num2."</p>";
        echo "<p id='sum'>".$sum."</p>";
        echo "<p id='multiplication'>".$multiplication."</p>";

    ?>
</div>
</body>
</html>
