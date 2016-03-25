var sinon = require("sinon");

exports.test_handle_GET_request = function (test){

	var response = {"writeHead" : function (){}, "end" : function(){}};
	var responseMock = sinon.mock(response);

	responseMock.expects("end").once().withArgs("Get actio was resq")
	responseMock.expects("writeHead").once().withArgs(200, {
		"content-type" : "text/plain"
	})

	var resquest = {};
	var resquestMock = sinon.mock(resquest);
	resquestMock.method = "GET";

	var http_module = require("../modules/http-module");

	http_module.handle_request(resquestMock, response);

	responseMock.verify();
	test.done();
}