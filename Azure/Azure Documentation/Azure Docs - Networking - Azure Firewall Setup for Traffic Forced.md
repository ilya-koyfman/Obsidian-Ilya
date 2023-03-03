Network Requirements
* Hub and Spoke
* Spoke Defined by ENV
* All internet traffic goes through FW
* All Azure Traffic goes through FW as
	* VM Endpoints
	* Private Endpoints - SQL Based
	
	
DNAT -> Network -> Application
* DNAT - PORT FORWARDING
* Network - Normal Network
* Application - URL Based Filtering

* IP Groups in Azure allow for Simple ip management across predefined subnets. Best Practice


VNET Peering
* Used to connect VNETs 


Steps to recreate
1. Create Hub & Spoke
	* Subs
	* VNET
2. Create Firewall
3. Create Firewall Policy
	* Network Rules
	* IP Groups
4. Peer their VNETs
5. Define and Assign Route Tables to Subnets
6. Deploy Private DNS Resolver - Used for resolution of Azure Resources by URL to private endpoints.
	EX: syn-workspace-uat-01.sql.azuresynapse.net -> 10.250.X.X instead of PUBLIC IP
7. Private Endpoints
	* Create on resources
	* WHEN CREATING PRIVATE DNS ZONES CREATE IN HUB ZONE
8. TEST CONNECTIONS	