---
tags: []
date: 2023-03-21
note_type: t_note
project:
---

## Summary
* [Targeted deployments of hybrid Azure AD join - Microsoft Entra | Microsoft Learn](https://learn.microsoft.com/en-us/azure/active-directory/devices/hybrid-azuread-join-control)


## STEPS
To do a targeted deployment of hybrid Azure AD join on Windows current devices, you need to:

1. Clear the Service Connection Point (SCP) entry from Active Directory (AD) if it exists.
2. Configure client-side registry setting for SCP on your domain-joined computers using a Group Policy Object (GPO).
3. Set to Test OU and put test machines in OU
4. AD Connect to Enable device synchronization in Azure AD Connect.
5. Verify machines are in the correct state `Hybrid Joined`
6. 


## Action Items
