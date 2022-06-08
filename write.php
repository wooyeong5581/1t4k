
<form method="post" action="writePost.php" >
    <table width=800 border="1" cellpadding=5 >
        <tr>
            <th> 작성자 </th>
            <td> <input type="text" name="id" > </td>
        </tr>

        <tr>
            <th> 제목 </th>
            <td> <input type="text" name="title" style="width:100%;" > </td>
        </tr>

        <tr>
            <th> 내용 </th>
            <td> 
                <textarea name="content" style="width:100%; height:300px;" > </textarea>
            </td> 
        </tr>

        <tr>
            <td colspan="2">
                <div style="text-align:center;">
                    <input type="submit" value="저장"> 
                </div>
            </td>
        </tr>
    </table>
</form>