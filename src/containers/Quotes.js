import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props;
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes.map(quote => <QuoteCard key={quote.id} 
                quote={quote} 
                removeQuote={removeQuote} 
                upvoteQuote={upvoteQuote} 
                downvoteQuote={downvoteQuote}
              />)}          
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    quotes: state.quotes
  })
}

// const mapDispatchToProps = dispatch => {
//   return {
//     removeQuote: (quote) => {dispatch(removeQuote(quote))},
//     upvoteQuote: (quote) => {dispatch(upvoteQuote(quote))},
//     downvoteQuote: (quote) => {dispatch(downvoteQuote(quote))}
//   }
// }

//add arguments to connect as needed
export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
// export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
