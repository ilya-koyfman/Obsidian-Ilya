Microsoft has explained that current spark pool version is going EOL and we should migrate our spark pools to 3.3. Doing the upgrade should not be difficult, but as a precaution we need to check what the actual upgrade will have on our pipelines

# Proposed steps for Spark Pool Remediation



1. Document the spark pool at UAT2
2. Create a new Spark pool with the correct version on uat2 
3. Verify Synapse workspace can access the new pool
4. Samvel to find pipelines that can be used for testing in UAT2
	* Recommend a mix of complex and non-complex pipelines for testing
5. If no issues are encountered, plan to have UAT2 only using the new spark pool for switchover