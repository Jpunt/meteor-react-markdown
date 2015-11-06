# react-markdown
This is a React-component to parse Markdown in Meteor. FYI: This uses [perak:markdown](https://atmospherejs.com/perak/markdown) to do the markdown-parsing.

## Installation

```
meteor add q42:react-markdown
```

## Usage

```jsx
SomeComponent = React.createClass({
  render() {
    return <Markdown>**Hi, this is markdown.**</Markdown>;
  }
});
```
