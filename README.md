# Vue.js-Components-Fundamentals

This repository contains the code examples and folders for each of the fundamental concepts covered in the course titled "Vue.js Fundamentals" by [vueschool.io](https://vueschool.io/).

## About
In this repository you will find files and folders with code examples for each of the fundamental concepts covered in the course taught by [vueschool.io](https://vueschool.io/), as well as creating components with [Vue.js](https://vuejs.org/), communication between components, event and property management, as well as creating reusable components.

## Course Content

### Chapter 1: Component Basics
Lesson 1: Introduction to Components
In this lesson, we'll learn about Vue components. We'll get an introduction to what a component is, why we need components and lastly how we can create and use a component in our Vue.js app. This lesson is authored by vueschool.io.

### Lesson 2: Component's Template
In this lesson, we're going to learn about a Vue component's template. Essentially, the template is where we define our HTML and general markup for our component. We also bind our component's data to the DOM in the template. In Vue.js, we can define our template in a few different ways. In this lesson, we'll move away from the inline template and use the x-template technique, which is great when you're getting started. This lesson is authored by vueschool.io.

### Lesson 3: Reusable Components with Props
In this lesson, we'll see a realistic use case for reusable components and learn about Vue.js component props. Props are custom HTML attributes that we can register on our components, which allow us to pass data to our components. You can find the starting point of the demo in this lesson in the link. We've also created a jsfiddle if you want to play around with the code. This lesson is authored by vueschool.io.

### Lesson 4: Nested Components
Components allow us to encapsulate functionality and easily reuse them in multiple places in our applications. It is common to have components inside other components to compose the bigger features of our apps. In this lesson, we'll learn how we can create a plan-picker component, to easily display all our plans wherever we want. This lesson is authored by vueschool.io.

### Lesson 5: Global vs Local Components
Vue.js allows us to register components both globally and locally. In this lesson, we'll learn the difference between the two types and how it can affect the build size and performance of your application. This lesson is authored by vueschool.io.

### Lesson 6: Communication Between Components with Custom Events
We know how to pass data to a child component through props. In this lesson, we'll learn how to communicate from a child to a parent component through custom events. We will use a custom event to notify the plan-picker of which plan has been selected, and make sure we have the right logic in place so the user can only select one plan at a time. This lesson is authored by vueschool.io.

## Note
Since Vue.js 3 became the default you must now specify version 2 when getting Vue from a CDN.
```
<script src="https://unpkg.com/vue@2"></script>
```
