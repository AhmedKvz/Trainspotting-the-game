# NIGHTLIFE Unreal Prototype

This directory is the new Unreal-based direction for the social nightlife sandbox. The existing browser prototypes in the repository are intentionally left untouched.

## First implementation order
1. Create/open the Unreal project.
2. Add PlayerCharacter + Enhanced Input.
3. Implement interaction trace/interface.
4. Greybox Club01 using docs/nightlife/LEVEL01_BLOCKOUT.md.
5. Wire ClubDirectorSubsystem to a debug HUD.
6. Add one interactive NPC.
7. Add first StateTree.
8. Add first Smart Object.
9. Add crowd prototype.
10. Add Dancer vertical-slice loop.

## Architecture principle
C++ owns durable systems. Blueprints compose gameplay. Data Assets define content.
