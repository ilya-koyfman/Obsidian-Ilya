# Home

## March Note line up

### Important Tasks from Notes Folder

```tasks
scheduled after 2023-02-28
status.type is not DONE
status.name does not include Cancelled
tags do not include #MSP
tags do not include #azure 
path includes notes
heading includes Important Tasks
```
### Other Tasks from Notes Folder

```tasks
scheduled after 2023-02-28
status.type is not DONE
status.name does not include Cancelled
tags do not include #MSP 
tags do not include #backburner  
path includes notes
heading does not include Important Tasks
```


___

## Azure & MSP
### Tasks Azure Everywhere

```tasks
tags include #azure
sort by heading
status.type is not DONE
```
[[PROJECTS/MSP/NOTES/Network Talk - 3-1-2023]]

### Tasks MSP
> [!info]
> [[PROJECTS/MSP/MSP - Plan at the moment]] Note where lots of tasks get added
```tasks
tags include #MSP 
status.type is not DONE
```


---
## Backburner stuff
```tasks
tag include backburner
```


---
## Completed Tasks this month
```dataview 
TABLE WITHOUT ID
	Tasks.text As TaskName,
	Tasks.due AS "Due Date", 
	Tas
	Tasks.link as "Link"
FROM "PROJECTS" 
WHERE !Tasks.completed
SORT "Due Date" DESC
FLATTEN file.tasks AS Tasks