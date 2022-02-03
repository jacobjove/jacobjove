import { gql } from "@apollo/client";

export const actFragment = gql`
  fragment ActFragment on Act {
    id
    name
    slug
  }
`;

// export const actionThemeFragment = gql`
//   fragment ActionThemeFragment on ActionTheme {
//     __typename
//     id
//     body
//     start
//     end
//   }
// `;

// export const routineHabitFragment = gql`
//   fragment RoutineHabitFragment on RoutineHabit {
//     __typename
//     id
//     position
//     durationInMinutes
//     action {
//       id
//       name
//     }
//   }
// `;

export const actionFragment = gql`
  fragment ActionFragment on Action {
    id
    start
    end
    notes
    archivedAt
  }
`;

export const taskFragment = gql`
  fragment TaskFragment on Task {
    id
    title
    dueDate
    rank
    description
    completedAt
    archivedAt
    parentId
    subtasks {
      id
      title
      dueDate
      description
      completedAt
      archivedAt
      parentId
    }
    habit {
      id
      schedules {
        id
        frequency
        multiplier
      }
    }
  }
`;

export const habitFragment = gql`
  fragment HabitFragment on Habit {
    __typename
    id
    name
    act {
      ...ActFragment
    }
    schedules {
      id
      frequency
      multiplier
    }
    actions {
      ...ActionFragment
    }
  }
  ${actFragment}
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
    identity {
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

export const userFragment = gql`
  fragment UserFragment on User {
    __typename
    id
    name
    email
    settings
  }
`;

export const noteFragment = gql`
  fragment NoteFragment on Note {
    __typename
    id
    title
    body
    createdAt
    updatedAt
    archivedAt
  }
`;

export const notebookFragment = gql`
  fragment NotebookFragment on Notebook {
    __typename
    id
    title
    notes {
      ...NoteFragment
    }
  }
  ${noteFragment}
`;
