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
1. E-Discovery (Content Search)
2. 

### CISO Tickets
1. Distribution List
2. Vendors Escalation
3. SA Queue Tickets - General Tickets



## Action Items
