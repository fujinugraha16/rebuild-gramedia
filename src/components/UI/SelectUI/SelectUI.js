import React, { Component, Fragment } from "react";

import Select from "react-select";
// import { colourOptions } from "../data";
// import { Note } from "../styled-components";

// const Checkbox = props => <input type="checkbox" {...props} />;

class SelectUI extends Component {
  state = {
    isClearable: true,
    isDisabled: false,
    isLoading: false,
    isRtl: false,
    isSearchable: true,
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.selectedHandler(selectedOption);
  };

  //   toggleClearable = () =>
  //     this.setState(state => ({ isClearable: !state.isClearable }));
  //   toggleDisabled = () =>
  //     this.setState(state => ({ isDisabled: !state.isDisabled }));
  //   toggleLoading = () =>
  //     this.setState(state => ({ isLoading: !state.isLoading }));
  //   toggleRtl = () => this.setState(state => ({ isRtl: !state.isRtl }));
  //   toggleSearchable = () =>
  //     this.setState(state => ({ isSearchable: !state.isSearchable }));

  render() {
    const {
      isClearable,
      isSearchable,
      isDisabled,
      isLoading,
      isRtl,
    } = this.state;
    return (
      <Fragment>
        <Select
          id={this.props.id}
          className="basic-single"
          classNamePrefix="select"
          // defaultValue={colourOptions[0]}
          isDisabled={this.props.disabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={isSearchable}
          name="color"
          options={this.props.options}
          onChange={this.handleChange}
          value={this.props.selectedValues}
        />
        {/* <Note Tag="label">
          <Checkbox
            checked={isClearable}
            onChange={this.toggleClearable}
            id="cypress-single__clearable-checkbox"
          />
          Clearable
        </Note>
        <Note Tag="label" style={{ marginLeft: '1em' }}>
          <Checkbox
            checked={isSearchable}
            onChange={this.toggleSearchable}
            id="cypress-single__searchable-checkbox"
          />
          Searchable
        </Note>
        <Note Tag="label" style={{ marginLeft: '1em' }}>
          <Checkbox
            checked={isDisabled}
            onChange={this.toggleDisabled}
            id="cypress-single__disabled-checkbox"
          />
          Disabled
        </Note>
        <Note Tag="label" style={{ marginLeft: '1em' }}>
          <Checkbox
            checked={isLoading}
            onChange={this.toggleLoading}
            id="cypress-single__loading-checkbox"
          />
          Loading
        </Note>
        <Note Tag="label" style={{ marginLeft: '1em' }}>
          <Checkbox
            type="checkbox"
            checked={isRtl}
            onChange={this.toggleRtl}
            id="cypress-single__rtl-checkbox"
          />
          RTL
        </Note> */}
      </Fragment>
    );
  }
}

export default SelectUI;
