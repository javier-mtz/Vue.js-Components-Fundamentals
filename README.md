# Vue.js-Components-Fundamentals

This repository contains the code examples and folders for each of the fundamental concepts covered in the course titled "Vue.js Fundamentals" by [vueschool.io](https://vueschool.io/).

## About

In this repository you will find files and folders with code examples for each of the fundamental concepts covered in the course taught by [vueschool.io](https://vueschool.io/), as well as creating components with [Vue.js](https://vuejs.org/), communication between components, event and property management, as well as creating reusable components.

## Course Content

## Chapter 1: Component Basics

### Lesson 1: Introduction to Components

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

## Chapter 2: Components In-depth

### Lesson 7: Component Naming Best Practices

In this lesson, we'll learn the best practices for naming Vue.js components. Following the official [Vue.js Style Guide](https://v2.vuejs.org/v2/style-guide/?redirect=true) will make our applications easier to understand for other developers just by looking at the component files. This lesson is authored by vueschool.io.

### Lesson 8: Component Lifecycle Hooks

In this lesson, we learn about Vue.js component lifecycle hooks and how we can use them. For more in-depth knowledge of Vue.js lifecycle hooks, we recommend taking our Understanding the [Vue.js Lifecycle Hooks](https://vueschool.io/lessons/understanding-the-vuejs-lifecycle-hooks) lesson. This lesson is authored by vueschool.io.

### Lesson 9: Component Slots

In this lesson, we'll learn how to use Vue.js slots to pass HTML to our components. Slots are a powerful feature of Vue.js, and this lesson will teach you the basics of using slots. Remember, if you need to pass HTML to your components, use slots. If you need to pass data, use props. This lesson is authored by vueschool.io.

## Chapter 3: Vue.js Component Exercises

### Lesson 10: #1 Build a GitHub User Profile Component

This lesson is a component exercise lesson, where we're going to use everything we've learned about Vue.js components so far. The goal is to create a component that displays a person’s GitHub profile. Including the user's avatar, name, register date, bio, and followers. In the exercise, we'll be using [Semantic UI](https://semantic-ui.com), we'll specifically use the [card element](https://semantic-ui.com/views/card.html). We've prepared a [boilerplate](https://github.com/vueschool/vuejs-components-fundamentals/commit/8ecdb8b7c4d2c0ee686ffaafa4bcd4d5507d5c09) as a starting point for the exercise.

The Github API endpoint we'll be using is [Users](https://api.github.com/users)

### Lesson 11: #2 Create a Notification Message Component

This lesson is also a component exercise lesson, where we're going to use everything we've learned about Vue.js components so far. In this component exercise, we're going to build a fun and useful component that is a notification message. In the exercise, we'll be using [Semantic UI](https://semantic-ui.com), we'll specifically use the [message element](https://semantic-ui.com/collections/message.html#positive--success). We've prepared a [boilerplate](https://github.com/vueschool/vuejs-components-fundamentals/blob/master/notification-message/boilerplate.html) as a starting point for the exercise.

Your goal is to create a component that will be passed some content (the message) and the type of notification (info, error, success). The user should also be able to close the notification.

## About the Course

This course is designed to teach you the fundamental and important concepts of Vue.js components. After completing this course, you will be familiar with:

1. The idea behind components and how Vue.js components work
2. Component's template, and multiple ways to define your template
3. Communication between components with props and custom events
4. The true difference between global and local component registration
5. The lifecycle hooks of a component
6. Component composition with nested components and slots
7. Component's best practices and common pitfalls

To watch the course, visit [Vue.js Components Fundamentals Course](https://vueschool.io/courses/vuejs-components-fundamentals).

## Note

Since Vue.js 3 became the default you must now specify version 2 when getting Vue from a CDN.

```
<script src="https://unpkg.com/vue@2"></script>
```
