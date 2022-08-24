:coffee: &emsp;Connect with me!

[![Facebook Badge](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/abnaeembsc) [![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/developernaeem/) [![Instagram Badge](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/nwebpro) [![Twitter Badge](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/developernaeem) [![Mail Badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:abnaeem.bsc@gmail.com)

# Common DOM Related interview questions

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


