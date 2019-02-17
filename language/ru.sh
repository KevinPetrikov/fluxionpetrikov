#!/usr/bin/env bash
# Russian
# native: Русский

FLUXIONInterfaceQuery="Выберите беспроводной интерфейс"
FLUXIONAllocatingInterfaceNotice="Выделение зарезервированного интерфейса $CGrn\"\$interfaceIdentifier\"."
FLUXIONDeallocatingInterfaceNotice="Перераспределение зарезервированного интерфейса $CGrn\"\$interfaceIdentifier\"."
FLUXIONInterfaceAllocatedNotice="${CGrn}Успешное распределение интерфейса!"
FLUXIONInterfaceAllocationFailedError="${CRed}Не удалось выполнить резервирование интерфейса!"
FLUXIONReidentifyingInterface="Переименование интерфейса."
FLUXIONUnblockingWINotice="Разблокирование всех беспроводных интерфейсов."
#FLUXIONFindingExtraWINotice="Поиск посторонних беспроводных интерфейсов..."
FLUXIONRemovingExtraWINotice="Удаление посторонних беспроводных интерфейсов..."
FLUXIONFindingWINotice="Поиск доступных беспроводных интерфейсов..."
FLUXIONSelectedBusyWIError="Выбранный беспроводной интерфейс, по-видимому, используется в настоящее время!"
FLUXIONSelectedBusyWITip="Обычно это вызвано сетевым менеджером (network manager), использующим выбранный интерфейс. Рекомендуется$CGrn правильно остановить сетевой менеджер $CClr или настроить его на игнорирование выбранного интерфейса. В качестве альтернативы выполняйте \"export FLUXIONWIKillProcesses=1\" перед запуском fluxion, чтобы выгрузить сетевой менеджер, но рекомендуется$CRed избегать использование этого флага${CClr}."
FLUXIONGatheringWIInfoNotice="Сбор информации об интерфейсе..."
FLUXIONUnknownWIDriverError="Не удалось определить драйвер интерфейса!"
FLUXIONUnloadingWIDriverNotice="Ожидание выгрузки интерфейса \"\$interface\"..."
FLUXIONLoadingWIDriverNotice="Ожидание поднятия интерфейса \"\$interface\"..."
FLUXIONFindingConflictingProcessesNotice="Поиск конфликтующих служб..."
FLUXIONKillingConflictingProcessesNotice="Остановка конфликтующих служб..."
FLUXIONPhysicalWIDeviceUnknownError="${CRed}Невозможно определить физическое устройство интерфейса!"
FLUXIONStartingWIMonitorNotice="Запуск интерфейса монитора..."
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONTargetSearchingInterfaceQuery="Выберите беспроводной интерфейс для поиска целей."
FLUXIONTargetTrackerInterfaceQuery="Выберите интерфейс для отслеживания целей."
FLUXIONTargetTrackerInterfaceQueryTip="${CSWht}Avoid$CClr selecting a ${CSWht}virtual interface${CClr} here."
FLUXIONIncompleteTargettingInfoNotice="Отсутствует информация об ESSID, BSSID или канале!"
FLUXIONTargettingAccessPointAboveNotice="Fluxion нацелен на вышеприведённую точку доступа."
FLUXIONContinueWithTargetQuery="Продолжить с этой целью?"
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONStartingScannerNotice="Запуск сканера, пожалуйста, подождите..."
FLUXIONStartingScannerTip="Через пять секунд после появления целевой точки ТД закройте сканер FLUXION (ctrl+c)."
FLUXIONPreparingScannerResultsNotice="Подготовка результатов сканирования, пожалуйста, ожидайте..."
FLUXIONScannerFailedNotice="Возможно, беспроводная карта не поддерживается (точки доступа не найдены)"
FLUXIONScannerDetectedNothingNotice="Точки доступа не обнаружены, возвращаемся назад..."
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONHashFileDoesNotExistError="Хэш-файл (файл с рукопожатием) не существует!"
FLUXIONHashInvalidError="${CRed}Ошибка$CClr, неверный файл рукопожатия!"
FLUXIONHashValidNotice="${CGrn}Успех$CClr, верификация рукопожатия прошла успешно!"
FLUXIONPathToHandshakeFileQuery="Введите путь до файла рукопожатия $CClr(Пример: /путь/до/file.cap)"
FLUXIONPathToHandshakeFileReturnTip="Чтобы вернуться назад, оставьте путь до файла рукопожатия пустым."
FLUXIONAbsolutePathInfo="Абсолютный путь"
FLUXIONEmptyOrNonExistentHashError="${CRed}Ошибка$CClr, введённый путь указывает на несуществующий или пустой файл рукопожатия."
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONScannerChannelQuery="Выберите канал для мониторинга"
FLUXIONScannerChannelOptionAll="Все каналы"
FLUXIONScannerChannelOptionSpecific="Конкретный канал (каналы)"
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONScannerChannelSingleTip="Один канал"
FLUXIONScannerChannelMiltipleTip="Несколько каналов"
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONScannerHeader="Сканер FLUXION"
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONHashSourceQuery="Выберите способ получения рукопожатия"
FLUXIONHashSourcePathOption="Путь к файлу захвата"
FLUXIONHashSourceRescanOption="Повторное сканирование директории рукопожатия"
FLUXIONFoundHashNotice="Был найден хэш (рукопожатие) для целевой точки доступа."
FLUXIONUseFoundHashQuery="Вы хотите использовать этот файл?"
FLUXIONUseFoundHashOption="Использовать найденное рукопожатие"
FLUXIONSpecifyHashPathOption="Укажите путь к рукопожатию"
FLUXIONHashVerificationMethodQuery="Выберите метод проверки рукопожатия"
FLUXIONHashVerificationMethodPyritOption="проверка с помощью pyrit"
FLUXIONHashVerificationMethodAircrackOption="проверка с помощью aircrack-ng (${CYel}ненадёжная$CClr)"
FLUXIONHashVerificationMethodCowpattyOption="проверка с помощью cowpatty (${CGrn}рекомендуется$CClr)"
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONAttackQuery="Выбор беспроводной атаки для точки доступа"
FLUXIONAttackInProgressNotice="${CCyn}\$FluxionAttack$CClr идёт атака..."
FLUXIONSelectAnotherAttackOption="Выбор другой атаки"
FLUXIONAttackResumeQuery="Эта атака уже была настроена."
FLUXIONAttackRestoreOption="Восстановление атаки"
FLUXIONAttackResetOption="Сброс атаки"
FLUXIONAttackRestartOption="Перезапуск"
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONGeneralSkipOption="${CYel}Пропустить"
FLUXIONGeneralBackOption="${CRed}Назад"
FLUXIONGeneralExitOption="${CRed}Выход"
FLUXIONGeneralRepeatOption="${CRed}Повторить"
FLUXIONGeneralNotFoundError="Не найдено"
FLUXIONGeneralXTermFailureError="${CRed}Не удалось запустить xterm (возможно неправильная настройка, безголовая машина)."
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
FLUXIONCleanupAndClosingNotice="Очистка и закрытие"
FLUXIONKillingProcessNotice="Закрытие ${CGry}\$targetID$CClr"
FLUXIONRestoringPackageManagerNotice="Восстановление ${CCyn}\$PackageManagerCLT$CClr"
FLUXIONDisablingMonitorNotice="Отключение режима монитора"
FLUXIONDisablingExtraInterfacesNotice="Отключение дополнительный интерфейсов"
FLUXIONDisablingPacketForwardingNotice="Отключение ${CGry}форвардинга (переадресации) пакетов"
FLUXIONDisablingCleaningIPTablesNotice="Очистка ${CGry}iptables"
FLUXIONRestoringTputNotice="Восстановление ${CGry}tput"
FLUXIONDeletingFilesNotice="Удаление ${CGry}файлов"
FLUXIONRestartingNetworkManagerNotice="Восстановление ${CGry}Network-Manager"
FLUXIONCleanupSuccessNotice="Очистка выполнена успешно!"
FLUXIONThanksSupportersNotice="Спасибо что пользуетесь FLUXION"
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# FLUXSCRIPT END
