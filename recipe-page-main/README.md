# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Github repo](https://github.com/avfonseca00/FrontendMentor/tree/main/recipe-page-main)
- Live Site URL: [Live site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

In this challenge I had to research how to achieve a similar design for my list elements because the bullets and numbers(in the ordered list case) look different just using the html tags and styling. 

So, I had an idea to get the same result in the unordered list using the known ::before element, but didn't have any idea of how to do it with numbers. Then I noted a property called "counter-increment" and thought that maybe it could help, and yeah! I found that we can use this together the ::before pseudo-element to design our own ordered list style.

Here is how I used this properties: 

```html
<ol>
  <li>First Item</li>
  <li>Second Item</li>
  <li>Third Item</li>
</ol>
```
```css
ol {
  list-style: none;
  counter-reset: item;
}
ol > li{
  position: relative;
  padding-left: 40px;
  counter-increment: item;
}
ol > li::before {  
  content: counter(item) "."; 
  position: absolute;  
  left: 8px; 
  top: 0;   
  font-weight: 600;  
}
```

As you can see using the counter properties we can not only enumerate the list but personalize it too like in this example where also I was able to concatenate a "." after the number. That's an amazing trick.

## Author

- Website - [GitHub profile](https://github.com/avfonseca00)
- Frontend Mentor - [@avfonseca00](https://www.frontendmentor.io/profile/avfonseca00)
- Email - [Gmail](mailto:avfonseca00@gmail.com)