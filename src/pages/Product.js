import './Product.css';
export default function Product(){
  return (
    <>
    <div id="productItem">
      <h1>course titel</h1>
      <p>
        <button type="button">추가하기</button></p>
        <p>course summary</p>
    </div>
    <div className="topic">
      {/*  반복문 */}
      <dl>
        <dt>title</dt>
        <dd>summary</dd>
      </dl>
    </div>
    </>
  )
}