import { gql } from "@apollo/client";

export const actionFragment = gql`
  fragment ActionFragment on Action {
    id
    name
    slug
  }
`;

export const actionThemeFragment = gql`
  fragment ActionThemeFragment on ActionTheme {
    __typename
    id
    body
    start
    end
  }
  ${actionFragment}
`;

export const userActionFragment = gql`
  fragment UserActionFragment on UserAction {
    __typename
    id
    action {
      ...ActionFragment
    }
    schedules {
      id
      frequency
      multiplier
    }
    themes {
      ...ActionThemeFragment
    }
  }
  ${actionFragment}
  ${actionThemeFragment}
`;

export const actionCompletionFragment = gql`
  fragment ActionCompletionFragment on ActionCompletion {
    __typename
    id
    action {
      ...ActionFragment
    }
    date
    archivedAt
  }
  ${actionFragment}
`;

export const calendarFragment = gql`
  fragment CalendarFragment on Calendar {
    __typename
    id
    name
    color
  }
`;

export const calendarEventFragment = gql`
  fragment CalendarEventFragment on CalendarEvent {
    __typename
    id
    scheduleId
    calendarId
    title
    start
    end
    createdAt
    updatedAt
    archivedAt
  }
`;

export const userValueFragment = gql`
  fragment UserValueFragment on UserValue {
    __typename
    id
    value {
      id
      name
      slug
    }
  }
`;

export const userIdentityFragment = gql`
  fragment UserIdentityFragment on UserIdentity {
    __typename
    id
    identity {
      id
      name
      slug
    }
  }
`;

export const routineActionFragment = gql`
  fragment RoutineActionFragment on RoutineAction {
    __typename
    id
    position
    durationInMinutes
    action {
      id
      name
      slug
    }
  }
`;

export const routineFragment = gql`
  fragment RoutineFragment on Routine {
    __typename
    id
    name
    description
    routineActions {
      ...RoutineActionFragment
    }
  }
  ${routineActionFragment}
`;
