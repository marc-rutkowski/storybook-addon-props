/* @flow */
import React from 'react';

export type User = {
  id: number,
  name: string,
  country?: string,
};

type Props = {
  /** User info */
  user: User,
  /** Some number */
  num: number,
  /** Optional property */
  option?: string,
  /** Optional callback */
  func?: (value: string) => void,
  /** Optional array of users */
  friends?: Array<User>,
  /** immutable data*/
  imm?: object,
};

/** Render user details */
class UserDetails extends React.Component {
  props: Props;

  static defaultProps = {
    option: 'foo',
  };

  render() {
    const { user, num, option } = this.props;
    return (
      <div>
        <p>Id: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Num: {num}</p>
        {option && <p>Option: {option}</p>}
      </div>
    );
  }
}

export default UserDetails;
