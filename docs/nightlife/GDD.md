# NIGHTLIFE — Game Design Document v0.1

## Product vision
Third-person social nightlife sandbox. The player enters a living club ecosystem and can move between roles such as dancer, promoter, DJ, bartender, staff/VIP insider, and underground social-risk roles.

**North Star:** One club. A thousand stories.

## Design pillars
1. **The club is alive** — NPCs arrive, leave, drink, dance, socialize, argue, use services, react to music, and pursue their own goals.
2. **Fast social gameplay** — meaningful decisions/interactions should happen roughly every 30–90 seconds.
3. **People are progression** — contacts, trust, access and reputation matter more than conventional XP.
4. **Every night is different** — the same club produces different stories through dynamic state, NPCs, music, guests and events.
5. **Roles change navigation** — staff, VIP and public access create different routes through the same level.

## Core loop
ARRIVE → OBSERVE → SOCIALIZE → DISCOVER OPPORTUNITY → ACT → WORLD REACTS → GAIN/LOSE → NEW ACCESS/CONTACT/ROLE → NEXT SITUATION

## Night phases
- Arrival
- Build
- Peak
- Chaos
- Closing
- After

The phase changes crowd density, music energy, security alert, VIP presence, staff stress and available events.

## Player stats
Visible:
- Money
- Energy
- Scene Reputation
- Social Reputation
- Music Reputation
- Staff Reputation

Hidden/contextual:
- Heat
- Trust
- Respect
- Attraction

## MVP roles
### Dancer
Rhythm, positioning, variation, flow and crowd attention.

### DJ
Track selection, timing, transitions, energy and crowd reading.

### Promoter
Guest-list management, social recruitment, access problems and VIP objectives.

### Supporting roles
Bartender, security/staff and underground social-risk gameplay.

## World simulation
The global night is managed by a Club Director. Dynamic opportunities are selected by an Event Director based on context rather than a simple timer.

## NPC tiers
- Tier C: ambient Mass crowd
- Tier B: interactive NPCs
- Tier A: persistent named characters with relationships and goals

## First vertical slice
One underground club. A 30-minute playable night from queue to afterparty invitation.

Suggested onboarding:
1. Arrive at queue
2. Pass security
3. Meet a contact
4. Enter dance floor
5. Gain first social signal
6. Meet promoter
7. Complete a small favor
8. Unlock VIP
9. Meet DJ
10. Resolve DJ problem
11. Perform short DJ interaction
12. Unlock backstage / afterparty opportunity

## MVP exclusions
No open-world city, cars, full multiplayer, giant campaign, multiple clubs or huge character creator before the first vertical slice proves the core loop.
