var express = require("express")
   , routes = require("./routes")
   , user = require("./routes/user")
   , http = require("http")
   , path = require("path")

var app = express();

//all all environmentes
app.set("port", process.env.PORT || 3000);
app.set("view engine","jade");
app.set(express.favicon());
app.set(express.logger("dev"));
app.set(express.bodyParser());
app.set(express.methodOverride());
app.set(app.router);
app.set(express.static(phah.join(_dirname, "public")));
// development only
if ("development" == app.get("env")) {
	app.use(express.errorHandler());
}

app.get("/", routes.index);
app.get("/users", user.list);

http.createServer(app).listen(app.get(port), function (){
	console.log("express server listening on port")
});