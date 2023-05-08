Storage
- Internal
	- Best - Allow specific folders based on individual user - POSI
	- Reasonable - All users have access to internal
	
	* All users able to import and download files
	- Select users should be able to move or delete.

* External SFTP 
	* Best - Access to specific folder based on user
	* Reasonable - All users have 

	* All users able to import and download files
	- Select users should be able to move or delete.

- External 
	* Read level access
		* Specific Folder Upload based on user.
	* Do users need to have the ability to download file?

* General Storage
	* DENY

### Outstanding Tasks
* 


### Synapse
* Debug Access
* NO DELETE
* Change* Pipeline Parameters
* No Pipeline creation

### Github
* GITHUB MAIN BRANCH PROTECTION



# 5-8-2023
* Azure Permissions Testing
	* Storage Accounts
		* [Azure Data Lake Storage V2](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction) - ADLSv2 can be used if we want to set Access Control Lists on specific folders
			* Not sure cost implication
			* We already use some of these types for SFTP storage account

		* Normal Storage Accoutns Permissions can be put on **Storage Accounts[TopLevel]** and on **Containers[SecondLevel]**, but can't be put on any levels below that
			
		* Permissions
			* 