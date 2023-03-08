
```mermaid
flowchart TD

Membership_Administrator([Membership_Administrator])
Membership_Administrator --- AAD_Groups
Membership_Administrator --- Github_Team 
Github_Team --- github_group(["MemberhsipTeam: Owner"]):::groupColor

AAD_Groups --- admin_group(["Membership Azure Owner Group"]):::groupColor 
AAD_Groups --- admin_group_bi(["Membership PowerBi Admin Group"]):::groupColor
classDef groupColor fill:#8A2BE2
```
