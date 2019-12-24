import React from 'react';
import { useQuery } from '@apollo/react-hooks';

/**
 * Wrap component with data from given query.
 *
 * Component mounting will be delayed until data
 * is received or an error with the query occurs.
 */
const withQuery = ($component, query) => {
  return (props) => {
    const { loading, error, data } = useQuery(query);

    return loading || error ? null : <$component {...props} data={data} />;
  };
};

export default withQuery;
