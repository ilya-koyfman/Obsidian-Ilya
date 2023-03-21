---
tags: []
date: 2023-03-21
note_type: t_note
project:
---

## Summary
* [Targeted deployments of hybrid Azure AD join - Microsoft Entra | Microsoft Learn](https://learn.microsoft.com/en-us/azure/active-directory/devices/hybrid-azuread-join-control)


## STEPS
* Clear the Service Connection Point(SCP) entry from Active Directory(AD) if it exists
* 1.  Configure client-side registry setting for SCP on your domain-joined computers using a Group Policy Object (GPO).
2.  If you're using Active Directory Federation Services (AD FS), you must also configure the client-side registry setting for SCP on your AD FS server using a GPO.
3.  You may also need to [customize synchronization options](https://learn.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-post-installation#additional-tasks-available-in-azure-ad-connect) in Azure AD Connect to enable device synchronization.


## Action Items
