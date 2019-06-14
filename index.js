'use strict';

exports.handler = async (event, context, callback) => {
  try {
    console.log('start');
    const resultA = await funcA();
    const resultB = await funcB();
    console.log('funcA result :'+resultA);
    console.log('funcB result :'+resultB);

    console.log('end');
    return callback(null, JSON.stringify({ result: 'OK' }));
  } catch (err) {
    console.log(err);
    return callback(null, JSON.stringify({ result: 'NG' }));
  }
}

function funcA(){
  console.log('exec funcA');
  return 'a';
}

function funcB(){
  console.log('exec funcB');
  return 'b';
}
