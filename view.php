<?php
$connect = mysqli_connect("localhost", "root", "root", "board");

$number = $_GET['NUMBER'];
$SQL = "select * from article where NUMBER='$number'";
$result = mysqli_query($connect, $SQL);
$row = mysqli_fetch_assoc($result);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>내용</title>
</head>
<body>
    <div>
        <?php echo $row['content'] ?>
    </div>
</body>
</html>