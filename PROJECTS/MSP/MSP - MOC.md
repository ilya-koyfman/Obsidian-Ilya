---
tags: [MSP]
date: 2023-03-06
project: MSP
---

## Administrative
```dataviewjs
```
Lists all pages inside the folder Books and its sub folders 
```dataview 
table file.tasks.text, file.tasks.completed
FROM "PROJECTS/MSP" 
WHERE file.tasks.completed
```

## Meetings
```dataview
Table date
FROM "PROJECTS/MSP" 
where contains(note_type, "m_note")
```
## Tech Notes
```dataview
Table date
FROM "PROJECTS/MSP" 
where contains(note_type, "t_note")
```

---

###### Project Documents/Links