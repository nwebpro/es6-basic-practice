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