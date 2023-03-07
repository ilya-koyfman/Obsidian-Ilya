---
tags: []
date: 2023-03-06
project: 
---
> [!danger]
>  FOR ALL DATA VIEWS ADD 
>  * FROM "PROJECT_PATH"

## Administrative
```dataviewjs
```
Lists all pages inside the folder Books and its sub folders 
```dataview 
table file.tasks.text, file.tasks.completed
WHERE file.tasks.completed
```

## Meetings
```dataview
Table date
where contains(note_type, "m_note")
```
## Tech Notes
```dataview
Table date
where contains(note_type, "t_note")
```

---

###### Project Documents/Links

