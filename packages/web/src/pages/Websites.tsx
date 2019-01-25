import * as React from 'react';
import { Link } from '@reach/router';
// import electron from 'electron';
// const electron = require('electron');

class Websites extends React.PureComponent<any, any> {
  state = {
    websites: [
      {
        name: 'Sam Uherek',
        slug: 'sam-uherek',
        url: 'https://samuherek.com',
      },
      {
        name: 'Coding Charge',
        slug: 'coding-charge',
        url: 'https://codingcharge.com',
      },
    ],
  };

  render() {
    // @ts-ignore
    console.log(electron);

    const { websites } = this.state;
    return (
      <div>
        {websites.map(w => (
          <div
            key={w.name}
            style={{
              background: 'white',
              borderRadius: 8,
              margin: 15,
              padding: 15,
            }}
          >
            <Link to={`/websites/${w.slug}`}>
              <h3>{w.name}</h3>
            </Link>
            <span>{w.url}</span>
          </div>
        ))}
        <div>
          <button onClick={() => {}}>Create new website</button>
        </div>
      </div>
    );
  }
}

export default Websites;
