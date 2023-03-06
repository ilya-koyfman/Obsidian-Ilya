## ASPCA - CISO GLOBAL Datto Talk 3-1-2023

### Summary

Mark, Javier, Singkwan, and Ilya discussed the following

#### Discussion Points

 * Server Patch Policies
	 * Below are the patch policies that were agreed upon and will be applied to servers.
		 * TEST/DEV
			 * 3rd Sunday 3AM
		 * Production DCs
			 * 4th Sunday 4AM
		* Production (non DC)
			* 4th Sunday 4am
		* Production (No Reboot)
			* **Server will be reboot manually by ASPCA Staff**
			* 4th Sunday 4am
 * Desktop Patch Policies – Future Planning
	 * We discussed how patching would like like for workstations for Future state
		 * Current State/Migration state Policy
			 * Patches all Machines M-F 12PM-5PM

			 > [!todo]  Talk to Max about Timing about 12pm-5pm

 * Filters & Groups Discussion
	 * Filters and Groups is the preferred method for managing devices
		 * **WILL PROBABLY USE ONE UDF FOR SITE**
 * Agent Policies
	 * Policies that are going to be implemented
		 * No Privacy Screen
		 * No Tray ticketing

- Security Levels
	- SystemAdmins
		- Webremote
		- Splashtop
		- Drive INFO
		- File Manager
		- Quick Jobs
		- Restart/Shutdown
		- Chat
		- Event Viewer
		- Services
		- Task Manager

	* Help Desk
		* Webremote
		* Splashtop
		* Drive INFO
		* File Manager
		* Task Manager
		* ***Quick Jobs*** - Need Discussion for how affects Help Desk

##### *Datto Rollout*

###### Server Rollout

* Three group for server rollout
	* First Group - Azure Servers, 1 Server 92nd, 1 Server CHI
	* Second Group - Test/DEV servers
	* Third Group - Production
