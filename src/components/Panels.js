import React from 'react';
import BasePanel from './BasePanel';
import Doc from './Doc';
import Story from './Story';

export class PropsPanel extends BasePanel {
  render() {
    const { data } = this.state;
    return (
      <div>
        {data && <Doc data={data} />}
      </div>
    );
  }
}

export class StoryPanel extends BasePanel {
  render() {
    const { data } = this.state;
    return (
      <div>
        {data && <Story data={data} />}
      </div>
    );
  }
}
