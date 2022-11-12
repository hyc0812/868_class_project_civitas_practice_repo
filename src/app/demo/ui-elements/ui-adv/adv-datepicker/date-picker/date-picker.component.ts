// import { Component, OnInit } from '@angular/core';
// import {IDate} from '../common/modal/date.model';
// import {UtilsService} from '../common/services copy/utils/utils.service';
// import {CalendarMode} from '../common/type/calendar-mode';
// import {ECalendarMode} from '../common/type/calendar-mode-enum';
// import {CalendarValue} from '../common/type/calendar-value';
// import {ECalendarValue} from '../common/type/calendar-value-enum';
// import {SingleCalendarValue} from '../common/type/single-calendar-value';
// import {IDatePickerConfig, IDatePickerConfigInternal} from './date-picker-config.model';
// import {IDpDayPickerApi} from './date-picker.api';
// import {DatePickerService} from './date-picker.service';
// import {
//   ChangeDetectionStrategy,
//   ChangeDetectorRef,
//   ElementRef,
//   EventEmitter,
//   forwardRef,
//   HostBinding,
//   HostListener,
//   Input,
//   OnChanges,
//   OnDestroy,
//   Output,
//   Renderer2,
//   SimpleChanges,
//   ViewChild,
//   ViewEncapsulation
// } from '@angular/core';
// import {
//   ControlValueAccessor,
//   FormControl,
//   NG_VALIDATORS,
//   NG_VALUE_ACCESSOR,
//   ValidationErrors,
//   Validator
// } from '@angular/forms';
// import {DateValidator} from '../common/type/validator.type';
// import {INavEvent} from '../common/modal/navigation-event.model';
// import {SelectEvent} from '../common/type/selection-event.enum';
// import {ISelectionEvent} from '../common/type/selection-event.model';
// import {Dayjs, UnitType} from 'dayjs';
// import {dayjsRef} from '../common/dayjs/dayjs.ref';
// import {ConnectionPositionPair} from '@angular/cdk/overlay';

