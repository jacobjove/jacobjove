import { gql } from "@apollo/client";

export const userActionFragment = gql`
  fragment UserActionFragment on UserAction {
    id
    action {
      id
      name
      slug
    }
    schedules {
      id
      frequency
      multiplier
    }
  }
`;

export const calendarEventFragment = gql`
  fragment CalendarEventFragment on CalendarEvent {
    id
    scheduleId
    calendarId
    title
    start
    end
  }
`;

export const userValueFragment = gql`
  fragment UserValueFragment on UserValue {
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
    id
    identity {
      id
      name
      slug
    }
  }
`;
