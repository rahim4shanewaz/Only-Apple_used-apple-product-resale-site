import React from 'react';

const Blog = () => {
    return (
        <div className='m-10 p-10'>
            <div className='grid grid-col-2'>



                <div className='m-5 p-10 shadow bg-slate-50 '>
                <h1 data-aos="fade-right" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="1000" className='text-4xl text-center font-bold mb-5'>
                What are the different ways to manage a state in a React application?

                </h1>
                <p data-aos="fade-right" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="1500" className='font-bold'>
                Managing state in your React apps isn’t as simple as using useState or useReducer. <br />
                The Four Kinds of React State to Manage <br />
                    1. Local state <br />
                    2. Global state <br />
                    3. Server state <br />
                    4. URL state <br /> <br />
                    Local (UI) state – Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                        Global (UI) state – Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                        Sometimes state we think should be local might become global.

                        Server state – Data that comes from an external server that must be integrated with our UI state.

                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.

                        URL state – Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build. <br /> <br />
                        Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.

useState is the first tool you should reach for to manage state in your components. <br />
Once you attempt to manage state across multiple components, things get a bit trickier.

You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.

What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state.

To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.

To be clear: the Context API is not a state management solution. It is a way to avoid problems like props drilling (creating a bunch of props in components that don’t need it), but it is only helpful for reading state, not updating it.
The reason to not use Context for global state management lies in the way it works. The default behavior for Context is to re-render all children components if the value provided to it as a prop changes.


                </p>
                </div>
                <div className='m-5 p-10 shadow bg-slate-50'>
                <h1 data-aos="fade-right" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="1000" className='text-4xl text-center font-bold mb-5'>
                How does prototypical inheritance work?

                </h1>
                <p data-aos="fade-right" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="1500" className='font-bold'>
                How does the prototypical inheritance differ from the class inheritance?
The most important difference between class- and prototype-based inheritance is that a class defines a type which can be instantiated at runtime, whereas a prototype is itself an object instance. <br /><br /> In programming, we often want to take something and extend it.

For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

Prototypal inheritance is a language feature that helps in that. <br />In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”: <br />When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. And soon we’ll study many examples of such inheritance, as well as cooler language features built upon it.

The property [[Prototype]] is internal and hidden, but there are many ways to set it. <br /><br />JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not have static types.

When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.

While this confusion is often considered to be one of JavaScript's weaknesses, the prototypical inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypical model — which is how classes are implemented.

Although classes are now widely adopted and have become a new paradigm in JavaScript, classes do not bring a new inheritance pattern. While classes abstract most of the prototypical mechanism away, understanding how prototypes work under the hood is still useful.

                </p>
                </div>
                <div data-aos="fade-right" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="2000" className='m-5 p-10 shadow bg-slate-50'>
                <h1 className='text-4xl text-center font-bold mb-5'>
                What is a unit test? Why should we write unit tests?

                </h1>
                <p className='font-bold'>
                What is a unit test? <br />
                Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. <br /><br />
                Why should we write unit tests? <br />
                They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex. unit can be almost anything you want it to be -- a line of code, a method, or a class. Generally though, smaller is better. Smaller tests give you a much more granular view of how your code is performing. There is also the practical aspect that when you test very small units, your tests can be run fast; like a thousand tests in a second fast. <br />
                Test Driven Development <br />
Test Driven Development, or TDD, is a code design technique where the programmer writes a test before any production code, and then writes the code that will make that test pass. The idea is that with a tiny bit of assurance from that initial test, the programmer can feel free to refactor and refactor some more to get the cleanest code they know how to write. The idea is simple, but like most simple things, the execution is hard. TDD requires a completely different mind set from what most people are used to and the tenacity to deal with a learning curve that may slow you down at first. <br /> Checking Your Work <br /> TDD isn't new, but at this point it is still mostly for the go getters. The rest of us are checking our work. Writing unit tests after you have written the production code may be a more traditional way of doing it, but it is no less useful. It's also something you're familiar with if you have been in a math class any time in the past ten years.

After your work is checked and it is clear that the code is doing what you think it is doing, the value of the unit tests change a little bit. Tests that can be easily run with every build of your product act as change detection notifying you when code changes in unexpected ways. <br />Code Documentation <br />
Code documentation is a drag, and it shows, mostly by how little code documentation gets written. Unit testing can make the documentation burden a little easier by encouraging better coding practices and also leaving behind pieces of code that describe what your product is doing. Rather than having to constantly feed the documentation beast with code change, you'll be updating a system of checks that is working for you. <br /> Danger Zone <br />
There are a few uses of unit testing that you will want to avoid when possible. Creating integration tests that cross system borders and touch databases or 3rd party systems can be done, but this quickly results in a test suite that takes longer and longer to run with each added test. There are plenty of test frameworks out there that specialize in higher level testing. If you want to test larger pieces of your product at a time, you might want to investigate those other frameworks.

One other risky area is end to end tests. These usually require careful ordering, dependencies on other tests, and careful set up to get your system in a special 'test ready' state. Much like integration testing, there are plenty of tools to choose from made just for this purpose.

You definitely can do these things with unit frameworks, but it might quickly become more work than it is worth.

                </p>
                </div>
                <div data-aos="fade-right" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="2000" className='m-5 p-10 shadow bg-slate-50'>
                <h1 className='text-4xl text-center font-bold mb-5'>
                React vs. Angular vs. Vue?

                </h1>
               
               
                    <div data-aos="fade-right" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="2000" className='flex justify-around border border-slate-300 p-5 mb-5'>
                   
                    <p className='font-bold'>React </p>
                    <p className='font-bold'>Angular </p>
                    <p className='font-bold'>Vue </p>
                    </div>
                    <div data-aos="fade-right" data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="2000" className='grid grid-cols-3 gap-3 text-center'>
                    <div>
                    <p className='font-bold'>Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages.

One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course. <br /><br />


Pros: <br />

Fast loading of new data.
One file contains both markup and logic (JSX).
Enables the separation of data and presentation.
It’s simple to get started and doesn’t take much practice.
As a library, it doesn’t have that many presets, so it’s easy to learn.
Smooth work of the app, even with complex underlying operations or database queries.
 <br /> <br />Pros: <br />

Fast loading of new data.
One file contains both markup and logic (JSX).
Enables the separation of data and presentation.
It’s simple to get started and doesn’t take much practice.
As a library, it doesn’t have that many presets, so it’s easy to learn.
Smooth work of the app, even with complex underlying operations or database queries.



</p>
                   
                    </div>
                    <div>
                    <p className='font-bold'>AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular. 

Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications. 
<br /> <br />
Pros: <br />

Allows MVC architecture.
Good maintainability.
Web applications built with Angular perform very well.
Angular lets you manage microfrontend architecture
Projects may now be developed, expanded, and generated more quickly thanks to technologies like the Angular-CLI command-line tool.
Angular provides a basic framework for developing web applications and manages them without additional libraries.
Easy unit and end-to-end testing. <br /><br />
Cons: <br />

Reloads the complete HTML tags tree structure.
Slow loading time due to the Ionic app.
Because of the given framework, Angular is relatively stiff and inflexible.
To work with Angular.js, you need a certain training period.
If a user has deactivated JavaScript in the browser, using a JavaScript-based SPA is not possible. Furthermore, it does not always support outdated or unfamiliar browsers.



</p>
                   
                    </div>
                    <div>
                    <p className='font-bold'>Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it’s simple to use and connect with other libraries or applications. This framework’s fast learning angle is almost a trademark. 

Vue.js combines the useful principles of the Angular and React frameworks and presents them in a minimalistic modern style. Web developers use Vue. 
<br /> <br />

Pros: <br />

A list of tools and libraries (Vue.js official CLI, Development Tools, Vue Loader, Vue Router).
Flexibility and simplicity in the utilization.
Thorough documentation.
Reusable in the terms of adding numerous reactive components to the existing code.
The possibility of Component-Based Architecture (CBA) <br /><br />



Cons: <br />

Limited community comparing to Angular and React
The number of available plugins
Language handicap because a large number of users are non-English speakers
Overcomplications with flexibility
</p>

                    </div>
                </div>
               

               
                </div>
               
              

            </div>
           
            
        </div>
    );
};

export default Blog;