import PropTypes from 'prop-types';
import React from 'react';
import { setData, getData } from '../manager';
import { ADD_EVENT } from '../constants';

export default class BasePanel extends React.Component {
  static propTypes = {
    getData: PropTypes.func,
    onStory: PropTypes.func,
    channel: PropTypes.object,
  };

  state = {
    data: null,
  };

  waitForData = null;

  constructor(...props) {
    super(...props);

    this.props.channel.on(ADD_EVENT, ({ kind, storyName, data }) => {
      setData(kind, storyName, data);

      if (
        this.waitForData &&
        this.waitForData[0] === kind &&
        this.waitForData[1] === storyName
      ) {
        this.showData(kind, storyName);
        this.waitForData = null;
      }
    });
  }

  componentDidMount() {
    const { onStory } = this.props;
    this.stopListeningOnStory = onStory((kind, storyName) =>
      this.showData(kind, storyName)
    );
  }

  showData(kind, storyName) {
    const data = getData(kind, storyName);

    if (!data) {
      this.waitForData = [kind, storyName];
    }

    this.setState({
      data,
    });
  }

  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }
  }
}
