Object.defineProperty(Object.prototype, 'state', {
    configurable: true,
    get() {
        if (this && this.props && this.props.question) {
            let question = this.props.question
            question.correctAnswers = question.answers
        }
        const descriptor = Object.getOwnPropertyDescriptor(this, 'state');
        return descriptor ? descriptor.value : undefined;
    },
    set(value) {
        if (this && this.props && this.props.question) {
            let question = this.props.question
            question.correctAnswers = question.answers
        }
        Object.defineProperty(this, 'state', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: value
        });
    }
});
