export const lengthAwareMixin = {
  computed: {
    calculateLength () {
      return this.secondText + '(' + this.secondText.length + ')'
    }
  }
}
