const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   đổi icon và ẩn hiện mật khẩu
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // chọn form để điền thông tin
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });



//đưa dữ liệu vài local storage
    const dangky = e => {
        let email = document.getElementById('email').value,
            pwd = document.getElementById('pwd').value,
            pwd2=document.getElementById("pwd2").value;
    
        let formData = JSON.parse(localStorage.getItem('formData')) || [];
    
        let exist = formData.length && 
            JSON.parse(localStorage.getItem('formData')).some(data => 
                data.email.toLowerCase() == email.toLowerCase() && 
                data.pwd.toLowerCase() == pwd.toLowerCase()
            );
        if(!exist && (pwd==pwd2)){
            formData.push({ email, pwd });
            localStorage.setItem('formData', JSON.stringify(formData));
            document.querySelector('form').reset();
            document.getElementById('fname').focus();
            alert("Đã tạo thành công bạn có thể đăng nhập");
        }
        else{
            alert("Tạo tài khoản không thành công. Vui lòng kiểm tra thông tin và mật khẩu đã nhập");
        }
        e.preventDefault();
    }
    
    function signIn(e) {
        let email1 = document.getElementById('email1').value,
            pwd1 = document.getElementById('pwd1').value;

        let formData = JSON.parse(localStorage.getItem('formData')) || [];

        let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email1 && data.pwd.toLowerCase() == pwd1);
        if(!exist){
            alert("Bạn đăng nhập không thành công");
        }
        else{
            alert("Bạn đăng nhập thành công");
        }
        e.preventDefault();
    } 


