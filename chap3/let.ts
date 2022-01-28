namespace lets {
    let val1 = 1;
    val1 = 2;

    if(true) {
        let val2 = 3;
        val2 = 4;
    }

    console.log(val1);
    // console.log(val2); val2 is not accessible outside of the block that is declared
}