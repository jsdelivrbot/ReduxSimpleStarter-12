import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render () {

    if (!this.props.book) {
      return <div> Please select a book </div>
    }

    return (
      <div>
        <div>Details for book:</div>
        <h3> {this.props.book.title} </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
