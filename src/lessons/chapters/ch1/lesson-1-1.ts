import type { LessonContent } from '../../types';

const content: LessonContent = {
  id: 'lesson-1-1',
  subtitle: 'Understand what React is, where it came from, and the core idea that makes it different from everything that came before it.',
  sections: [
    {
      heading: 'Introduction',
      blocks: [
        { kind: 'p', text: 'Before you write a single line of React code, it is worth pausing to answer a deceptively simple question: what is React, really? If you ask five developers, you will likely get five different answers. Some will say it is a JavaScript library for building user interfaces. Others will call it a framework, a way of thinking about the web, or a collection of tools. Each of these answers contains a grain of truth, but none of them captures the whole picture. In this lesson we are going to build a complete, durable mental model for what React is, why it exists, and what makes it fundamentally different from the approaches that came before it.' },
        { kind: 'p', text: 'Understanding what React is at a conceptual level is not an academic exercise. The way you think about React shapes every decision you make when you build with it. Developers who treat React as just another jQuery replacement tend to write code that fights the library at every turn. Developers who internalise the underlying philosophy write code that feels natural, is easier to maintain, and scales gracefully as an application grows. The goal of this lesson is to put you firmly in the second camp.' },
        { kind: 'p', text: 'We will start by looking at the web as it existed before React and the specific problems that made React necessary. Then we will examine the core idea at the heart of React — the idea that a user interface is a pure function of data. We will explore what that means in practical terms, how React turns that idea into something that runs in a browser, and what responsibilities you keep as a developer. By the end you will have a vocabulary and a mental model you can carry through every remaining lesson in this course.' },
        { kind: 'p', text: 'It is normal if some of the concepts in this first lesson feel a little abstract. You are building the foundation that every later lesson will rest on. When we get to components, state, effects, and hooks, you will see each of those ideas as a concrete expression of the philosophy we establish here. For now, focus on the big picture and on developing an intuition for why React is designed the way it is.' },
        { kind: 'p', text: 'A note on expectations before we go further. This course does not assume you have used React before, but it does assume you have a working familiarity with JavaScript — variables, functions, objects, arrays, and basic DOM concepts. If you have written a few hundred lines of JavaScript, you are ready. If you are newer to JavaScript, you can still follow along, but you may want to pause and experiment with the code examples in a sandbox as you go. Learning React and learning JavaScript at the same time is entirely possible; it just takes a little longer because you are building two mental models at once.' },
        { kind: 'p', text: 'Finally, a word about how this lesson is structured. Each lesson in this course follows the same shape: an introduction that frames the topic, a core concepts section that defines the key ideas, a how-it-works section that looks under the hood, a practical usage section that shows the idea in code, and then sections on advanced details, common mistakes, best practices, real-world application, key vocabulary, and a summary. This consistent structure is deliberate. It lets you build a rhythm as a learner and makes it easy to return to a lesson later to find a specific idea. You do not need to absorb everything in one pass. Each lesson is designed to be re-readable.' },
      ],
    },
    {
      heading: 'Core concepts',
      blocks: [
        { kind: 'p', text: 'At its most precise, React is a declarative, component-based library for building user interfaces. Let us unpack each of those three words, because each one carries significant meaning and each represents a deliberate departure from the way web interfaces were traditionally built.' },
        { kind: 'h3', text: 'Declarative' },
        { kind: 'p', text: 'When you write code imperatively, you tell the computer exactly what to do, step by step. Fetch this element. Change its text. Add a class. Remove a child. Append a new node. Every action is an explicit instruction that mutates the document in place. Imperative code describes how to do something.' },
        { kind: 'p', text: 'Declarative code, by contrast, describes what the result should look like. Instead of writing a sequence of mutations, you describe the end state you want — a heading with this text, a list with these items, a button that is disabled — and you hand that description to a system that figures out how to make it real. React is the system that turns your description into the actual document updates.' },
        { kind: 'p', text: 'Consider the difference between giving someone turn-by-turn driving instructions (imperative) and handing them an address (declarative). The declarative version is shorter, less error-prone, and far easier to reuse. If a road closes, the driver can find an alternate route without you rewriting the instructions. In the same way, when you describe a UI declaratively, React can adapt to changes in data without you rewriting the update logic each time.' },
        { kind: 'h3', text: 'Component-based' },
        { kind: 'p', text: 'A component is a self-contained piece of interface that manages its own structure, appearance, and behavior. A button is a component. A navigation bar is a component. A form with validation is a component. Components can be composed inside other components, producing a tree that describes an entire application.' },
        { kind: 'p', text: 'The component model is powerful because it gives you a unit of reuse that aligns with how interfaces actually grow. You do not build a page and then decorate it. You assemble small, focused pieces, each of which does one thing well, into larger structures. When a part of the interface needs to change, you know exactly which component owns it and where to look. When a piece of behavior is needed in two places, you reuse the component rather than copying the logic.' },
        { kind: 'p', text: 'Components are also the natural boundary for thinking about an interface. If you can describe a region of the screen as "this thing shows a list of products and lets the user select one," you have identified a component. Learning to see an interface as a composition of components is one of the most valuable skills you will develop in this course.' },
        { kind: 'h3', text: 'A library, not a framework' },
        { kind: 'p', text: 'React is often described as a library rather than a full framework, and the distinction matters. A framework like Angular provides an opinionated solution for routing, data fetching, forms, state management, and more. You adopt the framework way of doing everything. React, by contrast, concerns itself with one job: rendering components to the screen. For everything else — routing, data fetching, state management, form handling — React lets you choose the tools that fit your project.' },
        { kind: 'p', text: 'This freedom is a double-edged sword. It means you can assemble a stack tailored to your needs, and it means you are responsible for the assembly. As you progress through this course you will learn the most common choices for each concern and the tradeoffs between them. For now, the key takeaway is that React itself is intentionally narrow. It does one thing well and cooperates with the rest of your toolchain.' },
        { kind: 'callout', tone: 'info', title: 'The guiding idea', text: 'A user interface is a pure function of data. Given the same data, the same interface should appear. React is the engine that makes that statement practical in a browser.' },
      ],
    },
    {
      heading: 'How it works',
      blocks: [
        { kind: 'p', text: 'Now that we have a conceptual definition, let us look under the hood at how React actually turns your declarative description into pixels on a screen. You do not need to memorise every internal detail, but understanding the flow at a high level will make every later concept easier to reason about.' },
        { kind: 'h3', text: 'The render: describing what the UI should look like' },
        { kind: 'p', text: 'When React renders a component, it calls the component function and collects the description it returns. That description is a tree of objects representing the elements that should appear on the screen — headings, paragraphs, buttons, lists, and other components. This tree is sometimes called the virtual DOM, and it is a lightweight, plain-JavaScript representation of what the real document should look like.' },
        { kind: 'p', text: 'Crucially, rendering is a calculation. A component receives inputs (props and state) and returns a description. The component function itself should be pure: given the same inputs, it returns the same description, and it does not modify anything outside itself during the calculation. This purity is what makes React predictable and what allows React to safely re-run your components whenever inputs change.' },
        { kind: 'h3', text: 'Reconciliation: figuring out what changed' },
        { kind: 'p', text: 'When data changes — because a user clicked something, because an API response arrived, or because a timer fired — React renders the affected components again and produces a new description tree. It then compares this new tree with the previous one in a process called reconciliation. The goal of reconciliation is to compute the smallest set of changes needed to bring the real document in line with the new description.' },
        { kind: 'p', text: 'You never write reconciliation logic yourself. You simply declare what the UI should look like for the current data, and React figures out which document nodes to create, update, or remove. This is the practical payoff of the declarative approach. The burden of incremental, in-place updates — which is where imperative code historically became tangled and bug-prone — is shifted from you to React.' },
        { kind: 'h3', text: 'Commit: updating the screen' },
        { kind: 'p', text: 'Once React has computed the set of changes, it applies them to the real document in a phase called commit. After the commit, the browser repaints, and the user sees the updated interface. The entire cycle — render, reconcile, commit — typically completes in a few milliseconds, and React is designed to keep that cycle fast even as an application grows.' },
        { kind: 'p', text: 'There is one more phase worth knowing about: effects. Some work a component needs to do does not fit neatly into the pure rendering calculation — fetching data, subscribing to a subscription, measuring the layout. React provides hooks like useEffect for that kind of work, which run after the commit phase. We will explore effects in depth later in the course; for now, the important point is that React keeps pure rendering separate from work that has side effects.' },
        { kind: 'code', title: 'The whole cycle in one small component', description: 'A component describes the UI for the current state. React reconciles and commits the changes.', code: `function Counter() {\n  const [count, setCount] = useState(0);\n\n  // 1. RENDER: React calls this function and gets a\n  //    description of the UI for the current count.\n  return <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>;\n}\n\n// 2. RECONCILE: When count changes, React calls Counter\n//    again, compares the new description to the old one,\n//    and notes that only the button text changed.\n//\n// 3. COMMIT: React updates the real button text. The\n//    browser repaints. The user sees the new count.` },
        { kind: 'p', text: 'The beauty of this cycle is that you rarely think about it directly. You write components that describe the UI for the current data, and you trigger re-renders by updating state. React handles the rest. Understanding the cycle matters when you are diagnosing performance issues or subtle bugs, but day-to-day work consists of describing what the UI should look like and letting React do the bookkeeping.' },
        { kind: 'p', text: 'It is also worth understanding what React does not do. React does not manage your URL routing, fetch data from your API, validate forms, or manage complex client-side state on its own. Those are concerns that surround the rendering cycle, and React expects you to use additional tools for them. What React does do — and does extremely well — is provide a reliable, predictable way to turn data into an interface and keep that interface in sync as the data changes. Everything else in your stack is chosen to complement that core capability.' },
        { kind: 'p', text: 'A common source of confusion for newcomers is the relationship between React the library and React the ecosystem. When people say "React," they sometimes mean the React library itself, sometimes mean the collection of tools built around it (React Router, Next.js, Redux, and so on), and sometimes mean the broader community and conventions. In this course, when we say React, we mean the library unless we explicitly name another tool. Keeping the library and the ecosystem distinct in your mind will help you understand which piece is responsible for which behavior, which is essential when you are debugging.' },
      ],
    },
    {
      heading: 'Practical usage',
      blocks: [
        { kind: 'p', text: 'Let us translate the conceptual model into something concrete. Here is what it actually feels like to build with React, even before you know the details of syntax. You will learn every piece of this in depth in later lessons; the goal here is to see the shape of a React application and recognise the ideas we have been discussing.' },
        { kind: 'p', text: 'A React application is a tree of components. At the root is a component that represents the whole application. It composes smaller components — a header, a sidebar, a main content area — and each of those composes still smaller components. The leaves of the tree are primitives like headings, buttons, and inputs, which React knows how to turn into real document nodes.' },
        { kind: 'p', text: 'Data flows down the tree through props, which are inputs a parent passes to a child. A parent component that fetches a list of products passes each product to a child component that knows how to display one product. The child does not know where the product came from; it only knows it received a product and must render it. This one-way data flow keeps the system understandable because you can always trace where a piece of data entered the tree.' },
        { kind: 'p', text: 'Interactivity enters the picture through state, which is data a component owns and can update. When a user clicks a button, types in a field, or submits a form, a component updates its state, which tells React to re-render and bring the UI up to date. State is what makes a React application respond to a person instead of being a static document.' },
        { kind: 'code', title: 'A tiny but complete React application', description: 'Notice how data flows down as props and interactivity flows up through state updates.', code: `import { useState } from 'react';\n\n// A leaf component: it receives data and renders it.\nfunction Greeting({ name }: { name: string }) {\n  return <h1>Hello, {name}!</h1>;\n}\n\n// The root component: it owns state and composes children.\nexport default function App() {\n  const [name, setName] = useState('world');\n\n  return (\n    <div>\n      <Greeting name={name} />\n      <input\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n        placeholder="Type your name"\n      />\n    </div>\n  );\n}` },
        { kind: 'p', text: 'Read that example slowly, even if the syntax is not familiar yet. The App component owns a piece of state called name. It passes that name down to Greeting as a prop, and it renders an input whose onChange handler updates the state. Every time the user types, the state changes, React re-renders App, and Greeting receives the new name. That is the whole shape of a React application, in miniature.' },
        { kind: 'p', text: 'Notice what you do not see in that example. There is no code that finds the heading element and changes its text. There is no code that adds an event listener to the input and manually updates the document. You described the UI for the current name, and React handled the updates. That is the declarative advantage in action.' },
        { kind: 'p', text: 'Let us extend the example slightly to make the component composition even more explicit. Suppose we want to show a label above the input and a hint below it. We do not add more code to App. We compose more components. Each new piece is small, has a clear name, and can be understood in isolation. This is how React applications grow: by adding well-named components to the tree, not by making existing components larger and more complex.' },
        { kind: 'code', title: 'Growing the application by composing components', description: 'Each piece stays small and focused. The root composes them together.', code: `function Label({ text }: { text: string }) {
  return <label className="block text-sm font-semibold mb-1">{text}</label>;
}

function Hint({ text }: { text: string }) {
  return <p className="mt-2 text-xs text-gray-500">{text}</p>;
}

export default function App() {
  const [name, setName] = useState('world');

  return (
    <div>
      <Greeting name={name} />
      <Label text="Your name" />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded px-3 py-2"
        placeholder="Type your name"
      />
      <Hint text="The greeting updates as you type." />
    </div>
  );
}` },
        { kind: 'p', text: 'Notice that Label and Hint know nothing about the input or about the name state. They receive text and display it. They could be reused anywhere in any application. This separation — a component that owns state and composes children, and leaf components that simply display what they are given — is the basic pattern of every React application, from a two-line example to a million-line platform.' },
      ],
    },
    {
      heading: 'Advanced details',
      blocks: [
        { kind: 'p', text: 'Now that you have seen the basic shape, let us look more carefully at a few details that separate a superficial understanding of React from a durable one. These are ideas you will return to throughout the course, but planting them now will make the road ahead smoother.' },
        { kind: 'h3', text: 'Purity and why it matters' },
        { kind: 'p', text: 'Earlier we said a component should be a pure function of its inputs. This is not just aesthetic advice; it is a property React relies on. Because components are assumed to be pure, React can safely re-render them whenever it believes the output might have changed, can render them in any order, and can even discard a render result if it decides a newer render supersedes it. If a component reads or modifies global state during rendering, those guarantees break, and you get bugs that are extraordinarily hard to trace.' },
        { kind: 'p', text: 'In practice, purity means three things. First, given the same props and state, a component returns the same description. Second, a component does not modify any data outside itself while rendering — no writing to global variables, no mutating props, no side effects. Third, work that does have side effects (fetching, subscribing, measuring) is moved out of the render calculation and into effects or event handlers. We will practice this discipline in every later lesson.' },
        { kind: 'h3', text: 'The virtual DOM and why it is not magic' },
        { kind: 'p', text: 'The virtual DOM is often described as a performance feature that makes React fast by avoiding direct document manipulation. This is a half-truth. The virtual DOM is primarily a design mechanism that makes the declarative model possible. Comparing two trees and patching the real document is not free; it is work React does so that you do not have to. In most applications the cost is low enough that you never think about it, but it is not magic, and understanding that helps you avoid the trap of assuming more re-renders always mean better performance.' },
        { kind: 'p', text: 'What the virtual DOM does give you is a clean separation between your description of the UI and the real document. That separation is what allows React to work in different environments — a browser, a server, a mobile device — without changing how you write components. The same component that renders to a button in a browser can render to a view in a mobile app through React Native. The virtual DOM is the abstraction that makes that portability possible.' },
        { kind: 'h3', text: 'One-way data flow' },
        { kind: 'p', text: 'Data in a React application flows in one direction: down the component tree, from parent to child, through props. When a child needs to signal something back to a parent, it does not mutate shared data directly. Instead, the parent passes down a callback function as a prop, and the child calls that callback when something happens. The parent then updates its state, which flows back down through props.' },
        { kind: 'p', text: 'This one-way flow is sometimes called unidirectional data flow, and it is one of React most valuable properties. It makes an application understandable because you can always trace a piece of data from where it originated to where it is used. There is no two-way binding that silently updates state from deep inside a child, which historically was a source of cascading updates and obscure bugs.' },
        { kind: 'callout', tone: 'tip', title: 'Mental shortcut', text: 'Props go down. Events go up. State lives in the component that owns it. Everything else is a refinement of these three rules.' },
        { kind: 'h3', text: 'React on the server and beyond' },
        { kind: 'p', text: 'One of the most powerful consequences of the declarative model is that React is not tied to the browser. Because a component is just a function that returns a description, the same component can be run on a server to produce HTML, in a browser to produce an interactive interface, or in a native mobile app to produce platform views. This is why frameworks like Next.js can render React on the server and hydrate it on the client, and why React Native can use the same components to build iOS and Android apps.' },
        { kind: 'p', text: 'You do not need to use these capabilities on day one, but knowing they exist changes how you think about components. A component you write today for a browser could, without changes to its core logic, render on a server tomorrow. Keeping components pure and free of browser-specific side effects during rendering preserves that option. This is a practical reason, not just an aesthetic one, to respect the purity rule.' },
      ],
    },
    {
      heading: 'Common mistakes',
      blocks: [
        { kind: 'p', text: 'Even before you write much React code, it helps to know the mistakes that catch nearly every newcomer. These mistakes all come from carrying habits from other ways of building interfaces into React, where they do not fit.' },
        { kind: 'list', items: [
          'Treating React as a fancier jQuery. If you find yourself reaching for direct document manipulation — document.getElementById, manual class toggling, hand-written animations — stop. In React you describe the UI for the current state; you do not imperative mutate it. Direct manipulation breaks the declarative model and causes the real document and React description to drift apart.',
          'Putting side effects inside the render calculation. A component that fetches data, writes to localStorage, or subscribes to a store while rendering violates purity. The effect might run multiple times, or zero times, or at a moment you do not expect. Move side effects into event handlers or the useEffect hook, which we will cover later.',
          'Mutating props or state directly. In React you never change a prop or mutate a state variable in place. You replace state with a new value through the setter React gives you. Direct mutation means React does not know the value changed, so it does not re-render, and the UI falls out of sync with the data.',
          'Thinking in pages instead of components. If your mental model is "this is the home page and this is the about page," you will tend to build large, monolithic components. Train yourself to see regions of the screen as components, and to compose those components into pages. Small components are easier to understand, test, and reuse.',
          'Ignoring the component tree. Data flows down through the tree, and state lives somewhere in it. When a piece of data is needed by two distant components, the instinct to thread it through many layers (prop drilling) or to reach for a global variable both lead to trouble. Later lessons will show you better tools, but the first step is recognising the tree as the structure that governs data flow.',
          'Believing re-renders are always expensive. Newcomers often panic about components re-rendering and reach for optimisation tools before they need them. React re-rendering is fast for most components, and premature optimisation makes code harder to read and harder to reason about. Measure first, and optimise only when you have evidence of a real problem.',
        ] },
      ],
    },
    {
      heading: 'Best practices',
      blocks: [
        { kind: 'p', text: 'Now for the positive side of the ledger. These are the habits that, from your very first component, will keep your React code healthy as it grows.' },
        { kind: 'list', items: [
          'Keep components small and focused. A component should describe one region of the interface and do it well. If you find yourself writing a component that manages a form, fetches data, and renders a sidebar, split it into smaller components that each have one responsibility.',
          'Name components and props clearly. A component called ProductCard tells you what it renders. A prop called onSelect tells you what it signals. Clarity in naming makes a component tree readable without opening every file.',
          'Let state live at the right level. State should live in the lowest common ancestor of every component that needs it. Not too high (so unrelated components re-render unnecessarily) and not too low (so siblings cannot share it). Finding the right home for state is a skill you will develop throughout the course.',
          'Treat rendering as a calculation. When you write a component, ask yourself: given these props and this state, is the output always the same? If the answer is no, find the side effect and move it out of the render. This discipline will save you from the most common and most confusing React bugs.',
          'Embrace the declarative mindset. When a feature feels hard, ask whether you are fighting the model. Often the difficulty comes from trying to manage transitions imperatively instead of describing the end state and letting React handle the transition.',
        ] },
      ],
    },
    {
      heading: 'Real-world application',
      blocks: [
        { kind: 'p', text: 'To make these ideas concrete, let us walk through how React is used to build a feature you have almost certainly used: a product listing on an e-commerce site. The feature seems simple on the surface — show a grid of products, let the user filter by category, and add items to a cart — but it touches every concept we have discussed.' },
        { kind: 'p', text: 'At the top of the component tree is a ProductPage component. It owns the data: the list of products (fetched from an API), the selected category filter, and the contents of the cart. It passes the products and the category down to a ProductGrid component, which renders a ProductCard for each product. It passes the category options and the current category down to a FilterBar component, along with a callback to update the category. The cart is passed down to a CartSummary component in the header.' },
        { kind: 'p', text: 'When the user selects a new category in the FilterBar, the FilterBar calls the callback. ProductPage updates its category state. React re-renders ProductPage, which re-renders ProductGrid with the filtered product list. The user sees the grid update. No code had to find the grid element and rebuild it; no code had to track which products were previously shown and which to add or remove. ProductPage described the new state — a grid of products in the selected category — and React reconciled the change.' },
        { kind: 'p', text: 'When the user clicks Add to Cart on a ProductCard, the ProductCard calls a callback passed down from ProductPage. ProductPage adds the product to the cart state. React re-renders, and the CartSummary in the header updates to show the new count. Again, the communication flowed up through a callback, the state update flowed back down through props, and React handled the document updates.' },
        { kind: 'p', text: 'This is the same shape as the tiny greeting example from earlier, just at a larger scale. Props go down. Events go up. State lives in a common ancestor. Components are small and focused. The UI is a description of the current data, and React keeps the document in sync. Once you see the pattern, you will see it everywhere in React applications, from a settings panel to a chat interface to a data dashboard.' },
        { kind: 'p', text: 'Real applications add complexity on top of this shape — data fetching with loading and error states, optimistic updates, caching, animations, accessibility — but the core structure remains. That consistency is one of React greatest strengths. The mental model you build in this first lesson will carry you through features of any size.' },
        { kind: 'p', text: 'Another real-world example worth considering is a settings dashboard. A SettingsPage owns the current settings object and a dirty flag that tracks unsaved changes. It composes a SettingsSection for each group of preferences (profile, notifications, privacy), and each section composes individual controls like Toggle, TextInput, and Select. When a user changes a toggle, the Toggle calls a callback; the SettingsSection forwards it up; the SettingsPage updates the settings state; and React re-renders the affected sections. The Save button, disabled when the dirty flag is false, becomes enabled automatically because it is a pure function of the dirty state. No code had to find the save button and toggle its disabled attribute. The UI simply reflects the current data.' },
        { kind: 'p', text: 'This pattern — a container component owns the state, leaf components display and signal, and React reconciles the document — is the skeleton of virtually every React feature. The specifics change: a chat application swaps products for messages, a dashboard swaps settings for charts, a forms application swaps toggles for field inputs. But the skeleton is the same. When you encounter a new feature, your first instinct should be to sketch the component tree, identify where the state lives, and identify the callbacks that signal changes. The rest is implementation detail.' },
      ],
    },
    {
      heading: 'Key vocabulary',
      blocks: [
        { kind: 'p', text: 'Before we summarise, let us collect the vocabulary we have built. These terms will recur in every lesson that follows, and having precise meanings for them will make the rest of the course easier to follow.' },
        { kind: 'list', items: [
          'Component: a self-contained, reusable piece of interface that describes a region of the screen. Components receive inputs (props) and may own data (state).',
          'Props: inputs passed from a parent component to a child. Props are read-only inside the child.',
          'State: data a component owns and can update. When state changes, React re-renders the component.',
          'Render: the process of calling a component function to produce a description of the UI. Rendering is a pure calculation.',
          'Reconciliation: the process of comparing a new description tree with the previous one and computing the minimal set of changes.',
          'Commit: the phase in which React applies the computed changes to the real document.',
          'Virtual DOM: the in-memory tree of objects that represents the desired UI. React uses it to compute document updates.',
          'Declarative: describing what the UI should look like for the current data, rather than how to mutate the document to get there.',
          'Unidirectional data flow: the principle that data flows down the component tree through props, and events flow up through callbacks.',
          'Purity: the property that a component, given the same props and state, produces the same output and has no side effects during rendering.',
        ] },
      ],
    },
    {
      heading: 'Lesson summary',
      blocks: [
        { kind: 'p', text: 'React is a declarative, component-based library for building user interfaces. Its central idea is that a UI is a pure function of data: you describe what the interface should look like for the current state, and React handles turning that description into document updates. This declarative model frees you from the bookkeeping of imperative DOM manipulation and makes your code easier to reason about, test, and scale.' },
        { kind: 'p', text: 'React applications are trees of components. Data flows down through props, events flow up through callbacks, and state lives in the components that own it. Components are pure during rendering — given the same inputs they return the same description — and side effects are moved into hooks and handlers. This combination of declarative rendering, component composition, and one-way data flow is the foundation everything else in the course is built on.' },
        { kind: 'p', text: 'You do not need to have every detail of this lesson memorised. What matters is that you carry forward the mental model: describe the UI for the current data, keep components pure and focused, let data flow in one direction, and trust React to reconcile the document. In the next lesson we will look at why React was created and the specific problems its designers were trying to solve — which will deepen your appreciation for why this particular design was chosen.' },
      ],
    },
  ],
  practice: {
    prompt: 'On paper or in a text file, sketch the component tree for a simple blog home page. Identify the root component, at least four child components, and for each component note what props it would receive and what state (if any) it would own. Think about where the list of posts, the selected category filter, and the signed-in user information would each live.',
    solution: `Root: BlogPage
  owns state: posts (fetched), selectedCategory, currentUser
  |
  +-- Header
  |     props: currentUser
  |     |
  |     +-- NavLinks
  |     +-- UserMenu        props: currentUser
  |
  +-- FilterBar
  |     props: categories, selectedCategory, onSelectCategory
  |
  +-- PostList
        props: posts (already filtered), onOpenPost
        |
        +-- PostCard (one per post)
              props: post, onOpenPost

Key decisions:
- posts and selectedCategory live in BlogPage because both
  PostList and FilterBar need them.
- onOpenPost is a callback passed down so a PostCard can ask
  BlogPage to navigate without owning navigation itself.
- currentUser lives in BlogPage because both Header and
  (potentially) other parts of the page need it.`,
  },
  quiz: [
    { question: 'In one sentence, what is the core idea at the heart of React?', answer: 'A user interface is a pure function of data — you describe what the UI should look like for the current state, and React handles updating the document to match.' },
    { question: 'What does it mean for a component to be "pure" during rendering, and why does React care?', answer: 'A pure component, given the same props and state, always returns the same UI description and performs no side effects while rendering. React relies on purity so it can safely re-render components whenever inputs change, in any order, without producing inconsistent results.' },
    { question: 'Describe the three phases of the React update cycle in your own words.', answer: 'Render: React calls the component function to produce a new description tree. Reconcile: React compares the new tree with the previous one to find the minimal set of changes. Commit: React applies those changes to the real document, and the browser repaints.' },
    { question: 'How does data flow between components in React, and how does a child communicate back to a parent?', answer: 'Data flows down the tree from parent to child through props. A child communicates back by calling a callback function that the parent passed down as a prop; the parent then updates its state, which flows back down through props.' },
    { question: 'Why is React described as a library rather than a framework, and what does that mean for you as a developer?', answer: 'React focuses only on rendering components to the screen. For concerns like routing, data fetching, and state management, you choose additional tools. This gives you flexibility but also means you are responsible for assembling your own stack.' },
  ],
  takeaways: [
    'React is declarative: you describe the UI for the current data, not the steps to build it',
    'React is component-based: interfaces are trees of small, focused, reusable components',
    'A component is a pure function of its props and state during rendering',
    'Data flows down through props; events flow up through callbacks',
    'State lives in the lowest component that needs to own it',
    'React handles reconciliation and commit; you handle the description',
    'Purity, one-way data flow, and composition are the foundation of every later concept',
    'Think in components, not in pages, from your very first application',
  ],
};

export default content;
