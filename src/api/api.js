//  함수 정리

import courses from './data.json';

//  키워드 값의 유무 -> filter 함수 를 불러들이기
export function getCourses(keyword){
  if(!keyword) return courses;
  return filterByKeyword(courses,keyword);
}

function filterByKeyword(items,keyword){
  const lowered = keyword.toLowerCase();
  return items.filter(({title}) => title.toLowerCase().includes(lowered));
}