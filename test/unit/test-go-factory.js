import {expect} from 'chai';
import sinon from 'sinon';
import {GoFactory} from '../../_ng/server/go_factory';
import {GoEcho} from '../../_ng/server/go_echo';
import {GoGin} from '../../_ng/server/go_gin';

describe('go', () => {
  describe('tokensWebFramework', () => {
    it('should have the wrapper as the object passed by param', () => {
        expect(GoFactory.tokensWebFramework().GIN).to.equal("gin");
        expect(GoFactory.tokensWebFramework().ECHO).to.equal("echo");
      });
  });

  describe('instances', () => {
    it('should have the GoEcho instance', () => {
      let _newGenerator = {
        a: true,
        webFrameworkGoServer: 'echo'
      };

      expect(GoFactory.build(_newGenerator) instanceof GoEcho).to.equal(true);
    })

    it('should have the GoGin instance', () => {
      let _newGenerator = {
        a: true,
        webFrameworkGoServer: 'gin'
      };

      expect(GoFactory.build(_newGenerator) instanceof GoGin).to.equal(true);
    })
  })
})
