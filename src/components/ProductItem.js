import './ProductItem.css';

export default function ProductItem({course}){
  return (
    <figure className="pic">
      <img src={course.photoUrl} alt={course.title} />
        <figcaption>
          <dl>
            <dt>{course.title}</dt>
            <dd>{course.summary}</dd>
          </dl>
        </figcaption>
    
    </figure>
  )
}