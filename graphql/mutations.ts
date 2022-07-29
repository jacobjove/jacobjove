import { generateCreationMutation, generateUpdateMutation } from "@/graphql/utils";

export const CREATE_ACTION = generateCreationMutation("Action");
export const CREATE_CALENDAR_EVENT = generateCreationMutation("CalendarEvent");
export const CREATE_TASK = generateCreationMutation("Task");
export const CREATE_USER = generateCreationMutation("User");

export const UPDATE_ACTION = generateUpdateMutation("Action");
export const UPDATE_CALENDAR_EVENT = generateUpdateMutation("CalendarEvent");
export const UPDATE_TASK = generateUpdateMutation("Task");
export const UPDATE_USER = generateUpdateMutation("User");
