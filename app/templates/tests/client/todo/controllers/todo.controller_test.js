"use strict";

describe('todos.controller', function()
{
    var _scope, _Todo, _httpBackend, _logMock;
    var CONTROLLER_NAME = 'TodosController as todosCtrl';
    var URL_GET_ALL = '/api/todos';
    var URL_CREATE_TODO = '/api/todos';

    beforeEach(module('myAwesomeApp'));

    beforeEach(inject(function($injector)
    {
        _scope = $injector.get('$rootScope').$new();
        _httpBackend = $injector.get('$httpBackend');
        _logMock = $injector.get('$log');
        _Todo = $injector.get('Todo');
    }))

    describe('init', function()
    {
        it('should be initialized correctly', inject(function($controller)
        {
            $controller(CONTROLLER_NAME, {$scope: _scope});
        }));

        it('should have todo as the instanceof Todo', inject(function($controller)
        {
            $controller(CONTROLLER_NAME, {$scope: _scope});

            expect(_scope.todosCtrl.todo instanceof _Todo).toBeTruthy();
        }))

        it('should have todos as an empty array', inject(function($controller)
        {
          $controller(CONTROLLER_NAME, {$scope: _scope});

          expect(angular.equals(_scope.todosCtrl.todos, [])).toBeTruthy();
        }))
    })

    describe('onLoad', function()
    {
        it('should fill the todos array with the server response', inject(function($controller)
        {
            var _response = [{todoMessage: 'hello', createdAt: Date.now()}, {todoMessage: 'oh, hey!', createdAt: Date.now()}];

            _httpBackend.expectGET(URL_GET_ALL).respond(_response);

            $controller(CONTROLLER_NAME, {$scope: _scope});

            _httpBackend.flush();

            expect(angular.equals(_scope.todosCtrl.todos, _response)).toBeTruthy();
        }))
    })

    describe('createTodo', function()
    {
        it('should try to createTodo, but server returns error - 400', inject(function($controller)
        {
            spyOn(_logMock, 'error').and.callFake(angular.noop);

            var _todo = new _Todo();
            _todo.todoMessage = 'abcdef';

            _httpBackend.expectGET(URL_GET_ALL).respond(200);
            _httpBackend.expectPOST(URL_CREATE_TODO, _todo).respond(400);

            $controller(CONTROLLER_NAME, {$scope: _scope});

            _scope.todosCtrl.createTodo(_todo);

            _httpBackend.flush();

            expect(_logMock.error).toHaveBeenCalled();
        }))

        it('should createTodo correctly', inject(function($controller)
        {
          var _response = {_id: 'abcdef123', todoMessage: 'abcdef', createdAt: Date.now()};

          var _todo = new _Todo();
          _todo.todoMessage = 'abcdef';

          _httpBackend.expectGET(URL_GET_ALL).respond(200);
          _httpBackend.expectPOST(URL_CREATE_TODO, _todo).respond(200, _response);

          $controller(CONTROLLER_NAME, {$scope: _scope});

          _scope.todosCtrl.createTodo(_todo);

          _httpBackend.flush();

          expect(angular.equals(_scope.todosCtrl.todos[0], _response)).toBeTruthy();
        }))
    })
})
