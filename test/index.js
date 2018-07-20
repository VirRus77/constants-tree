import chai from 'chai';
import {constantsTree} from '../src/index';

describe('constantsTree', () => {
  const testConstTree = {
    _: '123',
    str: '',
    und: undefined,
    int: 1,
    obj: {},
    objContent: {
      _: '',
      lng: 'lng',
      data: '',
    },
  };

  const testApp = 'testApp';
  constantsTree(testConstTree, testApp);

  it('Not fill values', () => {
    chai.assert.strictEqual(testConstTree._, '123');
    chai.assert.strictEqual(testConstTree.und, undefined);
    chai.assert.strictEqual(testConstTree.int, 1);
    chai.assert.notStrictEqual(testConstTree.obj, {});
    chai.assert.strictEqual(testConstTree.objContent.lng, 'lng');
  });

  it('Fill values', () => {
    chai.assert.strictEqual(testConstTree.str, `${testApp}.str`);
    chai.assert.strictEqual(testConstTree.objContent._,
      `${testApp}.objContent`);
    chai.assert.strictEqual(testConstTree.objContent.data,
      `${testApp}.objContent.data`);
  });

});
