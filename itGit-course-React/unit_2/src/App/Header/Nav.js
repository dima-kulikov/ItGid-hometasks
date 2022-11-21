function Nav(props) {
    let outNavList = props.nav.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>) 


    return(
        <nav>
            <ul className="main-navigation">
                {outNavList}
            </ul>
        </nav>
    );
}

export default Nav;