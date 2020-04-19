# 前端预览文件 demo
### 


1.利用File元素 获取文件   

``````
 <input type="file" id="file" />
 file.addEventListener("change", function (e) {
     var target = e.currentTarget;
     var flieValue = target.files[0];
     console.log(flieValue)
 })
 
``````

2.利用 new FileReader();读取文件

``````
var reader = new FileReader();
  reader.readAsText(flieValue, "UTF-8");
  //readAsText(file,[encoding]):将文件读取为文本，encoding缺省为UTF-8   readAsText(selectedFile,'UTF-8')
  reader.onload = function (oFREvent) {
    //读取完毕从中取值
    console.log(this.result)
    // your code。。。。
  };
``````

3.预览    



`anywhere`
