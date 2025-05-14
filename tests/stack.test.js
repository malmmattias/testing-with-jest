const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('add three elements to stack, pop one element, returned element should second element added: rövsmör', ()=> {
    stack.push("Bananer");
    stack.push("Rövsmör");
    stack.push("Äpplen");
    stack.pop();
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe("Äpplen");
});

