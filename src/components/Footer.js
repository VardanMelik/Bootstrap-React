import React from 'react';
import styled from 'styled-components';
import '../App.css'

function Footer() {
    return(
        <FooterContainer className="main-footer" 
            style={{ 
                'background-color': '#343a40',
                'padding-top': '3rem',
                'color': 'white' 
                }}>
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4> Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>Yerevan</li>
                            <li>Myasnikyan 5/1 avenue</li>
                            <li>0025</li>
                            <li>Phone: +374 99 99 99 </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4> Loerm ispum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Lorem ispum</a></li>
                            <li><a href="/">Lorem ispum</a></li>
                            <li><a href="/">Lorem ispum</a></li>
                            <li><a href="/">Lorem ispum</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4> Loerm ispum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Lorem ispum</a></li>
                            <li><a href="/">Lorem ispum</a></li>
                            <li><a href="/">Lorem ispum</a></li>
                            <li><a href="/">Lorem ispum</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4> Loerm ispum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Lorem ispum</a></li>
                            <li><a href="/">Lorem ispum</a></li>
                            <li><a href="/">Lorem ispum</a></li>
                            <li><a href="/">Lorem ispum</a></li>
                        </ul>
                    </div>

                </div>
                {/*Footer Botom */}
                <div className="footer-bottom" 
                    style={{
                        'padding-top': '3rem',
                        'padding-bottom': '2rem' 
                    }}>
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Bootstrap-React App - All rights reserved.
                    </p>
                </div>
            </div>
            </div>
        </FooterContainer>
    )
}
export default Footer;

const FooterContainer = styled.footer`
    .footer-middle {
        /*background-color: var(--mainDark);
        padding-top: 3rem,
        color: var(--mainWhite)*/
    }
    .footer-bottom {
        padding-top: 3rem,
        padding-bottom: 2rem
    }
    ul li a {
        color: var(--mainGrey);
    }
    ul li a: hover {
        color: var(--mainLightGrey);
    }
`;