import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../../_ng/utils/known_paths';
import {GoFactory} from '../../_ng/server/go_factory';
import {GoGin} from '../../_ng/server/go_gin';

describe('go', () => {
    describe('copyFiles', () => {
      it('should call the right methods with the right params', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          appName: 'c',
          userNameSpace: 'd',
          repoHostUrl: 'github.com',
          template: sinon.spy()
        }

        let _n = new GoGin(_newGenerator);

        _n.copyFiles();

        let _firstCall = [`go/gin/endpoint.route.go`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/routes/${_newGenerator.name}route.go`, {
          name: _newGenerator.name,
          nameLowerCase: _newGenerator.name.toLowerCase(),
          userNameSpace: _newGenerator.userNameSpace,
          appName: _newGenerator.appName,
          repoHostUrl: _newGenerator.repoHostUrl,
          feature: _newGenerator.feature.replace('/', '')
        }];

        let _secondCall = [`go/gin/endpoint.controller.go`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}controller.go`, {
          name: _newGenerator.name,
          nameLowerCase: _newGenerator.name.toLowerCase(),
          userNameSpace: _newGenerator.userNameSpace,
          appName: _newGenerator.appName,
          repoHostUrl: _newGenerator.repoHostUrl,
          feature: _newGenerator.feature.replace('/', '')
        }];

        let _thirdCall = [`go/gin/endpoint.dao.go`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}dao.go`, {
          name: _newGenerator.name,
          nameLowerCase: _newGenerator.name.toLowerCase(),
          userNameSpace: _newGenerator.userNameSpace,
          appName: _newGenerator.appName,
          repoHostUrl: _newGenerator.repoHostUrl,
          feature: _newGenerator.feature.replace('/', '')
        }];

        let _fourthCall = [`go/gin/endpoint.model.go`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}model.go`, {
          name: _newGenerator.name,
          nameLowerCase: _newGenerator.name.toLowerCase(),
          userNameSpace: _newGenerator.userNameSpace,
          appName: _newGenerator.appName,
          repoHostUrl: _newGenerator.repoHostUrl,
          feature: _newGenerator.feature.replace('/', '')
        }];

        let _fifthCall = [`go/gin/endpoint.route_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/routes/${_newGenerator.name}route_test.go`, {
          name: _newGenerator.name,
          nameLowerCase: _newGenerator.name.toLowerCase(),
          userNameSpace: _newGenerator.userNameSpace,
          appName: _newGenerator.appName,
          repoHostUrl: _newGenerator.repoHostUrl,
          feature: _newGenerator.feature.replace('/', '')
        }];

        let _sixthCall = [`go/gin/endpoint.dao_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}dao_test.go`, {
          name: _newGenerator.name,
          nameLowerCase: _newGenerator.name.toLowerCase(),
          userNameSpace: _newGenerator.userNameSpace,
          appName: _newGenerator.appName,
          repoHostUrl: _newGenerator.repoHostUrl,
          feature: _newGenerator.feature.replace('/', '')
        }];

        let _seventhCall = [`go/gin/endpoint.model_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}model_test.go`, {
          name: _newGenerator.name,
          nameLowerCase: _newGenerator.name.toLowerCase(),
          userNameSpace: _newGenerator.userNameSpace,
          appName: _newGenerator.appName,
          repoHostUrl: _newGenerator.repoHostUrl,
          feature: _newGenerator.feature.replace('/', '')
        }];

        let _eighthCall = [`go/gin/endpoint.controller_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}controller_test.go`, {
          name: _newGenerator.name,
          nameLowerCase: _newGenerator.name.toLowerCase(),
          userNameSpace: _newGenerator.userNameSpace,
          appName: _newGenerator.appName,
          repoHostUrl: _newGenerator.repoHostUrl,
          feature: _newGenerator.feature.replace('/', '')
        }];

        expect(_n.wrapper.template).to.have.been.called;
        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1], _sixthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1], _seventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1], _eighthCall[2])).to.be.true;
      });
    });

    describe('copyForMainGenerator', () => {
      it('should call the right methods with the right params', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          appName: 'c',
          userNameSpace: 'd',
          repoHostUrl: 'github.com',
          template: sinon.spy()
        }

        let _n = new GoGin(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [`server_go/gin/main.go`,
          `server/main.go`, {
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            userNameSpace: _newGenerator.userNameSpace,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _secondCall = [`server_go/gin/routes/routes.go`,
          `server/routes/routes.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _thirdCall = [`server_go/gin/routes/routes_test.go`,
          `server/routes/routes_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fourthCall = [`server_go/gin/config/dbconfig.go`,
          `server/config/dbconfig.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fifthCall = [`server_go/gin/config/dbconfig_test.go`,
          `server/config/dbconfig_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _sixthCall = [`server_go/gin/common/static/static.go`,
          `server/common/static/static.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _seventhCall = [`server_go/gin/common/static/static_test.go`,
          `server/common/static/static_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _eighthCall = [`server_go/gin/api/todo/routes/todoroutes.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _ninethCall = [`server_go/gin/api/todo/routes/todoroutes_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _tenthCall = [`server_go/gin/api/todo/model/todomodel.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _eleventhCall = [`server_go/gin/api/todo/model/todomodel_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _twelfthCall = [`server_go/gin/api/todo/dao/tododao.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _thirteenthCall = [`server_go/gin/api/todo/dao/tododao_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fourteenthCall = [`server_go/gin/api/todo/controller/todocontroller.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fifteenfhCall = [`server_go/gin/api/todo/controller/todocontroller_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1], _sixthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1], _seventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1], _eighthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_ninethCall[0], _ninethCall[1], _ninethCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_tenthCall[0], _tenthCall[1], _tenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eleventhCall[0], _eleventhCall[1], _eleventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_twelfthCall[0], _twelfthCall[1], _twelfthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirteenthCall[0], _thirteenthCall[1], _thirteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourteenthCall[0], _fourteenthCall[1], _fourteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifteenfhCall[0], _fifteenfhCall[1], _fifteenfhCall[2])).to.be.true;
      });

      it('should call the right methods with the right params - secure', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          appName: 'c',
          userNameSpace: 'd',
          repoHostUrl: 'github.com',
          template: sinon.spy(),
          secure: true
        }

        let _n = new GoGin(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [`server_go/gin/main_http2.go`,
          `server/main.go`, {
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            userNameSpace: _newGenerator.userNameSpace,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _secondCall = [`server_go/gin/routes/routes.go`,
          `server/routes/routes.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _thirdCall = [`server_go/gin/routes/routes_test.go`,
          `server/routes/routes_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fourthCall = [`server_go/gin/config/dbconfig.go`,
          `server/config/dbconfig.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fifthCall = [`server_go/gin/config/dbconfig_test.go`,
          `server/config/dbconfig_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _sixthCall = [`server_go/gin/common/static/static.go`,
          `server/common/static/static.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _seventhCall = [`server_go/gin/common/static/static_test.go`,
          `server/common/static/static_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _eighthCall = [`server_go/gin/api/todo/routes/todoroutes.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _ninethCall = [`server_go/gin/api/todo/routes/todoroutes_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _tenthCall = [`server_go/gin/api/todo/model/todomodel.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _eleventhCall = [`server_go/gin/api/todo/model/todomodel_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _twelfthCall = [`server_go/gin/api/todo/dao/tododao.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _thirteenthCall = [`server_go/gin/api/todo/dao/tododao_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fourteenthCall = [`server_go/gin/api/todo/controller/todocontroller.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fifteenfhCall = [`server_go/gin/api/todo/controller/todocontroller_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1], _sixthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1], _seventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1], _eighthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_ninethCall[0], _ninethCall[1], _ninethCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_tenthCall[0], _tenthCall[1], _tenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eleventhCall[0], _eleventhCall[1], _eleventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_twelfthCall[0], _twelfthCall[1], _twelfthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirteenthCall[0], _thirteenthCall[1], _thirteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourteenthCall[0], _fourteenthCall[1], _fourteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifteenfhCall[0], _fifteenfhCall[1], _fifteenfhCall[2])).to.be.true;
      });

      it('should call the right methods with the right params - secure', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          appName: 'c',
          userNameSpace: 'd',
          repoHostUrl: 'github.com',
          template: sinon.spy(),
          secure: true
        }

        let _n = new GoGin(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [`server_go/gin/main_http2.go`,
          `server/main.go`, {
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            repoHostUrl: _newGenerator.repoHostUrl,
            userNameSpace: _newGenerator.userNameSpace,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _secondCall = [`server_go/gin/routes/routes.go`,
          `server/routes/routes.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _thirdCall = [`server_go/gin/routes/routes_test.go`,
          `server/routes/routes_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fourthCall = [`server_go/gin/config/dbconfig.go`,
          `server/config/dbconfig.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fifthCall = [`server_go/gin/config/dbconfig_test.go`,
          `server/config/dbconfig_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _sixthCall = [`server_go/gin/common/static/static.go`,
          `server/common/static/static.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _seventhCall = [`server_go/gin/common/static/static_test.go`,
          `server/common/static/static_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _eighthCall = [`server_go/gin/api/todo/routes/todoroutes.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _ninethCall = [`server_go/gin/api/todo/routes/todoroutes_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _tenthCall = [`server_go/gin/api/todo/model/todomodel.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _eleventhCall = [`server_go/gin/api/todo/model/todomodel_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _twelfthCall = [`server_go/gin/api/todo/dao/tododao.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _thirteenthCall = [`server_go/gin/api/todo/dao/tododao_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fourteenthCall = [`server_go/gin/api/todo/controller/todocontroller.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fifteenfhCall = [`server_go/gin/api/todo/controller/todocontroller_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1], _sixthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1], _seventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1], _eighthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_ninethCall[0], _ninethCall[1], _ninethCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_tenthCall[0], _tenthCall[1], _tenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eleventhCall[0], _eleventhCall[1], _eleventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_twelfthCall[0], _twelfthCall[1], _twelfthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirteenthCall[0], _thirteenthCall[1], _thirteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourteenthCall[0], _fourteenthCall[1], _fourteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifteenfhCall[0], _fifteenfhCall[1], _fifteenfhCall[2])).to.be.true;
      });

      it('should call the right methods with the right params - differentStaticServer', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          appName: 'c',
          differentStaticServer: true,
          userNameSpace: 'd',
          repoHostUrl: 'github.com',
          template: sinon.spy(),
          secure: true
        }

        let _n = new GoGin(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [`server_go/gin/main_http2.go`,
          `server/main.go`, {
          appName: _newGenerator.appName,
          repoHostUrl: _newGenerator.repoHostUrl,
          userNameSpace: _newGenerator.userNameSpace,
          differentStaticServer: !!_newGenerator.differentStaticServer
        }];

        let _secondCall = [`server_go/gin/routes/routes.go`,
          `server/routes/routes.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _thirdCall = [`server_go/gin/routes/routes_test.go`,
          `server/routes/routes_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fourthCall = [`server_go/gin/config/dbconfig.go`,
          `server/config/dbconfig.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fifthCall = [`server_go/gin/config/dbconfig_test.go`,
          `server/config/dbconfig_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _eighthCall = [`server_go/gin/api/todo/routes/todoroutes.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _ninethCall = [`server_go/gin/api/todo/routes/todoroutes_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _tenthCall = [`server_go/gin/api/todo/model/todomodel.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _eleventhCall = [`server_go/gin/api/todo/model/todomodel_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _twelfthCall = [`server_go/gin/api/todo/dao/tododao.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _thirteenthCall = [`server_go/gin/api/todo/dao/tododao_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fourteenthCall = [`server_go/gin/api/todo/controller/todocontroller.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fifteenfhCall = [`server_go/gin/api/todo/controller/todocontroller_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1], _eighthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_ninethCall[0], _ninethCall[1], _ninethCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_tenthCall[0], _tenthCall[1], _tenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eleventhCall[0], _eleventhCall[1], _eleventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_twelfthCall[0], _twelfthCall[1], _twelfthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirteenthCall[0], _thirteenthCall[1], _thirteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourteenthCall[0], _fourteenthCall[1], _fourteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifteenfhCall[0], _fifteenfhCall[1], _fifteenfhCall[2])).to.be.true;
      });

      it('should call the right methods with the right params - differentStaticServer is false, but serverOnly is true', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          appName: 'c',
          stack: "server",
          differentStaticServer: false,
          userNameSpace: 'd',
          repoHostUrl: 'github.com',
          template: sinon.spy(),
          secure: true
        }

        let _n = new GoGin(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [`server_go/gin/main_http2.go`,
          `server/main.go`, {
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            userNameSpace: _newGenerator.userNameSpace,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _secondCall = [`server_go/gin/routes/routes.go`,
          `server/routes/routes.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _thirdCall = [`server_go/gin/routes/routes_test.go`,
          `server/routes/routes_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fourthCall = [`server_go/gin/config/dbconfig.go`,
          `server/config/dbconfig.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fifthCall = [`server_go/gin/config/dbconfig_test.go`,
          `server/config/dbconfig_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _eighthCall = [`server_go/gin/api/todo/routes/todoroutes.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _ninethCall = [`server_go/gin/api/todo/routes/todoroutes_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _tenthCall = [`server_go/gin/api/todo/model/todomodel.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _eleventhCall = [`server_go/gin/api/todo/model/todomodel_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _twelfthCall = [`server_go/gin/api/todo/dao/tododao.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _thirteenthCall = [`server_go/gin/api/todo/dao/tododao_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fourteenthCall = [`server_go/gin/api/todo/controller/todocontroller.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        let _fifteenfhCall = [`server_go/gin/api/todo/controller/todocontroller_test.go`,
          `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller_test.go`, {
            userNameSpace: _newGenerator.userNameSpace,
            appName: _newGenerator.appName,
            repoHostUrl: _newGenerator.repoHostUrl,
            differentStaticServer: !!_newGenerator.differentStaticServer
          }];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1], _eighthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_ninethCall[0], _ninethCall[1], _ninethCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_tenthCall[0], _tenthCall[1], _tenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eleventhCall[0], _eleventhCall[1], _eleventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_twelfthCall[0], _twelfthCall[1], _twelfthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirteenthCall[0], _thirteenthCall[1], _thirteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourteenthCall[0], _fourteenthCall[1], _fourteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifteenfhCall[0], _fifteenfhCall[1], _fifteenfhCall[2])).to.be.true;
      });
    });
})
