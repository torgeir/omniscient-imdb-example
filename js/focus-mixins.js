export let focusWhenNotSelected = {

  componentDidUpdate: function () {
    let selected = this.props.selected;
    let hasNoSelected = (hasDeref(selected) && !selected.deref());

    let isNotSelected = !this.props.isSelected;

    if (isNotSelected || hasNoSelected) {
      this.getDOMNode().focus();
    }
  }
};

export let focusWhenSelected = {

  componentDidUpdate: function () {
    let selected = this.props.selected;
    let hasSelected = (hasDeref(selected) && selected.deref());

    let isSelected = this.props.isSelected;

    if (hasSelected || isSelected) {
      this.getDOMNode().focus();
    }
  }
};

function hasDeref (obj) {
  return obj && typeof obj.deref == 'function';
}
