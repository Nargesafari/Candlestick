import React from 'react'
import { Navbar, NavDropdown, Button, Nav } from 'react-bootstrap'
import { BsGrid3X3GapFill, BsPatchQuestion } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import Select from 'react-select'

const aquaticCreatures = [
  { label: 'URP', value: 'URP' },
  { label: 'USD', value: 'USD' },
  { label: 'IN', value: 'IN' },
  { label: 'PEN', value: 'PEN' },
  { label: 'CHF', value: 'CHF' },
  { label: 'COP', value: 'COP' },
  { label: 'TRY', value: 'TRY' },
  { label: 'THB', value: 'THB' },
  { label: 'MXN', value: 'MXN' },
  { label: 'THB', value: 'THB' },
  { label: 'TRY', value: 'TRY' }
]

function Header () {
  return (
    <div className='Header'>
      <ul>
        <li> <Navbar.Brand href='#home'>BINANCE</Navbar.Brand></li>
        {/* start code from 26-124 */}
        <li> <BsGrid3X3GapFill style={{ fontSize: '20px', marginTop: '-6px', cursor: 'pointer' }} id='basic-nav-dropdown' href='#home' /></li>
        <li id='li'>
          <NavDropdown title='' id='basic-nav-dropdown'>
            <div className='first-menu'>
              <a href='#home'>
                <div id='first-menu'>
                  <h5>Exchange</h5>
                  <span>Blockchain and crypto asset exchange</span>
                </div>
              </a>

              <a href='#home'>
                <div>
                  <h5 className='bi bi-alarm-fill'>Academy</h5>
                  <span>Blockchain and crypto education</span>
                </div>
              </a>

              <a href='#home'>
                <div id='first-menu'>
                  <h5>Broker</h5>
                  <span>Trading Terminal Solutions</span>
                </div>
              </a>

              <a href='#home'>
                <div id='first-menu'>
                  <h5>Institutional & VIP Services</h5>
                  <span>White-glove approach for tailored trading solutions</span>
                </div>
              </a>

              <a href='#home'>
                <div>
                  <h5>Charity</h5>
                  <span>Powering Blockchain for good</span>
                </div>
              </a>

              <a href='#home'>
                <div id='first-menu'>
                  <h5>Cloud</h5>
                  <span>Enterprise exchange Solutions</span>
                </div>
              </a>

              <a href='#home'>
                <div id='first-menu'>
                  <h5>DEX</h5>
                  <span>Fast and secure decentralized digital asset exchange</span>
                </div>
              </a>

              <a href='#home'>
                <div id='first-menu'>
                  <h5>Labs</h5>
                  <span>Incubator for top blockchain project </span>
                </div>
              </a>

              <a href='#home'>
                <div>
                  <h5>Launchpad</h5>
                  <span>Token launch platform </span>
                </div>
              </a>

              <a href='#home'>
                <div id='first-menu'>
                  <h5>Research</h5>
                  <span>Institutional-grade analysis and report</span>
                </div>
              </a>

              <a href='#home'>
                <div id='first-menu'>
                  <h5>Trust Wallet</h5>
                  <span>Binance official crypto Wallet</span>
                </div>
              </a>

              <a href='#home'>
                <div id='first-menu'>
                  <h5>Gift Card</h5>
                  <span>Customizable crypto gift cards </span>
                </div>
              </a>

              <a href='#home'>
                <div>
                  <h5>Binance Live</h5>
                  <span>Bringing blockchain broadcast to you live </span>
                </div>
              </a>

            </div>
          </NavDropdown>
        </li>
        {/* end code from 26-124 */}

        {/* start code for BuyCrypto item in Header from 127-131  */}
        <li>
          <NavDropdown title='BuyCrypto' id='basic-nav-dropdown' expand='lg'>
            <Select placeholder='search' options={aquaticCreatures} className='select' maxMenuHeight={220} menuPlacement='auto' />
          </NavDropdown>
        </li>
        {/* end code for BuyCrypto item in Header from 127-131  */}

        {/* start code for Trade item in Header 136-188 */}
        <li>  <Nav.Link href='#home' id='basic-nav-dropdown'>Markets</Nav.Link></li>
        <li>
          <NavDropdown title='Trade' id='basic-nav-dropdown'>

            <div className='second_menu'>
              <a href='home'>
                <div className='second-menu1 '>
                  <h5>Convert</h5>
                  <span>the easiest way to trade</span>
                </div>
              </a>

              <a href='home'>
                <div className='second-menu1'>
                  <h5>classic</h5>
                  <span>simple and easy-to-use interface</span>
                </div>
              </a>

              <a href='home'>
                <div className='second-menu1 '>
                  <h5>Advanced</h5>
                  <span>Full access to all ttrading tools </span>
                </div>
              </a>

              <a href='home'>
                <div className='second-menu1'>
                  <h5>Margin</h5>
                  <span>Increase your profit with leveraged</span>
                </div>
              </a>

              <a href='home'>
                <div className='second-menu1'>
                  <h5>P2P</h5>
                  <span>Bank transfer and +100 options</span>
                </div>
              </a>

              <a href='home'>
                <div className='second-menu1'>
                  <h5>Strategy Trading</h5>
                  <span>Trading made easy trade like pro </span>
                </div>
              </a>
              <a href='home'>
                <div className='second-menu1'>
                  <h5>Swap Farming</h5>
                  <span>Swap to earn BNB </span>
                </div>
              </a>
            </div>
          </NavDropdown>
        </li>
        {/* end code for Trade item in Header 136-188 */}

        {/* start code for Derivatives item in Header 193-238  */}
        <li>
          <NavDropdown title='Derivatives' id='basic-nav-dropdown'>
            <div className='second_menu'>
              <a href='home'>
                <div className='second-menu1'>
                  <h5>Binance Future Overwiew</h5>
                  <span>view our full range of crypto-derivative instruments</span>
                </div>
              </a>

              <a href='home'>
                <div className='second-menu1'>
                  <h5>Responsible Trading</h5>
                  <span>learn how  you could practice responsible trading with binance futures </span>
                </div>
              </a>

              <a href='home'>
                <div className='second-menu1 '>
                  <h5>USD-M Future</h5>
                  <span>perpetual or quarterly contracts settled in USDT or BUSD </span>
                </div>
              </a>

              <a href='home'>
                <div className='second-menu1'>
                  <h5>Coin-M Future </h5>
                  <span>perpetual or quarterly contracts settled in cryptocurrency</span>
                </div>
              </a>

              <a href='home'>
                <div className='second-menu1'>
                  <h5>Vanilla Options </h5>
                  <span>Buy and sell european-style vanilla options  </span>
                </div>
              </a>

              <a href='home'>
                <div className='second-menu1'>
                  <h5>Leveraged Tokens</h5>
                  <span>Trading made easy trade like pro </span>
                </div>
              </a>
            </div>
          </NavDropdown>
        </li>
        {/* end code for Derivatives item in Header 193-239  */}

        {/* start code for Earn item in Header 243-306  */}
        <li>
          <NavDropdown title='Earn' id='basic-nav-dropdown'>

            <div className='third_menu'>
              <a href='home'>
                <div className='third_menu1'>
                  <h5>Binance Earn </h5>
                  <span>once stop investment solution</span>
                </div>
              </a>

              <a href='home'>
                <div className='third_menu1'>
                  <h5>Launchpad</h5>
                  <span>Token launch platform </span>
                </div>
              </a>

              <a href='home'>
                <div className='third_menu1 '>
                  <h5>Saving</h5>
                  <span>your crypto saving account </span>
                </div>
              </a>

              <a href='home'>
                <div className='third_menu1'>
                  <h5>Staking </h5>
                  <span>easy stake </span>
                </div>
              </a>

              <a href='home'>
                <div className='third_menu1'>
                  <h5>BNB Vault </h5>
                  <span>Buy and sell european-style vanilla options  </span>
                </div>
              </a>

              <a href='home'>
                <div className='third_menu1'>
                  <h5>Dual investment</h5>
                  <span>Trading made easy trade like pro </span>
                </div>
              </a>

              <a href='home'>
                <div className='third_menu1'>
                  <h5>liquidity Framing  </h5>
                  <span>Buy and sell european-style vanilla options  </span>
                </div>
              </a>

              <a href='home'>
                <div className='third_menu1'>
                  <h5>Auto Vest </h5>
                  <span>Trading made easy trade like pro </span>
                </div>
              </a>

            </div>

          </NavDropdown>
        </li>
        {/* end code for Earn item in Header 243-306  */}
        <li>
          <Nav.Link href='#home' id='basic-nav-dropdown'>NFT</Nav.Link>
        </li>

        <li><Nav.Link href='#home' className='nav' id='basic-nav-dropdown'>Log IN</Nav.Link></li>

        <li> <Button classname='button'> Register </Button></li>

        <li id='download'>  <Nav.Link href='#home' id='basic-nav-dropdown'> Download</Nav.Link></li>

        <li id='en'> <Nav.Link href='#home' id='basic-nav-dropdown'>English</Nav.Link></li>

        <li> <Nav.Link href='#home' id='basic-nav-dropdown'>|</Nav.Link></li>

        <li id='usd'> <Nav.Link href='#home' id='basic-nav-dropdown'> USD</Nav.Link></li>

        <li> <BsPatchQuestion style={{ cursor: 'pointer' }} /></li>

        <li id='fi'> <FiSettings style={{ cursor: 'pointer' }}> </FiSettings>
        </li>
      </ul>
    </div>
  )
}
export default Header
