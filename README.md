# 前端预览文件 demo
### 


1.利用File元素 获取文件   

``````
<html>
 ...
 <input type="file" id="file" />
 ...
</html>
<script>
 file.addEventListener("change", function (e) {
     var target = e.currentTarget;
     var flieValue = target.files[0];
     console.log(flieValue)
 })
</script>
``````

2.利用 new FileReader();读取文件

``````
<script>
var reader = new FileReader();
  reader.readAsText(flieValue, "UTF-8");
  // readAsText(file,[encoding]):将文件读取为文本
  // encoding缺省为UTF-8   
  // readAsText(selectedFile,'UTF-8')
  // 解决txt文本读取会有乱码的问题
  // readAsText(selectedFile,'GB2312')
  reader.onload = function (oFREvent) {
    //读取完毕从中取值
    console.log(this.result)
    // your code。。。。
  };
</script>
``````

3.预览    
```````
npm install -g anywhere
anywhere
```````
