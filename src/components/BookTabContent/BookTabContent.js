import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

class BookTabContent extends Component {
  state = {
    activeTab: "1",
  };

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={
                classnames({ active: this.state.activeTab === "1" }) +
                " font-weight-bold"
              }
              onClick={() => {
                this.toggle("1");
              }}
            >
              {this.props.tab1}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={
                classnames({ active: this.state.activeTab === "2" }) +
                " font-weight-bold"
              }
              onClick={() => {
                this.toggle("2");
              }}
            >
              {this.props.tab2}
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row className="px-3 mt-3">
              <Col sm="12">{this.props.contentTab1}</Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row className="px-3 mt-3">
              <Col sm="12">{this.props.contentTab2}</Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default BookTabContent;
