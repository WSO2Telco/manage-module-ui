package com.wso2telco.dep.manageservice.resource.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class LoginResponse {

	private String userName;
	private String[] uiPermissions;
	private String[] roles;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String[] getUiPermissions() {
		return uiPermissions;
	}

	public void setUiPermissions(String[] uiPermissions) {
		this.uiPermissions = uiPermissions;
	}

	public String[] getRoles() {
		return roles;
	}

	public void setRoles(String[] roles) {
		this.roles = roles;
	}
}
