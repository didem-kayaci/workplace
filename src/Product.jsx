import React from "react";

//  function Product(props) {
//   return (
//     <div>
//       <div>
//         <div>Şipariş Listesi</div>
//         <div>isim : {props.productName}</div>;
//         <div>fiyat : {props.price}</div>;
//       </div>
//     </div>
//   );
// }
//yukarıdaki gibi props içerisinde yazabiliriz veya distructioning yaparak props. yazmaktan kurtardık

/*function Product(props) {
  const { productName, price } = props;
  return (
    <div>
      <div>
        <div>Şipariş Listesi</div>
        <div>isim : {productName}</div>;<div>fiyat : {price}</div>;
      </div>
    </div>
  );
}
*/
// yukarıdaki iki yöntem dışında bir de kodları destruvtionin edilmiş haliyle direk fonksiyon içerisine yazabiliyoruz. aşağıda örneği mevcut

function Product({ productName, price }) {
  return (
    <div>
      <div>
        <div>Şipariş Listesi</div>
        <div>isim : {productName}</div>
        <div>fiyat : {price}</div>
      </div>
    </div>
  );
}
export default Product;
