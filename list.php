<div style="background-color:#CFFFE5; width: 1000px; margin:0 auto;
            text-align:center">
    게시판
</div>

<div style="width: 1000px; height: 600px; border:1px solid black; margin:0 auto;">
    <table width="100%" border="1" >
        <tr>
            <th style="width: 3%;"> No </th>
            <th style="width: 40%;"> 제목 </th>
            <th style="width: 7%;"> 작성자 </th>
            <th style="width: 20%;"> 작성일자 </th>
        </tr>
    <?php
        $connect = mysqli_connect("localhost", "root", "root", "board");
        $query = "select * from article order by NUMBER asc ";
        $result = mysqli_query($connect, $query);

        while($data = mysqli_fetch_assoc($result)){
    ?>
        <tr>
            <td style="text-align:center"> <?php echo $data['NUMBER']?> </td>
            <td style="text-align:center"> <a href="view.php?NUMBER=<?php echo $data['NUMBER']?>"><?php echo $data['title']?> </a> </td>
            <td style="text-align:center"> <?php echo $data['id']?> </td>
            <td style="text-align:center"> <?php echo $data['date']?> </td>
        
        </tr>
    <?php } 
    ?>

    </table>
</div>
<div style="background-color:#CFFFE5; width: 1000px; margin:0 auto; position:relative;">
    <div style="position:absolute; background-color:#CFFFE5; right:0px; display: block;
    margin-bottom: 8px;
    padding: 9px 0 10px;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #fff;
    background-color: #5a5a5a;" onclick='window.location.href="write.php"'> 글쓰기
    </div>
</div>