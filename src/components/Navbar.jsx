import React from 'react'
import {Link} from 'react-router-dom'
import {orange} from "@mui/material/colors";
import Logo from "../assets/bitcoin.png"
import useAxios from "../hooks/useAxios.jsx";


const Navbar = ( setSearchResults) => {
    const { response, loading } = useAxios("coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false");

    const handleSearchChanges = (event) => {
       if (!event.target.value) return setSearchResults (response)

        const resultArray = response.filter(coin => coin.id.includes(event.target.value))
        console.log(resultArray)

        setSearchResults(resultArray)
    }
    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <div className="flex items-center">
                        <Link to={""}>
                            <img src={Logo} className="h-6 mr-3 sm:h-9 float-left" alt="Logo"/>
                            <span
                                className=" self-center text-xl font-semibold whitespace-nowrap">Crypto Currency</span>
                        </Link>
                    </div>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
                            <li className="home block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">
                                <Link to={""}>
                                    Home
                                </Link>
                            </li>
                            <li className="market block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
                                <Link to={"market"}>
                                    Market
                                </Link>
                            </li>
                            <li className="trade block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                <Link to={""}>
                                    Trade
                                </Link>
                            </li>
                            <li className="feed block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
                                <Link to={"feed"}>
                                    Feed
                                </Link>
                            </li>
                            <li className="contact block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                <Link to={""}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="search-bar flex md:order-2">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                                aria-expanded="false"
                                className="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1">
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar"
                                   onChange={(event)=>{
                                       handleSearchChanges(event);
                                   }}

                                   className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                   placeholder="Search.."/>
                        </div>
                        <button data-collapse-toggle="navbar-search" type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                                aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="profile flex items-center md:order-2">
                        <button type="button"
                                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 "
                                id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                                data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src={Logo} alt="user photo"/>
                        </button>
                        <div
                            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow "
                            id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900">Bonnie Green</span>
                                <span
                                    className="block text-sm font-medium text-gray-500 truncate">name@flowbite.com</span>
                            </div>
                            <ul className="py-1" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Settings</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Earnings</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Sign
                                        out</a>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="mobile-menu-2" type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>

            </nav>

        </div>
    )
}

export default Navbar