docs/oncall/roster.md

# On-Call Assignments & Escalation Paths

**Last Updated:** YYYY-MM-DD  
**Owner:** Ops Lead  

---

## Weekly Rotation
- **Primary On-Call:** Engineer A (YYYY-MM-DD → YYYY-MM-DD)
- **Secondary On-Call:** Engineer B
- **Escalation Manager:** Engineer C  

Roster is synchronized with Google Calendar and PagerDuty. Updates must be committed weekly.

---

## Escalation Policy
- **Tier 1:** Primary on-call — must acknowledge within 15 minutes of alert.
- **Tier 2:** Secondary on-call — engaged if Tier 1 has not acknowledged in 15 minutes.
- **Tier 3:** Escalation Manager — assumes **Incident Commander** role, coordinates response, and ensures stakeholder comms.

---

## Communication Channels
- **Alerts:** PagerDuty notifications + Slack `#infra-alerts` channel
- **War Room:** Slack `#incident-war-room` channel (created on incident open)
- **Escalation Calls:** Zoom bridge → [insert permanent meeting link]

---

## Responsibilities
- **Primary On-Call**
  - Respond to alerts immediately.
  - Lead initial triage using playbooks.
  - Document actions in incident ticket.

- **Secondary On-Call**
  - Support primary in troubleshooting.
  - Step in if primary is unavailable.

- **Escalation Manager**
  - Acts as Incident Commander.
  - Handles external communication (leadership, customer comms if needed).
  - Coordinates post-incident review.

---

## Review Cycle
- Roster updated every **Friday by 12:00 UTC**.
- Escalation tree reviewed **quarterly**.
- On-call engineers must confirm availability before shift start.
