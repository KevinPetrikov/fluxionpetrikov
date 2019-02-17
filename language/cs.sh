#!/usr/bin/env bash
# Czech
# native: čeština

FLUXIONInterfaceQuery="Vyberte rozhraní"
FLUXIONAllocatingInterfaceNotice="Allocating reserved interface $CGrn\"\$interfaceIdentifier\"."
FLUXIONDeallocatingInterfaceNotice="Deallocating reserved interface $CGrn\"\$interfaceIdentifier\"."
FLUXIONInterfaceAllocatedNotice="${CGrn}Interface allocation succeeded!"
FLUXIONInterfaceAllocationFailedError="${CRed}Interface reservation failed!"
FLUXIONReidentifyingInterface="Renaming interface."
FLUXIONUnblockingWINotice="Unblocking all wireless interfaces..."
#FLUXIONFindingExtraWINotice="Looking for extraneous wireless interfaces..."
FLUXIONRemovingExtraWINotice="Removing extraneous wireless interfaces..."
FLUXIONFindingWINotice="Looking for available wireless interfaces..."
FLUXIONSelectedBusyWIError="The wireless interface selected appears to be currently in use!"
FLUXIONSelectedBusyWITip="This is usually caused by the network manager using the interface selected. We recommened you$CGrn gracefully stop the network manager$CClr or configure it to ignored the selected interface. Alternatively, run \"export FLUXIONWIKillProcesses=1\" before fluxion to kill it but we suggest you$CRed avoid using the killer flag${CClr}."
FLUXIONGatheringWIInfoNotice="Gathering interface information..."
FLUXIONUnknownWIDriverError="Unable to determine interface driver!"
FLUXIONUnloadingWIDriverNotice="Waiting for interface \"\$interface\" to unload..."
FLUXIONLoadingWIDriverNotice="Waiting for interface \"\$interface\" to load..."
FLUXIONFindingConflictingProcessesNotice="Looking for notorious services..."
FLUXIONKillingConflictingProcessesNotice="Killing notorious services..."
FLUXIONPhysicalWIDeviceUnknownError="${CRed}Unable to determine interface's physical device!"
FLUXIONStartingWIMonitorNotice="Starting monitor interface..."
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONTargetSearchingInterfaceQuery="Select a wireless interface for target searching."
FLUXIONTargetTrackerInterfaceQuery="Select an interface for target tracking."
FLUXIONTargetTrackerInterfaceQueryTip="${CSWht}Avoid$CClr selecting a ${CSWht}virtual interface${CClr} here."
FLUXIONIncompleteTargettingInfoNotice="Missing ESSID, BSSID, or channel information!"
FLUXIONTargettingAccessPointAboveNotice="Fluxion is targetting the access point above."
FLUXIONContinueWithTargetQuery="Continue with this target?"
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONStartingScannerNotice="Starting scanner, please wait..."
FLUXIONStartingScannerTip="Five seconds after the target AP appears, close the FLUXION Scanner (ctrl+c)."
FLUXIONPreparingScannerResultsNotice="Synthesizing scan results, please wait..."
FLUXIONScannerFailedNotice="Wireless card may not be supported (no APs found)"
FLUXIONScannerDetectedNothingNotice="No access points were detected, returning..."
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONHashFileDoesNotExistError="Hash file does not exist!"
FLUXIONHashInvalidError="${CRed}Error$CClr, invalid hash file!"
FLUXIONHashValidNotice="${CGrn}Success$CClr, hash verification completed!"
FLUXIONPathToHandshakeFileQuery="Enter path to handshake file $CClr(Example: /.../dump-01.cap)"
FLUXIONPathToHandshakeFileReturnTip="To go back, leave the hash path blank."
FLUXIONAbsolutePathInfo="Absolute path"
FLUXIONEmptyOrNonExistentHashError="${CRed}Error$CClr, path points to non-existing or empty hash file."
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONScannerChannelQuery="Vyberte kanál"
FLUXIONScannerChannelOptionAll="Všechny kanály"
FLUXIONScannerChannelOptionSpecific="Specifický kanál(y)"
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONScannerChannelSingleTip="Jeden kanál"
FLUXIONScannerChannelMiltipleTip="Více kanálů"
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONScannerHeader="Sledování WIFI"
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONHashSourceQuery="Select a method to retrieve the handshake"
FLUXIONHashSourcePathOption="Path to capture file"
FLUXIONHashSourceRescanOption="Handshake directory (rescan)"
FLUXIONFoundHashNotice="A hash for the target AP was found."
FLUXIONUseFoundHashQuery="Do you want to use this file?"
FLUXIONUseFoundHashOption="Use hash found"
FLUXIONSpecifyHashPathOption="Specify path to hash"
FLUXIONHashVerificationMethodQuery="Select a method of verification for the hash"
FLUXIONHashVerificationMethodPyritOption="pyrit verification"
FLUXIONHashVerificationMethodAircrackOption="aircrack-ng verification (${CYel}unreliable$CClr)"
FLUXIONHashVerificationMethodCowpattyOption="cowpatty verification (${CGrn}recommended$CClr)"
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONAttackQuery="Select a wireless attack for the access point"
FLUXIONAttackInProgressNotice="${CCyn}\$FluxionAttack$CClr attack in progress..."
FLUXIONSelectAnotherAttackOption="Select another attack"
FLUXIONAttackResumeQuery="This attack has already been configured."
FLUXIONAttackRestoreOption="Restore attack"
FLUXIONAttackResetOption="Reset attack"
FLUXIONAttackRestartOption="Restart"
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONGeneralSkipOption="${CYel}Skip"
FLUXIONGeneralBackOption="${CRed}Zpět"
FLUXIONGeneralExitOption="${CRed}Exit"
FLUXIONGeneralRepeatOption="${CRed}Repeat"
FLUXIONGeneralNotFoundError="Nenalezeno"
FLUXIONGeneralXTermFailureError="${CRed}Failed to start xterm session (possible misconfiguration)."
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONCleanupAndClosingNotice="Čištění a zavírání"
FLUXIONKillingProcessNotice="Killing ${CGry}\$targetID$CClr"
FLUXIONRestoringPackageManagerNotice="Restoring ${CCyn}\$PackageManagerCLT$CClr"
FLUXIONDisablingMonitorNotice="Vypínání monitorovacího rozhraní"
FLUXIONDisablingExtraInterfacesNotice="Vypínání rozhraní"
FLUXIONDisablingPacketForwardingNotice="Vypínání ${CGry}směrování packetů"
FLUXIONDisablingCleaningIPTablesNotice="Čištění ${CGry}iptables"
FLUXIONRestoringTputNotice="Obnovování ${CGry}tput"
FLUXIONDeletingFilesNotice="Deleting ${CGry}files"
FLUXIONRestartingNetworkManagerNotice="Restartování ${CGry}Network-Manager"
FLUXIONCleanupSuccessNotice="Vyčištění proběhlo úspěšně!"
FLUXIONThanksSupportersNotice="Děkujeme pro používání programu fluxion"
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# FLUXSCRIPT END
