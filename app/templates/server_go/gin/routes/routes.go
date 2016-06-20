package routes

import (
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/todo/routes"
	<% if (!differentStaticServer) {%>
	"<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/common/static"
	<% } %>
	"github.com/gin-gonic/gin"
)

func Init(e *echo.Echo) {
	<% if (!differentStaticServer) {%>
	static.Init(e)
	<% } %>
	todoroutes.Init(e)
}
