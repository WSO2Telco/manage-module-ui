const soap = require('soap');
const url = 'https://localhost:9443/services/AuthenticationAdmin?wsdl';

var args = {name: 'value'};

let _authenticationAdminClient;

soap.createClient(url, function (err, client) {
  _authenticationAdminClient = client;
});


function soapClients() {
  return {
    doLogin: function (request, callback) {
      let args = {
        login: {
          username: 'admin',
          password: 'admin',
          remoteAddress: ''
        }
      };

      if (!!_authenticationAdminClient) {
        _authenticationAdminClient.login(args, function (response) {
          server.log('info',response);
        });
      } else {
        soap.createClient(url,{endpoint:'https://localhost:9443'}, function (err, client) {
          _authenticationAdminClient = client;


          _authenticationAdminClient.login(args, function (response) {

          });
        });
      }
    }
  }
}

module.exports = soapClients();
