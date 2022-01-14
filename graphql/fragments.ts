import { gql } from "@apollo/client";

export const actFragment = gql`
  fragment ActFragment on Act {
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
    }
  }
`;

export const actionFragment = gql`
  fragment ActionFragment on Action {
    __typename
    id
    name
    notes
    schedules {
      id
      frequency
      multiplier
    }
    themes {
      ...ActionThemeFragment
    }
    template {
      ...ActFragment
    }
    actions {
      ...RoutineActionFragment
    }
    completions {
      id
      date
      archivedAt
    }
  }
  ${actFragment}
  ${actionThemeFragment}
  ${routineActionFragment}
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

export const identificationFragment = gql`
  fragment IdentificationFragment on Identification {
    __typename
    id
    identification {
      id
      name
      slug
    }
  }
`;

export const dashboardFragment = gql`
  fragment DashboardFragment on Dashboard {
    __typename
    id
    name
    layouts
    isDefault
    isPublic
    archivedAt
  }
`;
