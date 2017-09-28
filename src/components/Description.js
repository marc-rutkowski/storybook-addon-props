import PropTypes from 'prop-types';
import React from 'react';
import Markdown from 'react-remarkable';

const mdOptions = { breaks: true };

// parse description string to detect where to add links on tracker
const getTrackerLinks = (description, pattern = '#([0-9]+)', trackerUrl) => {
  if (trackerUrl === undefined) {
    return description;
  }
  const reIssueId = new RegExp(pattern, 'ig');
  const result = [];
  let match;
  let index = 0;
  while ((match = reIssueId.exec(description)) !== null) {
    result.push(description.substring(index, match.index));
    const text = match[0];
    const url = trackerUrl.replace('%ID%', match[1]);
    result.push(`[${text}](${url})`);
    index = reIssueId.lastIndex;
  }
  if (index < description.length) {
    result.push(description.substring(index, description.length));
  }
  return result.length > 0 ? result.join('') : description;
};

class Description extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    options: PropTypes.shape({
      trackerUrl: PropTypes.string,
      pattern: PropTypes.string,
    }),
  };

  static defaultProps = {
    options: {},
  };

  render() {
    const { children, options } = this.props;
    const { trackerUrl, pattern } = options;
    const description = getTrackerLinks(children, pattern, trackerUrl);
    return <Markdown source={description} options={mdOptions} />;
  }
}

export default Description;
