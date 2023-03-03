## Scratch

```dirtree
- Level 1
	- Level 2

```

```dirtree
- a
  - b
  - c
- d

- 1
  - 2
    - 3
      - 4
```

Head


### Note to Priyanka

Hi Priyanka,


Since we need to manage and apply permissions at a Multi platform level, the best way would be to define User Profiles assign users to them. 
###### The goal is to use groups for `nested` permissions when possible

The chart below explains how 
* Profile Name
* Purpose of the group
* Grants What - Explains what permissions the user would gain
* Affected Resources - How and where permissions were implemented


| GroupName                               | Purpose of Group                          | Grants What                                                                                                                                                                                                                        | Affected Resources                                                                                                                                                                                                                                                              |
|-----------------------------------------|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Membership Sparky Administrators Group  | Profile group for Sparky Administrators   | All Admins rights to Synapse<br/>All Admin rights to SQL DBs<br/>All Admin rights to Azure Resources<br/>Owner rights to Github Organization<br/>All Admin rights to Power Bi Workspace                                            | -Azure Synapse Administrator - role granted<br/>-Azure -DEV/UAT Subscription Owner - role granted<br/>-DB - Nest into `Azure-SQL-Owner` Group<br/>-Github Organization - Make user owner/admin of organization<br/>-Power Bi Workspace - Nest into `Azure-PowerBi-Admins` group |
| Membership Sparky Power Data User Group | Profile group for Sparky Power Data Users | Synapse Grants access to read all workspace, but also write/delete Artificats.<br/>SQL datawriter and datareader role<br/>Azure Custom RBAC Role - Reader, Storage Operator, Synapse Reader<br/>Team Member in Github Organization | -Azure Synapse Contributor - role granted<br/>-Azure - Custom RBAC Role applied to DEV/UAT Subscription - Role Granted<br/>-DB - Nest into `Azure-SQL-Reader` and `Azure-SQL-Writer` groups<br/>-Add users as Team Members into Github Organization                             |
| Membership Sparky Data User Group       | Profile group for Sparky Data Users       | Synapse Grants access to read all workspace, except for certain actions.<br/>SQL datareader role<br/>Azure Custom RBAC Role - Reader, Synapse Reader                                                                               | -Azure Synapse Artificat User - role granted<br/>-Azure - Custom RBAC Role applied to DEV/UAT Subscription - Role Granted<br/>-DB - Nest into `Azure-SQL-Reader` group                                                                                                       |
| Membership Sparky Power Bi User Group   | Profile group for Sparky Power Bi Users   | Grant most Power Bi Actions except Worskpace actions or affect permissions                                                                                                                                                         | -Power Bi - Nest into `Azure-PowerBi-Contributors`                                                                                                                                                                                                                              |
| Membership Sparky Bi User Group         | Profile group for Sparky Bi Users         | Grant Power Bi viewer rights to the workspace                                                                                                                                                                                      | Power Bi - Nest into `Azure-PowerBi-Viewers`                                                                                                                                                                                                                                   |


#### Notes
* Synapse is limited in how permissions are assigned. Most permissions are done on actions that a user can perform, but groups and users can't target those permissions to specific artifacts or pipelines
	* I took my best guess on the Power Data User and Data User profiles. They received slightly higher roles, need to see if needs reduction. 
* The custom Azure role is needed to ensure users get Azure RBAC role for Synapse Reader
* Github Owners are not done through groups/teams
* PowerBi needs one more revisit*


If you agree to my approach, I am just laying out my next steps to get this ready for SIT testing.

1. Create User Profiles and perform actions to match agreed upon Grants
2. Remove SIT Users from the admin group (*Azure-Subscription-Membership*)
	*     **Priyanka**, Leslie, Christine I., Ramzi, Jason, Lucia, etc...
3. Add them to the specific Profiles
4. Have them do SIT Testing, and we tweak these Profiles
5. Remove unused groups 

Please confirm that is how you want to proceed

# Thoughts/Questions
1. For go live Slalom and outside vendors should be put into a specific User Profile like these.
		* Would love to remove *Azure-Subscription-Membership* since it has too many rights too
2. Maybe we should define salesforce rights as well here?