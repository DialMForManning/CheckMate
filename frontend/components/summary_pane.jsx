import React from 'react';
import DetailPane from './detail_pane/detail_pane';

const SummaryPane = () => {
  return (
    <content className="summary_pane">
      <h1>Summary Pane</h1>
      <DetailPane />
    </content>
  );
};

export default SummaryPane;
