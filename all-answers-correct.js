Object.defineProperty(Object.prototype, 'state', {
    configurable: true,
    get() {
        if (this?.props?.question) {
            this.props.question.correctAnswers = this.props.question.answers;
        }
        return this._state;
    },
    set(value) {
        if (this?.props?.question) {
            this.props.question.correctAnswers = this.props.question.answers;
        }
        this._state = value;
    }
});
