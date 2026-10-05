#pragma once

#include "CoreMinimal.h"
#include "Subsystems/WorldSubsystem.h"
#include "NLClubDirectorSubsystem.generated.h"

UENUM(BlueprintType)
enum class ENLNightPhase : uint8
{
    Arrival,
    Build,
    Peak,
    Chaos,
    Closing,
    After
};

USTRUCT(BlueprintType)
struct FNLClubState
{
    GENERATED_BODY()

    UPROPERTY(EditAnywhere, BlueprintReadWrite)
    ENLNightPhase NightPhase = ENLNightPhase::Arrival;

    UPROPERTY(EditAnywhere, BlueprintReadWrite, meta=(ClampMin="0", ClampMax="100"))
    float CrowdEnergy = 20.0f;

    UPROPERTY(EditAnywhere, BlueprintReadWrite, meta=(ClampMin="0", ClampMax="100"))
    float CrowdDensity = 15.0f;

    UPROPERTY(EditAnywhere, BlueprintReadWrite, meta=(ClampMin="0", ClampMax="100"))
    float SecurityAlert = 0.0f;

    UPROPERTY(EditAnywhere, BlueprintReadWrite, meta=(ClampMin="0", ClampMax="100"))
    float VIPPresence = 0.0f;

    UPROPERTY(EditAnywhere, BlueprintReadWrite, meta=(ClampMin="0", ClampMax="100"))
    float MusicEnergy = 20.0f;

    UPROPERTY(EditAnywhere, BlueprintReadWrite, meta=(ClampMin="0", ClampMax="100"))
    float StaffStress = 0.0f;
};

UCLASS()
class NIGHTLIFE_API UNLClubDirectorSubsystem : public UWorldSubsystem
{
    GENERATED_BODY()

public:
    UFUNCTION(BlueprintPure, Category="Nightlife|Club")
    const FNLClubState& GetClubState() const { return ClubState; }

    UFUNCTION(BlueprintCallable, Category="Nightlife|Club")
    void SetNightPhase(ENLNightPhase NewPhase);

    UFUNCTION(BlueprintCallable, Category="Nightlife|Club")
    void AddCrowdEnergy(float Delta);

private:
    UPROPERTY()
    FNLClubState ClubState;
};
