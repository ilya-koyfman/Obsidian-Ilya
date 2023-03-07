---
tags: [azure]
---

#### Setting up Storage Account with SFTP

- [x] Uploaded to Box
1. Start creation of a Storage Account
2. Create the storage account using the naming convention [[Azure Resource Naming Convention]]
3. Select the storage account to us `Hierchacly File Structure`
4. Once this is set apply all rest of config required
5. After the Storage account is created go down to SFTP on the side menu
![[Pasted image 20230302173058.png]]
6. From here you will be able to create SFTP users that can connect to the storage account via using the URL of the resource as the host name on port 22
7. To add a new user, create local user 
>[!note]
>The SFTP Storage Account just allows to create local users like we would on any other SFTP server
8.  Specify the username being assigned, also click on SSH Key Pair
	>[!important] 
	> It has not been decided yet whether, we will be making private/public key pairs
	> or whether we would allow clients to provide us with a Public Key
	* We can either generate a new Private/Public Key Pair, use an existing key stored in azure (**Azure creates the public key as a resource in the portal**), or use a public key from an outside source
		* If making a key, store the public key resource in the storage account Resource Group
9. On the next page do container permissions
	* Specify the container you want the SFTP user to have access to 
	* Specify the permissions to All for the container
	>[!note]
	>Delete is needed because large files require it for compression during the transmission
	* Set home directory to name the `container`