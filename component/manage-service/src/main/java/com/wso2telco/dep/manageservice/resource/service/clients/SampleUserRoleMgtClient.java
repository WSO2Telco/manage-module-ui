//package com.wso2telco.dep.manageservice.resource.service.clients;
///*
// *  Copyright soasecurity.org
// *
// *  Licensed under the Apache License, Version 2.0 (the "License");
// *  you may not use this file except in compliance with the License.
// *  You may obtain a copy of the License at
// *
// *      http://www.apache.org/licenses/LICENSE-2.0
// *
// *  Unless required by applicable law or agreed to in writing, software
// *  distributed under the License is distributed on an "AS IS" BASIS,
// *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// *  See the License for the specific language governing permissions and
// *  limitations under the License.
// */
//
//
//import org.apache.axis2.client.Options;
//import org.apache.axis2.client.ServiceClient;
//import org.apache.axis2.context.ConfigurationContext;
//import org.apache.axis2.context.ConfigurationContextFactory;
//import org.apache.axis2.transport.http.HTTPConstants;
//import org.apache.axis2.transport.http.HttpTransportProperties;
//import org.wso2.carbon.um.ws.api.stub.Claim;
//import org.wso2.carbon.um.ws.api.stub.ClaimValue;
//import org.wso2.carbon.um.ws.api.stub.RemoteUserStoreManagerServiceStub;
//
//import java.io.File;
//
///**
// * This sample client demo user mgt web service API of WSO2 Carbon Server.
// * You can use both UserAdmin and  RemoteUserStoreManagerService service APIs
// * As both are secured one. To call them, you want to pass valid credentials as
// * basic authentication header.
// */
//public class SampleUserRoleMgtClient {
//
//
//    /**
//     * Server url of the WSO2 Carbon Server
//     */
//    private static String SEVER_URL = "https://localhost:9443/services/";
//
//    /**
//     * User Name to access WSO2 Carbon Server
//     */
//    private static String USER_NAME = "admin";
//
//    /**
//     * Password of the User who access the WSO2 Carbon Server
//     */
//    private static String PASSWORD = "admin";
//
//
//    public static void main(String args[]) {
//
//
//        /**
//         * trust store path.  this must contains server's  certificate or Server's CA chain
//         */
//        String trustStore = System.getProperty("user.dir") + File.separator +
//                "src" + File.separator + "main" + File.separator +
//                "resources" + File.separator + "wso2carbon.jks";
//
//        /**
//         * Call to https://localhost:9443/services/   uses HTTPS protocol.
//         * Therefore we to validate the server certificate or CA chain. The server certificate is looked up in the
//         * trust store.
//         * Following code sets what trust-store to look for and its JKs password.
//         */
//
//        System.setProperty("javax.net.ssl.trustStore", trustStore);
//
//        System.setProperty("javax.net.ssl.trustStorePassword", "wso2carbon");
//
//        /**
//         * Axis2 configuration context
//         */
//        ConfigurationContext configContext;
//
//        try {
//
//            /**
//             * Create a configuration context. A configuration context contains information for
//             * axis2 environment. This is needed to create an axis2 service client
//             */
//            configContext = ConfigurationContextFactory.createConfigurationContextFromFileSystem(null, null);
//
//            /**
//             * end point url with service name
//             */
//            String serviceEndPoint = SEVER_URL + "RemoteUserStoreManagerService";
//
//            /**
//             * create stub and service client
//             */
//            RemoteUserStoreManagerServiceStub adminStub = new RemoteUserStoreManagerServiceStub(configContext, serviceEndPoint);
//            ServiceClient client = adminStub._getServiceClient();
//            Options option = client.getOptions();
//
//            /**
//             * Setting a authenticated cookie that is received from Carbon server.
//             * If you have authenticated with Carbon server earlier, you can use that cookie, if
//             * it has not been expired
//             */
//            option.setProperty(HTTPConstants.COOKIE_STRING, null);
//
//            /**
//             * Setting basic auth headers for authentication for carbon server
//             */
//            HttpTransportProperties.Authenticator auth = new HttpTransportProperties.Authenticator();
//            auth.setUsername(USER_NAME);
//            auth.setPassword(PASSWORD);
//            auth.setPreemptiveAuthentication(true);
//            option.setProperty(org.apache.axis2.transport.http.HTTPConstants.AUTHENTICATE, auth);
//            option.setManageSession(true);
//
//
//            /**
//             * Do any thing with user mgt API.  you can authenticate users, list user. add users, roles, assignments...
//             * Here as an example just have implemented list user operation.
//             */
//
//            String[] users = adminStub.listUsers("*", 100);
//
//            if (users != null) {
//                System.out.println("Listing user names of Carbon server...... ");
//                for (String user : users) {
//                    System.out.println("User Name : " + user);
//                }
//            }
//
//            /**
//             * creates user
//             */
//
//            try {
//                adminStub.addUser("asela", "password", null, null, null, false);
//                System.out.println("User is created successfully");
//            } catch (Exception e) {
//                System.err.println("User creation is failed");
//                e.printStackTrace();
//            }
//
//            /**
//             * authenticate User
//             */
//            boolean authenticate = false;
//
//            try {
//                authenticate = adminStub.authenticate("asela", "password");
//            } catch (Exception e) {
//                e.printStackTrace();
//            }
//
//            if (authenticate) {
//                System.out.println("User is authenticated successfully");
//            } else {
//                System.err.println("User is authentication failed");
//            }
//
//            /**
//             * creates role by assigning created user
//             */
//            try {
//                adminStub.addRole("testRole", new String[]{"asela"}, null);
//                System.out.println("Role is created successfully");
//            } catch (Exception e) {
//                System.err.println("Role creation is failed");
//                e.printStackTrace();
//            }
//
//
//            /**
//             * set user attribute to user asela
//             */
//            try {
//                adminStub.setUserClaimValue("asela", "http://wso2.org/claims/emailaddress", "asela@wso2.com", null);
//                System.out.println("User Attribute is updated successfully ");
//            } catch (Exception e) {
//                System.err.println("User Attribute updating is failed");
//                e.printStackTrace();
//            }
//
//            /**
//             * set multiple attributes to user asela
//             */
//            try {
//
//                ClaimValue email = new ClaimValue();
//                email.setClaimURI("http://wso2.org/claims/emailaddress");
//                email.setValue("newasela@wso2.com");
//
//                ClaimValue givenName = new ClaimValue();
//                givenName.setClaimURI("http://wso2.org/claims/givenname");
//                givenName.setValue("Asela Pathberiya");
//
//                ClaimValue[] values = new ClaimValue[]{email, givenName};
//
//                adminStub.setUserClaimValues("asela", values, null);
//
//                System.out.println("User Attributes are updated successfully ");
//            } catch (Exception e) {
//                System.err.println("User Attributes updating is failed");
//                e.printStackTrace();
//            }
//
//            /**
//             * get users of the role
//             */
//            try {
//                String[] usersList = adminStub.getUserListOfRole("testRole");
//                System.out.println("Listing user names assigned to testRole...... ");
//                for (String user : usersList) {
//                    System.out.println("Assigned User : " + user);
//                }
//            } catch (Exception e) {
//                System.err.println("Users can not be retrieved");
//                e.printStackTrace();
//            }
//
//            /**
//             * you can retrieve the cookie to use for sub sequent communications
//             */
//            String authCookie = (String) adminStub._getServiceClient().getServiceContext()
//                    .getProperty(HTTPConstants.COOKIE_STRING);
//
//            System.out.println(authCookie);
//
//            /**
//             * If WSO2 Carbon has been connected with multiple user stores. Say you need to create a user in
//             * domain called  it.com,  user name must be passed as   it.com/asela
//             */
//            //adminStub.addUser("it.com/asela", "password", null, null, null);
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
//}