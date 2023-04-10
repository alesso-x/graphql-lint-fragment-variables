import gql from 'graphql-tag';

const AllWidgetsQuery = gql(`
  query AllWidgets($usageInterval: Int!) {
    widgets {
      id
      ...WidgetWithTags
    }
  }
`)

console.log(AllWidgetsQuery)
