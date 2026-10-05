#include "Club/NLClubDirectorSubsystem.h"

void UNLClubDirectorSubsystem::SetNightPhase(ENLNightPhase NewPhase)
{
    ClubState.NightPhase = NewPhase;
}

void UNLClubDirectorSubsystem::AddCrowdEnergy(float Delta)
{
    ClubState.CrowdEnergy = FMath::Clamp(ClubState.CrowdEnergy + Delta, 0.0f, 100.0f);
}
