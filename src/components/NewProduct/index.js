import React, { Component } from "react";

import Input from "../Input";

import * as firebase from 'firebase';


class NewProduct extends Component {
  constructor() {
    super();

    this.state = {
      productName: "",
      productQnt: 0
    };
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmitClick = async () => {
    /* TODO - step 9: push data in Firebase db */
    console.log('submit');
    const newPostRef = firebase.database().ref('/group-3').push();
    newPostRef.set({
      name: this.state.productName,
      count: this.state.productQnt
    });
  };

  render = () => {
    return (
      <div className="card">
        <div className="card-header">New product</div>
        <div className="card-body">
          <div className="form-inline">
            <div className="form-group">
              {/* TODO - step 7: connect this input to the state */}
              <Input
                name="productName"
                type="text"
                placeholder="Nome del prodotto"
               onChange={this.handleInputChange}
               value={this.state.productName}
              />
            </div>
            <div className="form-group mx-sm-3">
              {/* TODO - step 7: connect this input to the state */}
        <Input name="productQnt" type="number" placeholder="Quantità"
               onChange={this.handleInputChange}
               value={this.state.productQnt} />
            </div>

            {/* TODO - step 8: handle onClick of this button */}
            <button
              className="btn btn-primary"
              disabled={
                this.state.productName === "" || this.state.productQnt === 0
              }
              onClick={this.handleSubmitClick}
            >
              Aggiungi nuovo prodotto
            </button>
          </div>
        </div>
      </div>
    );
  };
}

export default NewProduct;
