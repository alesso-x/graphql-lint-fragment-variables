import gql from 'graphql-tag';

export const AllWidgetsQuery = gql(`
  fragment WidgetWithTags on Widget {
    id
    name
    tags {
      id
      name
      count: usageCount(interval: $usageInterval)
    }
  }
`)
