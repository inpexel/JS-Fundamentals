function corssVectors(vec1, vec2){
    let x1 = vec1.x;
    let y1 = vec1.y;
    let z1 = vec1.z;

    let x2 = vec2.x;
    let y2 = vec2.y;
    let z2 = vec2.z;

    let corssVecX = (y1*z2)-(z1*y2);
    let corssVecY = (z1*x1)-(x1*z2);
    let corssVecZ = (x1*y2)-(y2*x2);

    return console.log(corssVecX, corssVecY, corssVecZ);
}

let vector1 = {
    x:23,
    y:57,
    z:89
}

let vector2 = {
    x:45,
    y:35,
    z:78
}

corssVectors(vector1, vector2);