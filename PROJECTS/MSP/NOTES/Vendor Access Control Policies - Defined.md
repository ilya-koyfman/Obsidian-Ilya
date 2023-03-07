---
tags: [policies,security]
date: 2023-03-07
note_type: t_note
project: MSP
---

## Summary
* The purpose of this is to help define what the Access Control Policies for the ASPCA would be with vendors. It would define how vendors access 
	* ASPCA Network
	* ASPCA Devices
	* Applications (On-Prem or Cloud)

## Definitions
* **Trusted Sources** are how we would want vendors to access resources
	* IPSEC - Site to Site IPSEC Tunnel between Vendor and ASPCA
	* VPN - ASPCA Point to Site VPN application (PulseVPN)
	* Application - Using WebGui to access cloud applications or WebGui to access On-Prem Applications after fulfilling **IPSEC** or **VPN** 
* **Resources** are On-Prem Devices, Network Devices, Applications (On-Prem or Cloud)



## Action Items
