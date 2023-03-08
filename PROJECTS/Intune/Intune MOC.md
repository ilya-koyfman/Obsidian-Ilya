---
tags: [intune]
date: 2023-03-06
project: intune
note_type: MOC
---
> [!danger]
>  FOR ALL DATA VIEWS ADD 
>  * FROM "PROJECTS/Intune" 

## Administrative

Lists all pages inside the folder Books and its sub folders 
```dataview 
table file.tasks.text, file.tasks.completed
FROM "PROJECTS/Intune" 
WHERE file.tasks.completed
```

## Meetings
```dataview
Table date
FROM "PROJECTS/Intune"
where contains(note_type, "m_note")
```
## Tech Notes
```dataview
Table date
FROM "PROJECTS/Intune"
where contains(note_type, "t_note")
```

---

###### Project Documents/Links

