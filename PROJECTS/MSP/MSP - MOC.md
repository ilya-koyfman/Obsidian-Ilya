---
tags: [MSP]
date: 2023-03-06
project: MSP
---

## Administrative
```dataviewjs
```

## Project Documents/Links

## Tasks
Lists all pages inside the folder Books and its sub folders 
```dataview 
table file.tasks.text, file.tasks.completed
FROM "PROJECTS/MSP" 
WHERE file.tasks.completed
```

## Meetings
```dataview
Table date, note_type, tags
FROM "PROJECTS/MSP" 
where file.note_type = m_note)
```
