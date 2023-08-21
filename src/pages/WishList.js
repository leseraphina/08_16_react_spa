import ProductItem from "../components/ProductItem";
import { deleteWishList,getWishList } from "../api/api";
import { useEffect, useState } from "react";


export default function WishList(){
  const [couses,setCourse] = useState([]);

  const handleDelete = (courseSlug) =>{
    deleteWishList(courseSlug);
    const nextCourses = getWishList();
    setCourse(nextCourses);
  }
  useEffect(() => {
    const NestCourses = getWishList();
    setCourse(NestCourses)
  },[])
  
  return (
    <div className="wishlist">
      <ul>
        {/* 반복문 */}
        {couses.map((course) => (
           <li key={couses.slug}>
           <ProductItem  course={course} />
           <p>
             <button 
             type="button"
             onClick={() => handleDelete(course.slug)}
             >버리기</button>
           </p>
         </li>
        ))}
       
      </ul>
    </div>
  )
}