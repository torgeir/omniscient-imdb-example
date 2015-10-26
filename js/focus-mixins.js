export let focusWhenNotSelected = {
import ReactDOM from 'react-dom';


  componentDidUpdate: function () {
    let selected = this.props.selected;
    let hasNoSelected = (hasDeref(selected) && !selected.deref());

    let isNotSelected = !this.props.isSelected;

    if (isNotSelected || hasNoSelected) {
      ReactDOM.findDOMNode(this).focus();
    }
  }
};

export let focusWhenSelected = {

  componentDidUpdate: function () {
    let selected = this.props.selected;
    let hasSelected = (hasDeref(selected) && selected.deref());

    let isSelected = this.props.isSelected;

    if (hasSelected || isSelected) {
      ReactDOM.findDOMNode(this).focus();
    }
  }
};

function hasDeref (obj) {
  return obj && typeof obj.deref == 'function';
}
