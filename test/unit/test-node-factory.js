import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../../_ng/utils/known_paths';
import {NodeKoaStandard, NodeKoaBabel, NodeKoaTypescript} from '../../_ng/server/node_koa';
import {NodeExpressStandard, NodeExpressBabel, NodeExpressTypescript} from '../../_ng/server/node_express';
import {NodeFactory} from '../../_ng/server/node_factory';

describe('node_factory', () => {
  describe('tokens', () => {
    it('should have the right values for the tokensCompiler()', () => {
      expect(NodeFactory.tokensCompiler().NODE).to.equal('node');
      expect(NodeFactory.tokensCompiler().BABEL).to.equal('babel');
      expect(NodeFactory.tokensCompiler().TYPESCRIPT).to.equal('typescript');
    });

    it('should have the right values for the tokensWebFramework()', () => {
      expect(NodeFactory.tokensWebFramework().KOA).to.equal('koa');
      expect(NodeFactory.tokensWebFramework().EXPRESS).to.equal('express');
    });
  })

  describe('instance', () => {
    describe('Koa', () => {
      it('should have an instance of NodeKoaStandard', () => {
        expect(NodeFactory.build({transpilerServer: 'node', webFrameworkNodeServer: 'koa'}) instanceof NodeKoaStandard).to.be.true;
      });

      it('should have an instance of NodeKoaBabel', () => {
        expect(NodeFactory.build({transpilerServer: 'babel', webFrameworkNodeServer: 'koa'}) instanceof NodeKoaBabel).to.be.true;
      });

      it('should have an instance of NodeKoaTypescript', () => {
        expect(NodeFactory.build({transpilerServer: 'typescript', webFrameworkNodeServer: 'koa'}) instanceof NodeKoaTypescript).to.be.true;
      });
    })

    describe('Express', () => {
      it('should have an instance of NodeKoaStandard', () => {
        expect(NodeFactory.build({transpilerServer: 'node', webFrameworkNodeServer: 'express'}) instanceof NodeExpressStandard).to.be.true;
      });

      it('should have an instance of NodeKoaBabel', () => {
        expect(NodeFactory.build({transpilerServer: 'babel', webFrameworkNodeServer: 'express'}) instanceof NodeExpressBabel).to.be.true;
      });

      it('should have an instance of NodeKoaTypescript', () => {
        expect(NodeFactory.build({transpilerServer: 'typescript', webFrameworkNodeServer: 'express'}) instanceof NodeExpressTypescript).to.be.true;
      });
    })
  })
});
