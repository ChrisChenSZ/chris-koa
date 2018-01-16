function getSomething(){
    return 'something';
}

async function testAsync(){
    return 'Hello async';
}

async function test(){
    const v0 = testAsync()
    const v1=await getSomething();
    const v2=await testAsync();
    console.log(v0,v1,v2);
}

test();