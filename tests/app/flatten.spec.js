'use strict';

var expect = require('chai').expect;
var utilities = require('../../app/utilities');

/**
 * Flatten Test Spec
 */

describe('Flatten Array Utility Test Suite', function(){
    describe('Positive cases', function(){
        describe('The flatten function', function(){
            it('given correct values should return an array object ', function(done){
                expect(utilities.flatten([[6], [12]])).to.be.instanceof(Array);
                done();
            });
            it('can flatten an array with one level of nested items', function(done){
                expect(utilities.flatten([[6], [12], [25], [25], [18], [22]])).to.deep.equal([6, 12, 25, 25, 18, 22]);
                done();
            });
            it('can flatten an array with multiple levels of nested items', function(done){
                expect(utilities.flatten([[6], [12], [[26], [41], [[56], [101]]]])).to.deep.equal([6, 12, 26, 41, 56, 101]);
                done();
            });
            it('given multiple flat arrays can flatten them into one single array', function(done){
                expect(utilities.flatten([6], [12], [26])).to.deep.equal([6, 12, 26]);
                done();
            });
            it('given multiple nested arrays can flatten them into one single array', function(done){
                expect(utilities.flatten([6], [12], [[26], [41], [[56], [101]]])).to.deep.equal([6, 12, 26, 41, 56, 101]);
                done();
            });
            it('given an Integer as an argument it adds it to the flat array', function(done){
                expect(utilities.flatten(1234)).to.deep.equal([1234]);
                done();
            });
            it('given an multiple Integers as arguments it adds them to the flat array', function(done){
                expect(utilities.flatten(1234, 4321)).to.deep.equal([1234, 4321]);
                done();
            });
            it('given an Integer as an argument along with nested arrays it merges them into the flat array', function(done){
                expect(utilities.flatten(1234, [6], [12], [[26], [41], [[56], [101]]])).to.deep.equal([1234, 6, 12, 26, 41, 56, 101]);
                done();
            });
        })
    });
    describe('Negative cases', function(){
        describe('The flatten function', function(){
            it('gracefully returns an empty array when it is passed an empty list', function(done){
                expect(utilities.flatten([])).to.deep.equal([]);
                expect(utilities.flatten([])).to.be.empty;
                done();
            });
            it('gracefully returns an empty array when it is passed no arguments', function(done){
                expect(utilities.flatten()).to.deep.equal([]);
                expect(utilities.flatten()).to.be.empty;
                done();
            });
            it('gracefully returns an empty array when it is passed an argument that is not an Array or a Integer', function(done){
                expect(utilities.flatten('String')).to.deep.equal([]);
                expect(utilities.flatten('String')).to.be.empty;
                expect(utilities.flatten({})).to.deep.equal([]);
                expect(utilities.flatten({})).to.be.empty;
                expect(utilities.flatten(undefined)).to.deep.equal([]);
                expect(utilities.flatten(undefined)).to.be.empty;
                expect(utilities.flatten(null)).to.deep.equal([]);
                expect(utilities.flatten(null)).to.be.empty;
                done();
            });
        });
    })
});