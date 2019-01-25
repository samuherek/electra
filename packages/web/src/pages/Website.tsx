import * as React from 'react';
import { Link } from '@reach/router';

class Website extends React.PureComponent<any, any> {
  state = {
    pages: [
      {
        id: 1,
        name: 'Homepage',
      },
      {
        id: 2,
        name: 'About me',
      },
    ],
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
    const { slug } = this.props;
    const { pages, websites } = this.state;

    const website = websites.find(w => w.slug === slug);

    return (
      <div>
        <Link to="/websites">Back</Link>
        {website ? (
          <div
            style={{
              background: 'white',
              borderRadius: 8,
              margin: 15,
              padding: 15,
            }}
          >
            <h3>{website.name}</h3>
            <span>{website.url}</span>
            <div>
              {pages.map(p => (
                <div key={p.id}>
                  <h4>{p.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Website;
