:coffee: &emsp;Connect with me!

[![Facebook Badge](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/abnaeembsc) [![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/developernaeem/) [![Instagram Badge](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/nwebpro) [![Twitter Badge](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/developernaeem) [![Mail Badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:abnaeem.bsc@gmail.com)

# <h2 style="text-align: center;">Common DOM Related interview questions</h2>

## 1. What is DOM?
- ডম(DOM) বা অন্যকথায় ডকুমেন্ট অবজেক্ট মডেল(Document Object Model) হচ্ছে XML বা HTML ডকুমেন্ট এর জন্যে একটা প্রোগ্রামিং ইন্টারফেস। এখন এটা কি? এটা হচ্ছে আমাদের পেজ(HTML বা XML পেজ) কে এমনভাবে রিপ্রেজেন্ট করে যাতে এটাকে সহজেই প্রোগ্রামিং ল্যাংগুয়েজ দিয়ে মডিফাই করা যায়।

DOM এর মাধ্যমে আমরা সহজে HTML এর মধ্যে চেঞ্জ আনতে পারি যেমন :
- নতুন ইলিমেন্ট তৈরী করা
- আগের কোনো ইলিমেন্ট রিমুভ করা
- আগের কোনো ইলিমেন্ট মডিফাই করা
- অ্যাট্রিবিউটস মডিফাই করা, অ্যাড করা, রিমুভ করা
- স্টাইলিং অ্যাড করা, রিমুভ করা, মডিফাই করা
- পেজে ইভেন্ট তৈরী করা, যে এরকম কোনো কিছু ঘটলে পেজের উপর একটা নির্দিষ্ট অ্যাকশন - পারফর্ম করা
- নির্দিষ্ট কোনো ইলিমেন্ট এর উপর ইভেন্ট তৈরী করা, যে এই ইলিমেন্ট এর উপর এমন কিছু ঘটলে আমরা অমুক অ্যাকশন নিতে চাই।

## [Dom Example](https://www.w3schools.com/js/js_htmldom_html.asp)

## 2. What are the different ways to get an element from DOM?
কখনও কখনও, ব্যবহারকারীদের এইচটিএমএল কোড পরিবর্তন না করেই এইচটিএমএল উপাদানটি পরিচালনা করতে হবে। এই পরিস্থিতিতে, ব্যবহারকারীরা HTML উপাদানগুলিকে ওভাররাইট না করেই পরিবর্তন করতে JavaScript ব্যবহার করতে পারে৷

DOM থেকে, ব্যবহারকারীরা জাভাস্ক্রিপ্টে পাঁচটি ভিন্ন উপায়ে HTML উপাদান অ্যাক্সেস করতে পারে।
- Get HTML element by Id
- Get HTML element by className
- Get HTML element by Name
- Get HTML element by tagName
- Get HTML element by CSS Selector

## Syntax:
```sh
document.getElementById(element_ID);
document.getElementsByClassName(element_classnames);
document.getElementsByName(element_name);
document.getElementsByTagName(Tag_name);
document.querySelector(selectors);
document.querySelectorAll(selectors);
```

## 3. What’s the difference between an Event Handler and an Event Listener?
 - ## Event Handlers
    - একটি ইভেন্ট হ্যান্ডলার ব্যবহার করতে, একটি বস্তুর `EventHandler` বৈশিষ্ট্যগুলির একটি ব্যবহার করুন। এখানে `onclick` নামক একটি ব্যবহার করার একটি উদাহরণ রয়েছে।
```sh
const button = document.querySelector(".btn")

button.onclick = () => {
  console.log("Button clicked.");
};
```
- একজন ব্যবহারকারী একটি বোতামে ক্লিক করলে `onclick` ইভেন্ট হ্যান্ডলারটি ট্রিগার হয়। ফলস্বরূপ, `Button clicked.` কনসোলে আউটপুট হয়।

## [Read More](https://medium.com/geekculture/event-handlers-vs-event-listeners-in-javascript-b4086b8040b0)

## 4. What does “event bubbling” mean in JavaScript?
ইভেন্ট `bubbling` হল HTML DOM API-তে ইভেন্ট প্রচারের একটি পদ্ধতি যখন একটি ইভেন্ট অন্য একটি উপাদানের ভিতরে থাকে এবং উভয় উপাদানই সেই ইভেন্টে একটি হ্যান্ডেল নিবন্ধিত করে। এটি এমন একটি প্রক্রিয়া যা ইভেন্টটিকে ট্রিগার করে এমন উপাদান দিয়ে শুরু হয় এবং তারপর ক্রমানুসারে থাকা উপাদানগুলি পর্যন্ত `bubbles` করে।

## 5. Can you explain the different types of events available in JavaScript?
জাভাস্ক্রিপ্টকে ইভেন্টের সাথে কাজ করতে দেওয়ার জন্য বিভিন্ন পদ্ধতি ব্যবহার করা যেতে পারে: HTML ইভেন্ট অ্যাট্রিবিউট সরাসরি জাভাস্ক্রিপ্ট কোড এক্সিকিউট করতে পারে। HTML ইভেন্ট অ্যাট্রিবিউট জাভাস্ক্রিপ্ট ফাংশন কল করতে পারে। আপনি HTML উপাদানগুলিতে আপনার নিজস্ব ইভেন্ট হ্যান্ডলার ফাংশন বরাদ্দ করতে পারেন।
## [Read More](https://www.w3schools.com/js/js_events_examples.asp)

## 6. What’s the difference between event.preventDefault() and event.stopPropagation()?
`event.preventDefault()` ব্রাউজারগুলির ডিফল্ট আচরণকে বাধা দেয়, কিন্তু ইভেন্টটিকে DOM `bubbling` করা থেকে থামায় না। `event.stopPropagation()` ইভেন্টটিকে DOM `bubbling` করা থেকে বাধা দেয়, কিন্তু ব্রাউজারগুলির ডিফল্ট আচরণ বন্ধ করে না।


# <h2 style="text-align: center;">Common ES6 interview questions</h2>

## 1. What is ES6? Have you ever used anything from ES6?
`ES6 কি:` ES6 এর অর্থ হল ECMAScript 6। ECMAScript জাভাস্ক্রিপ্টকে মানসম্মত করার জন্য তৈরি করা হয়েছিল, এবং ES6 হল ECMAScript-এর 6 তম সংস্করণ, এটি 2015 সালে প্রকাশিত হয়েছিল এবং এটি ECMAScript 2015 নামেও পরিচিত।
- হা আমি ES6 এর `Template String`, `Array Function`, `Spread Operator`, `Destructuring`, `Default Value`, etc. এইগুলো ব্যবহার করেছি।

## 2. Explain the difference between var, let and const?
- ### Var
    - জাভাস্ক্রিপ্টে `var` কীওয়ার্ড: জাভাস্ক্রিপ্টে একটি ভেরিয়েবল ঘোষণা করার জন্য `var` হল প্রাচীনতম কীওয়ার্ড।
    - Scope: গ্লোবাল স্কোপড বা ফাংশন স্কোপড। `var` কীওয়ার্ডের স্কোপ হল গ্লোবাল বা ফাংশন স্কোপ। এর অর্থ হল ফাংশনের বাইরে সংজ্ঞায়িত ভেরিয়েবলগুলি globally অ্যাক্সেস করা যেতে পারে এবং একটি নির্দিষ্ট ফাংশনের ভিতরে সংজ্ঞায়িত ভেরিয়েবলগুলি ফাংশনের মধ্যে অ্যাক্সেস করা যেতে পারে।
```sh
var a = 10
    function f(){
        console.log(a)
    }
f();

console.log(a);
```
- ### Let
    - জাভাস্ক্রিপ্টে `let` কীওয়ার্ড: `let` কীওয়ার্ডটি `var` কীওয়ার্ডের একটি উন্নত সংস্করণ।
    - Scope: ব্লক স্কোপড: একটি `let` ভেরিয়েবলের সুযোগ শুধুমাত্র ব্লক স্কোপড। এটি নির্দিষ্ট ব্লকের `({block})` বাইরে অ্যাক্সেসযোগ্য হতে পারে না। আসুন নীচের উদাহরণটি দেখি।
```sh
let a = 10;
function f() {
    let b = 9
    console.log(b);
    console.log(a);
}

f();
```
- ### Const
    - জাভাস্ক্রিপ্টে `const` কীওয়ার্ড: `const` কীওয়ার্ডটিতে `let` কীওয়ার্ডের মতো একই বৈশিষ্ট্য রয়েছে, কিন্তু ব্যবহারকারী তা আপডেট করতে পারে না।
    - Scope: ব্লক স্কোপড: যখন ব্যবহারকারীরা একটি `const` ভেরিয়েবল ঘোষণা করে, তখন তাদের এটি শুরু করতে হবে, অন্যথায়, এটি একটি ত্রুটি ফেরত দেয়। ব্যবহারকারী `const` ভেরিয়েবলটি ঘোষণা করার পরে আপডেট করতে পারে না।
```sh
let a = 10;
function f() {
    a = 9
    console.log(a);
}

f();
```
## [Read More](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

## 3. What is the arrow function, and how to create it?
Array ফাংশন জাভাস্ক্রিপ্টের ES6 সংস্করণে প্রবর্তিত বৈশিষ্ট্যগুলির মধ্যে একটি। এটি আপনাকে regular ফাংশনের তুলনায় একটি পরিষ্কার উপায়ে ফাংশন তৈরি করতে দেয়।
- Example
```sh
// using regular function
const function (a, b){
    const c = a + b;
    return c;
}

// using arrow functions
const x = (x, y) => x * y;
```
## 4. Give an example of an Arrow function in ES6? List down its advantages.
```sh
// example of an Arrow function in ES6
const show = (a, b=200) => {
    console.log(a + " " + b);
}
show(100);
```
উপরের ফাংশনে, ডিফল্টরূপে `b` - এর মান 200 সেট করা আছে। ফাংশনটি সর্বদা 200 কে `b` এর মান হিসাবে বিবেচনা করবে যদি `b` এর কোন মান স্পষ্টভাবে পাস না হয়।
- ### Advantages of Arrow Functions
    - Reduces code size
    - Return statement is optional for single line function
    - Lexically bind the context
    - Functional braces are optional for single line statement

## 5. Discuss spread operator in ES6 with an example?
জাভাস্ক্রিপ্ট ES6 (ECMAScript 6) স্প্রেড অপারেটর চালু করেছে। সিনট্যাক্স হল তিনটি ডট `(...)` এর পরে অ্যারে `(or iterable*)`। এটি অ্যারেটিকে পৃথক উপাদানগুলিতে প্রসারিত করে। সুতরাং, এটি এমন জায়গায় অ্যারে প্রসারিত করতে ব্যবহার করা যেতে পারে যেখানে শূন্য বা তার বেশি উপাদান প্রত্যাশিত।
```sh
let obj1 = { id: 101, name: 'Jhon Doe' }
let obj2 = { age: 25, country: 'USA'}
const employee = { ...obj1, ...obj2 }

console.log(employee);
```

## 6. What do you understand about default parameters?
ডিফল্ট ফাংশন প্যারামিটার নামক প্যারামিটারগুলিকে ডিফল্ট মানগুলির সাথে আরম্ভ করার অনুমতি দেয় যদি কোনও মান বা অনির্ধারিত পাস না হয়। `Example`
```sh
const multiply(a, b = 1) => a * b;

console.log(multiply(5, 2));
// expected output: 10

console.log(multiply(5));
// expected output: 5
```

## 7. What are template literals in ES6?
টেমপ্লেট লিটারেল হল একটি নতুন বৈশিষ্ট্য যা ECMAScript 2015/ ES6-এ চালু করা হয়েছে। এটি মাল্টিলাইন স্ট্রিং তৈরি এবং স্ট্রিং ইন্টারপোলেশন সঞ্চালনের একটি সহজ উপায় প্রদান করে। টেমপ্লেট লিটারাল হল স্ট্রিং লিটারাল এবং এমবেডেড এক্সপ্রেশনের অনুমতি দেয়।

ES6 এর আগে, টেমপ্লেট লিটারেলকে টেমপ্লেট স্ট্রিং বলা হত। স্ট্রিং-এ উদ্ধৃতিগুলির বিপরীতে, টেমপ্লেট লিটারেলগুলি ব্যাকটিক `(``)` অক্ষর দ্বারা আবদ্ধ থাকে। টেমপ্লেট লিটারেলে প্লেসহোল্ডার থাকতে পারে, যা ডলার চিহ্ন এবং curly braces `($(expression})` দ্বারা নির্দেশিত হয়। ব্যাকটিক্সের ভিতরে, যদি আমরা একটি expression ব্যবহার করতে চাই, তাহলে আমরা সেই expression `($(expression})` এ রাখতে পারি।

## 8. Tell us the difference between arrow and regular function?
Array ফাংশন - একটি নতুন বৈশিষ্ট্য ES6-এ প্রবর্তিত হয়েছে - জাভাস্ক্রিপ্টে সংক্ষিপ্ত ফাংশন লিখতে সক্ষম করে৷ যদিও উভয় নিয়মিত এবং Array ফাংশন একইভাবে কাজ করে, তবুও তাদের মধ্যে কিছু আকর্ষণীয় পার্থক্য রয়েছে।

### `Example of regular functions`
```sh
const square = function(x){
    return (x*x);
};
console.log(square(9));
```
### `Example of arrow functions`
```sh
const square = (x) => x * x;
console.log(square(9));
```
## [Read More](https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/)


