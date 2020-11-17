import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class OFSTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    const { onSelect } = this.props;

    this.setState({ value }, onSelect(value));
  };

  render() {
    const { value } = this.state;

    return (
      <div className="tab-root">
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}  centered>
            <Tab label="Team" />
            <Tab label="Matchup" />
            <Tab label="League" />
            <Tab label="Players" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

OFSTabs.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default (OFSTabs);
