var file = document.getElementById("file");
var message = document.getElementById("message");
var information = document.getElementById("information");
file.addEventListener("change", function (e) {
  console.log(e);
  var target = e.currentTarget;
  var flieValue = target.files[0];
  var informationKey = {};
  for (var key in flieValue) {
    informationKey[key] = flieValue[key];
  }
  console.log(informationKey);
  information.innerHTML = JSON.stringify(informationKey);
  message.innerHTML = "文件解析中...";
  //这是核心！！读取操作都是由它完成的
  var reader = new FileReader();
  reader.readAsText(flieValue, "UTF-8");
  //readAsText(file,[encoding]):将文件读取为文本，encoding缺省为UTF-8   readAsText(selectedFile,'UTF-8')
  reader.onload = function (oFREvent) {
    //读取完毕从中取值
    message.innerHTML = this.result;
    // your code。。。。
  };
});

// $("#file").on("change", function (e) {
//   $("#upBtn").hide();
//   $(this).attr("disabled", "disabled");
//   var target = e.currentTarget;
//   var file = target.files[0];
//   if (file.size > 0) {
//     $("#idNovle").html("文件解析中...");
//     var reader = new FileReader(); //这是核心！！读取操作都是由它完成的
//     reader.readAsText(file, "UTF-8");
//     //readAsText(file,[encoding]):将文件读取为文本，encoding缺省为UTF-8   readAsText(selectedFile,'UTF-8')
//     reader.onload = function (oFREvent) {
//       //读取完毕从中取值
//       var pointsTxt = oFREvent.target.result;
//       $("#idNovle").html(pointsTxt);
//       $("#upBtn").show();
//       data = {
//         content: pointsTxt,
//         name: file.name,
//       };
//       // your code。。。。
//     };
//   } else {
//     alert("上传文件失败");
//   }
// });
