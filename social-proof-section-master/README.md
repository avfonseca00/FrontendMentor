# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the section depending on their device's screen size

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Github repo](https://github.com/avfonseca00/FrontendMentor/tree/main/social-proof-section-master)
- Live Site URL: [Live site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Something I learned while working through this project was working with grid and specially grid areas, so we can set up a base grid and after group some areas by giving them names to build our desired design of a layout for the web page or a section of it.

In the code below ou can see how to use this areas:

```html
<div class="container">
  <div class="text__content"></div>
  <div class="side__bar"></div>
  <div class="testimonial"></div>
  <div class="contact"></div>
</div>
```
```css
.container {
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(3, 1fr); /* We set up a grid of 4 rows and 3 cols */
  grid-template-areas:
    "text text side"
    "text text side"
    "test test test"
    "cont cont cont" 
  ;
}
.text__content{
  grid-area: text;  /* Now we assign an area to each container */
}
.side__bar{
  grid-area: side; /* Now we assign an area to each container */
}
.testimonial{
  grid-area: test; /* Now we assign an area to each container */
}
.contact{
  grid-area: cont; /* Now we assign an area to each container */
}
```

### Useful resources

- [Grid template areas - CSS Tricks](https://www.css-tricks.com/almanac/properties/g/grid-template-areas/) - This resource helped me to understand this better and I highly recommend this site to learn more about CSS, Grid and also Flexbox.
- [Curso de CSS Grid Layout - Stephanie Aguilar](https://platzi.com/cursos/css-grid-layout) - This course is amazing and well explained by Stephanie Aguilar in Platzi's platform. This could help you to learn everything you need to know about Grid Layout.

## Author

- Website - [GitHub profile](https://github.com/avfonseca00)
- Frontend Mentor - [@avfonseca00](https://www.frontendmentor.io/profile/avfonseca00)
- Email - [Gmail](mailto:avfonseca00@gmail.com)