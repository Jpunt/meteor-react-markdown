Markdown = React.createClass({
  propTypes: {
    children: React.PropTypes.string.isRequired,
    element: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      element: 'div'
    };
  },

  render() {
    return (
      <this.props.element
        className={ this.constructor.displayName }
        dangerouslySetInnerHTML={ { __html: marked(this.props.children) } }
      />
    );
  }
});
