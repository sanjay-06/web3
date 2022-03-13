

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity : '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/9a78y9N84cqlmenIaoxnFY5QhOOXS0Hc',
      accounts: [ 'ffbb7e2b4051632deb367b713dac73ccd36846bdade3757f9403affb2f2d477b' ]
    }
  }
}