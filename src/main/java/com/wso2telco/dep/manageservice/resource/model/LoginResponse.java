package com.wso2telco.dep.manageservice.resource.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class LoginResponse {

	private String userName;
	private String firstName;
	private String lastName;
	private String emailAddress;
	private String organization;
	private String department;
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

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public String getOrganization() {
		return organization;
	}

	public void setOrganization(String organization) {
		this.organization = organization;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}
}
