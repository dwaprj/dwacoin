const { isMainThread } = require("worker_threads");
const assert = require('assert');

const DWAtoken = artifacts.require('DWAtoken');

contract("DWAtoken", accounts => {
    it("should put 2880000000 DWAtoken in the first account", () => 
        DWAtoken.deployed()
        .then( instance => {
                return instance.balanceOf.call(accounts[0]);
            }
        )
        .then(balance => {
            assert.equal(
                balance.valueOf(),
                2880000000 * (10 ** 18),
                "2880000000 wasn't in the first account"
            )
        })
    );

    it( "has a name 'DWAtoken' ", () => 
        DWAtoken.deployed()
        .then( instance => {
                return instance.name.call();
            }
        )
        .then(name => {
            assert.equal(name,"DWAtoken","name is not DWAtoken");
        })
    );

    it( "has a symbol 'dwa' ", () => 
        DWAtoken.deployed()
        .then( instance => {
                return instance.symbol.call();
            }
        )
        .then(symbol => {
            assert.equal(symbol,"dwa","symbol is not dwa");
        })
    );

    it( "decimals is 18 ", () => 
        DWAtoken.deployed()
        .then( instance => {
                return instance.decimals.call();
            }
        )
        .then(decimals => {
            assert.equal(decimals,18,"decimals is not 18");
        })
    );
})