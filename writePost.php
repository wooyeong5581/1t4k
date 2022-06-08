<?php
    $connect = mysqli_connect("localhost", "root", "root", "board") or die("접속 실패");

    $id = $_POST['id'];
    $title = $_POST['title'];
    $content = $_POST['content'];
    $date = date("Y-m-d H:i:s");

    $query="INSERT INTO article
    SET NUMBER=NULL,
    id='$id',
    title='$title',
    content='$content',
    date='$date',
    hit=0";

    mysqli_query($connect, $query);
?>
    <script>
        location.href='list.php';
    </script>