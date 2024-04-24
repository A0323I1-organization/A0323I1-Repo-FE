import React, { } from 'react';
import "../../components/employee/create.css"
function ImageFileAsURL(){
    var fileSelected = document.getElementById('upload').files;
    if(fileSelected.length > 0){
      var fileToLoad = fileSelected [0];
      // Kiểm tra kích thước tệp hình ảnh (ví dụ: không lớn hơn 5MB)
    if (fileToLoad.size > 5 * 1024 * 1024) {
      alert("Kích thước tệp hình ảnh quá lớn. Vui lòng chọn một tệp nhỏ hơn 5MB.");
      return;
    }
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoaderEvent){
        var srcData = fileLoaderEvent.target.result;
        var newImage =document.createElement('img');
        newImage.src = srcData;
        newImage.style.width = "100%";
      newImage.style.height = "auto";
        document.getElementById('displayImg').innerHTML = newImage.outerHTML;
      }
      fileReader.readAsDataURL(fileToLoad);
    }
  }
  const Create= ()=>{
    return(
        <>
    

        <section class="container">
      <header><b>Thêm mới nhân viên</b></header>
      <form action="#" class="form">
        <div class="input-box">
          <label for="imageFile">Hình ảnh</label>
          <input type="file" name="upload" id="upload" onchange={ImageFileAsURL}/>
          </div>
          <div id="displayImg" >
          </div>
        <div class="input-box">
          <label for="user">Tài khoản</label>
          <input type="text" id="user" />
        </div>
        <div class="input-box">
          <label for="password">Mật khẩu</label>
          <input type="password" id="password" />
        </div>
        <div class="input-box">
          <label for="confirmPassword">Nhập lại mật khẩu</label>
          <input type="password" id="confirmPassword" />
        </div>
        <div class="input-box">
          <label for="fullname">Họ Tên</label>
          <input type="text" id="fullname" />
        </div>
        <div class="input-box">
          <label for="birthday">Ngày sinh</label>
          <input type="date" id="birthday" />
        </div>
        <div class="gender-box">
          <lable>Giới tính</lable>
          <div class="gender-option">
            <div class="gender">
              <input type="radio" name="gender" id="check-male" />
              <label for="check-male">Nam</label>
            </div>
            <div class="gender">
              <input type="radio" name="gender" id="check-fermale" />
              <label for="check-fermale">Nữ</label>
            </div>
          </div>
        </div>
        <div class="input-box">
          <label for="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div class="input-box">
          <label for="idCard">CMND</label>
          <input type="text" id="idCard" />
        </div>
        <div class="input-box">
          <label for="numberPhone">Số điện thoại</label>
          <input type="text" id="numberPhone" />
        </div>
        <div class="input-box">
          <label for="address">Địa chỉ</label>
          <textarea id="address"></textarea>
        </div>
        <button type="submit">Thêm mới</button>
        <button type="reset">Quay lại</button>
      </form>
    </section>
    </>
    )
  }
  export default Create;