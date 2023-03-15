---
tags: []
date: 2023-03-15
note_type: m_note
project:
---

> [!info]+
>Attendees: 


## Summary
1. Zendesk tickets assigned to CISO
	1. Helpdesk Management to send tickets over to CISO (Help Desk Management)
		1. [ ] Who should keep the ticket on our side? Is it the person who assigns it to the ticket or does SA
	2. Zendesk sends over the ticket to AutoTask
	3. Ciso Global should acknowledge the ticket (human acknowledgement) - in X hours SLA TIME
	4. As the tech does the work AutoTask sends the info back to Zendesk
	5. Once the Autotask ticket is closed, it would come back to Zendesk with particular **closure code**


```mermaid
flowchart TD
Helpdesk ---> Autotask ---> Zendesk
```

## Notes
- **Can we have Zendesk make reply from AutoTask email become internal automatically?**
* Are we okay with users seeing comments from the CISO?
* Vendor Escalation 8x8 after hours would be a great first task.

## Action Items
- [ ] How does CISO Global see the internal notes on our Zendesk Side? Only public comments are avaliable
- If we give them a license they would get internal notes
- [ ] CISO what information would be necessary on the ticket?
* Exchange request
* Vendor Escalation
- [ ] What are there open hours? M-F 9-5? 9-8?