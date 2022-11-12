import { TDrops, TOpens } from '../common/type/poistions.type';
import { ElementRef } from '@angular/core';

export interface IConfig {
  closeOnSelect?: boolean;
  closeOnSelectDelay?: number;
  openOnFocus?: boolean;
  openOnClick?: boolean;
  onOpenDelay?: number;
  closeOnEnter?: boolean;
  disableKeypress?: boolean;
  inputElementContainer?: HTMLElement | string | ElementRef;
  drops?: TDrops;
  opens?: TOpens;
  hideInputContainer?: boolean;
  hideOnOutsideClick?: boolean;
}

export interface IDatePickerConfig extends IConfig {
  [x: string]: any;
}

export interface IDatePickerConfigInternal extends IConfig {
  [x: string]: any;
}
