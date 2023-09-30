const course={
    coursename:"js in hindi",
    price: 999,
    courseInstructor :"hitesh"
}
// course.courseInstructor
// Another syntax
// {} // this is use to destructring object

// const {courseInstructor}= course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     coursename:"js in hindi";
//     courseInstructor :"hitesh";
//     price: "free"
// }