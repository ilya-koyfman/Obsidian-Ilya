[[PROJECTS/MSP/NOTES/Zen Desk Automation 3-16-2023]]---
tags: [policies, security]
date: 2023-03-07
note_type: t_note
project: MSP
---

## Vendor Access Control Policies - Detailed

#### Summary
The purpose of this is to help define what the Access Control Policies for the ASPCA would be with vendors. It would define how vendors access

* ASPCA Network/Network Devices
* ASPCA Devices
* Applications (On-Prem or Cloud)

#### Definitions
* **Trusted Sources** are how we would want vendors to access resources
	* IPSEC - Site to Site IPSEC Tunnel between Vendor and ASPCA
	* VPN - ASPCA Point to Site VPN application (PulseVPN)
	* Application Portals - Using WebGui to access cloud applications or WebGui to access On-Prem Applications after fulfilling **IPSEC** or **VPN**
* **Resources** are On-Prem Devices, Network Devices, Applications (On-Prem or Cloud)
* **Vendors** are anyone that is contracted to work with the ASPCA on specific projects or initiatives

#### Design
This document will help keep track of how vendors are accessing and interacting with ASPCA resources.

>[!example]
>Vendors will access the ASPCA in a number of ways
>* Trusted Sources Examples use case
>	* IPSEC - A tunnel would be established if agreed upon
>	* VPN - Vendor Employees would have access by connecting to our VPN appliance from their work computers
>	* Application - Vendor Employees would access a WebGui that would have certain rights for them to perform actions.

#### Access Device Details

##### Aspca Network/Network Devices
Vendors will be able to access the network through all trusted sources

###### Preferred Method
Depending on the use case and work case, the below order of preferred methods is how the item should be accessed

1. IPSEC
2. VPN
3. Application Portal

##### ASPCA Workstations
Vendors will be able to access workstations on the network through all trusted sources except Pulse VPN would not be accessible for Desktops.

###### Preferred Method
Depending on the use case and work case, the below order of preferred methods is how the item should be accessed

1. Application Portal (Datto)
2. IPSEC
3. VPN (Servers)

##### ASPCA Applications
Vendors will be able to access the ASPCA Applications either through the cloud or On-Prem applications through IPSEC or VPN

###### Preferred Method
Depending on the use case and work case, the below order of preferred methods is how the item should be accessed

1. Application Portals (ADManager, Okta, Airtable, etc)
2. IPSEC
3. VPN (Servers)

---

# Action Items
- [x] Have Javier and Vinny Review on Wednesday #MSP 📅 2023-03-08 ✅ 2023-03-09
- [x] Create Example of CISO Global 📅 2023-03-08 [[PROJECTS/MSP/NOTES/Ciso Global Permissions]] #MSP ✅ 2023-03-15
- [x] Create specific storage for Vendor Permissions #MSP ✅ 2023-04-05
