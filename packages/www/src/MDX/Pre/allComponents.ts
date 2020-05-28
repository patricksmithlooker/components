/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import {
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  ActionList,
  ActionListItem,
  ActionListItemAction,
  ActionListItemColumn,
  ActionListManager,
  AvatarCombo,
  AvatarIcon,
  AvatarUser,
  Badge,
  Banner,
  Box,
  Button,
  ButtonGroup,
  ButtonItem,
  ButtonOutline,
  ButtonToggle,
  ButtonTransparent,
  Calendar,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  CheckboxGroup,
  Chip,
  Code,
  CodeBlock,
  ColorWheel,
  ComponentsProvider,
  Confirm,
  ConfirmLayout,
  DateFormat,
  DateTimeFormat,
  doDefaultActionListSort,
  Dialog,
  DialogManager,
  Divider,
  Drawer,
  DrawerManager,
  FieldCheckbox,
  FieldCheckboxGroup,
  FieldColor,
  FieldDate,
  FieldDateRange,
  FieldRadio,
  FieldRadioGroup,
  FieldRangeSlider,
  FieldSelect,
  FieldSelectMulti,
  FieldSlider,
  Fieldset,
  FieldText,
  FieldTextArea,
  FieldTime,
  FieldTimeSelect,
  FieldToggleSwitch,
  Flex,
  FlexItem,
  Form,
  Grid,
  Heading,
  Icon,
  IconButton,
  InlineInputText,
  InlineTextArea,
  InputChips,
  InputColor,
  InputDate,
  InputDateRange,
  InputHidden,
  InputSearch,
  InputText,
  InputTime,
  InputTimeSelect,
  Label,
  Link,
  List,
  ListItem,
  LuminositySlider,
  Menu,
  MenuContext,
  MenuDisclosure,
  MenuGroup,
  MenuItem,
  MenuList,
  ModalContent,
  ModalContext,
  ModalFooter,
  ModalHeader,
  ModalSurface,
  PageSize,
  Pagination,
  Paragraph,
  Popover,
  PopoverContent,
  Prompt,
  Radio,
  RadioGroup,
  RangeSlider,
  Select,
  SelectMulti,
  Slider,
  Space,
  SpaceVertical,
  Spinner,
  Status,
  Swatch,
  Tab,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  TextArea,
  theme,
  TimeFormat,
  ToggleSwitch,
  Tooltip,
  Tree,
  TreeItem,
  useConfirm,
  usePreviousValue,
  useMixedStateCheckbox,
  useTabs,
  useToggle,
  VisuallyHidden,
} from '@looker/components'
import { palette } from '@looker/design-tokens'

import styled from 'styled-components'
import isEqual from 'lodash/isEqual'
import { useState } from 'react'

import { GridPlaceholder } from '../../helpers/GridPlaceholder'

const otherLibraries = {
  GridPlaceholder,
  isEqual,
  palette,
  styled,
  theme,
  useState,
}

const hooks = {
  doDefaultActionListSort,
  useConfirm,
  useMixedStateCheckbox,
  usePreviousValue,
  useTabs,
  useToggle,
}

export const allComponents = {
  ...otherLibraries,
  ...hooks,
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  ActionList,
  ActionListItem,
  ActionListItemAction,
  ActionListItemColumn,
  ActionListManager,
  AvatarCombo,
  AvatarIcon,
  AvatarUser,
  Badge,
  Banner,
  Box,
  Button,
  ButtonGroup,
  ButtonItem,
  ButtonOutline,
  ButtonToggle,
  ButtonTransparent,
  Calendar,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  CheckboxGroup,
  Chip,
  Code,
  CodeBlock,
  ColorWheel,
  ComponentsProvider,
  Confirm,
  ConfirmLayout,
  DateFormat,
  DateTimeFormat,
  Dialog,
  DialogManager,
  Divider,
  Drawer,
  DrawerManager,
  FieldCheckbox,
  FieldCheckboxGroup,
  FieldColor,
  FieldDate,
  FieldDateRange,
  FieldRadio,
  FieldRadioGroup,
  FieldRangeSlider,
  FieldSelect,
  FieldSelectMulti,
  FieldSlider,
  FieldText,
  FieldTextArea,
  FieldTime,
  FieldTimeSelect,
  FieldToggleSwitch,
  Fieldset,
  Flex,
  FlexItem,
  Form,
  Grid,
  Heading,
  Icon,
  IconButton,
  InlineInputText,
  InlineTextArea,
  InputChips,
  InputColor,
  InputDate,
  InputDateRange,
  InputHidden,
  InputSearch,
  InputText,
  InputTime,
  InputTimeSelect,
  Label,
  Link,
  List,
  ListItem,
  LuminositySlider,
  Menu,
  MenuContext,
  MenuDisclosure,
  MenuGroup,
  MenuItem,
  MenuList,
  ModalContent,
  ModalContext,
  ModalFooter,
  ModalHeader,
  ModalSurface,
  PageSize,
  Pagination,
  Paragraph,
  Popover,
  PopoverContent,
  Prompt,
  Radio,
  RadioGroup,
  RangeSlider,
  Select,
  SelectMulti,
  Slider,
  Space,
  SpaceVertical,
  Spinner,
  Status,
  Swatch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Tabs,
  Text,
  TextArea,
  TimeFormat,
  ToggleSwitch,
  Tooltip,
  Tree,
  TreeItem,
  VisuallyHidden,
}
