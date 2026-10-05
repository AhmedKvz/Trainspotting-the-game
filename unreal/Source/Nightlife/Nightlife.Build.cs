using UnrealBuildTool;

public class Nightlife : ModuleRules
{
    public Nightlife(ReadOnlyTargetRules Target) : base(Target)
    {
        PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;

        PublicDependencyModuleNames.AddRange(new[]
        {
            "Core",
            "CoreUObject",
            "Engine",
            "InputCore",
            "EnhancedInput",
            "GameplayAbilities",
            "GameplayTags",
            "GameplayTasks"
        });

        PrivateDependencyModuleNames.AddRange(new[]
        {
            "AIModule",
            "StateTreeModule",
            "SmartObjectsModule",
            "MassEntity",
            "MassCommon",
            "MassActors",
            "MassSpawner",
            "MassRepresentation"
        });
    }
}
