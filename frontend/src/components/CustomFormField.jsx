import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { FaCalendarAlt } from "react-icons/fa";

export const FormFieldType = {
  INPUT: "input",
  TEXTAREA: "textarea",
  PHONE_INPUT: "phoneInput",
  CHECKBOX: "checkbox",
  DATE_PICKER: "datePicker",
  SELECT: "select",
  SKELETON: "skeleton",
};

const RenderField = ({ field, props }) => {
  const {
    fieldType,
    iconSrc,
    iconAlt,
    disabled,
    children,
    placeholder,
    showTimeSelect,
    dateFormat,
    renderSkeleton,
  } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400 focus-within:ring-2 focus-within:ring-violet-500 transition-all duration-200 shadow-sm hover:shadow-md">
          {iconSrc && (
            <img
              src={iconSrc}
              alt={iconAlt || "icon"}
              height={24}
              width={24}
              className="ml-2 my-auto"
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="shad-input border-0 focus:ring-0 py-2 px-3"
            />
          </FormControl>
        </div>
      );

    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={placeholder}
            {...field}
            className="shad-textArea focus:ring-2 focus:ring-violet-500 transition-all duration-200 shadow-sm hover:shadow-md resize-none"
            disabled={props.disabled}
          />
        </FormControl>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <div className="flex rounded-md bg-dark-400 p-2 focus-within:ring-2 focus-within:ring-violet-500 transition-all duration-200 shadow-sm hover:shadow-md">
        <FormControl>
          <PhoneInput
            defaultCountry="IN"
            placeholder={placeholder}
            international
            withCountryCallingCode
            value={field.value}
            onChange={field.onChange}
            className="input-phone focus:outline-none w-full"
            />
        </FormControl>
        </div>
      );

    case FormFieldType.DATE_PICKER:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400 focus-within:ring-2 focus-within:ring-violet-500 transition-all duration-200 shadow-sm hover:shadow-md">
          <FaCalendarAlt className="text-violet-500 ml-2 my-auto" />
          <FormControl>
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat={dateFormat ?? "MM/dd/yyyy"}
              showTimeSelect={showTimeSelect ?? false}
              timeInputLabel="Time:"
              wrapperClassName="date-picker w-full"
              className="focus:outline-none py-2 px-3 w-full"
            />
          </FormControl>
        </div>
      );

    case FormFieldType.SKELETON:
      return renderSkeleton ? renderSkeleton(field) : null;

    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="shad-select-trigger focus:ring-2 focus:ring-violet-500 transition-all duration-200 shadow-sm hover:shadow-md">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="shad-select-content">
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      );

    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
              className="focus:ring-2 focus:ring-violet-500 transition-all duration-200 w-5 h-5"
            />
            <label htmlFor={props.name} className="checkbox-label text-sm font-medium">
              {props.label}
            </label>
          </div>
        </FormControl>
      );

    default:
      break;
  }
};

const CustomFormField = (props) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1 space-y-2">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="text-sm font-medium">{label}</FormLabel>
          )}

          <RenderField field={field} props={props} />
          <FormMessage className="shad-error text-xs" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;