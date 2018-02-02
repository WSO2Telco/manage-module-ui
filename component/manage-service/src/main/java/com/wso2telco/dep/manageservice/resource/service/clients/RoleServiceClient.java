//package com.wso2telco.dep.manageservice.resource.service.clients;
//
///**
// * Created by manoj on 9/28/17.
// */
//
//import java.util.HashMap;
//import java.util.Map;
//
//import org.apache.axis2.context.ConfigurationContext;
//import org.apache.axis2.context.ConfigurationContextFactory;
//import org.apache.axis2.transport.http.HTTPConstants;
//import org.wso2.carbon.authenticator.stub.AuthenticationAdminStub;
//import org.wso2.carbon.um.ws.api.WSRealmBuilder;
//import org.wso2.carbon.user.core.UserRealm;
//import org.wso2.carbon.user.core.UserStoreManager;
//
//public class RoleServiceClient {
//
//    private final static String SERVER_URL = "https://localhost:9443/services/";
//    private final static String APP_ID = "myapp";
//
//    /**
//     * @param args
//     */
//    public static void main(String[] args) {
//
//        AuthenticationAdminStub authstub = null;
//        ConfigurationContext configContext = null;
//        String cookie = null;
//
//        System.setProperty("javax.net.ssl.trustStore", "wso2carbon.jks");
//        System.setProperty("javax.net.ssl.trustStorePassword", "wso2carbon");
//
//        try {
//            configContext = ConfigurationContextFactory.createConfigurationContextFromFileSystem(
//                    "repo", "repo/conf/client.axis2.xml");
//            authstub = new AuthenticationAdminStub(configContext, SERVER_URL
//                    + "AuthenticationAdmin");
//
//            // Authenticates as a user having rights to add users.
//            if (authstub.login("admin", "admin", null)) {
//                cookie = (String) authstub._getServiceClient().getServiceContext().getProperty(
//                        HTTPConstants.COOKIE_STRING);
//
//                UserRealm realm = WSRealmBuilder.createWSRealm(SERVER_URL, cookie, configContext);
//                UserStoreManager storeManager = realm.getUserStoreManager();
//
//                // Add a new role - with no users - with APP_ID as the role name
//
//                if (!storeManager.isExistingRole(APP_ID)) {
//
//                    storeManager.addRole(APP_ID, null, null);
//                    System.out.println("The role added successfully to the system");
//                } else {
//                    System.out.println("The role trying to add - already there in the system");
//                }
//
//                if (!storeManager.isExistingUser(newUser)) {
//                    // Let's the this user to APP_ID role we just created.
//
//                    // First let's create claims for users.
//                    // If you are using a claim that does not exist in default IS instance,
//                    Map<string, string="" > claims = new HashMap<string, string = "" > ();
//
//                    // TASK-1 and TASK-2 should be completed by now.
//                    // Here I am using an already existing claim
//                    claims.put("http://wso2.org/claims/businessphone", "0112842302");
//
//                    // Here we pass null for the profile - so it will use the default profile.
//                    storeManager.addUser(newUser, "password", new String[]{APP_ID, "loginOnly"},
//                            claims, null);
//                    System.out.println("The use added successfully to the system");
//                } else {
//                    System.out.println("The user trying to add - already there in the system");
//                }
//
//                // Now let's see the given user [newUser] belongs to the role APP_ID.
//                String[] userRoles = storeManager.getRoleListOfUser(newUser);
//                boolean found = false;
//
//                if (userRoles != null) {
//                    for (int i = 0; i < userRoles.length; i++) {
//                        if (APP_ID.equals(userRoles[i])) {
//                            found = true;
//                            System.out.println("The user is in the required role");
//                            break;
//                        }
//                    }
//                }
//
//                if (!found) {
//                    System.out.println("The user is NOT in the required role");
//                }
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
//}
