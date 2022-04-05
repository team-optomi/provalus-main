import React, { Component } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import { FaCaretDown } from 'react-icons/fa'

class SideMainMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            oneOpen: false,
            twoOpen: false 
        };
    }
    
    toggleMenuOne() {
        this.setState({ oneOpen: !this.state.oneOpen });
    }

    toggleMenuTwo() {
        this.setState({ twoOpen: !this.state.twoOpen });
    }

    render() {
        let menuOneName = "subMenuOne";
        if (this.state.oneOpen) {
          menuOneName += ' menuOpen';
        }
        let menuTwoName = "subMenuTwo";
        if (this.state.twoOpen) {
          menuTwoName += ' menuOpen';
        }
        return (
            <MainMenu>
                <MenuItem>
                    <Link
                    to="/"
                    >
                    Home
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/company/about/"
                    >
                    About
                    </Link>
                </MenuItem>
                <SubMenuToggle onClick={() => this.toggleMenuOne()} ><p>Services <FaCaretDown size={12}/></p></SubMenuToggle>
                    <SubMenu className={menuOneName}>
                        <MenuItem>
                            <Link
                            to="/services/support/"
                            >
                            Support
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                            to="/services/run/"
                            >
                            Run
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                            to="/services/build/"
                            >
                            Build
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                            to="/services/security/"
                            >
                            Security
                            </Link>
                        </MenuItem>
                    </SubMenu>
                <MenuItem>
                    <Link
                    to="/case-studies/"
                    >
                    Case Studies
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/company/client-value/"
                    >
                    Client Value
                    </Link>
                </MenuItem>
                {/* <MenuItem>
                    <Link
                    to="/positive-change/community-contribution/"
                    >
                    Community Impact
                    </Link>
                </MenuItem> */}
                <MenuItem>
                    <Link
                    to="/positive-change/community-impact/"
                    >
                    Community Impact
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/hiring-heroes/"
                    >
                    Hiring Heroes
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/company/core-values/"
                    >
                    Core Values
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/hiring/"
                    >
                    Hiring
                    </Link>
                </MenuItem>
                <SubMenuToggle onClick={() => this.toggleMenuTwo()} ><p>Join Us <FaCaretDown size={12}/></p></SubMenuToggle>
                    <SubMenu className={menuTwoName}>
                        <MenuItem>
                            <Link
                            to="/join-us/jobs/"
                            >
                            Jobs
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                            to="/apply/"
                            >
                            Apply
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                            to="/join-us/training/"
                            >
                            Training
                            </Link>
                        </MenuItem>
                    </SubMenu>
                <MenuItem>
                    <Link
                    to="/company/leadership/"
                    >
                    Leadership
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/insights/"
                    >
                    Insights
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/news/"
                    >
                    News
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                    to="/contact/contact-us/"
                    >
                    Contact Us
                    </Link>
                </MenuItem>
            </MainMenu>
        );
    }
}

const MainMenu = styled.ul`
    list-style: none;
    padding: 30px;
    margin: 0;
`

const MenuItem = styled.li`
    margin: 0 0 10px;
    letter-spacing: 1px;
    font-size: 18px;
    font-family: "Kessel Light";
    a {
        letter-spacing: 1px;
        font-size: 18px;
        color: #fff;
        text-decoration: none;
        transition-duration: .3s;
        &:hover {
            color: #fff;
        }
    }
`

const SubMenuToggle = styled.div`
    p {
        font-family: "Kessel Light";
        letter-spacing: 1px;
        font-size: 18px;
        color: #fff;
        text-decoration: none;
        transition-duration: .3s;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        &:hover {
            cursor: pointer;
            color: #fff;
        }
        svg {
            margin-left: 3px;
        }
    }
`

const SubMenu = styled.ul`
    margin: 0;
    position: relative;
    top: 0px;
    left: 0;
    opacity: 0;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    transition-duration: .5s;
    list-style: none;
    &.subMenuOne {
        &.menuOpen {
            left: 20px;
            opacity: 1;
            visibility: visible;
            height: 150px;
        }
    }
    &.subMenuTwo {
        &.menuOpen {
            left: 20px;
            opacity: 1;
            visibility: visible;
            height: 110px;
        }
    }
`

export default SideMainMenu