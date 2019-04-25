import flipCoin from '../src/flip-coin.js';
const test = QUnit.test;

//create function
// function flipCoin(number) {
//     if(number < .5) {
//         return 'tails';
//     }
//     return 'heads';
// }


test('get test for tails when less than .5', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = .49;
    const expected = 'tails';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = flipCoin(number);

    //Assert
    assert.equal(result, expected);
});

test('get test for heads when greater than or equal to .5', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = .5;
    const expected = 'heads';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = flipCoin(number);

    //Assert
    assert.equal(result, expected);
});