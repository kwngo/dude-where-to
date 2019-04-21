import Head from 'next/head';
import dynamic from 'next/dynamic'
import React from 'react';

import "../static/base.scss"
import "../static/flexboxgrid.min.css"

const DynamicMap = dynamic(() => import('../components/map'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

function List(props) {
  const lists = props.lists;
  const listItems = lists.map((list, index) =>
      <div className="sidebar-item" key={index}><div>{list.name}</div><div className="sidebar-item__number">{list.count}</div></div>
  );
  return (
    <div>
      {listItems}
    </div>
  )
}

class IndexPage extends React.Component {
  static async getInitialProps({ req }) {
    const lists = [{
      name: 'All',
      count: '86',
      items: []
    }, {
      name: 'Shop for clothes like a man',
      count: '90',
      items: []
    }, {
      name: 'Go on a date',
      count: '35',
      items: []
    }, {
      name: 'Drink a coffee',
      count: '10',
      items: []
    }, {
      name: 'Take a selfie',
      count: '5',
      items: []
    }]
    var selected = 0;
    return { lists, selected };
  }
  render() {
    return (
     <div>
      <Head>
        <title>Dude where to...</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="navbar row">
        <div className="col-lg-2">
          <span className="brand">
            Dude where to <span className="location">NYC</span>
          </span>
        </div>
      </header>
      <div className="row">
      <div className="sidebar-list col-lg-2 col-xs-12">
        <List lists={this.props.lists} />
      </div>
      <div className="sidebar-details col-lg-2 col-xs-12">
        <div className="sidebar-details__item">
          <div className="sidebar-details__item--title">Nepenthes</div>
          <div className="sidebar-details__item--description">At Nepenthes, Daiki Suzuki and his team are resisting the mall-ification of New York City with a Garment District boutique where the clothes are made upstairs.</div>
          <div className="sidebar-details__item--image" style={{backgroundImage: `url('')` }}></div>
        </div>
      </div>
      <div className="map col-xs-12 col-lg-8">
        <DynamicMap />
      </div>
      </div>
    </div>
    );
  }
}

export default IndexPage;
