## JUST NOTES BELOW - DECISION LINK [UserGroupAssignments.xlsx | Powered by Box](https://aspca.app.box.com/file/1147363726170)

| GroupName                               | Purpose of Group                          | Grants What                                                                                                                                                                                                                        | Affected Resources                                                                                                                                                                                                                                                              |
|-----------------------------------------|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Membership Sparky Administrators Group  | Profile group for Sparky Administrators   | All Admins rights to Synapse<br/>All Admin rights to SQL DBs<br/>All Admin rights to Azure Resources<br/>Owner rights to Github Organization<br/>All Admin rights to Power Bi Workspace                                            | -Azure Synapse Administrator - role granted<br/>-Azure -DEV/UAT Subscription Owner - role granted<br/>-DB - Nest into `Azure-SQL-Owner` Group<br/>-Github Organization - Make user owner/admin of organization<br/>-Power Bi Workspace - Nest into `Azure-PowerBi-Admins` group |
| Membership Sparky Power Data User Group | Profile group for Sparky Power Data Users | Synapse Grants access to read all workspace, but also write/delete Artificats.<br/>SQL datawriter and datareader role<br/>Azure Custom RBAC Role - Reader, Storage Operator, Synapse Reader<br/>Team Member in Github Organization | -Azure Synapse Contributor - role granted<br/>-Azure - Custom RBAC Role applied to DEV/UAT Subscription - Role Granted<br/>-DB - Nest into `Azure-SQL-Reader` and `Azure-SQL-Writer` groups<br/>-Add users as Team Members into Github Organization                             |
| Membership Sparky Data User Group       | Profile group for Sparky Data Users       | Synapse Grants access to read all workspace, except for certain actions.<br/>SQL datareader role<br/>Azure Custom RBAC Role - Reader, Synapse Reader                                                                               | -Azure Synapse Artificat User - role granted<br/>-Azure - Custom RBAC Role applied to DEV/UAT Subscription - Role Granted<br/>-DB - Nest into `Azure-SQL-Reader` group                                                                                                       |
| Membership Sparky Power Bi User Group   | Profile group for Sparky Power Bi Users   | Grant most Power Bi Actions except Worskpace actions or affect permissions                                                                                                                                                         | -Power Bi - Nest into `Azure-PowerBi-Contributors`                                                                                                                                                                                                                              |
| Membership Sparky Bi User Group         | Profile group for Sparky Bi Users         | Grant Power Bi viewer rights to the workspace                                                                                                                                                                                      | Power Bi - Nest into `Azure-PowerBi-Viewers`                                                                                                                                                                                                                                   |

---

## #ARCHIVE

### Membership Profile Permission Mapping

#### Azure Profiles

##### Description

Due to the nature of project Sparky, permissions need to be defined and tracked below.

##### User Profiles

**User Profiles** are used to define what a profile should have access to. Their associated permissions are what is needed to fulfil the objective for each system.

___

###### **Membership Administrator**

Grants admin access to all Environments

| Environment | Associated Permission  | Grants What                         |          AAD Group           |
| ----------- |:----------------------:| ----------------------------------- |:----------------------------:|
| Synapse     | Synapse Administrator  | All Admins rights to Synapse        |             N/A              |
| SQL         |       dbo_owner        | All admin rights to SQL DBs         |          SQL-Owner           |
| Azure       |         Owner          | All admin rights to Azure Resources | Membership Azure Owner Group |
| Github      |   Organization Owner   | All admin rights to Azure Resources |             N/A              |
| Power Bi    | Power Bi Administrator | All admin rights to Azure Resources |             N/A              |

___

###### **Membership Power Data User**

User profile, where users

* SQL - Read, Write
* Synapse - Edit Pipelines Run Pipelines, Update Scripts, Update Notebooks
* Azure - Reader access to all of Membership Azure Environment, but Contributor rights to Storage Accounts, and Synaspe Reader right
* Github - Create branch, update branch

| Environment |                Associated Permission                | Grants What                                                                                                             | AAD Group and/or URL to assigned Resources |
| ----------- |:---------------------------------------------------:| ----------------------------------------------------------------------------------------------------------------------- |:--------------------------------------:|
| Synapse     | Synapse Artifact Publisher or `Synapse Contributor` | Grants access to read all workspace, but also write/delete on those items. `Contributor would also allow for debugging` |                                        |
| SQL         |                   dbo_datareader                    | Read Access to SQL DBs                                                                                                  |                SQL-READ                |
| SQL         |                   dbo_datawriter                    | Write Access to SQL DBs                                                                                                 |               SQL-WRITE                |
| Azure       | Custom Role - Reader, Storage User, Synapse Reader  | A custom role that will be granted onto the subscriptions that membership needs access to                                                                                                                        |      Membership Power Data Group       |
| Github      |                     Team Member                     |                                                                                                                         |                                        |
| Power Bi    |                                                     |                                                                                                                         |                                        |

- [ ] #TODO Power Data User

___

###### **Membership Data User**

User profile, where users

* SQL - Read
* Synapse - ???
* Azure - Reader access to all of Membership Azure Environment
* Github - ???

| Environment |             Associated Permission             |                                                          Grants What                                                           |      AAD Group       |
| ----------- |:---------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------:|:--------------------:|
| Synapse     | Synapse Artifact User or `Monitoring Operator` | Grants the user to read the workspace, artifacts, view outputs of pipelines actions, `Runtime actions`, and `Spark Pool Actions` |                      |
| SQL         |                dbo_datareader                 |                                                     Read Access to SQL DBs                                                     |       SQL-READ       |
| Azure       |                    Reader                     |                                                                                                                                | Membership Data User |
| Github      |                      ??                       |                                                                                                                                |                      |
| Power Bi    |                                               |                                                                                                                                |                      |

- [ ] #TODO Data User
___

###### **Membership Power Bi User**

User profile, where users

* Power Bi - This role can access and interact with reports and dashboards. Additionally, this role can create, edit, copy, and delete items in a workspace, publish reports, schedule refreshes, and modify gateways.

| Environment | Associated Permission |                            Grants What                             |               AAD Group               |
| ----------- | --------------------- |:------------------------------------------------------------------:|:-------------------------------------:|
| Synapse     |                       |                                                                    |                                       |
| SQL         |                       |                                                                    |                                       |
| Azure       |                       |                                                                    |                                       |
| Github      |                       |                                                                    |                                       |
| Power Bi    | Contributor           | Most Power Bi Actions other then workspace actions and permissions | Membership PowerBi Contributors Group |

- [ ] #TODO Power Bi User User

___

###### **Membership Bi User**

User profile, where users

* Power Bi - This role provides read only access to workspace items

| Environment | Associated Permission | Grants What                         | AAD Group                       |
| ----------- | --------------------- | ----------------------------------- | ------------------------------- |
| Synapse     |                       |                                     |                                 |
| SQL         |                       |                                     |                                 |
| Azure       |                       |                                     |                                 |
| Github      |                       |                                     |                                 |
| Power Bi    | Viewer                | View access to reports and datasets | Membership PowerBi Viewer Group |

- [ ] #TODO Bi User
