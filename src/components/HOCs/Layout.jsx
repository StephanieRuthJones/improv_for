// https://nextjs.org/learn/basics/assets-metadata-css/layout-component
import React, { useEffect, useState } from 'react'
import NavbarContainer from '../nav/NavbarContainer'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Layout = ({ userAuth, children }) => {
    const router = useRouter()



    return (
        <div className="layout d-flex flex-column min-vh-100">
            <Head>
                <title>Compliable</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarContainer userAuth={userAuth} />
            <main role="main" className="container flex-grow-1">
                <div className={`${onForm ? 'form-view' : 'component-container'}`}>
                    {children}
                </div>
            </main>

            <script
                src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                crossOrigin="anonymous"></script>
            <script
                src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                crossOrigin="anonymous"></script>
            <script
                src="https://unpkg.com/react/umd/react.production.min.js"
                crossOrigin="anonymous"></script>
            <script
                src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                crossOrigin="anonymous"></script>
            <script
                src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossOrigin="anonymous"></script>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossOrigin="anonymous"
            />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css?family=Lexend:300,400,500,600|Open+Sans:300,400"
                rel="stylesheet"
            />
            <script>var Alert = ReactBootstrap.Alert;</script>
        </div>
    )
}

export default Layout