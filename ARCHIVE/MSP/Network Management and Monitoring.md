## Monitoring

### Current State vs Future State

- Monitoring 
	- Ipmonitor - UP Down monitoring of address
		- Device Monitored 
			- Internal Firewall
			- Switches
			- Wireless Access Points
			- Select Servers
			- Select Hardware Panels
			- ISP gateways (External IP)
	- LogicMonitor (S1) - Monitors equipment 11:11 was tasked with Support
		- Device Monitored
			- Firewall (External)
			- 2-3 Switches
			- ISP gateways
	- Meraki Portal - Monitoring our Meraki APs and Switches
		- Device Monitored
			- Meraki APs
			- Meraki Switches
		- Note
			- Monitoring more then just IP monitoring.
	- Fortianalyzer - Monitoring Metrics and Logs from Fortigate Firewall
		- Device Monitored
			- Fortigate Firewall.


### Future State
* Devices to be Monitored
	* Internal Firewall
		* EX: CPU USAGE, MEMORY USAGE, 
	* External Firewall
		* EX: Bandwidth Utilization on WAN
	* Switches
	* ISP gateways
	* Wireless Access Points
	* Servers
	* Hardware Panels
	* Climate Sensors
	* UPSs
	* External Devices
		* 8x8 Monitoring

* Technologies Used
	* Ping
	* SNMP Monitoring
	* HTTP
	* API

### Definition
For our future state, we would like to have a interactive networking monitoring platform that can record or capture metrics regarding devices we want monitored. That platform would be able to report on those metrics and/or act on them.
* Scalable
* Adaptable
* **Manageable **

### Assumptions and TODO

## Management

> [!todo] 
> Management platform or platforms need to be defined 