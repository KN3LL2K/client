import React from 'react';

class Transfers extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userID: props.userID,
      currency: 'BTC',
      address: '',
      amount: '',
    };
    this.handleAddressUpdate = this.handleAddressUpdate.bind(this);
    this.handleAmountUpdate = this.handleAmountUpdate.bind(this);
    this.handleCurrencyUpdate = this.handleCurrencyUpdate.bind(this);
    this.handleTransferClick = this.handleTransferClick.bind(this);
    // this.client = deepstream('localhost:6020').login({username: 'walletbrowerclient'});
  }

  handleAddressUpdate(e) {
    this.setState({
      address: e.target.value,
    });
  }

  handleAmountUpdate(e) {
    this.setState({
      amount: e.target.value,
    });
  }

  handleCurrencyUpdate(e) {
    this.setState({
      currency: e.target.value,
    });
  }

  handleTransferClick() {
    this.props.deep.event.emit('wallet-transfer-out', {
      userID: this.state.userID,
      currency: this.state.currency,
      amount: this.state.amount,
      address: this.state.address,
    });
  }

  render() {
    return (
      <div className='addressesAndTransfers transfers'>
        <h4 className="settingsHeader"><span className="allSettings">Transfer Out</span></h4>
        <select name='Currency' onChange={this.handleCurrencyUpdate}>
          <option id="inputBtn" value='BTC'>BTC</option>
          <option id="inputBtn" value='LTC'>LTC</option>
          <option id="inputBtn" value='DOGE'>DOGE</option>
        </select>
        <input className="indentPlaceholder"
          type='text'
          value={this.state.address}
          placeholder='Enter your address'
          onChange={this.handleAddressUpdate}>
        </input>
        <input className="indentPlaceholder"
          type='text'
          value={this.state.amount}
          placeholder='Enter the amount' 
          onChange={this.handleAmountUpdate}>
        </input>
        &nbsp;&nbsp;
        <button className="moveSubmitTransferButton" onClick={this.handleTransferClick}>Submit Transfer</button>
      </div>
    )
  }
}

Transfers.propTypes = {
  userID: React.PropTypes.string.isRequired,
  deep: React.PropTypes.object.isRequired
};

export default Transfers;
