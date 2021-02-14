"use strict";

var _templateObject = _taggedTemplateLiteral(["\n            {\n                user(id: 5) {\n                    posts {\n                      data {\n                        title\n                        body\n                      }\n                    }\n                  }\n            }\n        "], ["\n            {\n                user(id: 5) {\n                    posts {\n                      data {\n                        title\n                        body\n                      }\n                    }\n                  }\n            }\n        "]);

var _apolloBoost = require("apollo-boost");

var _apolloBoost2 = _interopRequireDefault(_apolloBoost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function makeGQLCall() {

    var gqlUrl = "https://graphqlzero.almansi.me/api";

    var client = new _apolloBoost2.default({
        uri: gqlUrl
    });

    client.query({
        query: (0, _apolloBoost.gql)(_templateObject)
    }).then(retrieveData);
}

function retrieveData(json) {
    console.log(json.data.user.posts.data);
    var data = json.data.user.posts.data;

    for (var i = 0; i < data.length; i++) {
        console.log(data[i].title);
    }
}

makeGQLCall();