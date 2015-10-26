import ReactDOM from 'react-dom';

export const focusWhenNotSelected = {

  componentDidUpdate: function () {
    const selected = this.props.selected;
    const hasNoSelected = (hasDeref(selected) && !selected.deref());

    const isNotSelected = !this.props.isSelected;

    if (isNotSelected || hasNoSelected) {
      ReactDOM.findDOMNode(this).focus();
    }
  }
};

export const focusWhenSelected = {

  componentDidUpdate: function () {
    const selected = this.props.selected;
    const hasSelected = (hasDeref(selected) && selected.deref());

    const isSelected = this.props.isSelected;

    if (hasSelected || isSelected) {
      ReactDOM.findDOMNode(this).focus();
    }
  }
};

function hasDeref (obj) {
  return obj && typeof obj.deref == 'function';
}
