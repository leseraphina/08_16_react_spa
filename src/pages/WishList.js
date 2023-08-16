import ProductItem from "../components/ProductItem";

export default function WishList(){
  return (
    <div className="wishlist">
      <ul>
        {/* 반복문 */}
        <li>
          <ProductItem />
          <p>
            <button type="button">버리기</button>
          </p>
        </li>
      </ul>
    </div>
  )
}