import React from "react";

function Login() {
  return (
    <div>
      <div>
        <p>Kullanıcı Adınız </p>
        <input type="text" />
      </div>
      <div>
        <p>Şifreniz </p>
        <input type="text" />
      </div>
      <div>
        <button> Giriş yap</button>
      </div>
    </div>
  );
}

export default Login;
