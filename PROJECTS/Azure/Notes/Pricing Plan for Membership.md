---
tags: [azure]
date: 2023-03-08
note_type: t_note
project: azure
---
## Description

Azure pricing is usually **Pay-As-You-Go**, but resources within Azure can also be reserved or prepaid to give discounts. The document below will outline the resources ASPCA will look at.

## Azure Resources Breakdown

### Synapse

Synapse is broken down into two pieces. 
* **Synapse Workspace items** would refer to pipeline runs, data transformations, and other actions that might refer to the ETL 
* **Synapse SQL** refers to the Dedicated or built-in SQL server needed for Synapse operations. In the ASPCA we are using dedicated SQL

#### Reservations
* **Synapse Workspace items** - #TODO 
* **Synapse SQL**
	* *Dedicated* SQL pools in Synapse run on units of 100cDWU, which means running a pool at DW2000c, mean we need 20 units to run it for the hour. [Microsoft Link](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/reservation-discount-azure-sql-dw)
	* **Built-In SQL** uses and others would use [Synapse Commit Units](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/synapse-analytics-pre-purchase-plan)
	* 

### Virtual Machines

Virtual machine pricing is based upon the size of the machine. Sizes are predefined by Microsoft for CPU and Memory sizing.
EX
![[IMAGES/Pasted image 20230308144852.png]]

#### Reservations
* Virtual Machine Pricing is reserving the size of the machine for predefined amount of time. However, the cost only covers the computer meter, the windows meter (windows license) is not part of the price.
	- [Microsoft Link](https://learn.microsoft.com/en-us/azure/virtual-machines/prepay-reserved-vm-instances)


### Databases

#TODO 


