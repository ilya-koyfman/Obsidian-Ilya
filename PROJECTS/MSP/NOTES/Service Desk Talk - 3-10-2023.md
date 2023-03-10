---
tags: []
date: 2023-03-10
note_type: m_note
project:
---

> [!info]+
>Attendees: 


## Summary
```mermaid
flowchart TD 
ServiceTicket ---> ASPCA_HelpDesk
ASPCA_HelpDesk ---> SA
ASPCA_HelpDesk ---> CISO_GLOBAL ---> AUTOTASK
AUTOTASK ---> L1 ---> L2 --> L3
L1 ---> |Solved| SendBack_ToZenDesk
L1 ---> |Not Solved| L2
L2 ---> |Solved| SendBack_ToZenDesk
L2 ---> |Not Solved| L3
L3 ---> |Solved| SendBack_ToZenDesk
L3 ---> |Not Solved| ESCALTE
SendBack_ToZenDesk ---> CLOSE_TICKET
```


## Notes

Types of Tickets to CISO


### ASPCA Tickets
1. Legal E-Discovery (Content Search across Apps)
2. SPAM
3. Domain Management (DNS/Registrar/SSL)
4. Okta Application Administrator
5. Project Work ---> CISO if needed

### CISO Tickets
1. Distribution List
2. Vendors Escalation
	1. ISP
	2. Microsoft
	3. Fortinet Support
	4. Meraki Support
3. SA Queue Tickets - General Tickets
4. Server Certificate Renewal
5. Okta Provisioning??
6. Server Monitoring & Remediation
7. Patching 
	1. Off Hours Patching
8. Networking Monitoring
9. Backups




## Action Items
