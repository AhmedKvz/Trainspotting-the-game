# NIGHTLIFE — Unreal Technical Architecture

## Stack
- Unreal Engine 5.x
- C++ for architecture, performance-critical systems and stable APIs
- Blueprints for composition and content iteration
- Data Assets for content
- Gameplay Ability System for role actions
- Gameplay Tags for cross-system state
- StateTree for interactive NPC logic
- Mass Entity / Mass Gameplay for crowd simulation
- Smart Objects for environmental interaction
- Quartz / MetaSounds for beat-aware music gameplay

## Runtime architecture

```
GameInstance
├── Save / Meta Progression
└── Club Level
    ├── ClubDirectorSubsystem
    ├── EventDirectorSubsystem
    ├── SocialGraphSubsystem
    ├── MusicSubsystem
    ├── EconomySubsystem
    └── Crowd / AI
```

## Player
```
ANLPlayerCharacter
├── UInteractionComponent
├── URoleComponent
├── UInventoryComponent
├── URelationshipComponent
├── UReputationComponent
├── UPhoneComponent
├── UContextActionComponent
└── UAbilitySystemComponent
```

## Source layout
```
Source/Nightlife/
├── Core/
├── Character/
├── Interaction/
├── Ability/
├── Roles/
│   ├── DJ/
│   ├── Dancer/
│   ├── Promoter/
│   └── Bartender/
├── Club/
├── AI/
├── Events/
├── Social/
├── Music/
├── Economy/
├── Phone/
└── Save/
```

## Gameplay tags
```
Role.DJ
Role.Dancer
Role.Promoter
Role.Bartender

Location.Bar
Location.VIP
Location.DanceFloor
Location.Backstage

State.Dancing
State.Talking
State.Busy
State.SecurityAlert

Access.General
Access.Staff
Access.VIP
Access.Backstage
```

## First core classes
- ANLPlayerCharacter
- ANLGameMode
- UNLClubDirectorSubsystem
- UNLEventDirectorSubsystem
- UNLInteractionComponent
- UNLRoleComponent
- UNLReputationComponent
- UNLRelationshipComponent
- UNLMusicSubsystem
- UNLSocialGraphSubsystem

## Rule
Avoid Blueprint spaghetti. Stable system contracts live in C++; designers extend them with Blueprint/Data Assets.
