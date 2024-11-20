import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Login";
import Container from "./Container";
import Product from "./Product";
import hookstate from "./hookstate";
function App() {
  let a = 15;
  const firstName = "Didem";
  let vize1 = 60;
  let vize2 = 80;
  let isimler = ["Didem", "Ayse", "Fatma"];
  return (
    <div>
      <p>p değişkeninin değeri {a}</p>
      {/* <p> Müşterinin adi firstName</p> hatallı kullanım süslü parantez içerisine almalısın ki Didem yazısını gör!*/}
      <p>
        {(vize1 + vize2) / 2 >= 50 ? (
          <p>Dersten gecrin aferin</p>
        ) : (
          <p>Dersten kaldın kaybol</p>
        )}
      </p>
      {isimler.map((isim, index) => (
        <div
          style={{ backgroundColor: "red", border: "1px solid black" }}
          key={index}
        >
          {isim}
        </div>
      ))}

      <div>
        <Login />
        <hr />
        <Login />
      </div>
      <Container />

      <Product productName="pantolon" price={1500} />

      <Container />
    </div>
    //isimler arrayındaki isimleri yazdırırken liste halinde sıralamak veya index degerine göre atamak için map ile işlem yaptık
    //componentleri App de buluşturuyoruz !
  );
}
// Yukarıda Component içerisinde başka bir Component kullanıldığı görülmekte Container içerisinde Product componenti var peki bu durumda props aktarımı için yapacağımız şey "children" değerini component içerindeki fonksiyona parametre olarak vermek olacak DİKKAT!! ADI HER ZAMAN children çünkü child componenti olmuş oluyor. Kafan karışırsa console yazdır :d

<div>
  <Names />
</div>;

export default App;
