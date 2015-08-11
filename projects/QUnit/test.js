QUnit.test( "hello test", function( assert ) {
    assert.ok(1 == '1', 'Passed!');
    assert.equal( 0, 0, "Zero, Zero; equal succeeds" );
    assert.equal( "", 0, "Empty, Zero; equal succeeds" );
    assert.equal( "", "", "Empty, Empty; equal succeeds" );
    assert.equal( 0, false, "Zero, false; equal succeeds" );

    assert.equal( "three", 3, "Three, 3; equal fails" );
    assert.equal( null, false, "null, false; equal fails" );

    var obj = { foo: "bar" };

    assert.deepEqual( obj, { foo: "bar" }, "Two objects can be the same in value" );
});
