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

export function getCoursesBySlug(courseSlug){
  return courses.find((couse) => couse.slug === courseSlug)
}

//  검증이름 , 속성
const WISHLIST_KEY = 'wishlist';
const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '{}');

export function getWishList(){
  return courses.filter((couse) => wishlist[couse.slug])
}

export function addWishList(couseSlug){
  wishlist[couseSlug] = true;
  localStorage.setItem(WISHLIST_KEY ,JSON.stringify(wishlist))
}
export function deleteWishList(couseSlug){
  delete wishlist[couseSlug];
  localStorage.setItem(WISHLIST_KEY,JSON.stringify(wishlist))
}