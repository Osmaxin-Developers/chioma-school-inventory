import { ReactNode } from "react";
import { GroupBase, OptionsOrGroups } from "react-select";

export interface IDatePickerProps {
  label?: string;
  value?: any;
  onChange?: (value: any) => any;
  labelClassName?: string;
  asSingle?: boolean;
  useRange?: boolean;
  name: string;
  inputClassName?: string;
  containerClassName?: string;
  toggleClassName?: string;
  placeholder?: string;
  separator?: string;
  startFrom?: Date;
  showShortcuts?: boolean;
  showFooter?: boolean;
  displayFormat?: string;
  readOnly?: boolean;
  disabled?: boolean;
  popoverDirection?: any;
  minDate?: Date;
  maxDate?: Date;
}

export interface ISelectInput {
  name: string;
  label?: string;
  label2?: any;
  value?: any;
  options: OptionsOrGroups<unknown, GroupBase<unknown>>;
  defaultValues?: OptionsOrGroups<unknown, GroupBase<unknown>>;
  labelClassName?: string;
  onChange?: (value: any) => any;
  isMulti?: boolean;
  isLoading?: boolean;
  isSearchable?: boolean;
  isCreateable?: boolean;
  LastComponent?: ReactNode;
  lastComponentChanged?: boolean;
  FirstComponent?: ReactNode;
  firstComponentChanged?: boolean;
  containerClassName?: string;
  placeholder?: string;
  className?: string;
}
