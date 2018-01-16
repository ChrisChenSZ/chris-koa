function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => resolve('11'), 1000);
    });
}

async function test() {
    let a = '22'
    const v = await takeLongTime()
    console.log(v)
    console.log(a);
}
let c = '33'
console.log(c);
test();