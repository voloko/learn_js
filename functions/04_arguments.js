// call myself
function cry(times) {
    return times === 0 ? 'arg' : arguments.callee(times - 1) + 'h';
}

print(cry(10));

// arguments array
