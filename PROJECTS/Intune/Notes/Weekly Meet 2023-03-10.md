---
tags: []
date: 2023-03-10
note_type: m_note
project:
---

> [!info]+
>Attendees: 


## Summary



## Notes
* 


## Action Items
- [ ] Write down requirements for Intune Compliance Policy for pilot #intune Talk with Frank and Javier 

TYPE: Windows 10/11
* Custom Compliance - Skipping
* Device Health
	* Require Bitlocker - True
	* Require Secure Boot - True (we don't turn off Secure Boot)
	* Require Code Integrity ?????
* Device Properties
	* Minimum OS - Skipping
	* Maximum OS - SKipping
	* Minimum OS Mobile - Skipping
	* Maximum OS Mobile - Skipping
* Configuration Manager - Skipping
* [ ] System Security - Carmine to read about this
	* Encryption - Skipping
	* Firewall - Skipping (Sentintel One?)
	* TPM - Skipping (We still have 1.2 TPM devices)
	* Antivirus - True
	* Antispyware - Skipping ???

### Requirements for Configuration
Windows 10 Machine -
* Above Lock - Skipping
* Accounts - To Review
* Admin Templates - Later
* Application Defaults
	* Default Ass configs - Maybe?
	* Enable App Uri Handlers - ENABLE
* Auditing - Review
* Authentication - Review
* Bitlocker - Skipping
* Bits - Skipping
* Bluetooth - Skipping
* Browser - Skipping for now
* Camera - Skipping
* Cellular - Skipping
* Cloud Desktop - Skipping
* Connectivity - Skipping for now
* Control Policy Conflict - REVIEW
* Converters
* Credential Providers
* Cryptography - REVIEW
* Data Protection - Skipping
* Defender - Skipping
* Delivery Optimization - Skipping
* Device Control - Skipping
* Device Guard - Skipping for now
* Device Health Monitoring - Skipping
* Device Lock -
	* Enforece Lock Screen and logon Image
* Display - Skipping
* DMA - SKipp
* EAP - Skipping for now
* Education - Skipping
* Email - TEMPLATE
* Enterprise Cloud Print - Skip
* esim - Skip
* Experience - REVIEW BIG
	* 


BITLOCKER POLICY DEFINED
Base Settings
* Enable Full Disk Encr - True
* Storage Cards - Skipping
* Hide prompt about third - party 
* Configure Rotation of keys - skiping
Fixed Drive Settings
* Not Configured
OS Drive Settings
* Configure
	* Startup Configured
		* Pin - False
		* Key - False
		* TPM - True
	* Disable Bitlocker on devices - Not Configured
	* Enable Preboot recovery message and url - TRUE
	* 


- [ ] MAKE A MEETING WITH MAX AND CARMINE - How do we want scope machine profiles in intune #intune ?
- [ ] Hybrid Join WORKING ???? 2023-03-24 ??? #intune 
	- [Enrollment for hybrid Azure AD-joined devices - Windows Autopilot | Microsoft Learn](https://learn.microsoft.com/en-us/mem/autopilot/windows-autopilot-hybrid)
[[PROJECTS/MSP/NOTES/Service Desk Talk - 3-10-2023]]