import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Title from './components/Title';
import FirstChart from './components/FirstChart';
import LineChart from './components/LineChart';

import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Title>Dashboard</Title>

        <Grid fluid>
          <Row className="show-grid">
            <Col md={12}>First Graph<br /><FirstChart ChartTitle="First Spike"  /></Col>
            <Col md={12}>
              Second Thing<br />
              <LineChart ChartTitle="Gather Nails"
                style={{
                  data: {},
                  labels: {fontSize: 0, padding: 20},
                  parent: {}
                }}

                data={[
                  {month: "September", profit: 30000, loss: 1000},
                  {month: "October", profit: 42000, loss: 3000},
                  {month: "November", profit: 55000, loss: 2000},
                  {month: "December", profit: 60000, loss: 1000},
                  {month: "January", profit: 72000, loss: 3000},
                  {month: "February", profit: 85000, loss: 2000},
                  {month: "March", profit: 90000, loss: 1000},
                  {month: "April", profit: 100000, loss: 3000},
                  {month: "May", profit: 110000, loss: 2000},
                  {month: "June", profit: 120000, loss: 1000},
                  {month: "July", profit: 130000, loss: 3000},
                  {month: "August", profit: 150000, loss: 2000}
                ]}

              />

            </Col>
            <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
            <Col md={6}>
              Third Thing<br />
              <LineChart ChartTitle="Coffin Build"
                style={{
                  data: {fill: "tomato", opacity: 0.7},
                  labels: {fontSize: 12},
                  parent: {border: "1px solid #ccc"}
                }}

                data={[
                  {month: "September", profit: 115000, loss: 2000},
                  {month: "October", profit: 42000, loss: 8000},
                  {month: "November", profit: 55000, loss: 5000}
                ]}
              />

            </Col>
            <Col md={6}>
              Final Countdown<br />
              <LineChart ChartTitle="Last Hammer"
                style={{
                  data: {fill: "purple", opacity: 0.7},
                  labels: {fontSize: 12},
                  parent: {border: "1px solid #ccc"}
                }}

                data={[
                  {month: "September", profit: 10000, loss: 1000},
                  {month: "October", profit: 42000, loss: 3000},
                  {month: "November", profit: 25000, loss: 2000}
                ]}
              />

            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
