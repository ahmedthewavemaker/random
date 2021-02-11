const diff = require('../arrayDiff');
const expect= require('chai').expect;

describe('Array Diff', ()=> {
    it('should reuturn a if no common elements', ()=>{
        expect(diff([1,2,3], [4,5,6]).to.eql([1,2,3]));
    })

    it('should return [] if they are the same', ()=>{
        expect(diff([1,2,3], [1,2,3]).to.eql([]));
    })

    it('should return correctly if an object is removed', ()=> {
        expect(diff([1,2,3], [2]).to.eql([1,3]))
    })
})
