export function DecoratorPattern(config) {
    return(target) => {
        Object.defineProperty(target.prototype, 'name', { value: () => 'Dec_Pattern'} );
        console.log(target);
    }
}
