---
tags: [MSP]
date: 2023-03-06
project: MSP
---

# Administrative

Lists all pages inside the folder Books and its sub folders

```dataview 
TABLE WITHOUT ID
	Tasks.text As TaskName,
	Tasks.due AS "Due Date", 
	Tasks.priority AS "Priority",
	Tasks.link as "Link"
FROM "PROJECTS/MSP" 
WHERE !Tasks.completed
SORT "Due Date" DESC
FLATTEN file.tasks AS Tasks
```

___


### Meetings

```dataview
Table date
FROM "PROJECTS/MSP" 
where contains(note_type, "m_note")
```

### Tech Notes

```dataview
Table date
FROM "PROJECTS/MSP" 
where contains(note_type, "t_note")
```

---

#### Project Documents/Links
