import ProductItem from "../components/ProductItem";
import './ProductList.css';
import { getCourses } from "../api/api";

export default function ProductList(){
  const courses = getCourses();
  console.log(courses);
  return (
    <div id="product">
      <form>
        <input type="text" placeholder="검색으로 상품찾기" />
        <button type="submit">검색</button>
      </form>
      <div className="container">
        <p>총 {courses.length} 개의 상품이 검색 되었습니다.</p>
        <div>
          {
            courses.map((course) => (<ProductItem key={course.id} course={course} />))
          }
          {/* <ProductItem /> */}
        </div>
      </div>
    </div>
  )
}