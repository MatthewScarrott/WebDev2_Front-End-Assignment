/*
* File name: Footer.tsx
* Author: Matthew Scarrott
* Date: Oct. 30, 2026
* 
* Description:
* The Footer component displays information at the bottom of every page.
* It does not receive props and does not hold any state.
* It displays the name of the school.
* It also displays the address, phone number, and email for the school.
*/

const Footer = () => {
    return (
        <footer className="flex justify-center p-4">
            <span className="text-xs font-semibold text-blue-700 px-3 py-1">
                New Generation High School
            </span>
            <span className="text-xs font-semibold text-blue-700 px-3 py-1">
                1301 16 Avenue NW | Calgary, AB | T2M 0L4
            </span>
            <span className="text-xs font-semibold text-blue-700 px-3 py-1">
                403-284-7248
            </span>
            <span className="text-xs font-semibold text-blue-700 px-3 py-1">
                sait@sait.ca
            </span>
        </footer>
    );
};

export default Footer;