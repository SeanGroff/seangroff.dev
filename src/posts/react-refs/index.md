---
title: 'Introduction to Refs in React 16.3'
date: '2018-08-07'
categories: react
tags: [react, js, javascript]
---

### What are Refs?

Refs? Refs in React 16.3? If you're still a little green with React it's not unusual to have never heard of refs. I completed a couple projects at work before I was introduced to **refs**. In this article I will briefly introduce **refs** and why they aren't typically taught when first learning React. I will spend the rest of this article introducing you to the **createRef() API** that was released in React version 16.3.

**If you know what refs are in React feel free to skip ahead to the Refs in React section.**

### Why Refs?

You can do just about everything you need in React using **props** and **state**. So why do you need **refs**? One common use case is managing focus on a text input element.

Let's say I want the text element to focus after pressing enter to submit some data from a form. You've likely created a stateful class component with a custom **handleSubmit()** lifecycle method. Your **handleSubmit()** lifecycle method likely grabs the state property that was updated via user input from the text input element and submits the data.

Here's where the **ref** comes in. From the **handleSubmit()** lifecycle method, how do we set the text input element to be **focused** so the user can easily enter more data? How do we **REF**erence the text input element to **focus**?

### Refs

Prior to React v16.3 the **callback ref** was the preferred way to create and use refs. Callback refs are fine. I prefer the **createRef()** **API** to the **callback ref** for a couple reasons.

If you use an inline callback function for your ref a new function is created for every re-render. This is the case with any arrow function inside the **render** method.

The inline callback function will also be called twice during updates. The first call produces a **null** value before the element is returned on the second call. To see this in action checkout the [Callback Ref Code Sandbox Example](https://codesandbox.io/s/zl84j0m52l)

### CreateRef API in React v16.3

You can create and use a ref in three easy steps using the **createRef API**.

### Ref Creation

In your **class constructor method** create a class property and assign **React.createRef()** to it.

```js
class RefExample extends React.Component {
  constructor(props) {
    super(props)

    // create a ref to store the textInput element
    this.inputNewItem = React.createRef()
  }
}
```

### Add Ref to DOM Element

Tell React to associate the **inputNewItem** we created in the **constructor** with the input ref.

```js
render() {
  <form onSubmit={this.handleSubmit}>
    <input type="text" ref={this.inputNewItem} />
  </form>
}
```

### Use the Ref!

Inside our **handleSubmit** method let's tell React to have the input focused.

```js
handleSubmit = () => {
  // omitting form submission code

  this.inputNewItem.current.focus()
}
```

From the React Docs

> React will assign the `current` property with the DOM element when the component mounts, and assign it back to `null` when it unmounts. `ref` updates happen before `componentDidMount` or `componentDidUpdate` lifecycle hooks.

### Refs in TypeScript

Here's how a ref using the **createRef API** is defined in **TypeScript.**

```typescript
class RefExample extends React.Component {
  private inputNewItem: React.RefObject<TextInput> = React.createRef()
}
```

> I prefer not using a class constructor

I find Refs created using the **createRef API** to be more explicit without the cons I stated above using **callback refs**.

I wrote this blog post so you can start using the **createRef API** right away. If i'm missing something you'd like included in this blog post leave a comment or reach out to me on Twitter @\_SeanGroff

Enjoy!
