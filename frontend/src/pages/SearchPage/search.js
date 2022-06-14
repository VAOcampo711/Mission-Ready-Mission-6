import {useState,useEffect} from 'react';
import Axios from 'axios';
import './search.css';
import TopNavBar from '../../components/TopNavbar/TopNavBar'
import Navbar from '../../components/Navbar/Navbar'
import homeImage from '../../images/Rectangle 133.png'

function Search() {
    const [isShown, setIsShown] = useState(true);
    const handleClick = event => {
        setIsShown(current => !current);
    };
    const [isShow, setIsShow] = useState(true);
    const handleClicks = event => {
        setIsShow(current => !current);
    };
    const [info,setInfo] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:5000/').then(res => {
            console.log(res.data);
            setInfo(res.data);
        })
    },[])
    let total = info.length
    return (
        <>
            <TopNavBar />
            <Navbar />
            <div className="home-page-image">
                <img src={homeImage} alt='building' height={355} width={1804} />
            </div>
            <div class="toptext">
                Auckland Property Management is dedicated to find you the most adapted type of <br /> property suited to your lifestyle and needs.
            </div>
            <div class="divider" />
            <div class="body">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div class="search">
                    <button type="button" class="buttons" id="newsearch">New Search</button><br /><br />
                    <p class="text">Property type(s):</p>
                    <select name="proptype" id="proptype" class="dropdown">
                        <option hidden>Select</option>
                        <option></option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="unit">Unit</option>
                        <option value="lifestyle">Lifestyle</option>
                    </select>
                    <p class="text">Suburbs:</p>
                    <select name="suburb" id="suburb" class="dropdown">
                        <option hidden>Select</option>
                        <option></option>
                        <option value="auckland">All Auckland</option>
                        <option value="central">Central Auckland</option>
                        <option value="south">South Auckland</option>
                        <option value="north">North Shore</option>
                    </select>
                    <p class="text">Price from:</p>
                    <select name="pricemin" id="pricemin" class="dropdown">
                        <option hidden>Select</option>
                        <option></option>
                        <option value="50">$50</option>
                        <option value="100">$100</option>
                        <option value="200">$200</option>
                        <option value="300">$300</option>
                    </select>
                    <p class="text">To:</p>
                    <select name="pricemax" id="pricemax" class="dropdown">
                        <option hidden>Select</option>
                        <option></option>
                        <option value="350">$350</option>
                        <option value="400">$400</option>
                        <option value="450">$450</option>
                        <option value="600">$600</option>
                    </select>
                    <p class="text">Bedroom(s):</p>
                    <select name="bedroom" id="bedroom" class="dropdown">
                        <option hidden>Any</option>
                        <option></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <p class="text">Bathroom(s):</p>
                    <select name="bathroom" id="bathroom" class="dropdown">
                        <option hidden>Any</option>
                        <option></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <div id="advanceddiv" style={{display: isShown ? 'none' : 'block'}}>
                        <input type="checkbox" id="`supermarket`" name="supermarket" />
                        <label for="supermarket">Supermarkets Nearby</label><br /><br />
                        <input type="checkbox" id="park" name="park" />
                        <label for="park">Parks & Forests Nearby</label><br /><br />
                        <input type="checkbox" id="smoke" name="smoke" />
                        <label for="smoke">Smoking OK</label><br /><br />
                        <input type="checkbox" id="available" name="available" />
                        <label for="avilable">Available Now</label><br /><br />
                        <input type="checkbox" id="pet" name="pet" />
                        <label for="pet">Pet-Friendly</label><br /><br />
                        <p style={{size: "10px"}}>Keyword(s)</p>
                        <input type="text" id="keyword" name="keyword" placeholder="Keyword or Property ID" />
                    </div>
                    <button type="button" id="searchb" onClick={handleClicks}>Search</button><br />
                    <button type="button" id="advancedsearch" onClick={handleClick} style={{display: isShown ? '' : 'none'}}>Advanced Search</button><br />
                </div>
                <div class="list" style={{display: isShow ? '' : 'none'}}>
                    <p class="resulthead"><u>Results</u>: {total} accommodation types found</p><br /><br /><br /><br />
                    <div class="showlist">
                        <button class="viewbutton"><i class="fa fa-th-large" /></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button class="viewbutton"><i class="fa fa-list-ul" /></button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label for="sort">Sort by:&nbsp;</label>
                        <select name="sort" id="sort">
                            <option>Price</option>
                        </select>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label for="sort">Show:&nbsp;</label>
                        <select name="show" id="show">
                            <option>Order</option>
                        </select>
                    </div>
                    <br />
                    <div class="results">
                        {info.map(function(properties) {
                            return <div class="resultbox">
                                        <div class ="resp1">{properties.type}</div>
                                        <img src={properties.url} alt="House1" class="houseimg" /><br />
                                        <p class="resultp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <p class="resultbb"><i class="fa fa-bed" /> {properties.bed} bed(s)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-bath" /> {properties.bath} bath(s)</p>
                                        <div class ="resp">{properties.price} $/week</div>
                                        <button type="button" id="searchres">View details</button>
                                    </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;