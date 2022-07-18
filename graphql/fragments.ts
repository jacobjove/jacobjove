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
//     id
//     body
//     start
//     end
//   }
// `;

// export const routineHabitFragment = gql`
//   fragment RoutineHabitFragment on RoutineHabit {
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

export const habitFragment = gql`
  fragment HabitFragment on Habit {
    id
    name
  }
`;

export const _habitFragment = gql`
  fragment HabitFragment on Habit {
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
    metricUsages {
      id
      metric {
        id
        name
      }
    }
    actions {
      ...ActionFragment
    }
  }
  ${actFragment}
  ${actionFragment}
`;

export const goalFragment = gql`
  fragment GoalFragment on Goal {
    id
    habitId
    goalId
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
    habitId
    subtasks {
      id
      title
      dueDate
      description
      completedAt
      archivedAt
      parentId
    }
  }
`;

export const calendarFragment = gql`
  fragment CalendarFragment on Calendar {
    id
    name
    color
    provider
    remoteId
    accountId
    syncToken
    public
    primary
    enabled
  }
`;

export const calendarEventFragment = gql`
  fragment CalendarEventFragment on CalendarEvent {
    id
    remoteId
    scheduleId
    calendarId
    title
    start
    end
    taskId
    createdAt
    updatedAt
    archivedAt
  }
`;

export const valueFragment = gql`
  fragment ValueFragment on Value {
    id
    value {
      id
      name
      slug
    }
  }
`;

export const identityFragment = gql`
  fragment IdentityFragment on Identity {
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
    id
    name
    layouts
    isDefault
    isPublic
    archivedAt
  }
`;

export const accountFragment = gql`
  fragment AccountFragment on Account {
    id
    provider
    remoteId
    scopes
    accessToken
    accessTokenExpiry
    refreshToken
  }
`;

export const mantraFragment = gql`
  fragment MantraFragment on Mantra {
    id
    content
  }
`;

export const noteFragment = gql`
  fragment NoteFragment on Note {
    id
    title
    body
    notebookId
    createdAt
    updatedAt
    archivedAt
  }
`;

export const notebookFragment = gql`
  fragment NotebookFragment on Notebook {
    id
    title
  }
`;

export const userFragment = gql`
  fragment UserFragment on User {
    id
    name
    email
    settings
    notebooks {
      ...NotebookFragment
    }
    calendars {
      ...CalendarFragment
      events {
        ...CalendarEventFragment
      }
    }
    mantras {
      ...MantraFragment
    }
  }
  ${calendarFragment}
  ${calendarEventFragment}
  ${mantraFragment}
  ${notebookFragment}
`;
