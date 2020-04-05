import { get } from 'lodash';

export const serializeEdges = withEdges =>
  get(withEdges, 'edges', []).map(edge => edge.node || edge);
