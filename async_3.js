function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => resolve([1,2]), 1000);
    });
}

async function test() {
    const v = await takeLongTime();
    console.log(v);
}

test();