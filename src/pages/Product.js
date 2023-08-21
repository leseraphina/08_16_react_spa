import { useParams } from 'react-router-dom';
import { getCoursesBySlug,addWishList } from '../api/api';

import './Product.css';
export default function Product(){
  const {courseSlug} = useParams();
  const course = getCoursesBySlug(courseSlug);
  // console.log(course);
  // console.log(course.topics);
  const handleAddWishList = () =>{
  addWishList(course.slug);
  }
  return (
    <>
    <div id="productItem">
      <h1>{course.title}</h1>
      <p>
        <button 
        type="button"
        onClick={handleAddWishList}
        >추가하기</button></p>
        <p>{course.summary}</p>
    </div>
    <div className="topic">

     {course.topics.map(({topic})  =>(
        <dl key={topic.slug}>
        <dt>{topic.title}</dt>
        <dd>{topic.summary}</dd>
        </dl>
     ))}
     
    </div>
    </>
  )
}