// @Component({
//   selector: 'app-date-picker',
//   templateUrl: './date-picker.component.html',
//   styleUrls: ['./date-picker.component.scss'],
//   encapsulation: ViewEncapsulation.None,
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   providers: [DatePickerService,
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: forwardRef(() => DatePickerComponent),
//       multi: true
//     },
//     {
//       provide: NG_VALIDATORS,
//       useExisting: forwardRef(() => DatePickerComponent),
//       multi: true
//     }
//   ]
// })
// export class DatePickerComponent implements OnInit,OnChanges, ControlValueAccessor, Validator, OnDestroy {
//   [x: string]: any;

//   isInitialized: boolean = false;
//   @Input() config: IDatePickerConfig;
//   @Input() placeholder: string = '';
//   @Input() disabled: boolean = false;
//   @Input() displayDate: Dayjs | string;
//   @HostBinding('class') @Input() theme: string;
//   @Input() minDate: SingleCalendarValue;
//   @Input() maxDate: SingleCalendarValue;
//   @Input() minTime: SingleCalendarValue;
//   @Input() maxTime: SingleCalendarValue;
//   @Output() open = new EventEmitter<void>();
//   @Output() close = new EventEmitter<void>();
//   @Output() onChange = new EventEmitter<CalendarValue>();
//   @Output() onGoToCurrent = new EventEmitter<void>();
//   @Output() onLeftNav = new EventEmitter<INavEvent>();
//   @Output() onRightNav = new EventEmitter<INavEvent>();
//   @Output() onSelect = new EventEmitter<ISelectionEvent>();
//   @ViewChild('inputElement') inputElement: ElementRef<HTMLInputElement>;
//   componentConfig: IDatePickerConfigInternal;
//   inputValue: CalendarValue;
//   isFocusedTrigger = false;
//   inputElementValue: string;
//   calendarWrapper: HTMLElement;
//   appendToElement: HTMLElement;
//   handleInnerElementClickUnlisteners: Function[] = [];
//   globalListenersUnlisteners: Function[] = [];
//   validateFn: DateValidator;
//   api: IDpDayPickerApi = {
//     open: this.showCalendars.bind(this),
//     close: this.hideCalendar.bind(this),
//     moveCalendarTo: this.moveCalendarTo.bind(this)
//   };
//   selectEvent = SelectEvent;
//   origin: ElementRef | HTMLElement;
//   private onOpenDelayTimeoutHandler;

//   constructor(private readonly dayPickerService: DatePickerService,
//               private readonly utilsService: UtilsService,) { }

//               get openOnFocus(): boolean {
//                 return this.componentConfig.openOnFocus;
//               }

//               get openOnClick(): boolean {
//                 return this.componentConfig.openOnClick;
//               }

//               areCalendarsShown: boolean = false;

//   _selected: Dayjs[] = [];

//   get selected(): Dayjs[] {
//     return this._selected;
//   }

//   set selected(selected: Dayjs[]) {
//     this._selected = selected;
//     this.inputElementValue = (<string[]>this.utilsService
//       .convertFromDayjsArray(this.componentConfig.format, selected, ECalendarValue.StringArr))
//       .join(' | ');
//     const val = this.processOnChangeCallback(selected);
//     this.onChangeCallback(val, false);
//     this.onChange.emit(val);
//   }
//   _currentDateView: Dayjs;
//   overlayPosition: ConnectionPositionPair[] | undefined;

//   get currentDateView(): Dayjs {
//     return this._currentDateView;
//   }

//   @HostListener('click')
//   onClick(): void {
//     if (!this.openOnClick) {
//       return;
//     }

//     if (!this.isFocusedTrigger && !this.disabled) {
//       if (!this.areCalendarsShown) {
//         this.showCalendars();
//       }
//     }
//   }

//   onBodyClick(event: MouseEvent) {
//     if (this.inputElement.nativeElement === event.target) {
//       return;
//     }

//     if (this.componentConfig.hideOnOutsideClick) {
//       this.hideCalendar();
//     }
//   }

//   writeValue(value: CalendarValue): void {
//     this.inputValue = value;

//     if (value || value === '') {
//       this.selected = this.utilsService
//         .convertToDayjsArray(value, this.componentConfig);
//       this.init();
//     } else {
//       this.selected = [];
//     }

//     this.cd.markForCheck();
//   }

//   registerOnChange(fn: any): void {
//     this.onChangeCallback = fn;
//   }

//   onChangeCallback(_: any, __: boolean) {
//   }

//   registerOnTouched(fn: any): void {
//     this.onTouchedCallback = fn;
//   }

//   onTouchedCallback() {
//   }

//   validate(formControl: FormControl): ValidationErrors {
//     return this.validateFn(formControl.value);
//   }

//   processOnChangeCallback(selected: Dayjs[] | string): CalendarValue {
//     if (typeof selected === 'string') {
//       return selected;
//     } else {
//       return this.utilsService.convertFromDayjsArray(
//         this.componentConfig.format,
//         selected,
//         this.componentConfig.returnedValueType || this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect)
//       );
//     }
//   }

//   initValidators(): void {
//     this.validateFn = this.utilsService.createValidator(
//       {
//         minDate: this.minDate,
//         maxDate: this.maxDate,
//         minTime: this.minTime,
//         maxTime: this.maxTime
//       }, this.componentConfig.format, this.mode);

//     this.onChangeCallback(this.processOnChangeCallback(this.selected), false);
//   }

//   ngOnInit(): void {
//     this.isInitialized = true;
//     this.init();
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     if (this.isInitialized) {
//       this.init();
//     }
//   }

//   setDisabledState(isDisabled: boolean): void {
//     this.disabled = isDisabled;
//     this.cd.markForCheck();
//   }

//   init(): void {
//     this.componentConfig = this.dayPickerService.getConfig(this.config, this.mode);
//     this.currentDateView = this.displayDate
//       ? this.utilsService.convertToDayjs(this.displayDate, this.componentConfig.format)
//       : this.utilsService
//         .getDefaultDisplayDate(
//           this.currentDateView,
//           this.selected,
//           this.componentConfig.allowMultiSelect,
//           this.componentConfig.min
//         );
//     this.dayCalendarConfig = this.dayPickerService.getDayConfigService(this.componentConfig);
//     this.dayTimeCalendarConfig = this.dayPickerService.getDayTimeConfigService(this.componentConfig);
//     this.timeSelectConfig = this.dayPickerService.getTimeConfigService(this.componentConfig);
//     this.initValidators();
//     this.overlayPosition = this.dayPickerService.getOverlayPosition(this.componentConfig);
//     this.origin = this.utilsService.getNativeElement(this.componentConfig.inputElementContainer);
//   }

//   inputFocused(): void {
//     if (!this.openOnFocus) {
//       return;
//     }

//     clearTimeout(this.onOpenDelayTimeoutHandler);
//     this.isFocusedTrigger = true;
//     this.onOpenDelayTimeoutHandler = setTimeout(() => {
//       if (!this.areCalendarsShown) {
//         this.showCalendars();
//       }

//       this.isFocusedTrigger = false;
//       this.cd.markForCheck();
//     }, this.componentConfig.onOpenDelay);
//   }

//   inputBlurred(): void {
//     clearTimeout(this.onOpenDelayTimeoutHandler);
//     this.onTouchedCallback();
//   }

//   showCalendars(): void {
//     this.areCalendarsShown = true;
//     this.startGlobalListeners();

//     if (this.timeSelectRef) {
//       this.timeSelectRef.api.triggerChange();
//     }

//     this.open.emit();
//     this.cd.markForCheck();
//   }

//   hideCalendar(): void {
//     this.areCalendarsShown = false;

//     if (this.dayCalendarRef) {
//       this.dayCalendarRef.api.toggleCalendarMode(ECalendarMode.Day);
//     }
//     this.stopGlobalListeners();

//     this.close.emit();
//     this.cd.markForCheck();
//   }

//   onViewDateChange(value: CalendarValue): void {
//     const strVal = value ? this.utilsService.convertToString(value, this.componentConfig.format) : '';
//     if (this.dayPickerService.isValidInputDateValue(strVal, this.componentConfig)) {
//       this.selected = this.dayPickerService.convertInputValueToDayjsArray(strVal, this.componentConfig);
//       this.currentDateView = this.selected.length
//         ? this.utilsService.getDefaultDisplayDate(
//           null,
//           this.selected,
//           this.componentConfig.allowMultiSelect,
//           this.componentConfig.min
//         )
//         : this.currentDateView;

//       this.onSelect.emit({
//         date: strVal,
//         type: SelectEvent.INPUT,
//         granularity: null
//       })
//     } else {
//       this._selected = this.utilsService
//         .getValidDayjsArray(strVal, this.componentConfig.format);
//       this.onChangeCallback(this.processOnChangeCallback(strVal), true);
//     }
//   }

//   dateSelected(date: IDate, granularity: UnitType, type: SelectEvent, ignoreClose?: boolean): void {
//     this.selected = this.utilsService
//       .updateSelected(this.componentConfig.allowMultiSelect, this.selected, date, granularity);
//     if (!ignoreClose) {
//       this.onDateClick();
//     }

//     this.onSelect.emit({
//       date: date.date,
//       granularity,
//       type
//     });
//   }

//   onDateClick(): void {
//     if (this.componentConfig.closeOnSelect) {
//       setTimeout(this.hideCalendar.bind(this), this.componentConfig.closeOnSelectDelay);
//     }
//   }

//   onKeyPress(event: KeyboardEvent): void {
//     switch (event.key) {
//       case ('Escape'):
//       case ('Esc'):
//       case ('Tab'):
//         this.hideCalendar();
//         break;
//     }
//   }

//   moveCalendarTo(date: SingleCalendarValue): void {
//     this.currentDateView = this.utilsService.convertToDayjs(date, this.componentConfig.format);
//   }

//   onLeftNavClick(change: INavEvent): void {
//     this.displayDate = change.to;
//     this.onLeftNav.emit(change);
//   }

//   onRightNavClick(change: INavEvent): void {
//     this.displayDate = change.to;
//     this.onRightNav.emit(change);
//   }

//   startGlobalListeners(): void {
//     this.globalListenersUnlisteners.push(
//       this.renderer.listen(document, 'keydown', (e: KeyboardEvent) => {
//         this.onKeyPress(e);
//       })
//     );
//   }

//   stopGlobalListeners(): void {
//     this.globalListenersUnlisteners.forEach((ul) => ul());
//     this.globalListenersUnlisteners = [];
//   }

//   ngOnDestroy(): void {
//     this.handleInnerElementClickUnlisteners.forEach(ul => ul());

//     if (this.appendToElement) {
//       this.appendToElement.removeChild(this.calendarWrapper);
//     }
//   }

//   goToCurrent(): void {
//     this.currentDateView = dayjsRef();
//     this.onGoToCurrent.emit()
//   }

// }
