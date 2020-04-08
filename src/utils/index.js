import { get } from 'lodash';

export const serializeEdges = withEdges =>
  get(withEdges, 'edges', []).map(edge => edge.node || edge);

export const addQueryParams = (link, params) =>
  Object.entries(params).reduce((acc, [key, value]) => `${acc}&${key}=${value}`, `${link}?`);
