import React, { useState } from 'react';
import Header from '../component/header/Header';
import Nav from '../component/nav/Nav'
import Footer from '../component/footer/Footer';
import Content from '../component/content/Content';

// This is the main layout component for the App
export default function AppLayout() {
	// State for managing search term and mobile navigation visibility
	const [searchTerm, setSearchTerm] = useState('');
	const [navVisible, setNavVisible] = useState(false);

	return (
		<div className="App" >
			{/* Header component includes the logo and search input */}
			<Header
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				navVisible={navVisible} // Controls the visibility of the mobile navigation bar
				setNavVisible={setNavVisible}
			/>			
			<Nav />  {/* Nav component for selecting the category type */}	
			<Content /> {/* Content component where different pages will be displayed */}
			<Footer /> 
		</div>
	);
}